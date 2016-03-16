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
//样式
import {styles as styles0,ArrowRight,Header} from './../common/styles';
import {Accbalance as Accbalance0,Acchint,Account} from './recharge';
import {icon as icon0} from './recharge'
//主页
export default class Withdraw extends Component{
    render() {
        return (
            <View>
                {/*头部*/}
                <Header title={'提现'} BackIcon={true}/>
                {/*账户金额*/}
                <View style={[styles0.btmbor,styles0.ml12,styles0.mr12]}><Accbalance0 Newobj={{balance:'605.50',hit:52}} /></View>
                <Account Newobj={{title:'当前可提现金额',money:'600.00'}}   />
                {/*客服信息*/}
                <Service Newobj={{icon:icon0[0],title:'微信客服',name:'RongYiTou',content:'暂仅支持微信人工提现，服务时间：工作日10：00-17：00'}} />
            </View>
        )
    }
}
export class Service extends React.Component {
    render() {
        let obj = this.props.Newobj;
        return (
             <View>
                <View style={[{height:66},styles0.topbor,styles0.btmbor,styles0.pl12,styles0.pr12,styles0.center,styles0.row,{marginTop:-0.5}]}>
                    <View><Image style={[styles.accpic]} source={obj.icon}/></View>
                    <View style={[styles0.flex]}><Text style={[styles0.fz12,styles0.black]}>{obj.title}</Text></View>
                    <View><Text style={[styles0.fz12,styles0.black]}>{obj.name}</Text></View>
                </View>
                <View style={[styles0.pl12,styles0.pr12,{marginTop:9}]}><Text style={[styles0.fz10,styles0.color6]}>{obj.content}</Text></View>
             </View>
        )
    }

}
export const styles=StyleSheet.create({
    accpic:{
        width:35,
        height:35,
        marginLeft:7,
        marginRight:10
    }
});