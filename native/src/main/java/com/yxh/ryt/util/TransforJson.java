package com.yxh.ryt.util;

import android.util.Log;

import org.apache.http.entity.StringEntity;
import org.json.JSONException;
import org.json.JSONObject;

import java.io.UnsupportedEncodingException;
import java.util.HashMap;
import java.util.Map;
import java.util.TreeMap;

/**
 * Created by dev on 2015/12/24.
 */
public class TransforJson {
    public static StringEntity getJson(String username,String password,Long time) throws Exception {
        JSONObject jsonObject = new JSONObject();
        jsonObject.put("username", username);
        String pwSha1=Sha1.encodePassword(password,"SHA");
        Log.d("password", pwSha1);
        jsonObject.put("password", pwSha1);
        jsonObject.put("timestamp", time);
        Map map=new TreeMap();
        map.put("username",username);
        map.put("password",pwSha1);
        map.put("timestamp", time);
        String signmsg = Upload.encrypt(map);
        jsonObject.put("signmsg",signmsg);
        Log.d("TransforJson",jsonObject.toString());
        return new StringEntity(jsonObject.toString());
    }
    public static StringEntity getJson(String username,String password,Long time,String truename2) throws Exception {
        JSONObject jsonObject = new JSONObject();
        jsonObject.put("username", username);
        String pwSha1=Sha1.encodePassword(password,"SHA");
        Log.d("password", pwSha1);
        jsonObject.put("password", pwSha1);
        jsonObject.put("timestamp", time);
        jsonObject.put("truename2",truename2);
        Map map=new TreeMap();
        map.put("username",username);
        map.put("password",pwSha1);
        map.put("timestamp", time);
        map.put("truename2",truename2);
        String signmsg = Upload.encrypt(map);
        jsonObject.put("signmsg",signmsg);
        Log.d("TransforJson",jsonObject.toString());
        return new StringEntity(jsonObject.toString());
    }
    public static StringEntity getJson(String username,Long time) throws Exception {
        JSONObject jsonObject = new JSONObject();
        jsonObject.put("username", username);
        jsonObject.put("timestamp", time);
        Map map=new TreeMap();
        map.put("username",username);
        map.put("timestamp", time);
        String signmsg = Upload.encrypt(map);
        jsonObject.put("signmsg",signmsg);
        Log.d("TransforJson",jsonObject.toString());
        return new StringEntity(jsonObject.toString());
    }
}
