/**
 * Created by jiuxuan on 2016/2/25.
 */
import React, {Component,StyleSheet,View,Image} from 'react-native';

//箭头-向左
export class ArrowLeft extends React.Component {
    render(){
        return (
            <View style={[styles.arrow,styles.aLeft]}></View>
        );
    }
}
//箭头-向右
export class ArrowRight extends React.Component {
    render(){
        return (
            <View style={[styles.arrow,styles.aRight]}></View>
        );
    }
}
//分享
export class ShareIcon extends React.Component {
    render(){
        return (
            <View>
                <Image style={styles.share} source={require('./../image/header/share_icon.png')} />
            </View>
        );
    }
}




//公共样式
export  const styles=StyleSheet.create({
    row:{flexDirection:'row'},
    flex:{flex:1},
    left:{alignSelf:'flex-start'},
    center:{alignItems:'center',justifyContent:'center'},
    vertical:{justifyContent:'center'},
    right:{alignItems:'flex-end'},
    fz10:{fontSize:10},
    fz11:{fontSize:11},
    fz12:{fontSize:12},
    fz14:{fontSize:14},
    fz16:{fontSize:16},
    fz18:{fontSize:18},
    black:{color:'#000'},
    gray:{color:'#808080'},
    color3:{color:'#333'},
    color6:{color:'#666'},
    white:{color:'#fff'},
    ml12:{
        marginLeft:12
    },
    mr12:{
        marginRight:12
    },
   pl12:{
        paddingLeft:12
    },
    pr12:{
        paddingRight:12
    },
    topbor:{
        borderTopWidth:0.5,
        borderColor:'#ccc',
    },
    btmbor:{
        borderBottomWidth:0.5,
        borderColor:'#ccc',
    },
    bor:{
        borderWidth:0.5,
        borderColor:'#ccc'
    },
    //箭头
    arrow:{
        borderLeftWidth:1,
        borderBottomWidth:1,
        width:10,
        height:10,
        borderColor:'#333',
    },
    //箭头-左
    aLeft:{
        transform: [{rotate: '45deg'}],
        marginTop:3,
        marginLeft:2,
    },
    //箭头-右
    aRight:{
        transform: [{rotate: '-135deg'}],
        marginTop:0,
        marginRight:2,
    },
    //分享
    share:{
        width:19,
        height:15,
    }
});