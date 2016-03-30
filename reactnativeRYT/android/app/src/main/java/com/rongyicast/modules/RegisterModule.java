package com.rongyicast.modules;

import android.util.Log;
import android.widget.Toast;

import com.facebook.react.bridge.Callback;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.lidroid.xutils.HttpUtils;
import com.lidroid.xutils.exception.HttpException;
import com.lidroid.xutils.http.RequestParams;
import com.lidroid.xutils.http.ResponseInfo;
import com.lidroid.xutils.http.callback.RequestCallBack;
import com.lidroid.xutils.http.client.HttpRequest;
import com.rongyicast.util.TransforJson;

import org.json.JSONException;
import org.json.JSONObject;

import cn.jpush.android.api.JPushInterface;

/**
 * Created by Administrator on 2016/3/9.
 */
public class RegisterModule extends ReactContextBaseJavaModule {
    public String code="-1";
    public RegisterModule(ReactApplicationContext reactContext) {
        super(reactContext);
    }
    @Override
    public String getName() {
        return "RegisterParameter";
    }
    @ReactMethod
    public void registerParameter(String username,String password,final Callback callback){
        String id = JPushInterface.getRegistrationID(getReactApplicationContext());
        Log.d("11111111111", id);
        Toast.makeText(getReactApplicationContext(), id, Toast.LENGTH_SHORT).show();
        HttpUtils httpUtils = new HttpUtils(60000);
        RequestParams params = new RequestParams("UTF-8");
        params.addHeader("Content-Type", "application/json");
        try {
            params.setBodyEntity(TransforJson.getJson(username,password,System.currentTimeMillis(),id));
            httpUtils.send(HttpRequest.HttpMethod.POST, "http://192.168.1.69:8001/app/userBinding.do", params, new RequestCallBack<String>() {


                @Override
                public void onSuccess(ResponseInfo<String> responseInfo) {
                    try {
                        JSONObject jsonObject=new JSONObject(responseInfo.result);
                        code=jsonObject.getString("resultCode");
                        callback.invoke(code);
                    } catch (JSONException e) {
                        e.printStackTrace();
                    }
                }
                @Override
                public void onFailure(HttpException error, String msg) {
                }
            });
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
