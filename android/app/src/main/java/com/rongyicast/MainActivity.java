        package com.rongyicast;

                import com.facebook.react.ReactActivity;
                import com.facebook.react.ReactPackage;
                import com.facebook.react.shell.MainReactPackage;
                import com.rongyicast.Package.ImagePickerPackage;
                import com.rongyicast.Package.RegisterPackage;

                import java.util.Arrays;
                import java.util.List;
                import cn.jpush.android.api.JPushInterface;
                public class MainActivity extends ReactActivity {

                /**
                * Returns the name of the main component registered from JavaScript.
                * This is used to schedule rendering of the component.
                */
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

                @Override
                protected void onResume() {
                super.onResume();
                JPushInterface.onResume(this);
                }

                @Override
                protected void onPause() {
                super.onPause();
                JPushInterface.onPause(this);
                }
                /**
                * A list of packages used by the app. If the app uses additional views
                * or modules besides the default ones, add more packages here.
                */
                @Override
                protected List<ReactPackage> getPackages() {
                return Arrays.<ReactPackage>asList(
                new MainReactPackage(),
                new RegisterPackage(),
                new ImagePickerPackage()
                );
                }
                }
