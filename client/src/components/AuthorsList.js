import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const AuthorsList = (props) => {
    const [authors, setAuthors] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8000/api/authors")
            .then(res => {
                console.log(res);
                setAuthors(res.data);
            })
            .catch(err => {
                console.log(err);
                setAuthors("");
            })
    }, [])

    return(
        <div>
            <Link to="/add"><button>Add</button></Link>
            <h2>All Authors</h2>
            
            {
                authors.map((author, i)=>{
                    return <li key={i}>{author.name} 
                    <Link to={`/api/authors/edit/${author._id}`}><button>Edit</button></Link></li>
                })
            }
        </div>
    )
}


export default AuthorsList;