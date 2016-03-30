package com.yxh.ryt.util;

import android.content.Context;
import android.os.Looper;
import android.widget.Toast;

import java.util.regex.Matcher;
import java.util.regex.Pattern;

/**
 * Created by dev on 2015/12/24.
 */
public class SmsUtils {
    private Context context;
    /**
     * 验证手机号码
     *
     * @param mobiles
     * @return [0-9]{5,9}
     */
    public static boolean isMobileNO(String mobiles) {
        boolean flag = false;
        try {
            mobiles = mobiles.replace(" ", "");
            mobiles = mobiles.replace("+86", "");
            Pattern p = Pattern
                    .compile("^((13[0-9])|(15[^4,\\D])|(18[0,2,5-9]))\\d{8}$");
            Matcher m = p.matcher(mobiles);
            flag = m.matches();
        } catch (Exception e) {
            flag = false;
        }
        return flag;
    }

    public static void showToast(final String toast, final Context context) {
        new Thread(new Runnable() {

            @Override
            public void run() {
                Looper.prepare();
                Toast.makeText(context, toast, Toast.LENGTH_SHORT).show();
                Looper.loop();
            }
        }).start();
    }

}
