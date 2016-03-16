/**
 * Created by Administrator on 2016/2/20.
 */
import React, {AppRegistry,Component,StyleSheet,View,ListView,Image,Text,ScrollView,TouchableOpacity} from 'react-native';
import {styles as styles0,Header} from './../common/styles';
//主页面
export default class PrivateLetter extends Component {
    render() {
        return (
            <View style={[styles0.flex]}>
                <Header
                    title={'私信'}
                    BackIcon={true}
                />
                <View style={[styles0.pr12,styles0.pl12,styles0.btmbor,styles.pri_top]}>
                    <PrivateS newobj={{
                        pic:'http://g.hiphotos.baidu.com/zhidao/pic/item/d0c8a786c9177f3e494045ea72cf3bc79e3d56e4.jpg',
                        name:'wangjl',
                        quantity:'10',
                        date:'2015-1-17 14:00'
                    }} />
                    <PrivateS newobj={{
                        pic:'http://g.hiphotos.baidu.com/zhidao/pic/item/d0c8a786c9177f3e494045ea72cf3bc79e3d56e4.jpg',
                        name:'wangjlwangjlwangjlwangjlwangjlwangjl',
                        quantity:'5',
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
                <TouchableOpacity  style={[styles0.topbor,styles.pri_list,styles0.center,styles0.row]}>
                        <Image style={[styles.pri_pic]} source={{uri:obj.pic}}/>
                        <View style={[styles.pri_txt]}>
                            <Text  numberOfLines={1} style={[styles0.fz12,styles0.black,styles.pri_height,styles.flex]}>{obj.name}</Text>
                            <Text style={[styles0.fz12,styles0.gray]}>{obj.date}</Text>
                        </View>
                        <View style={styles.pri_hint}>
                            <Text numberOfLines={1} style={[styles0.fz11,{color:'#f43531'}]}>{obj.quantity}封未读</Text>
                        </View>
                </TouchableOpacity>
            </ScrollView>
        );
    }
}
const styles=StyleSheet.create({
    pri_list:{
        height:65
    },
    pri_pic:{
        width:39,
        height:39,
        borderRadius:39
    },
    pri_txt:{
        paddingLeft:10
    },
    pri_height:{
        lineHeight:18,
        width:180
    },
    pri_hint:{
        position:'absolute',
        top:15,
        right:0
    },
    pri_top:{
        marginTop:-1
    }
});