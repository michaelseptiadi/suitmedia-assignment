import Navbar from "./components/Navbar/Navbar"
import CarouselSlide from "./components/Carousel/CarouselSlide"
import Values from "./components/Values/Values"
import Contact from "./components/Contact/Contact"
import Footer from "./components/Footer/Footer"

function App() {
    return (
        <div className="App">
            <Navbar />
            <CarouselSlide />
            <Values />
            <Contact />
            <Footer />
        </div>
    )
}

export default App
