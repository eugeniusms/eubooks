import Link from "next/link"
import Search from "./Search"
import Footer from "./Footer"
import Navbar from "./Navbar"
import GetData from "./GetData"

const Layout = ({ children }) => {
    return (
        // Tampilan Layout website secara keseluruhan
        <div className="content">
            {/* Content dari website */}
            { children }
            <GetData />
            <Footer />
        </div>
        
    );
}
 
export default Layout;