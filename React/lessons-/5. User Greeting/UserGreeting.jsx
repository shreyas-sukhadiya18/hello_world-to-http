import propTypes from 'prop-types'

function UserGretting(props){
    // if(props.isLoggedIn==true){
    //     return <h2>WElcome {props.Username}</h2>
        
    // }

    const welcomeMesaage =  <h2 className="welcome-msg">Welcome {props.Username}</h2>
    
    const  loginPromt = <h2 className="Not-logged">Not Logged</h2>

    return(
    (props.isLoggedIn  ? 
        // not use {} this is not js variable
        welcomeMesaage : loginPromt
    ))
}

// define default types
UserGretting.proptypes ={
    isLoggedIn:propTypes.bool,
    Username:propTypes.string,
}

// define defualt values
UserGretting.defaultProps = {
    isLoggedIn:false,
    Username:"Guest",
}

export default UserGretting