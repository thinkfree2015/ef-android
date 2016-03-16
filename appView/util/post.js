
    export  function post(url, data, callback) {
        console.log(data);
        var fetchOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        };

        fetch(url, fetchOptions)
            .then((response) => /*response.json())
            .then(json => {
                callback(json);
                console.log(json);
            })
            .catch((error) => {
            console.log(error+"yyyyyy");
        })*/
            {console.log(response); return response.text()})
            .then((responseText) => {
                callback(responseText);
            })
            .catch((error) => {
                console.log(error);
            })
                .done();

    }


