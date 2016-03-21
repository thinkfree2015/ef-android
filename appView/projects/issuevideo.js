/**
 * Created by Administrator on 2016/3/8.
 */
/**
 * Created by Administrator on 2016/2/20.
 */
'use strict';
//发布视频
import React, {
    AppRegistry,
    Component,
    StyleSheet,
    View,
    ListView,
    Image,
    Text,
    ScrollView,
    TouchableOpacity,
TextInput

} from 'react-native';

import {styles as styles0,ArrowRight,Header} from './../common/styles';
import {Accbalance as Accbalance0,Acchint,Account} from './../deal/recharge';
import {Attuploading as Attuploading0} from './../projects/attestation'

export const icon=[
    require('./../image/video.png')
]

export default class Issuevideo extends Component{
    render() {
        return (
            <View>
                <Header title={'发布视频'} BackIcon={true}/>
                <View  style={[styles.issinput,styles0.ml12,styles0.mr12]} >
                    <Txtinput Newobj={{color:'#B9B9B9',txt:'创作过程中有什么感想呢'}}/>
                </View>
                <View>
                    <View style={[{marginBottom:15},styles0.ml12,styles0.mr12]}>
                        <Text style={[styles0.fz12,styles0.black]}>请 添 加 您 需 要 的 视 频</Text>
                    </View>
                    <View style={[styles0.row,styles0.pl12,styles0.pr12,{flexWrap:'wrap'}]}>
                        <Video Newobj={{pic:'http://pro.efeiyi.com/product/%E8%8C%B6%E9%A9%AC%E5%8F%A4%E9%81%93120160113174841.jpg@!product-details-picture'}} video={true}/>
                        <Video Newobj={{pic:'http://pro.efeiyi.com/product/%E8%8C%B6%E9%A9%AC%E5%8F%A4%E9%81%93120160113174841.jpg@!product-details-picture'}} video={true}/>
                        <Video Newobj={{pic:'http://pro.efeiyi.com/product/%E8%8C%B6%E9%A9%AC%E5%8F%A4%E9%81%93120160113174841.jpg@!product-details-picture'}} video={true}/>
                        <Attuploading0 />
                    </View>
                </View>
            </View>

        )
    }

}

//视频图片
export class Video extends React.Component{
    render() {
        let obj = this.props.Newobj;
        //true显示video状态，false显示图片状态
        return (
            <TouchableOpacity style={[styles0.row,{marginRight:12,marginBottom:15}]}>
                {this.props.video? <View><Image style={{height:60,width:60}} source={{uri:obj.pic}} /><Image source={icon[0]} style={[styles.video]} ></Image></View>: <Image style={{height:60,width:60}}source={{uri:obj.pic}}/>}
            </TouchableOpacity>
        )
    }

}
//输入框
export class Txtinput extends React.Component{
    //
    render() {
        let obj = this.props.Newobj;
        //true显示video状态，false显示图片状态
        return (
            <TextInput
                style={[styles0.fz12,styles0.black,styles0.pl12,styles0.pr12]}
                validateOnBlur={true}
                maxLength={obj.length}
                placeholderTextColor={obj.color}
                placeholder={obj.txt}
                multiline={true}
                underlineColorAndroid='transparent'
            />
        )
    }

}
export const styles=StyleSheet.create({
    video:{
        position:'absolute',
        left:20,
        top:20,
        width:20,
        height:20
    },
    issinput:{
        borderWidth:0.5,
        borderColor:'#e2e2e2',
        height:75,
        marginTop:15,
        marginBottom:15
    }
});
