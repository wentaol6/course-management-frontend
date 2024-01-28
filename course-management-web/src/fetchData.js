const fetchData = ({ url, parameters, body, method }) => {
    const fullUrl = parameters
        ? `${url}?${new URLSearchParams(parameters)}`
        : url;

    const config = {
        method: method,
        headers: {
            'Content-Type': 'application/json',
        },
    };

    if (method === 'POST' || method === 'PUT') {
        config.body = JSON.stringify(body);
    }

    console.log('Request Info:', {
        URL: fullUrl,
        Method: method,
        Headers: config.headers,
        Body: config.body
    });


    return fetch(fullUrl, config)
        // .then(response => {
        //     return response.json().then(data => {
        //         if (!response.ok) {
        //             const error = new Error(data.error || `HTTP error! Status: ${response.status}`);
        //             error.status = response.status;
        //             throw error;
        //         }
        //         return data; 
        //     });
        // })
        .then(response => {
            if (!response.ok) {
                return response.text().then(text => {
                    throw new Error(text || 'Error');
                });
            }
            return response.json();
        })
        .catch(error => {
            console.error("Fetching error: ", error);
            throw error; 
        });
};

export default fetchData;
