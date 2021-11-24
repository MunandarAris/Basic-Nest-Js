// import component
import Navbar from "./Navbar"
import Footer from "./Footer"

export default function Layout({children}) {
    return (
        <div className="container">
            <Navbar />
            {children}
            <Footer />
        </div>
    )
}
