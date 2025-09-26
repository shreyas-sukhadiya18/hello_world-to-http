import propTypes from 'prop-types'


function Student(props){

    
    return( <div className="student">
        <p>
            Name: {props.naame}
            Age : {props.age}
        </p>
        <p>Student: {props.isStudent ? 'Yes' : 'No'} </p>
    </div>)
}
// propTypes is use full for when we want to exact type of numbers 
// we declered all types, here we cannot add string into age etc,
export default Student
Student.propTypes = {
    naame: propTypes.string,
    age: propTypes.number,
    isStudent : propTypes.bool,
}

// defaut values
Student.defaultProps= {
    naame: "Guest",
    age: 10,
    isStudent: true,
}