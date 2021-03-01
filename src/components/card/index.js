import React from "react";
import {TiDelete} from "react-icons/ti";
import { useHistory } from "react-router-dom";
import "./style.css";

const Card = ({URL, title, subtitle, id}) => {
    const image = React.useRef();
    const history = useHistory();

    React.useEffect(()=>{
        image.current.style.backgroundImage=`url(${URL})`
        image.current.style.backgroundRepeat=`no-repeat`
        image.current.style.backgroundSize=`contain`
    },[URL])

    const jumpDetails = (title, id) => {
        console.log("click")
        history.push(`/sauces/${id}:${title}`)
    }
    
    return (
        <div className="cardContainer" onClick={()=>{jumpDetails(title, id)}}>
            <div className="imgCardCont" ref={image}>
                <span className="Delete"><TiDelete size={24}/></span>
                {/* <img src={URL} alt={title} className="imageCard"/>     */}
            </div>
            <div className="cardDesc">
                <h2>{title}</h2>
                <p>{subtitle}</p>
            </div>
        </div>
    )
}

export default Card