package com.yxh.ryt.util;

import com.lidroid.xutils.db.sqlite.DbModelSelector;

import java.util.regex.Matcher;
import java.util.regex.Pattern;

/**
 * Created by dev on 2015/12/25.
 */
public class PasswordVerify {
    public static boolean pwVerify(String password){
        //不是字母或者数字
        boolean isNoLorD=true;
        if (password.length()>=6 && password.length()<=16){
            for (int i=0;i <password.length();i++){
                char ch=password.charAt(i);
                if(('a' <= ch && ch <= 'z') || ('A' <= ch && ch <= 'Z')|| ('0' <= ch && ch <= '9' )){
                    isNoLorD=true;
                }else {
                    isNoLorD=false;
                    break;
                }
            }
        }else {
            isNoLorD=false;
        }
        return isNoLorD;
    }

}
