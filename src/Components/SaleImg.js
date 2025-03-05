import img from "../assets/images/sale-image.png"

function Saleimg() {
    return (
        <div>
            {/* <!-- image section -->
    <!-- sale image --> */}
            <div className="sale-image">
                <img src={img} alt="sale-image"></img>
                    <div className="sale__image--offer">
                        <h3>Udemy flash sale! 24 hours to save</h3>
                        <p>get the top courses for just one day to save but a lifetime to learn</p>
                    </div>
            </div>

        </div>
    )
}

// export to App.js
export default Saleimg