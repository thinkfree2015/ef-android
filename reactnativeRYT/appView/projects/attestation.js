/**
 * Created by Administrator on 2016/2/20.
 */
'use strict';
//艺术家认证
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
    Dimensions,
    TextInput
} from 'react-native';
import {styles as styles0,Header,LayoutBlackBtn} from './../common/styles';
export const icon=[
    require('./../image/uploading.png')
]
export default class Attestation extends Component {
    show(){

    }
    render() {
        return (
            <ScrollView>
                <Header  title={'艺术家认证'} BackIcon={true} />
                {/*输入信息*/}
                <View>
                    <View style={[styles0.btmbor,styles0.ml12,styles0.mr12]}>
                        <Attinput Newobj={{title:'真实姓名',placeholder:'请输入姓名'}}/>
                    </View>
                    <View style={[styles0.btmbor,styles0.ml12,styles0.mr12]}>
                        <Attinput Newobj={{title:'手机号码',placeholder:'请输入手机号码',keyboard:'numeric'}}/>
                    </View>
                    <View style={[styles0.btmbor,styles0.ml12,styles0.mr12]}>
                        <Attinput Newobj={{title:'所在地区',placeholder:'请选择所在地区'}}/>
                    </View>
                    <View style={[styles0.btmbor,styles0.ml12,styles0.mr12]}>
                        <Attinput Newobj={{title:'艺术类别',placeholder:'请输入艺术类别'}}/>
                    </View>
                </View>
                {/*上传信息*/}
                <View style={[styles0.pl12,styles0.pr12,styles0.btmbor,{paddingBottom:25,marginBottom:25}]}>
                    <View>
                        <Text style={[styles0.fz12,styles0.black,styles.attmg]}>请上传您最满意的三张作品照片</Text>
                    </View>
                    {/*上传图片*/}
                    <View>
                        <Image    style={{height:200,marginBottom:15}} source={{uri:'http://pro.efeiyi.com/product/%E8%8C%B6%E9%A9%AC%E5%8F%A4%E9%81%93120160113174841.jpg@!product-details-picture'}} />
                    </View>
                    {/*上传按钮*/}
                    <View style={[styles0.row]}>
                        <Attuploading />
                        <Attuploading />
                        <Attuploading />
                    </View>
                </View>
                <View style={[styles0.pl12,styles0.pr12,]}>
                    <LayoutBlackBtn  newObj={{text:'确 认 提 交'}}   />
                    {/*融艺投艺术家协议跳转*/}
                    <View style={[styles0.row,styles0.center,styles0.vertical,{height:30}]}><Text style={[styles0.fz12,styles0.color6]}>点 击 确 认 提 交 即 表 示 同 意</Text><TouchableOpacity><Text style={[styles0.fz12,{color:'#5389b3'}]}> 融 艺 投 艺 术 家 协 议</Text></TouchableOpacity></View>
                </View>
            </ScrollView>
        )
    }

}
//一个输入框
export class Attinput extends React.Component{
    render() {
        let obj = this.props.Newobj;
        return (
            <View style={[styles0.vertical]}>
                <View style={[styles.atttitle,styles0.flex]}><Text style={[styles0.fz12,styles0.vertical,styles0.black]}>{obj.title}</Text></View>
                <View style={[styles0.flex,styles.attinput]}>
                    <TextInput
                        placeholderTextColor="#999"
                        multiline={true}
                        placeholder={obj.placeholder}
                        value={obj.value}
                        underlineColorAndroid="transparent"
                        keyboardType={obj.keyboard}
                        onChangeText={obj.onChangeText}
                        maxLength={obj.length}
                        style={[styles0.fz12,styles0.flex,styles0.pl12,styles0.pr12,styles.atttxt]}
                    />
                </View>
            </View>
        )
    }

}
//一个按钮
export class Attuploading extends React.Component{
    render() {
        return (
            <TouchableOpacity>
                <Image  style={[styles.Attbox]} source={icon[0]}/>
            </TouchableOpacity>
        )
    }

}
export const styles=StyleSheet.create({
    attinput:{
        height:43,
        borderWidth:0,
        paddingLeft:73,
    },
    atttitle:{
        position:'absolute',
        height:43,
        width:73,
        left:0,
        top:12
    },
    atttxt:{
        height:43
    },
    Attbox:{
        width:60,
        height:60,
        marginRight:15
    },
    attmg:{
        marginTop:25,
        marginBottom:18
    }


})