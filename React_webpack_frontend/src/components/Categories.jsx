import React from 'react'


function Categories() {
    let buttonName = "Some button";
    const handleClick = () => {
        console.log('hello');
    }
    return (
        <div>
            <h1>It`s Categories!</h1>
            <button className={ "some-button" } onClick={ handleClick }>{buttonName}</button>
        </div>
    );
};

export default Categories
