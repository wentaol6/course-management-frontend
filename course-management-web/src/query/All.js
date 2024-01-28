import { useState, useEffect } from 'react';
import fetchData from '../fetchData';

const All = () => {
    const [data, setData] = useState(null);


    const handleSubmit = () => {
        console.log("clickclick");
        fetchData({
            url: 'http://localhost/php-server/display',
            parameters: { query_condition: 'all' },
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
        <div className="All panel">
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
                <div style={{width: "70%"}}></div>
                <button onClick={handleSubmit}>↑</button>
            </div>
        </div>
    );
}
 
export default All;