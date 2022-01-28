import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import axios from 'axios';


const Edit = (props) => {
    const { _id } = useParams();
    const history = useHistory();
    const [authors, setAuthors] = useState({});
    const [errors, setErrors] = useState({});

    useEffect(() => {
        axios.get("http://localhost:8000/api/authors/one/" + _id)
            .then(res => {
                console.log(res);
                setAuthors(res.data.author);
            })
            .catch(err => {
                console.log(err);
                setAuthors("");
            })
    }, [_id])


    const onSubmitHandler = (event) => {
        event.preventDefault();
        console.log("Submitted");
        

        axios.put("http://localhost:8000/api/authors/update/" + _id,
            authors)
            .then(res => {
                console.log(res);
                // window.location.reload(false);
                history.push("/")
                
            })
            .catch(err => {
                console.log(err.response.data.err.errors);
                setErrors(err.response.data.err.errors);
            });

    }

    const onChangeHandler = (event) => {
        setAuthors({
            ...authors,
            [event.target.name]: event.target.value
        })
    }



    return (
        <form onSubmit={onSubmitHandler}>
            <h1>Edit</h1>
            <div>
                <label htmlFor='name'>Author</label>
                <input type="text" name="name" value={authors.name} onChange={onChangeHandler} />
                <span>{errors.name && errors.name.message}</span>
            </div>
            <div>
                <a href='/' className='button'>Cancel </a>
            </div>
            <div>
                <input type="submit" value="Update" />
            </div>
        </form>
    )
}




export default Edit;