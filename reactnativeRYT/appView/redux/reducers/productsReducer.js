//导入常量  后期开发  一个页面一个总fucntion ，下面多个 业务逻辑 比如CRUD，这个就可以细分
import * as types from '../constants';

//数据返回，追加时间
export function pageByProducts (state = {}, action = {}) {
    switch (action.type) {
        case types.GET_INFO:
            var date = new Date();
            return Object.assign({}, action, {
                type: types.GET_INFO,
                ResponseTime: date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds() + "." + date.getMilliseconds()
            })
        case types.SAVE_TEST_FROM:
            var date = new Date();
            return Object.assign({}, action, {
                type: types.SAVE_TEST_FROM,
                ResponseTime: date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds() + "." + date.getMilliseconds()
            })
        case types.GET_PORDUCTS_LIST:
            var date = new Date();
            return Object.assign({}, action, {
                type: types.GET_PORDUCTS_LIST,
                ResponseTime: date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds() + "." + date.getMilliseconds()
            })
        default:
            return state
    }
}