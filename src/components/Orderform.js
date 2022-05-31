import React, { useState, useEffect } from 'react';

const initialFormState = {
   fullname: '',
   size: '',
   peperoni: false,
   olives: false,
   peppers: false,
   mushrooms: false,
   instructions: ''
}

const Orderform = () => {

    return(
        <div id='orderform'>
            <h1 id="order-form-h2">Create Your Own Pizza!</h1>
                <form id='pizza-form'>
                    <label>
                        Name
                        <input 
                            id='name-input'
                            name='fullname'
                            // value={fullname}
                            type='text'
                        />
                    </label>
                    <select id='size-dropdown'>
                        <option>--Pick a Size--</option>
                        <option>Small</option>
                        <option>Medium</option>
                        <option>Large</option>
                    </select>
                    <label> Pick a Topping!
                        Peperoni
                        <input
                            type='checkbox'
                            name='peperoni'
                            // value={peperoni}
                        />
                        Olives
                        <input
                            type='checkbox'
                            name='olives'
                            // value={olives}
                        />
                        Peppers
                        <input
                            type='checkbox'
                            name='peppers'
                            // value={peppers}
                        />
                        Mushrooms
                        <input
                            type='checkbox'
                            name='mushrooms'
                            // value={mushrooms}
                        />
                    </label>
                    <label>
                        Special Instructions
                        <input
                            type='text'
                            name='instructions'
                            // value={instructions}
                            id='special-text'
                        />
                    </label>
                    <button id='order-button' type='submit'>
                        Submit Order
                    </button>
                </form>
        </div>
    )
}

export default Orderform;