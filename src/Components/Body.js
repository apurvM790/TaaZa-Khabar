import { useEffect, useState } from "react";
import Error from "./Error";
import BodyCardComponent from "./BodyCardComponent";
import Shimmer from "./Shimmer";


const Body = ()=>{

    const Api = "https://newsapi.org/v2/top-headlines?country=in&apiKey=7b72a73685e044f4a0da0bceec6e8db9";

    const [cardData, setCardData] = useState(null);


    useEffect(()=>{
        fetchData();
    },[]);

    const fetchData = async () => {
            const value = await fetch(Api);
            const data = await value.json();
            console.log(data);
            setCardData(data?.articles);       
            console.log(cardData); 
    }      
          
          
    return (!cardData? <Shimmer /> :(
        <div className="flex flex-wrap mx-[60px]">
            {/* <BodyCardComponent data={cardData[0]}/> */}
            {console.log(cardData)}
            {cardData.map((news,index) =><BodyCardComponent key={index} cardData={news}/>)}
        </div>
    ))
}

export default Body;