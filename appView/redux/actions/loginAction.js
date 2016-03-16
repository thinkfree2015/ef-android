//导入常量
import * as types from '../constants';

//处理数据块 此处按照页面来分action
function receivePosts(actionType,json) {
    var returnData = {
        type: actionType,
        ServerData: json
    };
    return returnData;
}

//fetch 请求方法 dispatch：回调参数，相当于：(store.dispatch)
export function fetchPosts(url,data) {
    console.log(data+"==========================");
    return dispatch => {
        //POST 提交方式2：有框架，服务器，拆分键值对(types.SERVER_IP)

        return fetch(types.SERVER_IP+url,{
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },

            body: JSON.stringify(data)
        })
        .then(response => response.json())
        .then(json => dispatch(receivePosts(types.LOGIN_USERNAME,json)))
    }
}


