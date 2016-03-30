//导入常量  后期开发  一个页面一个总fucntion ，下面多个 业务逻辑 比如CRUD，这个就可以细分
import * as types from '../constants';

//数据返回，追加时间
export function pageByLogin (state = {}, action = {}) {
    switch (action.type) {
        case types.LOGIN_USERNAME:
            //追加字段 或者 （正则）过滤数据,return 后，View 的 store.getState()， 可以得到返回的结果。如果不筛选数据，直接 用回调回来
            return Object.assign({}, action, {
                type: types.LOGIN_USERNAME
            })
        default:
            return state
    }
}