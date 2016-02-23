    package com.rongyicast;

        import android.os.Bundle;



        import com.facebook.react.ReactActivity;
        import com.facebook.react.ReactPackage;
        import com.facebook.react.shell.MainReactPackage;
        import java.util.Arrays;
        import java.util.List;

        import cn.jpush.android.api.CustomPushNotificationBuilder;
        import cn.jpush.android.api.JPushInterface;


        public class MainActivity extends ReactActivity {

        @Override
        protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        CustomPushNotificationBuilder builder = new CustomPushNotificationBuilder(this, R.layout.notification_layout, R.id.noti_image, R.id.noti_title, R.id.noti_text);
        JPushInterface.setPushNotificationBuilder(1, builder);
        }

        @Override
        protected String getMainComponentName() {
        return "RongYiCast";
        }

        /**
        * Returns whether dev mode should be enabled.
        * This enables e.g. the dev menu.
        */
        @Override
        protected boolean getUseDeveloperSupport() {
        return BuildConfig.DEBUG;
        }

        /**
        * A list of packages used by the app. If the app uses additional views
        * or modules besides the default ones, add more packages here.
        */
        @Override
        protected List<ReactPackage> getPackages() {
        return Arrays.<ReactPackage>asList(
        new MainReactPackage()
        );
        }

        @Override
        protected void onResume() {
        super.onResume();
        JPushInterface.onResume(this);
        }

        @Override
        protected String getJSMainModuleName() {
        return super.getJSMainModuleName();
        }

        @Override
        public void onBackPressed() {
        super.onBackPressed();
        }

        @Override
        protected void onPause() {
        super.onPause();
        JPushInterface.onPause(this);
        }


        }
