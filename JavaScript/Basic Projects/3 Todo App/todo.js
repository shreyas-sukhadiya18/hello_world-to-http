
let TodoStorage = [
    {
        item:'buy milk',
        dueDate:'10/10/2024',
    },
    {
        item: 'Goto College',
        dueDate : '11/11/2024',
    }
];
displayItems()
// console.log(TodoStorage)

function addTodo(){
    let inputElement = document.querySelector('#todo-input');
    let dateElement = document.querySelector('#todo-date');
    // we can also add .value at the end of the inputElement but problem is that we enable to clear input type.
    let todoItem = inputElement.value;
    let todoDate = dateElement.value;

    /* 1.we have to add assign value in global variable so we created TodoStorage
       2. than we have to push todoItem to TodoStorage
       3. than after take value of inputElement in the TodoStorage we have to assign 
        inputElement empty.*/
    TodoStorage.push({item:todoItem,dueDate: todoDate});
    inputElement.value ='';
    displayItems();
   
}

function displayItems(){
    let containerElement = document.querySelector('.todo-container');
    let newHtml = '';

    for(let i=0;i< TodoStorage.length;i++){
        // let item = TodoStorage[i].item;
        // let dueDate = TodoStorage[i].dueDate;
        // instead of above two lines
        let {item,dueDate} = TodoStorage[i];
        // TodoStorage.splice(0,TodoStorage.length) in this sol we will deleted whole arr not only one thing 
        newHtml += `
        
        <span>${item}</span> 
        <span>${dueDate}</span>
        <button class="btn-delete" onclick="TodoStorage.splice(${i},1); 
        displayItems();" >Delete</button>
        
        `
        }
        containerElement.innerHTML = newHtml
}