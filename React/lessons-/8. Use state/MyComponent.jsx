import React, {useState} from "react"



function MyComponent(){
    const [name,setName]= useState();
    const [age,setAge]= useState(0);
    const [isEmployed, setIsEmployed] = useState(false);


    const updateName =() => {
        // name = "Shreyas"  //this will not work beac direct update is not possible 
        // console.log(name); // this will print your name on console only.
        setName("shreyas")
    }

    const incrementAge =()=>{
        setAge(age +1)
    
    }

    const toggleEmployee= ()=>{
        setIsEmployed(!isEmployed);
    }

    return(
        <>
            <div>
                <p>Name: {name}</p>
                <button onClick={updateName}>set name</button>

                <p>Age: {age}</p>
                <button onClick={incrementAge}>set age</button>

                <p>Is Employed: {isEmployed ? "yes" : "no"}</p>
                <button onClick={toggleEmployee}>set employee</button>
            </div>
        </>
    );
}

export default MyComponent