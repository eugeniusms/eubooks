import Link from "next/link"
import Search from "./Search"
import Footer from "./Footer"
import Navbar from "./Navbar"
import DataFetching from "./DataFetching"

const Layout = ({ children }) => {
    return (
        <div className="content">
            <Search />
            <Navbar />
            <DataFetching />
            { children }
            <Footer />
        </div>
        
    );
}
 
export default Layout;