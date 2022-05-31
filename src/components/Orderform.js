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

    const formChange = (evt) => {
        const name = evt.target.name;
        const value = evt.target.type === 'checkbox' ? evt.target.checked : evt.target.value;

        setForm({...form, [name]: value});
    }

    useEffect(() => {
        console.log(form);
    }, [form])

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
                            onChange={formChange}
                        />
                    </label>
                    <select name='size' id='size-dropdown' onChange={formChange}>
                        <option name='' value=''>--Pick a Size--</option>
                        <option name='small' value='small'>Small</option>
                        <option value='medium'>Medium</option>
                        <option value='large'>Large</option>
                    </select>
                    <label> 
                        <p>Pick a Topping!</p>
                        Peperoni
                        <input
                            type='checkbox'
                            name='peperoni'
                            checked={form.peperoni}
                            onChange={formChange}
                        />
                        Olives
                        <input
                            type='checkbox'
                            name='olives'
                            checked={form.olives}
                            onChange={formChange}
                        />
                        Peppers
                        <input
                            type='checkbox'
                            name='peppers'
                            checked={form.peppers}
                            onChange={formChange}
                        />
                        Mushrooms
                        <input
                            type='checkbox'
                            name='mushrooms'
                            checked={form.mushrooms}
                            onChange={formChange}
                        />
                    </label>
                    <label>
                        <p>Special Instructions</p>
                        <input
                            type='text'
                            name='instructions'
                            value={form.instructions}
                            id='special-text'
                            onChange={formChange}
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