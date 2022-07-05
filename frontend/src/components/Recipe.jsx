import React from "react";


function Recipe() {
    let buttonName = "Some button";
    const handleClick = () => {
        console.log('hello');
    }
    return (
        <div>
            <h1>It`s Recipe!</h1>
            <button className={ "some-button" } onClick={ handleClick }>{buttonName}</button>
        </div>
    );
};

export default Recipe;