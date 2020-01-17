import React from 'react'

function Product(props){
    return (
        <div className="card">
            <h3>{props.name} ${props.price}</h3>
            <h6>{props.description}</h6>
        </div>
    );
}

export default Product