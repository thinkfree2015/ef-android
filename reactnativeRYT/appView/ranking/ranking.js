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

import ScrollableTabView from 'react-native-scrollable-tab-view';
import {styles as styles0,Header} from './../common/styles';
//主页
export default class RankingList extends Component {
    render() {
        return (
            <View style={[styles0.flex]}>
                <Header 
                	title={'排行'} 
                />
                <ScrollableTabView tabBarUnderlineColor="#000" tabBarActiveTextColor ="#000" tabBarInactiveTextColor="#000">
                    <Invest tabLabel="投资者排行"/>
                    <Art tabLabel="艺术家排行" />
                </ScrollableTabView>
            </View>
        )
    }
}

//投资者排行
class Invest extends React.Component{
    render() {
        return (
            <ScrollView>
                <View style={[styles0.btmbor,styles0.flex]}>
                    <ItemsTitle newObj={{
                           ranking:'排名',
                            user:'用户昵称',
                            sum:'',
                            bargain:'回报总金额',
                            flx:0,
                            flx_r:2
                    }}/>

                    <Items newObj={{
                        pic:'http://g.hiphotos.baidu.com/zhidao/pic/item/d0c8a786c9177f3e494045ea72cf3bc79e3d56e4.jpg',
                        number:1,
                        name:'名字名字名字名字名字名字',
                        total:'',
                        bargain:200000000,
                        flx:0,
                        flx_r:2
                    }}/>
                </View>
            </ScrollView>
        );
    }
}
//艺术家排行组件
class Art extends React.Component{
    render() {
        return (
            <ScrollView>
                <View style={[styles0.btmbor,styles0.flex]}>
                    <ItemsTitle newObj={{
                           ranking:'排名',
                            user:'艺术家',
                            sum:'项目总金额',
                            bargain:'总成交价',
                            flx:1,
                            flx_r:1
                    }}/>
                    <Items newObj={{
                        pic:'http://g.hiphotos.baidu.com/zhidao/pic/item/d0c8a786c9177f3e494045ea72cf3bc79e3d56e4.jpg',
                        number:1,
                        name:'名字名字名字名字名字名字',
                        total:100,
                        bargain:200,
                          flx:1,
                          flx_r:1
                    }}/>
                    <Items newObj={{
                        pic:'http://g.hiphotos.baidu.com/zhidao/pic/item/d0c8a786c9177f3e494045ea72cf3bc79e3d56e4.jpg',
                        number:1,
                        name:'名字名字名字名字名字名字',
                        total:100000000,
                        bargain:200000,
                        flx:1,
                        flx_r:1
                    }}/>
                </View>
            </ScrollView>
        );
    }
}
//
class ItemsTitle extends React.Component{
    render(){
        let obj=this.props.newObj;
        return(
            <View style={[styles0.ml12,styles0.mr12,styles0.row,styles0.topbor,styles.rank_box]}>
                    <View style={[styles0.center,styles0.vertical,styles.rank_fixation,styles.rank_th]}>
                        <Text style={[styles0.fz11,styles0.gray]}>{obj.ranking}</Text>
                    </View>
                    <View style={[styles0.center,styles0.vertical,styles0.flex,styles.rank_th]}>
                        <Text style={[styles0.fz11,styles0.gray]}>{obj.user}</Text>
                    </View>
                    <View style={[styles0.center,styles0.vertical,{flex:obj.flx},styles.rank_th]}>
                        <Text style={[styles0.fz11,styles0.gray]}>{obj.sum}</Text>
                    </View>
                    <View style={[styles0.center,styles0.vertical,{flex:obj.flx_r},styles.rank_th]}>
                        <Text style={[styles0.fz11,styles0.gray]}>{obj.bargain}</Text>
                    </View>
                </View>
        )
    }
}
class Items extends React.Component{
    render(){
        let obj=this.props.newObj;
        return(
                <View style={[styles0.ml12,styles0.mr12,styles0.row,styles0.topbor,styles.rank_box]}>
                    <View style={[styles0.center,styles0.vertical,styles.rank_fixation]}>
                        <Text numberOfLines={1} style={[styles0.fz12,styles0.black]}>{obj.number}</Text>
                    </View>
                    <View style={[styles0.center,styles0.vertical,styles0.flex,styles.rank_td,styles0.row,]}>
                        <Image style={[styles.rank_pic]} source={{uri:obj.pic}}/>
                        <View style={[styles0.flex]}><Text numberOfLines={1} style={[styles0.fz11,styles0.black,styles0.vertical,styles0.flex]}>{obj.name}</Text></View>
                    </View>
                    <View style={[styles0.center,styles0.vertical,{flex:obj.flx},styles.rank_td]}>
                        <Text numberOfLines={1} style={[styles0.fz12,styles0.black]}>{obj.total}</Text>
                    </View>
                    <View style={[styles0.center,styles0.vertical,{flex:obj.flx_r},styles.rank_td]}>
                        <Text numberOfLines={1}  style={[styles0.fz12,styles0.black]}>{obj.bargain}</Text>
                    </View>
                </View>
        )
    }
}
//主页组件样式
const styles=StyleSheet.create({
    rank_box:{
         paddingLeft:72
    },
    rank_th:{
        height:35,
        marginTop:-1
    },
    rank_td:{
        height:50,
        marginTop:-1
    },
    rank_pic:{
        width:24,
        height:24,
        borderRadius:24,
        marginRight:8
    },
    rank_fixation:{
        position:'absolute',
        left:0,
        top:0,
        width:74,
        height:50
    }
});