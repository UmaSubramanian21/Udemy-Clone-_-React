// import images section 
import img1 from "../assets/images/course1.jpg"
import img2 from "../assets/images/course2.jpg"
import img3 from "../assets/images/course3.jpg"
import img4 from "../assets/images/course4.jpg"
import img5 from "../assets/images/course5.jpg"
import img6 from "../assets/images/course6.jpg"
import img7 from "../assets/images/course1.jpg"
import img8 from "../assets/images/course2.jpg"

function Popular() {
    return (
        <div>
            {/* <!-- popular section  --> */}
            <div className="popular">
                <h1 className="popular-title">Most Popular</h1>
                <p>Pick the best</p>
                <div className="popular-container">


                    <div className="course-card">

                        <img src={img1} alt="course-images"></img>
                        <h3>2023 Python Data</h3>
                        <p>Visualization Masterclass</p>
                        <p>Col Sattle</p>
                        <p>4.9 ⭐⭐⭐</p>
                        <p>449 <del>1999</del></p>
                    </div>

                    <div className="course-card">

                        <img src={img2} alt="course-images"></img>
                        <h3>Web developement Bootcamp 2023</h3>
                        <p>Visualization Masterclass</p>
                        <p>Col Sattle</p>
                        <p>4.9 ⭐⭐⭐⭐⭐</p>
                        <p>449 <del>1999</del></p>
                    </div>

                    <div className="course-card">

                        <img src={img3} alt="course-images"></img>
                        <h3>Master UI/UX Designer with sigma</h3>
                        <p>Visualization Masterclass</p>
                        <p>Col Sattle</p>
                        <p>4.9 ⭐⭐⭐⭐</p>
                        <p>449 <del>1999</del></p>
                    </div>

                    <div className="course-card">

                        <img src={img4} alt="course-images"></img>
                        <h3>Basic to advance programming </h3>
                        <p>Visualization Masterclass</p>
                        <p>Col Sattle</p>
                        <p>4.9 ⭐⭐⭐</p>
                        <p>449 <del>1999</del></p>
                    </div>

                    <div className="course-card">

                        <img src={img5} alt="course-images"></img>
                        <h3>Web developement Bootcamp 2023</h3>
                        <p>Visualization Masterclass</p>
                        <p>Col Sattle</p>
                        <p>4.9 ⭐⭐⭐⭐⭐</p>
                        <p>449 <del>1999</del></p>
                    </div>

                    <div className="course-card">

                        <img src={img6} alt="course-images"></img>
                        <h3>Basic to advance programming </h3>
                        <p>Visualization Masterclass</p>
                        <p>Col Sattle</p>
                        <p>4.9 ⭐⭐⭐</p>
                        <p>449 <del>1999</del></p>
                    </div>
                    <div className="course-card">

                        <img src={img7} alt="course-images"></img>
                        <h3>2023 Python Data</h3>
                        <p>Visualization Masterclass</p>
                        <p>Col Sattle</p>
                        <p>4.9 ⭐⭐⭐</p>
                        <p>449 <del>1999</del></p>
                    </div>
                    <div className="course-card">

                        <img src={img8} alt="course-images"></img>
                        <h3>Master UI/UX Designer with sigma</h3>
                        <p>Visualization Masterclass</p>
                        <p>Col Sattle</p>
                        <p>4.9 ⭐⭐⭐⭐</p>
                        <p>449 <del>1999</del></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

// export to app.js
export default Popular