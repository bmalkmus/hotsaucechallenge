import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import Card from '../card'
import "./style.css"

const Sauces = () => {
    const dispatch = useDispatch();
    const sauces = useSelector(state=>state.sauces.sauces)
   

    return (
        <div className="homeView">
            <div className="titleCont">
                <h2>HOT SAUCE LIST</h2>
            </div>
            <div id="saucesContainer">
            {sauces.map((sauce,index) => {
                return (
                    <Card key={index} title={sauce.title} subtitle={sauce.subtitle} URL={sauce.imageURL} id={sauce.id} />
                )
            })}
            </div>
        </div>
    )
}

export default Sauces