import React from "react";

const Card = (props) =>{
    return(
        <div>
            <h2>{props.title}</h2>
            <div className="text"><p>{props.description}</p></div>
            <img src={props.img} alt="/"/>
        </div>
    );
};
export default Card