let inp = document.querySelector("input")
let btn = document.querySelector("button")
let ul = document.querySelector("ul")
let del = document.querySelectorAll(".del")

btn.addEventListener("click",function(){
  // event.preventDefault()
  let item = document.createElement("li")
  item.innerText = inp.value;
  ul.appendChild(item)

  // let secmethd= document.

  let delBtn = document.createElement("button")
  delBtn.innerText="Delete"
  delBtn.classList.add("del")
  // delBtn.innerHTML= ;
  item.appendChild(delBtn)
  console.dir(delBtn)

  inp.value="";
})

  ul.addEventListener("click",function(e){
    
    if(e.target.nodeName == "BUTTON"){
      let item = e.target.parentElement;
      let name = item.innerText;
      console.log(name)
      item.remove()
      // e.parentElement.remove()
    }

    console.log()
  })

  // for(dels of del){
  
  //   dels.addEventListener("click",function(){
  //     this.parentElement.remove()
  //   })
  // }

