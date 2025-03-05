
function Navbar() {
    return (
        <div>
            {/* <!-- navbar --> */}
            <div className="navbar">
                <div className="navbar_s1">Udemy</div>
                <div className="navbar_s2">
                    <p><i class="fa-solid fa-magnifying-glass"></i></p>
                    <input type="text" placeholder="Search for anything here Tech, Business, Art ..  "></input>
                </div>

                <div className="navbar_s3">
                    <p>Courses</p>
                    <div class="mylearning">
                        <p>My Learning</p>
                        <div class="mylearning__popup">
                            <p>You did not Purchase anything yet</p>
                        </div>
                    </div>
                    <div>
                        <i class="fa-solid fa-cart-shopping"></i>
                        <i class="fa-solid fa-bell"></i>
                        <i class="fa-solid fa-user"></i>
                    </div>
                </div>
                <div className="navbar__s4" >
                    <i class="fa-solid fa-bars"></i>
                </div>
            </div>
        </div>
    )
}

// export section
export default Navbar