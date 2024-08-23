import Error from "./Error";
import { Link } from "react-router-dom";

const BodyCardComponent = (props) => {
    
    const cardData = props.cardData;
    console.log(cardData);
    return (cardData===undefined)? <Error/> : (
        <div className="w-[300px] max-h-max border-4 rounded-xl shadow-2xl my-8 mx-4 px-2 py-2 transition-all hover:bg-slate-200 hover:scale-110 flex flex-col justify-between">
            <div>
                <h3 className="font-normal text-3xl">{cardData.title}.</h3>
            </div>   
            <div>
                <p className="py-2 font-light ml-32">~{cardData.author}</p>
            </div>
            <div className="flex justify-center mt-auto">
               <a href={cardData.url} target="_blank"
          rel="noopener noreferrer" className="h-10 px-2 border-2 rounded-xl my-2   transform transition-all hover:bg-pink-300 hover:scale-110 ">  
                    Know-More 🌩️
                </a>  
            </div>
        </div>
    )   
}

export default BodyCardComponent;