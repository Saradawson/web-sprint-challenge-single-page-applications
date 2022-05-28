import React from 'react';

const Orderform = (props) => {
    return(
        <div id='orderform'>
            <header>
                <h1>Create Your Own Pizza!</h1>
            </header>
            <section>
                <form id='pizza-form'>
                    <label>
                        Name
                        <input 
                            id='name-input'
                            name='fullname'
                            value={props.name}
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
                            value={props.peperoni}
                        />
                        Olives
                        <input
                            type='checkbox'
                            name='olives'
                            value={props.olives}
                        />
                        Peppers
                        <input
                            type='checkbox'
                            name='peppers'
                            value={props.peppers}
                        />
                        Mushrooms
                        <input
                            type='checkbox'
                            name='mushrooms'
                            value={props.mushrooms}
                        />
                    </label>
                    <label>
                        Special Instructions
                        <input
                            type='text'
                            name='instructions'
                            value={props.instructions}
                            id='special-text'
                        />
                    </label>
                    <button id='order-button' type='submit'>
                        Submit Order
                    </button>
                </form>
            </section>
        </div>
    )
}

export default Orderform;