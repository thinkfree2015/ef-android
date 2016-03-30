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
    TouchableOpacity,
    Dimensions
} from 'react-native';
import {styles as styles0,Header} from './../common/styles';
import ScrollableTabView from 'react-native-scrollable-tab-view';
import {ArtistItems ,ArtistHead} from './../common/business';

//主页面
export default class Artisthub extends Component {
    render() {
        return (
        <ScrollView>
            {/*头部*/}
            <View style={[styles0.flex]}>
                <View style={[styles0.btmbor,styles0.topbor,styles0.row,styles0.pl12,styles0.pr12]}>
                    <TouchableOpacity style={[styles.huboption,styles0.center,styles0.vertical]}><Text style={[styles0.fz12,styles0.black]}>发起项目</Text></TouchableOpacity>
                    <View style={[styles.huboption,styles0.flex,styles0.center,styles0.vertical]}><Text style={[styles0.fz16,styles0.black]}>我&nbsp;的</Text></View>
                    <TouchableOpacity style={[styles.huboption,styles0.center,styles0.vertical]}><Text style={[styles0.fz12,styles0.black]}>设置</Text></TouchableOpacity>
                </View>
            {/*介绍*/}
                <View style={[styles0.btmbor,{paddingBottom:25}]}>
                    <ArtistHead
                        newObj={{
                                url:'http://pro.efeiyi.com/product/%E8%8C%B6%E9%A9%AC%E5%8F%A4%E9%81%93120160113174841.jpg@!product-details-picture',
                                name:'朱炳仁',
                                description:'他很懒，什么都没留下',
                                OneRowsOne1:'5000',
                                OneRowsTwo1:'1500'
                                }}
                        SexIcon={true}  //性别  true是男  false是女
                        OneRows={true}  //1行布局
                    />
                </View>
            {/*我发起和我参与*/}
                <ScrollableTabView tabBarUnderlineColor="#000" tabBarActiveTextColor ="#000" tabBarInactiveTextColor="#000"  _isCeshi={()=>this._isCeshi()}>
                    <Sponsor  tabLabel="我发起的"  />
                    <Iparticipation   tabLabel="我参与的"  />
                </ScrollableTabView>
            </View>
        </ScrollView>
        )
    }
}
//我参与的列表
class Iparticipation extends React.Component{
    render() {
        return (
            <View>
                <View  style={[styles0.pb12,styles0.btmbor,styles0.ml12,styles0.mr12]}>
                    <ArtistItems  newObj={{
                pic:'http://pro.efeiyi.com/product/%E8%8C%B6%E9%A9%AC%E5%8F%A4%E9%81%93120160113174841.jpg@!product-details-picture',
                title:'四不猴铜雕摆件',
                price:2000,
                status:'创作阶段',
                describe:'项目描述：四不猴铜雕摆件，富有东方哲学，寓意为“不听不应该听的，不看不应该看的，不说不应该说的，不做不应该做的”处世哲学。',
                }} />
                </View>
            </View>
        )
    }
}
//赞助者列表
class Sponsor extends React.Component{
    render() {
        return (
        <ScrollView>
            {/*列表*/}
            <View  style={[styles0.pb12,styles0.btmbor,styles0.ml12,styles0.mr12]}>
                <ArtistItems  newObj={{
                pic:'http://pro.efeiyi.com/product/%E8%8C%B6%E9%A9%AC%E5%8F%A4%E9%81%93120160113174841.jpg@!product-details-picture',
                title:'四不猴铜雕摆件',
                price:2000,
                status:'创作阶段',
                describe:'项目描述：四不猴铜雕摆件，富有东方哲学，寓意为“不听不应该听的，不看不应该看的，不说不应该说的，不做不应该做的”处世哲学。',
                }} />
                <View style={[styles.hubbtn,styles0.row,styles0.flex]}>
                    <Hubbtn name={'编辑项目'}/>
                    <View style={[styles0.flex]}></View>
                    <Hubbtn name={'提交项目'}/>
                </View>
            </View>
            {/*列表发布状态*/}
            <View  style={[styles0.pb12,styles0.btmbor,styles0.ml12,styles0.mr12]}>
                <ArtistItems  newObj={{
                pic:'http://pro.efeiyi.com/product/%E8%8C%B6%E9%A9%AC%E5%8F%A4%E9%81%93120160113174841.jpg@!product-details-picture',
                title:'四不猴铜雕摆件',
                price:2000,
                status:'创作阶段',
                describe:'项目描述：四不猴铜雕摆件，富有东方哲学，寓意为“不听不应该听的，不看不应该看的，不说不应该说的，不做不应该做的”处世哲学。',
                }} />
                <View style={[styles.hubbtn,styles0.row,styles0.flex]}>
                    <Hubbtn name={'创作完成'}/>
                    <View style={[styles0.flex]}></View>
                    <Hubbtn name={'发布状态'}/>
                </View>
            </View>
            {/*点击的发布状态*/}
            <View style={[styles0.flex,styles.issuecolor]}>
                <View style={[styles0.pl12,styles0.pr12,{backgroundColor:'#fff'}]}><Image style={{height:180}} source={{uri:'http://pro.efeiyi.com/product/%E8%8C%B6%E9%A9%AC%E5%8F%A4%E9%81%93120160113174841.jpg@!product-details-picture'}}/></View>
                <IssueBtn newObj={{content:'发布图片'}} />
                <IssueBtn newObj={{content:'发布视频'}} />
            </View>
        </ScrollView>

        )
    }
}
//上传按钮
export class IssueBtn extends React.Component{
    render(){
        let obj = this.props.newObj;
        return(
   <TouchableOpacity style={[styles.issuebtn,styles0.center,styles0.vertical]}><Text style={[styles0.fz12,styles0.black]}>{obj.content}</Text></TouchableOpacity>
        )
    }
}
//发起项目按钮
class Hubbtn extends React.Component{
    render() {
        return (
    <TouchableOpacity style={[styles.hubwd,styles0.center,styles0.vertical,styles0.btn]}><Text style={[styles0.fz12,styles0.center,styles0.white]}>{this.props.name}</Text></TouchableOpacity>
        )
    }
}
const styles=StyleSheet.create({
    //黑色按钮组件
    hubbtn:{
        marginTop:22,
        paddingLeft:5,
        paddingRight:5
    },
    hubwd:{
        width:125
    },
    huboption:{
        height:43
    },
    //上传组件
    issuecolor:{
        backgroundColor:'f0f0f0',
        marginTop:12,
        paddingBottom:10
    },
    issuebtn:{
        height:42,
        marginTop:10,
        backgroundColor:'#fff'
    },
    contentContainer: {
        paddingVertical: 1,
        marginVertical:1,
        flex:3,
        flexWrap:'wrap',
        flexDirection:'row',

    }
})
