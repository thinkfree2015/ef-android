/**
 * Created by Administrator on 2016/3/8.
 */
/**
 * Created by Administrator on 2016/2/20.
 */
'use strict';
import React, {
    AppRegistry,
    Component,
    StyleSheet,
    View,
    ListView,
    Image,
    Text,
    ScrollView,
    TouchableOpacity

} from 'react-native';

import {styles as styles0,ArrowRight,Header} from './../common/styles';

export const icon = [
    require('./../image/WeChat.png'),//微信
    require('./../image/alipay.png')//支付宝
];
//主页
export default class Recharge extends Component{
    render() {
        return (
            <View style={[styles0.flex]}>
                {/*头部*/}
                 <Header title={'充 值'}  BackIcon={true}/>
                {/*账户金额*/}
                <View style={[styles0.btmbor,styles0.topbor,{marginBottom:15,marginTop:15}]}>
                    <View style={[styles0.pl12,styles0.btmbor]}><Accbalance Newobj={{balance:'160.50',hit:43}} /></View>
                    <Account Newobj={{balance:'160.50',money:'60.50',title:'充值金额'}} acc={false}/>
                     <View style={[styles0.ml12,styles0.mr12,styles0.topbor]}><Acchint Newobj={{hint:'充 值 金 额 将 直 接 存 入 个 人 账 户 中'}}/></View>
                </View>
                {/*支付方式*/}
                    <Pay Newobj={{icon:icon[1],title:'支 付 宝 支 付',content:'推荐有支付宝账号的用户使用'}}/>
                    <Pay Newobj={{icon:icon[0],title:'微 信 支 付',content:'推荐安装微信5.0及以上的版本使用'}}/>
            </View>
        )
    }
}
//余额
export class Accbalance extends React.Component{
    render() {

        let obj = this.props.Newobj;
        return (
            <View style={[{height:obj.hit},styles0.center,styles0.row]}>
                {/*余额账户状态1*/}
                <View style={[styles0.flex]}>
                    <Text style={[styles0.fz12,styles0.black,styles0.left]}>当前账户余额</Text>
                </View>
                <View style={[styles0.pr12,styles0.flex,styles0.right]}>
                    <Text style={[styles0.fz12,styles0.color6]}>￥{obj.balance}</Text>
                </View>
            </View>
        )
    }
}
//账户
export class Account extends React.Component{
    render() {
        let obj = this.props.Newobj;
        return (
        <View>
        {/*充值余额*/}
            <View style={[styles.accmoney,styles0.center,styles0.row]}>
                <View style={[styles0.pl12]}>
                    <Text style={[styles0.left,styles0.fz12,styles.acctext,styles0.black]}>{obj.title}</Text>
                    <View style={[styles0.row]}>
                        <Text style={[styles.acctxt1,styles0.black]}>￥</Text>
                        <Text style={[styles.acctxt2,styles0.black]} >{obj.money}</Text>
                    </View>
                </View>
            </View>
        </View>
        )
    }

}
//提示
export class Acchint extends React.Component{
    render() {
        let obj = this.props.Newobj;
        return (
        <View style={[styles.acchint,styles0.center,styles0.row]}>
            {/*充值提示*/}
            <Text style={[styles0.fz12,styles0.color6]}>{obj.hint}</Text>
        </View>
        )
    }

}
//支付方式
export class Pay extends React.Component{
    render() {

        let obj = this.props.Newobj;
        return (
            <TouchableOpacity style={[styles.accpay,styles0.topbor,styles0.btmbor,styles0.pl12,styles0.pr12,styles0.center,styles0.row,{marginTop:-0.5}]}>
                <View><Image style={[styles.accpic]} source={obj.icon}/></View>
                <View style={[styles0.flex]}>
                    <Text style={[styles0.fz12,styles0.black,{marginBottom:3}]}>{obj.title}</Text>
                    <Text style={[styles0.fz9,styles0.color6]}>{obj.content}</Text>
                </View>
                <View><ArrowRight /></View>
            </TouchableOpacity>
        )
    }

}

export const styles=StyleSheet.create({
    //充值金额
    accmoney:{
        height:99
    },
    acctext:{
        marginBottom:10
    },
    acctxt1:{
        marginLeft:4,
        fontSize:20
    },
    acctxt2:{
        marginLeft:24,
        fontSize:35
    },
    acchint:{
        height:42
    },
    //支付
    accpay:{
        height:68
    },
    accpic:{
        width:35,
        height:35,
        marginLeft:7,
        marginRight:10
    }
});