import Link from "next/link"
import Search from "./Search"
import Footer from "./Footer"
import Navbar from "./Navbar"

const Layout = ({ children }) => {
    return (
        <div className="content">
            <Search />
            <Navbar />
            { children }
            <Footer />
        </div>
        
    );
}
 
export default Layout;