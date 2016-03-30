    package com.rongyicast.util;

        import android.app.Application;
        import android.util.Log;
        import android.widget.Toast;


        import com.lidroid.xutils.HttpUtils;
        import com.lidroid.xutils.exception.HttpException;
        import com.lidroid.xutils.http.RequestParams;
        import com.lidroid.xutils.http.ResponseInfo;
        import com.lidroid.xutils.http.callback.RequestCallBack;
        import com.lidroid.xutils.http.client.HttpRequest;




        import cn.jpush.android.api.JPushInterface;


        /**
        * For developer startup JPush SDK
        *
        * 一般建议在自定义 Application 类里初始化。也可以在主 Activity 里。
        */
        public class EFeiYiApplication extends Application {
        private static final String TAG = "JPush";
        String id;
        @Override
        public void onCreate() {
        Log.d(TAG, "[EFeiYiApplication] onCreate");
        super.onCreate();

        JPushInterface.setDebugMode(true); 	// 设置开启日志,发布时请关闭日志
        JPushInterface.init(this);     		// 初始化 JPush
        id =JPushInterface.getRegistrationID(this);
        Log.d("11111111111", id);
            Toast.makeText(getApplicationContext(), id, Toast.LENGTH_SHORT).show();
        /*Thread thread=new Thread(new Runnable() {
        @Override
        public void run() {
        try {
        URL url = new URL("http://192.168.1.69:8001/app/userBinding.do");
        HttpURLConnection httpURLConnection= (HttpURLConnection) url.openConnection();
        httpURLConnection.setRequestMethod("POST");// 提交模式
        // conn.setConnectTimeout(10000);//连接超时 单位毫秒
        // conn.setReadTimeout(2000);//读取超时 单位毫秒
        httpURLConnection.setDoOutput(true);// 是否输入参数
        httpURLConnection.setDoInput(true);
        httpURLConnection.setConnectTimeout(5 * 1000);
        Log.d("222222222222", "到这里了啊");
        String json=TransforJson.getJson("iamthebestone", id, System.currentTimeMillis()).toString();
        Log.d("json",json);
        OutputStream outStream = httpURLConnection.getOutputStream();
        outStream.write(json.toString().getBytes());
        outStream.flush();
        outStream.close();

        int responseCode = httpURLConnection.getResponseCode();
        if (responseCode != 200) {
        Log.d(TAG, responseCode+"");
        } else {
        Log.d(TAG, "连接成功");
        BufferedReader reader = new BufferedReader(new InputStreamReader(httpURLConnection.getInputStream()));
        String line;
        while ((line = reader.readLine()) != null){
        System.out.println(line);
        }
        reader.close();
        }
        } catch (Exception e) {
        e.printStackTrace();
        }
        }
        });
        thread.start();*/
        HttpUtils httpUtils = new HttpUtils(60000);
        RequestParams params = new RequestParams("UTF-8");
        params.addHeader("Content-Type", "application/json");
        try {
        params.setBodyEntity(TransforJson.getJson("15538398530", id, System.currentTimeMillis()));
        httpUtils.send(HttpRequest.HttpMethod.POST, "http://192.168.1.69:8001/app/userBinding.do", params, new RequestCallBack<String>() {


        @Override
        public void onSuccess(ResponseInfo<String> responseInfo) {
        Log.d("tag", responseInfo.result.toString());

        Toast.makeText(getApplicationContext(), "请求结果：成功" + responseInfo.statusCode, Toast.LENGTH_SHORT).show();

        }

        @Override
        public void onFailure(HttpException error, String msg) {
        Log.d("error",error.fillInStackTrace()+"");
        Toast.makeText(getApplicationContext(), "访问失败" + error.fillInStackTrace(), Toast.LENGTH_SHORT).show();
        }

        });

        } catch (Exception e) {
        e.printStackTrace();
        }

        }

        }
