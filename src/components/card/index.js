import React from "react";
import {TiDelete} from "react-icons/ti";
import { useHistory } from "react-router-dom";
import { useDispatch} from 'react-redux';
import { motion } from "framer-motion"
import {deleteSauce} from '../../actions/sauceActions'
import "./style.css";
import {pageVariants} from "../../constants/pageVariants"

const Card = ({URL, title, subtitle, id, sauce}) => {
    const image = React.useRef();
    const history = useHistory();
    const dispatch = useDispatch();

    React.useEffect(()=>{
        image.current.style.backgroundImage=`url(${URL})`
        image.current.style.backgroundRepeat=`no-repeat`
        image.current.style.backgroundSize=`contain`
    },[URL])

    const jumpDetails = (title, id) => {
        console.log("click")
        history.push(`/sauces/${id}:${title}`)
    }

    function deleteCard(sauce){
        dispatch(deleteSauce(sauce))
    }
    
    return (
        <motion.div 
            initial="initial"
            animate="in"
            transition={{ duration: 1 }}
            exit="out"
            whileHover={{ scale: 1.1 }}
            variants={pageVariants}
            className="cardContainer"
        >
            <div className="imgCardCont" ref={image}>
                <span className="Delete" onClick={()=>{deleteCard(sauce)}}><TiDelete size={24}/></span>
                {/* <img src={URL} alt={title} className="imageCard"/>     */}
            </div>
            <div className="cardDesc" onClick={()=>{jumpDetails(title, id)}}>
                <h2>{title}</h2>
                <p>{subtitle}</p>
            </div>
        </motion.div>
    )
}

export default Card