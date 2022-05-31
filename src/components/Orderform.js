import React, { useState, useEffect } from 'react';

const initialFormValues = {
   fullname: '',
   size: '',
   peperoni: false,
   olives: false,
   peppers: false,
   mushrooms: false,
   instructions: ''
}

const Orderform = () => {
    const [form, setForm] = useState(initialFormValues);

    return(
        <div id='orderform'>
            <h1 id="order-form-h2">Create Your Own Pizza!</h1>
                <form id='pizza-form'>
                    <label>
                        Name
                        <input 
                            id='name-input'
                            name='fullname'
                            value={form.fullname}
                            type='text'
                        />
                    </label>
                    <select id='size-dropdown'>
                        <option>--Pick a Size--</option>
                        <option>Small</option>
                        <option>Medium</option>
                        <option>Large</option>
                    </select>
                    <label> 
                        <p>Pick a Topping!</p>
                        Peperoni
                        <input
                            type='checkbox'
                            name='peperoni'
                            checked={form.peperoni}
                        />
                        Olives
                        <input
                            type='checkbox'
                            name='olives'
                            checked={form.olives}
                        />
                        Peppers
                        <input
                            type='checkbox'
                            name='peppers'
                            checked={form.peppers}
                        />
                        Mushrooms
                        <input
                            type='checkbox'
                            name='mushrooms'
                            checked={form.mushrooms}
                        />
                    </label>
                    <label>
                        <p>Special Instructions</p>
                        <input
                            type='text'
                            name='instructions'
                            value={form.instructions}
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