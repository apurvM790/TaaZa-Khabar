import { useEffect, useState, useContext } from "react";
import BodyCardComponent from "./BodyCardComponent";
import Shimmer from "./Shimmer";
import codeContext from "../utils/codeContext";
import {NEWS_API} from "../utils/constants";
import {API_KEY} from "../utils/constants";

const Entertainment = ()=>{

    // const Api = "https://newsapi.org/v2/top-headlines?country=in&category=entertainment&apiKey=7b72a73685e044f4a0da0bceec6e8db9";

    const { countryCode } = useContext(codeContext);

    const Api = NEWS_API + (countryCode===""?"language=en":"country="+countryCode)+"&category=entertainment"+ API_KEY;
    console.log(Api);

    const [cardData, setCardData] = useState();


    useEffect(()=>{
        fetchData();
    },[]);

    const fetchData = async () => {
            const value = await fetch(Api);
            const data = await value.json();
            console.log(data);
            setCardData(data.articles);       
            console.log(cardData); 
    }  

    return (!cardData?<Shimmer />:(<div className="flex flex-wrap mx-[60px]">
    {/* <BodyCardComponent data={cardData[0]}/> */}
    {console.log(cardData)}
    {cardData.map((news,index) =><BodyCardComponent key={index} cardData={news}/>)}
    </div>))
}

export default Entertainment;