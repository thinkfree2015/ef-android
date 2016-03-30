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
export function postsGoodsUrl(url) {
    return dispatch => {
        //POST 提交方式2：有框架，服务器，拆分键值对(types.SERVER_IP)
        return fetch(`${ url }`,{
            method: 'get',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
            }
        })
        .then(response => response.json())
        .then(json => dispatch(receivePosts(types.GET_INFO,json)))
    }
}

//fetch 请求方法 dispatch：回调参数，相当于：(store.dispatch)
export function postsTestFrom(data) {
    return dispatch => {
        //POST 提交方式2：有框架，服务器，拆分键值对(types.SERVER_IP)
        return fetch(`${ types.SERVER_IP }/saveOrEditUser`,{
            method: 'post',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
            },
            body: JSON.ObjectToString({
                username: data.userName,
                password: data.password,
                email: data.email,
                sex: data.sex,

                agree: data.agree,
                age: data.age,
                telePhone: data.telePhone,
                fav: data.fav,
                joinedOnString: data.joinedOn
            })
        })
        .then(response => response.json())
        .then(json => dispatch(receivePosts(types.SAVE_TEST_FROM,json)))
    }
}

//fetch 请求方法 dispatch：回调参数，相当于：(store.dispatch)
export function postsGetPorducts() {
    return dispatch => {
        //POST 提交方式2：有框架，服务器，拆分键值对(types.SERVER_IP)
        return fetch(`http://120.24.102.4/api/product`,{
            method: 'get',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
            }
        })
        .then(response => response.json())
        .then(json => dispatch(receivePosts(types.GET_PORDUCTS_LIST,json)))
    }
}