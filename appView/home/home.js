/**
 * Created by qiuxi on 2016/2/1.
 */
import React, {
    Component,
    StyleSheet,
    Image,
    View,
    Text,
    TouchableOpacity,
} from 'react-native';
import ScrollableTabView from 'react-native-scrollable-tab-view';
import Util from './../common/util';


//产品图片组件
export class ImgModule extends  React.Component{
    render(){
        let obj=this.props.newObj;
        return(
            <View style={styles_img.box}>
                <Image style={styles_img.boxImg} source={{uri:obj.url}}/>
                <View style={styles_img.boxCon}>
                    <Text style={styles_img.boxConTitle}>{obj.title}</Text>
                    <Text style={styles_img.boxConDes} numberOfLines={2}>{obj.description}</Text>
                </View>
            </View>
        )
    }
}
const styles_img=StyleSheet.create({
    boxImg:{
        height:215*Util.pixel,
    },
    boxCon:{
        marginLeft:17*Util.pixel,
        marginRight:17*Util.pixel
    },
    boxConTitle:{
        fontSize:16*Util.pixel,
        color:'#fff',
        position:'absolute',
        bottom:68*Util.pixel,
        left:0
    },
    boxConDes:{
        width:200*Util.pixel,
        lineHeight:18*Util.pixel,
        fontSize:9*Util.pixel,
        color:'#fff',
        position:'absolute',
        bottom:23*Util.pixel,
        left:0,
    }
})

//大师头像+名称
export class HeadMaster extends  React.Component{
    render(){
        let obj=this.props.newObj;
        return(
            <View style={styles_hm.info}>
                <View style={[styles.row,styles_hm.infoRow]}>
                    <Image style={styles_hm.infoRowImg} source={{uri:obj.url}} />
                    <Text style={[styles.fz11,styles.black]}>{obj.name}</Text>
                    <View style={styles_hm.line}></View>
                    <Text style={[styles.flex,styles.fz11,styles.black]} numberOfLines={1}>{obj.description}</Text>
                </View>
            </View>
        )
    }
}
const styles_hm=StyleSheet.create({
    info:{
        height:54*Util.pixel,
        marginLeft:12*Util.pixel,
        marginRight:12*Util.pixel,
    },
    infoRow:{
        height:27*Util.pixel,
        alignItems:'center',
        marginTop:13*Util.pixel,
        marginBottom:13*Util.pixel,
    },
    infoRowImg:{
        width:27*Util.pixel,
        height:27*Util.pixel,
        marginRight:8*Util.pixel,
        borderRadius:100*Util.pixel,
    },
    line:{
        width:1*Util.pixel,
        height:8*Util.pixel,
        backgroundColor:'#000',
        marginTop:2*Util.pixel,
        marginLeft:10*Util.pixel,
        marginRight:10*Util.pixel,
    },
})

//融资
export class FinancingList extends React.Component {
    render() {
        return (
            <View style={styles.flex}>
                <TouchableOpacity style={styles_rz.list}>
                    <ImgModule newObj={{
                        title:'项目详情',
                        description:'大师手作独品，倾心定制,独一无二,灵感再现倾心定制,独一无二',
                        url:'http://pro.efeiyi.com/product/%E8%8C%B6%E9%A9%AC%E5%8F%A4%E9%81%93120160113174841.jpg@!product-details-picture'
                    }}/>
                    <HeadMaster newObj={{
                        name:'朱炳仁',
                        description:'铜雕技艺国家级传承人',
                        url:'http://pro.efeiyi.com/product/%E8%8C%B6%E9%A9%AC%E5%8F%A4%E9%81%93120160113174841.jpg@!product-details-picture'
                    }} />


                    <View>
                        <View style={[styles.row,styles_rz.progress]}>
                            <View style={[styles.flex,styles.row,styles_rz.progressBg]}>
                                <View style={[styles_rz.progressBgLine,{width:200}]}></View>
                                <View style={styles_rz.progressBgIcon}></View>
                            </View>
                            <View style={styles_rz.progressText}><Text style={[styles.fz11,styles.black]}>90%</Text></View>
                        </View>

                        <View style={[styles_rz.arguments,styles.row]}>
                            <View style={[styles.flex,styles.left]}>
                                <Text style={[styles.fz12,styles.black]}>3000元</Text>
                                <Text style={[styles.fz11,styles.gray]}>目标金额</Text>
                            </View>
                            <View style={[styles.flex,styles.center]}>
                                <Text style={[styles.fz12,styles.black]}>24时24分24秒</Text>
                                <Text style={[styles.fz11,styles.gray]}>剩余时间</Text>
                            </View>
                            <View style={[styles.flex,styles.right]}>
                                <Text style={[styles.fz12,styles.black]}>10000</Text>
                                <Text style={[styles.fz11,styles.gray]}>投资人数</Text>
                            </View>
                        </View>
                    </View>

                </TouchableOpacity>
            </View>
        )
    }

