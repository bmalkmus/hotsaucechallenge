import React from 'react';
import { useSelector } from "react-redux";
import DetailsView from './detailsView';
import {motion} from "framer-motion";
import {pageVariants} from '../../constants/pageVariants'



const Details = ({match}) => {
    const sauces = useSelector((state)=>state.sauces.sauces)
    const params = match.params.title
    const divider = params.indexOf(":")
    const id = parseInt(params.slice(0, divider))
    const title = params.slice(divider+1)

    console.log(sauces)
    
    const sauce = sauces.filter((sauce)=>sauce.title === title && sauce.id===id)
    console.log("lenght", sauce.length)
    return (
        <motion.div
            initial="initial"
            animate="in"
            exit="out"
            variants={pageVariants}
        >
            {sauce.length===1 ? <DetailsView sauce={sauce[0]} /> : null}
        </motion.div>
    )
}

export default Details