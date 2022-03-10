import Link from "next/link"
import Search from "./Search"
import Footer from "./Footer"
import Navbar from "./Navbar"
import GetData from "./GetData"

const Layout = ({ children }) => {
    return (
        <div className="content">
            <div class="border border-gray-200 dark:border-gray-700">
                <Navbar />
                <Search />
            </div>
            <GetData />
            {/* <DataFetching /> */}
            { children }
            <Footer />
        </div>
        
    );
}
 
export default Layout;