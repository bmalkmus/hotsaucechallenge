import React from 'react';
import {IoChevronBackSharp} from "react-icons/io5";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import {addSauce} from '../../actions/sauceActions';
import './style.css';
import {pageVariants} from '../../constants/pageVariants'
import {motion} from 'framer-motion'

const SauceForm = () => {
    const id = useSelector(state=>state.sauces.count)
    const dispatch = useDispatch()
    const history = useHistory();
    const [title, sub, description, url, error, success] = [React.useRef(), React.useRef(), React.useRef(), React.useRef(), React.useRef(), React.useRef()]
    const Regex = /(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|gif|png)/;
    

    const infoAdd = () =>{
        const validSite=Regex.test(url.current.value)
        if(
            title.current.value !== "" &&
            sub.current.value !== "" &&
            description.current.value !== "" &&
            url.current.value !== "" &&
            validSite
        ){
            error.current.style.visibility="hidden"
            const sauce = {
                id: id,
                title: title.current.value,
                subtitle: sub.current.value,
                description: description.current.value,
                imageURL: url.current.value
            }

            dispatch(addSauce(sauce))
            title.current.value="";
            sub.current.value="";
            description.current.value="";
            url.current.value="";
            success.current.style.visibility="visible"
        }
        else{
            error.current.style.visibility="visible"
            success.current.style.visibility="hidden"
        }

    }

    const back = () => {
        history.push("/sauces")
    }

    const changing = () => {
        error.current.style.visibility="hidden"
        success.current.style.visibility="hidden"
    }

    return (
        <motion.div 
            className="addCont"
            initial="initial"
            animate="in"
            transition={{ duration: 1 }}
            exit="out"
            variants={pageVariants}
        >
            <div className="addNav">
                <span onClick={()=>{back()}}><IoChevronBackSharp /> Back to Hot Sauce List</span>
                <h1>Add a Sauce</h1>
            </div>
            <form className="addForm">
                <div className="formGroup">
                    <label htmlFor={'formTitle'}>
                        Title:
                    </label>
                    <input id="formTitle" type="text" ref={title} onChange={()=>changing()}></input>
                </div>
                <div className="formGroup">
                    <label htmlFor={'formSub'}>
                        Subtitle:
                    </label>
                    <input id="formSub" type="text" ref={sub} onChange={()=>changing()}></input>
                </div>
                <div className="formGroup">
                    <label htmlFor={"formDesc"}>
                        Description:
                    </label>
                    <input id="formDesc" type="text" ref={description} onChange={()=>changing()}></input>
                </div>
                <div className="formGroup">
                    <label htmlFor={"formURL"}>
                        Image URL:
                    </label>
                    <input id="formURL" type="text" ref={url} onChange={()=>changing()}></input>
                </div>
            </form>
            <span id="error" ref={error} style={{visibility: "hidden"}} > ALL FIELDS MUST BE FILLED IN WITH A VALID IMAGE URL</span>
            <button id="sauceBtn" onClick={()=>infoAdd()}>ADD SAUCE</button>
            <span id="success" ref={success} style={{visibility: "hidden", color:"green"}}>Successfully Added your Sauce!</span>
        </motion.div>
    )
}

export default SauceForm