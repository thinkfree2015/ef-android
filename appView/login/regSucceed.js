/**
 * Created by qiuxi on 2016/2/25.
 */
import React, {Component,StyleSheet,View,Text,Image,TextInput,TouchableOpacity} from 'react-native';
import {styles as styles0,Header,ArrowRight,sizeWidth,sizeHeight} from './../common/styles';
import {LoginInput,LoginButton,Authcode} from './../common/nobusiness';
import Modal from 'react-native-root-modal';
import { putJson, getJson,getJsonStr} from '../util/jsonUtil';
import {hex_sha1} from '../util/sha1';
import store from './../redux/store';
import { fetchPosts } from './../redux/actions/loginAction'

//注册成功后的组件
export default class regSucceedView extends Component {
    constructor() {
        super(...arguments);
        this.state = {
            visible: false,
            sex:2,

        };
    }

    showModal = () => {
        this.setState({
            visible: true
        });
    };

    hideModal1 = () => {
        this.setState({
            visible: false,
            sex:1,
            nickName:"",
        });
    };
    hideModal2 = () => {
        this.setState({
            visible: false,
            sex:2,
        });
    };
    modifyHead(){

    }
    complete(){

    }
    render() {
        return (
            <View style={styles.login}>
                <Header
                    title={'基本资料'}
                    complete={true}
                    completePress={this.complete.bind(this)}/>
                <View style={[styles0.center,styles0.pt12,styles0.pb12,styles0.topbor,styles0.btmbor,styles0.mt9,styles.l_head]}>
                    <TouchableOpacity style={[styles0.vertical,styles0.center,styles.l_head_btn]} onPress={this.modifyHead.bind(this)}>
                        <Image style={styles.l_head_img} source={{uri:'http://pro.efeiyi.com/product/%E8%8C%B6%E9%A9%AC%E5%8F%A4%E9%81%93120160113174841.jpg@!product-details-picture'}} />
                        <Text style={[styles0.fz10,styles0.white,styles.l_head_txt]}>添加头像</Text>
                    </TouchableOpacity>
                </View>

                <TouchableOpacity style={[styles0.topbor,styles0.btmbor,styles0.pl12,styles0.pr12,styles0.row,styles0.center,styles0.mt9,styles.xx_items]} >
                    <View style={styles0.vertical}>
                        <Text style={[styles0.black,styles0.fz12,styles.xx_text]}>昵称</Text>
                    </View>
                    <View style={styles.xx_ipt}>
                        <TextInput underlineColorAndroid='transparent' maxLength={8} style={[styles0.flex,styles0.fz12,styles0.gray,{textAlign:"right",width:500}]}
                                   onChangeText ={(text) => this.setState({nickName: text})}/>
                    </View>
                    <View style={[styles0.right,styles0.flex]}>
                        <View style={[styles0.arrow,styles.arrow]}></View>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity style={[styles0.topbor,styles0.btmbor,styles0.pl12,styles0.pr12,styles0.row,styles0.center,styles0.mt9,styles.xx_items]} onPress={this.showModal}>
                    <View style={styles0.vertical}>
                        <Text style={[styles0.black,styles0.fz12,styles.xx_text]}>性别</Text>
                    </View>
                    <View style={[styles0.vertical,styles.xx_ipt]}>
                        <Text style={[styles0.fz12,styles0.gray,{textAlign:"right"}]}>{this.state.sex==2?'女':'男'}</Text>
                    </View>
                    <View style={[styles0.right,styles0.flex]}>
                        <View style={[styles0.arrow,styles.arrow]}></View>
                    </View>
                </TouchableOpacity>
                <Modal
                    visible={this.state.visible}
                >
                    <View style={[styles0.alert,{width:sizeWidth,height:sizeHeight}]}>
                        <View style={[styles.popup_box,{width:sizeWidth-24}]}>
                            <TouchableOpacity style={[styles0.vertical,styles0.center,styles0.btmbor,styles.modbtn,{height:45,flex:1}]}onPress={this.hideModal1}>
                                <Text style={[styles0.fz12,styles0.black]}>男</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={[styles0.vertical,styles0.center,{height:45,flex:1}]}onPress={this.hideModal2}>
                                <Text style={[styles0.fz12,styles0.black]}>女</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </Modal>


            </View>
        )
    }
}





const styles=StyleSheet.create({
    l_head_btn:{
        width:53,
        height:53,
    },
    l_head_img:{
        width:53,
        height:53,
        borderRadius:50
    },
    l_head_txt:{
        position:'absolute',
        top:20,
        left:7
    },
    //通栏按钮(白色背景、上下边框、右侧箭头)
    xx_items:{
        borderColor:'#e2e2e2',
        height:42
    },
    xx_text:{
        marginLeft:7
    },
    xx_ipt:{
        width:100,
        height:39,
        position:'absolute',
        top:0,
        right:26,
        alignItems:'flex-end'
    },
    arrow:{
        transform: [{rotate: '-135deg'}],
        borderColor:'#d0d0d0'
    },
    //性别弹出框
    popup_box:{
        position:'absolute',
        bottom:40,
        left:12,
        borderRadius:10,
        backgroundColor:'#fff'
    }


});