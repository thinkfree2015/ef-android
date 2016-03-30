package com.yxh.ryt.util;

import java.util.Map;
import java.util.TreeMap;

/**
 * Created by dev on 2015/12/28.
 */
public class MapTransfor {
    public static Map<String,String> transfor(String userName,String password,String date,String signmsg){
        Map map=new TreeMap();
        map.put("userName",userName);
        map.put("password",password);
        map.put("date",date);
        map.put("signmsg",signmsg);
        return map;
    }
}
