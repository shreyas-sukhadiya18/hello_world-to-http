// first task maybe
// function Button() {
//     let count = 0;
//     const handClick = () => {
//         count++;
//         console.log(`${count} times clicked`)
//     }
//     const handleClick = (name) => console.log(`${name} stop clicking me`)
//     return (
//         <>
//             <button onClick={() => handleClick("shreyas")} >Click me🕳️</button>
//             <button onClick={() => handClick()} >Click me🕳️ 2</button>
//         </>
//     )
// }



function Button(){
    const handClick = (e) =>e.target.textContent = "hello hurt"

    return(
        // also have onDoubleClick

        <button onClick={(e) => handClick(e)}>Click me</button>
    )
    
}

export default Button;