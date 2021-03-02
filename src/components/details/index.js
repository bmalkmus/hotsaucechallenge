import React from 'react';
import { useSelector } from "react-redux";
import DetailsView from './detailsView';
import {motion} from "framer-motion";
import {useHistory} from "react-router-dom";
import {pageVariants} from '../../constants/pageVariants'



const Details = ({match}) => {
    const sauces = useSelector((state)=>state.sauces.sauces)
    const params = match.params.title
    const divider = params.indexOf(":")
    const id = parseInt(params.slice(0, divider))
    const title = params.slice(divider+1).replace(/%20/g, " ")
    const history = useHistory();

    
    const sauce = sauces.filter((sauce)=>sauce.title === title && sauce.id===id)
    if(sauce.length === 0) {
        history.push("/addSauce")
    }
    return (
        <motion.div
            initial="initial"
            animate="in"
            exit="out"
            variants={pageVariants}
        >
            {sauce.length > 0 ? <DetailsView sauce={sauce[0]} /> : null }
        </motion.div>
    )
}

export default Details