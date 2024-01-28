import { useState, useEffect } from 'react';
import fetchData from '../fetchData';

const Courses = () => {
    const [data, setData] = useState(null);
    const [method, setMethod] = useState('POST');
    const handleChange = (e) => {
        setMethod(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = document.getElementById('query');
        const courseId = form.elements.course_id ? form.elements.course_id.value : null;

        let parameters = { table: 'courses' };
        let body = null;

        if (method !== 'POST') {
            parameters = { ...parameters, searchKey: 'course_id', searchValue: courseId };
        }

        if (method === 'PUT' || method === 'POST') {
            body = {
                description: form.elements.description.value,
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
                data.map((course, index) => (
                    <div key={index}>
                        <p>Course ID: {course.course_id}</p>
                        <p>Description: {course.description}</p>
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
                            <label>Course ID:</label>
                            <input type="number" name="course_id" min="1" max="100000"  required />
                            &nbsp;&nbsp;
                        </>
                    )}
                    {(method === 'POST' || method === 'PUT') && (
                        <>
                            <label>Description:</label>
                            <input type="text" name="description" required />
                        </>
                    )}
                    
                </form>
                <button type="submit" form="query">↑</button>
            </div>
        </div>
    );
}
 
export default Courses;