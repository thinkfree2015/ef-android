package com.yxh.ryt.util;

import android.util.Log;

import org.apache.http.HttpResponse;
import org.apache.http.client.HttpClient;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.client.methods.HttpPost;
import org.apache.http.entity.StringEntity;
import org.apache.http.impl.client.DefaultHttpClient;
import org.json.JSONException;
import org.json.JSONObject;

import java.io.IOException;

/**
 * Created by dev on 2015/12/22.
 */
public class GetData {
    public static int getCode(String userName,String password,String urlPath) throws IOException, JSONException {
        JSONObject jsonObject = new JSONObject();

        jsonObject.put("username", userName);
        jsonObject.put("password", password);
        StringEntity se = new StringEntity(jsonObject.toString());
        Log.d("Tag", jsonObject.toString());
        HttpClient client=new DefaultHttpClient();
        StringBuilder sb = new StringBuilder(urlPath);
        HttpGet get=new HttpGet();
        //HttpResponse httpResponse = client.execute(post);
        //int code =httpResponse.getStatusLine().getStatusCode();
        return 0;
    }
}
