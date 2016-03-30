package com.yxh.ryt.util;

import android.content.Context;
import android.content.SharedPreferences;

/**
 * Created by dev on 2015/12/23.
 */
public class ShareUtils {
    private static SharedPreferences preferences;
    public static void init(Context context){
        preferences=context.getSharedPreferences("login",Context.MODE_PRIVATE);
    }
    public static SharedPreferences getInstance(){
        return preferences;
    }
}
