//------------------store 设计模式-----------------
import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'
import { createStore, applyMiddleware } from 'redux'
import rootReducer from './reducers'


//定义一个全局的中间件
const middleWares = [
  thunkMiddleware,
];
if (__DEV__) {
  //如果是开发模式，就像数组追加一个 Log 记录器
  middleWares.unshift(createLogger());
}

const createStoreWithMiddleware = applyMiddleware(
    ...middleWares //解构元素
)(createStore)

//应用中间件，添加一个跟 Reducer
const store = createStoreWithMiddleware(rootReducer);
//导出 store
export default store;

