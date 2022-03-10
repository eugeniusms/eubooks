import Link from "next/link"
import Search from "./Search"
import Footer from "./Footer"
import Navbar from "./Navbar"
import GetData from "./GetData"

const Layout = ({ children }) => {
    return (
        <div className="content">
            <Navbar />
            <Search />
            <GetData />
            {/* <DataFetching /> */}
            { children }
            <Footer />
        </div>
        
    );
}
 
export default Layout;