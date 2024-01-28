import { useState, useEffect } from 'react';
import fetchData from '../fetchData';

const Users = () => {
    const [data, setData] = useState(null);
    const [method, setMethod] = useState('POST');
    const handleChange = (e) => {
        setMethod(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = document.getElementById('query');
        const userId = form.elements.user_id ? form.elements.user_id.value : null;

        let parameters = { table: 'users' };
        let body = null;

        if (method !== 'POST') {
            parameters = { ...parameters, searchKey: 'user_id', searchValue: userId };
        }

        if (method === 'PUT' || method === 'POST') {
            const bodyData = {
                first_name: form.elements.first_name.value,
                surname: form.elements.surname.value
            };
            // body = JSON.stringify(bodyData);
            body = bodyData;
        }
        console.log(body);

        fetchData({
            url: 'http://localhost/php-server/management',
            parameters: parameters,
            body: body,
            method: method
        })
        .then(data => {
            console.log('Fetched data: ', data);
            setData(data);
        })
        .catch(error => {
            alert('Error fetching data: ' + error.message);
        });
    };
    return (  
        <div className="Users panel">
            <div className="output-panel">
            {data && Array.isArray(data) ? (
                data.map((user, index) => (
                    <div key={index}>
                        <p>User ID: {user.user_id}</p>
                        <p>First Name: {user.first_name}</p>
                        <p>Surname: {user.surname}</p>
                    </div>
                ))) : (
                    <>
                        { data && <h2>{data.message}</h2> }
                    </>
                )
            }
            </div>
            <div className="input-panel">
                
                
                <form id="query" style={{width: "70%"}} onSubmit={handleSubmit}>
                    <label>Operation:</label>
                    <select onChange={handleChange}>
                        <option value="POST">Create</option>
                        <option value="GET">Read</option>
                        <option value="PUT">Update</option>
                        <option value="DELETE">Delete</option>
                    </select>
                    &nbsp;&nbsp;
                    {method !== 'POST' && (
                        <>
                            <label>User ID:</label>
                            <input type="number" name="user_id" min="1" max="100000"  required />
                            &nbsp;&nbsp;
                        </>
                    )}
                    {(method === 'POST' || method === 'PUT') && (
                        <>
                            <label>First Name:</label>
                            <input type="text" name="first_name" required />
                            &nbsp;&nbsp;
                            <label>Surame:</label>
                            <input type="text" name="surname" required />
                        </>
                    )}
                    
                </form>
                <button type="submit" form="query">↑</button>
            </div>
        </div>
    );
}
 
export default Users;