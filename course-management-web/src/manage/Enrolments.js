import { useState, useEffect } from 'react';
import fetchData from '../fetchData';

const Enrolments = () => {
    const [data, setData] = useState(null);
    const [method, setMethod] = useState('POST');
    const handleChange = (e) => {
        setMethod(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = document.getElementById('query');
        const enrolmentId = form.elements.enrolment_id ? form.elements.enrolment_id.value : null;

        let parameters = { table: 'enrolments' };
        let body = null;

        if (method !== 'POST') {
            parameters = { ...parameters, searchKey: 'enrolment_id', searchValue: enrolmentId };
        }

        if (method === 'PUT' || method === 'POST') {
            body = {
                user_id: form.elements.user_id.value,
                course_id: form.elements.course_id.value,
                status: form.elements.status.value
            };

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
                data.map((enrolment, index) => (
                    <div key={index}>
                        <p>Enrolment ID: {enrolment.enrolment_id}</p>
                        <p>User ID: {enrolment.user_id}</p>
                        <p>Course ID: {enrolment.course_id}</p>
                        <p>Status: {enrolment.status}</p>
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
                            <label>Enrolment ID:</label>
                            <input type="number" name="enrolment_id" min="1" max="100000"  required />
                            &nbsp;&nbsp;
                        </>
                    )}
                    {(method === 'POST' || method === 'PUT') && (
                        <>
                            <label>User ID:</label>
                            <input type="number" name="user_id" min="1" max="100000"  required />
                            &nbsp;&nbsp;
                            <label>Course ID:</label>
                            <input type="number" name="course_id" min="1" max="100000"  required />
                            &nbsp;&nbsp;
                            <label>Status:</label>
                            <select name="status">
                                <option value="in progress">In Progress</option>
                                <option value="completed">Completed</option>
                            </select>
                        </>
                    )}
                    
                </form>
                <button type="submit" form="query">↑</button>
            </div>
        </div>
    );
}
 
export default Enrolments;