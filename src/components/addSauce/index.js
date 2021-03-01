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
    console.log(id)
    const [title, sub, description, url, error] = [React.useRef(), React.useRef(), React.useRef(), React.useRef(), React.useRef()]
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
        }
        else{
            error.current.style.visibility="visible"
        }

    }

    const back = () => {
        history.push("/sauces")
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
                    <input id="formTitle" type="text" ref={title}></input>
                </div>
                <div className="formGroup">
                    <label htmlFor={'formSub'}>
                        Subtitle:
                    </label>
                    <input id="formSub" type="text" ref={sub}></input>
                </div>
                <div className="formGroup">
                    <label htmlFor={"formDesc"}>
                        Description:
                    </label>
                    <input id="formDesc" type="text" ref={description}></input>
                </div>
                <div className="formGroup">
                    <label htmlFor={"formURL"}>
                        Image URL:
                    </label>
                    <input id="formURL" type="text" ref={url}></input>
                </div>
            </form>
            <span id="error" ref={error} style={{visibility: "hidden"}} > ALL FIELDS MUST BE FILLED IN WITH A VALID IMAGE URL</span>
            <button id="sauceBtn" onClick={()=>infoAdd()}>ADD SAUCE</button>
        </motion.div>
    )
}

export default SauceForm