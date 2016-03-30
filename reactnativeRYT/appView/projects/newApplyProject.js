/**
 * Created by Administrator on 2016/2/20.
 */
'use strict';
//发起新项目
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
import {Accbalance as Accbalance0,Acchint,Account} from './../deal/recharge';
import {Attinput as  Attinput0} from './attestation';
import {Txtinput as  Txtinput0,Video,icon} from './issuevideo';
import {Attuploading as Attuploading0} from './attestation';

export default class NewApplyProject extends Component {
    render() {
        return (
            <ScrollView>
                <Header  title={'艺术家认证'}  BackIcon={true} />
                {/*输入信息*/}
                <View>
                    <View style={[styles0.btmbor,styles0.ml12,styles0.mr12]}>
                        <Attinput0 Newobj={{title:'项目主标题',placeholder:'输入项目标题，10字以内。',length:10}}/>
                    </View>
                    <View style={[styles0.btmbor,styles0.ml12,styles0.mr12]}>
                        <Attinput0 Newobj={{title:'项目副标题',placeholder:'输入项目标题，30字以内。',length:30}}/>
                    </View>
                    <View style={[styles0.btmbor,styles0.ml12,styles0.mr12,styles0.vertical,{height:42}]}>
                       <Text style={[styles0.fz12,styles0.black]}>项目介绍</Text>
                    </View>
                    <View style={[styles0.btmbor,styles0.ml12,styles0.mr12,styles0.vertical,{height:90}]}>
                        <Txtinput0 Newobj={{length:70,color:'B9B9B9',txt:'输入项目介绍，70字以内。'}}/>
                    </View>
                    <View style={[styles0.btmbor,styles0.ml12,styles0.mr12]}>
                        <Attinput0 Newobj={{title:'目标金额',placeholder:'输入融资金额，不低于100元。',length:30}}/>
                    </View>
                    <View style={[styles0.btmbor,styles0.ml12,styles0.mr12]}>
                        <Attinput0 Newobj={{title:'创作时长',placeholder:'30天'}}/>
                        <Text style={[styles0.color6,styles0.fz10,{marginBottom:15}]}>创作这件作品大概花多久呢，默认为30天。</Text>
                    </View>
                </View>
                <View>
                    <View style={[{marginBottom:15,marginTop:15},styles0.ml12,styles0.mr12]}>
                        <Text style={[styles0.fz12,styles0.black]}>请上传项目的封面图</Text>
                    </View>
                    <View style={[styles0.row,styles0.pl12,styles0.pr12,{flexWrap:'wrap'}]}>
                        <Video Newobj={{pic:'http://pro.efeiyi.com/product/%E8%8C%B6%E9%A9%AC%E5%8F%A4%E9%81%93120160113174841.jpg@!product-details-picture'}} video={false}/>
                        <Attuploading0 />
                    </View>
                    <View  style={[styles0.pl12,styles0.pr12,{paddingBottom:15}]}>
                        <LayoutBlackBtn newObj={{text:'下一步'}}  />
                    </View>
                </View>
            </ScrollView>
        )
    }

}

export const styles=StyleSheet.create({

});
