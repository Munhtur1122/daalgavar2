import React from "react";
import "./Cardlist.css"
const Cardlist = (props) =>{
    return(
        <div className="card">      
        <div className="cardContainer">
            <div className="Card2Container">
                <div className="Card1">
                <div className="Card1img">
                    <img src={props.img} alt="/"/>
                    </div>
                    <div className="CardText">
                        <h2>{props.title}</h2>
                    </div>
                    <div className="button">
                        <button className="but">Унших</button>

                    </div>
                </div>
            </div>
        </div>
    </div>

    );
};
export default Cardlist