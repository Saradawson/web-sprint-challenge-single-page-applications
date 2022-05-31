import React, { useState } from 'react';
import * as yup from 'yup';

const initialFormValues = {
   fullname: '',
   size: '',
   peperoni: false,
   olives: false,
   peppers: false,
   mushrooms: false,
   instructions: ''
}



const Orderform = ({orders, setOrders}) => {
    const formSchema = yup.object().shape({
      fullname: yup.string().trim().min(2, "name must be at least 2 characters"),
      size: yup.string().oneOf('small', 'medium', 'Large', 'Please pick a size...'),
      peperoni: yup.boolean(),
      olives: yup.boolean(),
      peppers: yup.boolean(),
      mushrooms: yup.boolean(),
      instructions: yup.string().trim()   
    });

    const [form, setForm] = useState(initialFormValues);
    const [disabled, setDisabled] = useState(true);
    const [errors, setErrors] = useState({
        fullname: '',
        size: ''  
    });

    const formChange = (evt) => {
        const name = evt.target.name;
        const value = evt.target.type === 'checkbox' ? evt.target.checked : evt.target.value;

        setForm({...form, [name]: value});
    }

    const submitHandler = (evt) => {
        evt.preventDefault();
        setOrders([form, ...orders ]);
    }

    return(
        <div id='orderform'>
            <h1 id="order-form-h2">Create Your Own Pizza!</h1>
                <form id='pizza-form' onSubmit={submitHandler}>
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
                        <option name='medium' value='medium'>Medium</option>
                        <option name='large' value='large'>Large</option>
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
                    <button id='order-button' type='submit' disabled={disabled}>
                        Submit Order
                    </button>
                </form>
        </div>
    )
}

export default Orderform;