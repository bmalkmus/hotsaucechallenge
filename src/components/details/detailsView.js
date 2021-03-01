import React from 'react';
import {IoChevronBackSharp} from "react-icons/io5";
import { useHistory } from "react-router-dom";
import './style.css'

const DetailsView = ({sauce}) =>{
    const imageDetails=React.useRef()
    const history = useHistory();

    React.useEffect(()=>{
        imageDetails.current.style.backgroundImage=`url(${sauce.imageURL})`
        imageDetails.current.style.backgroundRepeat=`no-repeat`
        imageDetails.current.style.backgroundSize=`contain`
    })
    function back (){
        history.push(`/sauces`)
    }
    return(
        <div className="detailsCont">
            <div className="leftCont">
                <div className="detailsNav">
                    <span onClick={()=>{back()}}><IoChevronBackSharp /> Back to Hot Sauce List</span>
                    <h1>{sauce.title}</h1>
                </div>
                <div className="detailsImg"  ref={imageDetails}/>
            </div>
            <div className="rightCont">
                <p>{sauce.description}</p>
            </div>
        </div>
    )
}

export default DetailsView