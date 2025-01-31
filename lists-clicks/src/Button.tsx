function Button() {

    const handleClick = (e) => e.target.textContent  = "Hello World!"

    return(
        <button onClick={(e) => handleClick(e)}>Olá mundo</button>
    );
}

export default Button