import React from 'react'


function Main() {
    let buttonName = "Some button";
    const handleClick = () => {
        console.log('hello');
    }
    return (
        <div>
            <h1>It`s Main!</h1>
            <button className={ "some-button" } onClick={ handleClick }>{buttonName}</button>
        </div>
    );
};

export default Main
