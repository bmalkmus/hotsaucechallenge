import React from 'react';
import { useSelector } from "react-redux";
import {useHistory} from 'react-router-dom';
import Card from '../card'
import {motion} from 'framer-motion'
import {pageVariants} from "../../constants/pageVariants"
import "./style.css"

const Sauces = () => {
    const sauces = useSelector(state=>state.sauces.sauces)
    const history = useHistory();
   
    function addSauce() {
        history.push('/addSauce')
    }
    return (
        <motion.div 
            className="homeView"
            initial="initial"
            animate="in"
            exit="out"
            transition={{ duration: .5 }}
            variants={pageVariants}
        >
            <div className="titleCont">
                <h2>HOT SAUCE LIST</h2>
                <span onClick={()=>addSauce()}>Add a Sauce</span>
            </div>
            <div id="saucesContainer">
            {sauces.map((sauce,index) => {
                return (
                    <Card key={index} title={sauce.title} subtitle={sauce.subtitle} URL={sauce.imageURL} id={sauce.id} sauce={sauce}/>
                )
            })}
            </div>
        </motion.div>
    )
}

export default Sauces