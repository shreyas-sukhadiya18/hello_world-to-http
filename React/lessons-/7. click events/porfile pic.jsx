function ProfilePicture(){
    const imgUrl ='./src/assets/one.gif';
    const handleClick = (e) => {
        // you can see propertice by just only add event not add anything in that function
        e.target.style.display="none";
    }

    return(
        <div className="pokemon1">
            {/* if you add evet(e) u should add in parameter and argument. */}
        <img onClick={ (e) => handleClick(e)} className="pokemon" src={imgUrl} alt="img" />
        </div>
    )
}

export default ProfilePicture