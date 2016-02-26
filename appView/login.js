/**
 * Created by qiuxi on 2016/2/25.
 */
import React, {
    Component,
    StyleSheet,
    View,
    Image,
    Text,
    TextInput,
    TouchableOpacity
} from 'react-native';
import {styles as styles0} from './common/styles';
import Header from './common/header';
import {LoginInput,LoginButton} from './common/nobusiness';


//主页
export default class Login extends Component {
    render() {
        return (
            <View style={styles.login}>
                <Header initObj={{title:'登录'}} />
                <LoginInput newObj={{placeholder:'请输入手机号/e飞蚁账号'}}/>
                <LoginInput newObj={{placeholder:'请输入密码'}}/>
                <LoginButton newObj={{text:'登     录'}}/>

                <View style={[styles0.flex,styles.login_p]}>
                    <View style={[styles0.row,styles0.center,styles0.flex,styles.login_pTxt]}>
                        <View style={[styles0.flex,styles0.topbor,styles.login_pLine]}></View>
                        <View style={[styles0.flex,styles0.center]}><Text style={[styles.fz11,styles.gray]}>快速登录</Text></View>
                        <View style={[styles0.flex,styles0.topbor,styles.login_pLine]}></View>
                    </View>
                    <View style={[styles0.row,styles0.center]}>
                        <TouchableOpacity>
                            <Image style={[styles0.ml12,styles0.mr12,styles.login_pLogo]} source={require('./image/login/logo_weixin.png')} />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Image style={[styles0.ml12,styles0.mr12,styles.login_pLogo]} source={require('./image/login/logo_sina.png')} />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Image style={[styles0.ml12,styles0.mr12,styles.login_pLogo]} source={require('./image/login/logo_qq.png')} />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        )
    }
}

const styles=StyleSheet.create({
    login_p:{
        marginLeft:22,
        marginRight:22,
    },
    login_pTxt:{
        marginTop:25,
        marginBottom:12,
    },
    login_pLine:{
        height:1,
        borderColor:'#e4e4e4',
    },
    login_pLogo:{
        width:35,
        height:35,
        resizeMode:'contain',
    }
});