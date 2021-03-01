import React from 'react';
import { useSelector } from "react-redux";
import {useHistory} from 'react-router-dom';
import Card from '../card'
import "./style.css"

const Sauces = () => {
    const sauces = useSelector(state=>state.sauces.sauces)
    const history = useHistory();
   
    function addSauce() {
        history.push('/addSauce')
    }
    return (
        <div className="homeView">
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
        </div>
    )
}

export default Sauces