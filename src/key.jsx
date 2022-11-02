import React from 'react';

export default function main(props){
    return(
        <button type='button' value={props.value} onClick={(event)=>props.handeler(event)}>{props.value}</button>
    );
}