    _renderRow(){

    }


}
//创作
export class MakeList extends React.Component {
    render() {
        return (
            <View style={styles_cz.czView}>
                <ImgModule newObj={{
                        title:'项目详情',
                        description:'大师手作独品，倾心定制,独一无二,灵感再现倾心定制,独一无二',
                        url:'http://pro.efeiyi.com/product/%E8%8C%B6%E9%A9%AC%E5%8F%A4%E9%81%93120160113174841.jpg@!product-details-picture'
                    }}/>
                <HeadMaster newObj={{
                        name:'朱炳仁',
                        description:'铜雕技艺国家级传承人',
                        url:'http://pro.efeiyi.com/product/%E8%8C%B6%E9%A9%AC%E5%8F%A4%E9%81%93120160113174841.jpg@!product-details-picture'
                    }} />
                <View style={styles_cz.czViewTime}>
                    <View style={styles_cz.row23}>
                        <Text style={[styles.fz12,styles.black]} numberOfLines={1}>最新一次更新： 5分钟前</Text>
                    </View>
                    <View style={styles_cz.row23}>
                        <Text style={[styles.fz12,styles.black,styles_cz.row23]} numberOfLines={1}>预计完工：1月24日</Text>
                    </View>
                </View>
            </View>
        )
    }
}
//拍卖
export class AuctionList extends React.Component {
    render() {
        return (
            <View style={styles_pm.pmView}>
                <ImgModule newObj={{
                        title:'项目详情',
                        description:'大师手作独品，倾心定制,独一无二,灵感再现倾心定制,独一无二',
                        url:'http://pro.efeiyi.com/product/%E8%8C%B6%E9%A9%AC%E5%8F%A4%E9%81%93120160113174841.jpg@!product-details-picture'
                    }}/>
                <HeadMaster newObj={{
                    name:'朱炳仁',
                        description:'铜雕技艺国家级传承人',
                        url:'http://pro.efeiyi.com/product/%E8%8C%B6%E9%A9%AC%E5%8F%A4%E9%81%93120160113174841.jpg@!product-details-picture'
                }} />

                <View style={styles_pm.pmViewTime}>
                    <Text style={[styles.fz12,styles.black]}>拍卖时间：3月10日 9:00——15:00</Text>
                </View>

            </View>
        )
    }
}
//抽奖
export class AwardList extends React.Component {
    render() {
        return (
            <View style={styles_cz.czView}>
                <ImgModule newObj={{
                        title:'项目详情',
                        description:'大师手作独品，倾心定制,独一无二,灵感再现倾心定制,独一无二',
                        url:'http://pro.efeiyi.com/product/%E8%8C%B6%E9%A9%AC%E5%8F%A4%E9%81%93120160113174841.jpg@!product-details-picture'
                    }}/>
                <HeadMaster newObj={{
                        name:'朱炳仁',
                        description:'铜雕技艺国家级传承人',
                        url:'http://pro.efeiyi.com/product/%E8%8C%B6%E9%A9%AC%E5%8F%A4%E9%81%93120160113174841.jpg@!product-details-picture'
                    }} />
                <View style={styles_cz.czViewTime}>
                    <View style={styles_cz.row23}>
                        <Text style={[styles.fz12,styles.black]}>
                            <Text>开奖倒计时：</Text>
                            <Text style={styles.fz18}>24</Text>
                            <Text style={[styles.fz10,styles.gray]}>  小时  </Text>
                            <Text style={styles.fz18}>00</Text>
                            <Text style={[styles.fz10,styles.gray]}>  分  </Text>
                            <Text style={styles.fz18}>00</Text>
                            <Text style={[styles.fz10,styles.gray]}>  秒  </Text>
                        </Text>
                    </View>
                    <View style={styles_cz.row23}>
                        <Text style={[styles.fz12,styles.black,styles_cz.row23]} numberOfLines={1}>预计完工：1月24日</Text>
                    </View>
                </View>
            </View>
        )
    }
}

