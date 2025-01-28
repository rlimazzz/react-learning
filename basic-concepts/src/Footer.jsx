function Footer(){
    let copyright = new Date().getFullYear()
    return(
        <footer>
            <p>&copy; {copyright} Basic website</p>
        </footer>
    );
}

export default Footer