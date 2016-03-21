/**
 * Created by Administrator on 2016/3/18.
 */
export  function filesUpload(url,data,callback) {
    let fetchOptions = {
        method: 'POST',
        headers: {
            'charset':'utf-8',
            'Content-Type': 'multipart/form-data'
        },
    };
    fetchOptions.body=data;
    fetch(url, fetchOptions)
        .then((response) =>
        {return response.json()})
        .then((responseDate) => {
            callback(responseDate);
        })
        .catch((error) => {
            console.log(error);
        })
        .done();

}
