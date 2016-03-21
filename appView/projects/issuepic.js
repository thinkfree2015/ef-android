/**
 * Created by Administrator on 2016/3/8.
 */
'use strict';
//发布图片
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
import {Txtinput as Txtinput0,Video} from './../projects/issuevideo';
import {Attuploading as Attuploading0} from './../projects/attestation'

export const icon=[
    require('./../image/video.png')
]

export default class Issuepic extends Component{
    render() {
        return (
            <View>
                <Header title={'发布图片'} BackIcon={true}/>
                <View  style={[styles.issinput,styles0.ml12,styles0.mr12]} >
                    <Txtinput0 Newobj={{color:'#B9B9B9',txt:'创作过程中有什么感想呢'}}/>
                </View>
                <View>
                    <View style={[{marginBottom:15},styles0.ml12,styles0.mr12]}>
                        <Text style={[styles0.fz12,styles0.black]}>请 添 加 您 需 要 的 图 片</Text>
                    </View>
                    <View style={[styles0.row,styles0.pl12,styles0.pr12,{flexWrap:'wrap'}]}>
                        <Video Newobj={{pic:'http://pro.efeiyi.com/product/%E8%8C%B6%E9%A9%AC%E5%8F%A4%E9%81%93120160113174841.jpg@!product-details-picture'}} video={false}/>
                        <Video Newobj={{pic:'http://pro.efeiyi.com/product/%E8%8C%B6%E9%A9%AC%E5%8F%A4%E9%81%93120160113174841.jpg@!product-details-picture'}} video={false}/>
                        <Video Newobj={{pic:'http://pro.efeiyi.com/product/%E8%8C%B6%E9%A9%AC%E5%8F%A4%E9%81%93120160113174841.jpg@!product-details-picture'}} video={false}/>
                        <Attuploading0 />
                    </View>
                </View>
            </View>

        )
    }

}
export const styles=StyleSheet.create({
    issinput:{
        borderWidth:0.5,
        borderColor:'#e2e2e2',
        height:75,
        marginTop:15,
        marginBottom:15

    },
});
