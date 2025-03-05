// import components
import Navbar from "./Components/Navbar"
import Catagories from "./Components/Catagories"
import Saleimg from "./Components/SaleImg"
import Recommended from "./Components/Recommended"
import Topics from "./Components/Topics"
import Popular from "./Components/Popular"
import Footer from "./Components/Footer"
function App() {
    return (
        <div>
            <Navbar></Navbar>
            <Catagories></Catagories>
            <Saleimg></Saleimg>
            <Recommended></Recommended>
            <Topics></Topics>
            <Popular></Popular>
            <Footer></Footer>
        </div>
    )
}

// export 
export default App
