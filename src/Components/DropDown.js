import { useContext, useState } from "react"
import codeContext from "../utils/codeContext"
import Body from "./Body";

const DropDown = ()=>{

    const { setCountryCode } = useContext(codeContext);
    const {countryCode} = useContext(codeContext);

    const options = [
        {label: "Select" , value:""},
        {label: "🚩 Argentina" , value:"ar"},
        {label: "🚩 Austria" , value:"at"},
        {label: "🚩 Australia" , value:"au"},
        {label: "🚩 Belgium" , value:"be"},
        {label: "🚩 Bulgaria" , value:"bg"},
        {label: "🚩 Brazil" , value:"br"},
        {label: "🚩 Canada" , value:"ca"},
        {label: "🚩 China" , value:"cn"},
        {label: "🚩 Colombia" , value:"co"},
        {label: "🚩 Egypt" , value:"eg"},
        {label: "🚩 France" , value:"fr"},
        {label: "🚩 Greece" , value:"gr"},
        {label: "🚩 Hungary" , value:"hu"},
        {label: "🚩 Indonesia" , value:"id"},
        {label: "🚩 Ireland" , value:"ie"},
        {label: "🚩 India" , value:"in"},
        {label: "🚩 Italy" , value:"it"},
        {label: "🚩 Japan" , value:"jp"},
    ]

    const handleSelect = (event)=>{
        setCountryCode(event.target.value);
    }
    console.log(countryCode);

    return (
            <div className="flex justify-center p-5">
                <div className="border-2 rounded-lg w-[600px] shadow-xl drop-shadow-md bg-slate-50 cursor-pointer transition-all hover:scale-105 hover:bg-slate-200  flex justify-between px-4 py-2">
                <h3 className="font-semibold text-xl text-cyan-700 ">Select Country</h3>
                
                <select className="border-gray-200 border-2 shadow-lg px-2 py-1 rounded-lg hover:bg-fuchsia-100 w-72" onChange={handleSelect}>
                    {options.map((option,index) => <option key={index} value={option.value} >{option.label}</option>)}
                </select>

                </div>
            </div>
    )

}
export default DropDown;