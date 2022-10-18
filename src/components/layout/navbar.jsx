let styles = {
    navbar: "flex flex-row"
}

const Navbar = () => {
    return (
         <nav>
            <div>
                <img src="https://images.pexels.com/photos/1549326/pexels-photo-1549326.jpeg" alt="auto" height={200} width={300}/>
            </div>
                <div>
                    <ul>
                        <li>
                            <a href="#">link1</a>
                        </li>
                        <li>
                            <a href="#">link2</a>
                        </li>
                        <li>
                            <a href="#">link3</a>
                        </li>
                    </ul>
            </div>
        </nav>
    )
}

export default Navbar;
