package com.yxh.ryt.util;

import android.util.Log;

import org.apache.http.HttpResponse;
import org.apache.http.client.HttpClient;
import org.apache.http.client.methods.HttpPost;
import org.apache.http.entity.StringEntity;
import org.apache.http.impl.client.DefaultHttpClient;
import org.apache.http.message.BasicHeader;
import org.apache.http.protocol.HTTP;
import org.json.JSONException;
import org.json.JSONObject;

import java.io.IOException;

/**
 * Created by dev on 2015/12/22.
 */
public class PostData {
    public static int getCode(String userName,String password,String urlPath) throws IOException, JSONException {
        JSONObject jsonObject = new JSONObject();
        JSONObject jsonObject1=new JSONObject();
        jsonObject.put("username", userName);
        jsonObject.put("password", password);
        jsonObject1.put("Person",jsonObject);
        Log.d("Tag",jsonObject1.toString());
        HttpClient client=new DefaultHttpClient();
        HttpPost post=new HttpPost(urlPath);
        StringEntity entity = new StringEntity(jsonObject1.toString(),"UTF-8");//解码中文
        entity.setContentType("text/json");
        entity.setContentEncoding(new BasicHeader(HTTP.CONTENT_TYPE,
                "application/json"));
        Log.d("tag",jsonObject1.toString());
        post.setEntity(entity);
        HttpResponse httpResponse = client.execute(post);
        Log.d("888888888","成功了");
        int code =httpResponse.getStatusLine().getStatusCode();
        return code;
    }
}