//页面
export default class Home extends Component {
    render() {
        return (
            <ScrollableTabView tabBarUnderlineColor="000" tabBarActiveTextColor ="#000" tabBarInactiveTextColor="#000">
                <FinancingList tabLabel="融资"/>
                <MakeList tabLabel="创作" />
                <AuctionList tabLabel="拍卖" />
                <AwardList tabLabel="抽奖" />
            </ScrollableTabView>
        )
    }
}


//----------> common ------------
const styles=StyleSheet.create({
    row:{flexDirection:'row'},
    flex:{flex:1},
    left:{alignSelf:'flex-start'},
    center:{alignItems:'center'},
    right:{alignItems:'flex-end'},
    fz10:{fontSize:10*Util.pixel},
    fz11:{fontSize:11*Util.pixel},
    fz12:{fontSize:12*Util.pixel},
    fz18:{fontSize:18*Util.pixel},
    black:{color:'#000'},
    gray:{color:'#666'}
})
//----------> 融资 ------------
const styles_rz=StyleSheet.create({
    list:{
        borderBottomWidth:1*Util.pixel,
        borderColor:'#ccc',
        marginTop:8*Util.pixel,
        paddingBottom:13*Util.pixel,
    },
    progress:{
        paddingLeft:12*Util.pixel,
        paddingRight:12*Util.pixel,
        height:10*Util.pixel,
    },
    progressBg:{
        height:6*Util.pixel,
        marginTop:2*Util.pixel,
        backgroundColor:'#e4e4e4',
    },
    progressBgLine:{
        height:6*Util.pixel,
        backgroundColor:'#000',
        marginRight:3*Util.pixel
    },
    progressBgIcon:{
        width:6*Util.pixel,
        height:6*Util.pixel,
        backgroundColor:'#000',
        transform: [{rotate: '45deg'}],
        marginLeft:-5*Util.pixel,
    },
    progressText:{
        width:47*Util.pixel,
        height:6*Util.pixel,
        justifyContent:'center',
        marginTop:1*Util.pixel,
        alignItems:'center'
    },
    proText:{
        width:36*Util.pixel,
        justifyContent:'center',
        alignItems:'center'
    },
    arguments:{
        marginLeft:12*Util.pixel,
        marginRight:12*Util.pixel,
        marginTop:10*Util.pixel,
    }
})
//----------> 创作 ------------
const styles_cz=StyleSheet.create({
    czView:{
        borderBottomWidth:1*Util.pixel,
        borderColor:'#ccc',
        marginTop:8*Util.pixel,
    },
    czViewTime:{
        borderTopWidth:1*Util.pixel,
        borderColor:'#ccc',
        marginLeft:12*Util.pixel,
        marginRight:12*Util.pixel,
        paddingTop:8*Util.pixel,
        paddingBottom:8*Util.pixel,
    },
    row23: {
        height: 25*Util.pixel,
        justifyContent:'center'
    }
})
//拍卖
const styles_pm=StyleSheet.create({
    pmView:{
        borderBottomWidth:1*Util.pixel,
        borderColor:'#ccc',
        marginTop:8*Util.pixel,
    },
    pmViewTime:{
        borderTopWidth:1*Util.pixel,
        borderColor:'#ccc',
        marginLeft:12*Util.pixel,
        marginRight:12*Util.pixel,
        height:37*Util.pixel,
        justifyContent:'center'
    }
})
