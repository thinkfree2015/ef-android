//导入容器 combineReducers
import { combineReducers } from 'redux';
import { pageByLogin } from './reducers/loginReducer';
import { pageByProducts } from './reducers/productsReducer';


//创建一个跟还原剂
const rootReducer = combineReducers({
  pageByLogin,
  pageByProducts
});
//导出跟还原剂
export default rootReducer
