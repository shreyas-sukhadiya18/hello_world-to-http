import PropTypes, { number, string } from 'prop-types'

function List(props){
    const ItemList = props.items;
    const ItemCat = props.catagory;

    // sort the list
    // fruits.sort((a,b) => a.name.localeCompare(b.name))    // Alphabetic
    // fruits.sort((a,b) => b.name.localeCompare(a.name))       //reverse Alphabetic
    // fruits.sort((a,b) => a.calories - b.calories)    // numeric
    // fruits.sort((a,b) => b.calories - a.calories)   //reverse numeric


    // const lowCalFruit = fruits.filter(fruit => fruit.calories>100);


    const listItems = ItemList.map(item => <li key={item.name}>{item.name}: &nbsp; {item.calories}</li>
    )
    return(
        <>
        <h3 className='h3'>{ItemCat}</h3>
        <ol className='ol'>{listItems}</ol>
        </>
    )
}

// defult props
List.defaultProps ={
    catagory:"Catagory",
    items:[],
}
List.PropTypes={
    catagory:PropTypes.string,
    items:PropTypes.arrayOf(PropTypes.shape({name:PropTypes.string,calories:PropTypes.number})),
}

export default List