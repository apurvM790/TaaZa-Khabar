import { Link } from "react-router-dom";
import DropDown from "./DropDown";

const Header = ()=>{
    

    return (
        <div className="">
            <div className="flex items-center bg-gradient-to-t from-orange-300 via-green-200 to-fuchsia-300 shadow-2xl rounded-b-3xl">
                <div>
                    <img className="w-28 rounded-r-xl" src="https://img.freepik.com/free-vector/gradient-breaking-news-logo-design_23-2151142431.jpg" alt="Logo"/>
                </div>
                <div className="mx-96 font-medium text-4xl  px-2">
                    <h1 className="px-32">TaaZA Khabar</h1>
                </div>
                <div>
                    <h3 className="font-medium -mr-36">Online Status: {}</h3>
                </div>
            </div>
            <div>
                    <DropDown />
            </div>
            <div className="flex  h-16 ml-10">
                <Link to="/"><button className="w-48 rounded-xl border-4 shadow-md px-10 py-1 mx-6 my-3
                 text-blue-600 transform transition-all hover:scale-105 hover:bg-slate-300" >Home</button></Link>
                <Link to="/entertainment"><button className="w-48 rounded-xl border-4 shadow-md px-6 py-1 mx-6 my-3
                 text-blue-600 transform transition-all hover:scale-105 hover:bg-slate-300" >Entertainment</button></Link>
                <Link to="/sports"><button className="w-48 rounded-xl border-4 shadow-md px-10 py-1 mx-6 my-3
                 text-blue-600 transform transition-all hover:scale-105 hover:bg-slate-300" >Sports</button></Link>
                <Link to="/health"><button className="w-48 rounded-xl border-4 shadow-md px-10 py-1 mx-6 my-3
                 text-blue-600 transform transition-all hover:scale-105 hover:bg-slate-300" >Health</button></Link>
                <Link to="/technology"><button className="w-48 rounded-xl border-4 shadow-md px-6 py-1 mx-6 my-3
                 text-blue-600 transform transition-all hover:scale-105 hover:bg-slate-300" >Technology</button></Link>
                <Link to="/business"><button className="w-48 rounded-xl border-4 shadow-md px-10 py-1 mx-6 my-3
                 text-blue-600 transform transition-all hover:scale-105 hover:bg-slate-300" >Business</button></Link>
            </div>
        </div>
    )

}

export default Header;