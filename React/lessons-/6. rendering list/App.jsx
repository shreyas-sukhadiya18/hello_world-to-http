import List from "./List"

function App() {

// pasted from List.jsx
    /*if u go to console it will shows error  
     Warning: Each child in a list should have a unique "key" prop.
     
     so we add key variable instead of fruit.name we also add id to the fruits array .*/
  const fruits = [{id:1, name :"Apple",calories:213},
    {name : "Banaa",calories:200},
    {name : "pineapple",calories:30},
    {name : "Oranege",calories:12}];
  const vegetable = [{id:1, name :"AppleV",calories:213},
    {name : "BanaaV",calories:200},
    {name : "pineappleV",calories:30},
    {name : "OranegeV",calories:120}];
  return(  
    <>
        {fruits.length >0 && <List items={fruits} catagory="Fruits" />}
        {fruits.length > 0 && <List items={vegetable} catagory="Vegetables" />}
      
      
    
    </>
)
}
export default App
