import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

const AddAuthor = (props) => {
    const [name, setName] = useState('');
    const history = useHistory();
    const [errors, setErrors] = useState({});

    const onSubmitHandler = (event) => {
        event.preventDefault();
        console.log("Submitted");
        
        
        axios.post("http://localhost:8000/api/authors/new",{
            name})
            
            .then(res =>{
                console.log(res);
                history.push("/")
                
            })
            
            .catch(err=>{
                console.log(err.response.data.err.errors);
                setErrors(err.response.data.err.errors);
            })
            
    }

    return (
        <form onSubmit={onSubmitHandler}>
            <div>
                <label htmlFor='name'>Author</label>
                <input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} />
                <span>{errors.name && errors.name.message}</span>
            </div>
            <div>
                <a href='/' className='button'>Cancel </a>
            </div>
            <div>
                <input type="submit" value="SUBMIT" />
            </div>
        </form>
    )
}

export default AddAuthor;