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
import {styles as styles0,Header} from './../common/styles';
//主页面
export default class Notification extends Component {
    render() {
        return (
            <View style={[styles0.flex]}>
                <Header
                	title={'通知'}
                    BackIcon={true}
                />
                <View style={[styles0.pr12,styles0.pl12,styles0.btmbor,styles.cir_top]}>
                    <PrivateS newobj={{
                        pic:'http://img5.duitang.com/uploads/item/201512/21/20151221092455_3QMA2.png',
                        page:'您投资的项目大师发表了动态',
                        date:'2015-1-17 14:00'
                    }} />
                    <PrivateS newobj={{
                        pic:'http://g.hiphotos.baidu.com/zhidao/pic/item/d0c8a786c9177f3e494045ea72cf3bc79e3d56e4.jpg',
                        page:'哭泣的小猫咪关注了你',
                        date:'2015-1-17 14:00'
                    }} />
                </View>
            </View>
        )
    }
}
class PrivateS extends React.Component{
    render() {
        let obj = this.props.newobj;
        return (
            <ScrollView>
                <TouchableOpacity  style={[styles0.topbor,styles.cir_list,styles0.center,styles0.row]}>
                    <Image style={[styles.cir_pic]} source={{uri:obj.pic}}/>
                    <View style={[styles.cir_txt]}>
                        <Text  numberOfLines={1} style={[styles0.fz12,styles0.black,styles.cir_height,styles0.flex]}>{obj.page}</Text>
                        <Text style={[styles0.fz12,styles0.gray]}>{obj.date}</Text>
                    </View>
                </TouchableOpacity>
            </ScrollView>
        );
    }
}
const styles=StyleSheet.create({
    cir_list:{
        height:65
    },
    cir_pic:{
        width:39,
        height:39,
        borderRadius:39
    },
    cir_txt:{
        paddingLeft:10
    },
    cir_height:{
        lineHeight:18,
        width:200
    },
    cir_top:{
        marginTop:-1
    }
});