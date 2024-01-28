import { useState, useEffect } from 'react';
import fetchData from '../fetchData';

const ByCourse = () => {
    const [data, setData] = useState(null);


    const handleSubmit = (e) => {
        e.preventDefault();
        const form = document.getElementById('query');
        const courseId = form.elements.course_id.value;
        console.log("clickclick");
        fetchData({
            url: 'http://localhost/php-server/display',
            parameters: { query_condition: 'by_course', id: courseId},
            body: null, 
            method: 'GET'
        })
        .then(data => {
            console.log('Fetched data: ', data);
            setData(data);

        })
        .catch(error => {
            alert('Error fetching data: ' + error.message);
        });
    }
    return (  
        <div className="ByCourse panel">
            <div className="output-panel">
                {data && (
                    <table>
                        <thead>
                            <tr>
                                <th>Enrolment Id</th>
                                <th>First Name</th>
                                <th>Surname</th>
                                <th>Description</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((item) => (
                                <tr key={item.enrolment_id}>
                                    <td>{item.enrolment_id}</td>
                                    <td>{item.first_name}</td>
                                    <td>{item.surname}</td>
                                    <td>{item.description}</td>
                                    <td>{item.status}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )}
            </div>
            <div className="input-panel">
                <form id="query" style={{width: "70%"}} onSubmit={handleSubmit}>
                    <label>Course ID:</label>
                    <input type="number" name="course_id" min="1" max="100000" required />
                    
                </form>
                <button type="submit" form="query">↑</button>
            </div>
        </div>
    );
}
 
export default ByCourse;