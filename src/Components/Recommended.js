// import imgaes from assets/images
import img1 from "../assets/images/course1.jpg"
import img2 from "../assets/images/course2.jpg"
import img3 from "../assets/images/course3.jpg"
import img4 from "../assets/images/course4.jpg"


function Recommended(){
    return(
        <div>
              {/* <!-- recommmended --> */}
    <div className="recommended">
        <h2 className="reommended-title">Recommended For You </h2>
        <p>Pick the best fit</p>
        <div className="recommended-container">

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
        </div>
    </div>
        </div>
    )
}

// export to App.js
export default Recommended