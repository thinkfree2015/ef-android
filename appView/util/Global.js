/**
 * Created by Administrator on 2016/3/17.
 */

import Storage from 'react-native-storage';
var storage = new Storage({
    //最大容量，默认值10000条数据循环存储
    size: 10000,
    //数据过期时间，默认一整天（1000 * 3600 * 24秒）
    defaultExpires: 1000 * 3600 * 24 * 365,
    //读写时在内存中缓存数据。默认启用。
    enableCache: true,
});

//最好在全局范围内创建一个（且只有一个）storage实例，方便使用
//对于react native
global.storage = storage;
var json=[];
global.json=json;