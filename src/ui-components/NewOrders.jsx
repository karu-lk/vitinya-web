import React from 'react';
import './../App.css';
import americano from './../../assets/images/americano.jpg';
import cappuccino from './../../assets/images/cappuccino.jpg';
import flatwhite from './../../assets/images/flat-white.jpg';
import genericcup from './../../assets/images/generic-cup.jpg';
import latte from './../../assets/images/latte.jpg';
import mocha from './../../assets/images/mocha.jpg';

const NewOrders = (props) => {
    const coffeeImage = (coffeeType) => {
        if (coffeeType === 'Cappuccino') {
            return cappuccino;
        } else if (coffeeType === 'Latte') {
            return latte
        } else if (coffeeType === 'Flat white') {
            return flatwhite
        } else if (coffeeType === 'Mocha') {
            return mocha
        } else if (coffeeType === 'Americano') {
            return americano
        } else {
            return genericcup
        }
    }

    return (
        <div className='new-order-container'>
            {props.coffeeOrders && (
                <div className='item-group'>
                    {props.coffeeOrders.listOrders.map(coffee => (
                        <div className='item-wrapper' key={coffee.id}>
                            <div className='image-wrapper'>
                                <img className='coffee-image' src={coffeeImage(coffee.coffee)} height={55} width={55}></img>
                            </div>
                            <div className='content-wrapper'>
                                <p>Coffee: {coffee.coffee}</p>
                                <p>Ordered by: {coffee.name}</p>
                                <p>Phone: {coffee.mobileNumber}</p>
                            </div>

                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default NewOrders;
