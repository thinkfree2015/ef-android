/**
 * Created by chenqiuxi on 16/1/28.
 * 融资列表
 */

import React, {
    Component,
    StyleSheet,
    Image,
    Text,
    View,
    ScrollView,
    TouchableOpacity
} from 'react-native';




export default class HomeFinancingList extends Component {

    render() {
        return (
            <ScrollView style={styles.flex}>
                <TouchableOpacity style={styles.list}>
                    <View style={styles.mainImg}>
                        <Image style={styles.img} source={{uri:'http://pro.efeiyi.com/product/%E8%8C%B6%E9%A9%AC%E5%8F%A4%E9%81%93120160113174841.jpg@!product-details-picture'}} />
                        <View style={styles.mainView}>
                            <Text style={styles.mainTitle}>逐鹿顺意铜雕</Text>
                            <Text style={styles.mainDes} numberOfLines={2}>大师手作独品，倾心定制,独一无二,灵感再现倾心定制,独一无二</Text>
                        </View>
                    </View>
                    <View style={styles.info}>
                        <View style={[styles.row,styles.infoRow]}>
                            <Image style={styles.infoRowImg} source={require('./../upload/userImg.png')} />
                            <Text style={[styles.fz11,styles.black]}>朱炳仁</Text>
                            <View style={styles.line}></View>
                            <Text style={[styles.flex,styles.fz11,styles.black]} numberOfLines={1}>铜雕技艺国家级传承人</Text>
                        </View>
                    </View>
                    <View style={[styles.row,styles.progress]}>
                        <Image style={{height:11,flex: 1}} source={require('./../image/progress_bar.png')} />
                        <View style={styles.proText}><Text style={[styles.fz12,styles.black]}>90%</Text></View>
                    </View>
                    <View style={[styles.arguments,styles.row]}>
                        <View style={[styles.flex,styles.left]}>
                            <Text style={[styles.fz12,styles.black]}>3000元</Text>
                            <Text style={[styles.fz12,styles.gray]}>目标金额</Text>
                        </View>
                        <View style={[styles.flex,styles.center]}>
                            <Text style={[styles.fz12,styles.black]}>24时24分24秒</Text>
                            <Text style={[styles.fz12,styles.gray]}>剩余时间</Text>
                        </View>
                        <View style={[styles.flex,styles.right]}>
                            <Text style={[styles.fz12,styles.black]}>10000</Text>
                            <Text style={[styles.fz12,styles.gray]}>投资人数</Text>
                        </View>
                    </View>
                </TouchableOpacity>
            </ScrollView>
        )
    }

}


const styles=StyleSheet.create({
    row:{
      flexDirection:'row'
    },
    flex:{
        flex:1,
    },
    left:{
      alignSelf:'flex-start'
    },
    center:{
        alignItems:'center',
    },
    right:{
        alignItems:'flex-end'
    },
    fz11:{
        fontSize:11
    },
    fz12:{
        fontSize:12
    },
    black:{
      color:'#000'
    },
    gray:{
      color:'#666'
    },
    list:{
        borderBottomWidth:0.5,
        borderColor:'#ccc',
        marginTop:8,
        paddingBottom:13,
    },
    img:{
        height:215,
    },
    mainView:{
        marginLeft:17,
        marginRight:17
    },
    mainTitle:{
        fontSize:18,
        color:'#fff',
        position:'absolute',
        bottom:68,
        left:0
    },
    mainDes:{
        width:200,
        lineHeight:18,
        fontSize:9,
        color:'#fff',
        position:'absolute',
        bottom:23,
        left:0,
    },


    info:{
        borderBottomWidth:0.5,
        borderColor:'#ccc',
        marginLeft:12,
        marginRight:12,
        borderBottomWidth:0.5,
        borderColor:'#e4e4e4',
    },
    infoRow:{
        height:27,
        alignItems:'center',
        marginTop:13,
        marginBottom:13,
    },
    infoRowImg:{
        width:27,
        height:27,
        marginRight:8,
        borderRadius:100,
    },
    line:{
        width:1,
        height:8,
        backgroundColor:'#000',
        marginTop:2,
        marginLeft:10,
        marginRight:10,
    },
    progress:{
        height:11,
        marginTop:13,
        marginLeft:12,
        marginRight:12,
        marginBottom:13,
        flex:1,
        alignItems:'center'
    },
    proText:{
        width:36,
        justifyContent:'center',
        alignItems:'center'
    },
    arguments:{
        marginLeft:10,
        marginRight:10
    }




})