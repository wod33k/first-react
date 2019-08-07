import React from 'react';



const Person = props => {
    return (
        <div className={props.klasa} key={props.klucz}> 
            <p> Hi guys !! {props.licz} </p>
            <p> Hi my name is {props.name} :)</p>
        </div>

    )
}

export default Person;