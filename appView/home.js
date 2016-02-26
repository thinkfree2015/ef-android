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
import {styles as styles0} from './common/styles';
import {HeadMaster} from './common/business';

//主页面
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

//产品图片组件
class ImgModule extends  React.Component{
    render(){
        let obj=this.props.newObj;
        return(
            <View style={styles.box}>
                <Image style={styles.im} source={{uri:obj.url}}/>
                <View style={styles.imView}>
                    <Text style={styles.imViewTitle}>{obj.title}</Text>
                    <Text style={styles.imViewDes} numberOfLines={2}>{obj.description}</Text>
                </View>
            </View>
        )
    }
}

//融资
class FinancingList extends React.Component {
    render() {
        return (
            <View style={styles0.flex}>
                <TouchableOpacity style={[styles0.btmbor,styles.rz]}>
                    <ImgModule newObj={{
                        title:'项目详情',
                        description:'大师手作独品，倾心定制,独一无二,灵感再现倾心定制,独一无二',
                        url:'http://pro.efeiyi.com/product/%E8%8C%B6%E9%A9%AC%E5%8F%A4%E9%81%93120160113174841.jpg@!product-details-picture'
                    }}/>
                    <HeadMaster newObj={{
                        name:'朱炳仁',
                        description:'铜雕技艺国家级传承人',
                        pic:'http://pro.efeiyi.com/product/%E8%8C%B6%E9%A9%AC%E5%8F%A4%E9%81%93120160113174841.jpg@!product-details-picture'
                    }} />
                    <View>
                        <View style={[styles0.row,styles0.pl12,styles0.pr12,styles.rz_gress]}>
                            <View style={[styles0.flex,styles0.row,styles.rz_gressBg]}>
                                <View style={[styles.rz_gressBgLine,{width:200}]}></View>
                                <View style={styles.rz_gressBgIcon}></View>
                            </View>
                            <View style={styles.rz_gressText}><Text style={[styles0.fz11,styles0.black]}>90%</Text></View>
                        </View>

                        <View style={[styles0.row,styles0.ml12,styles0.mr12,styles.rz_part]}>
                            <View style={[styles0.flex,styles0.left]}>
                                <Text style={[styles0.fz12,styles0.black]}>3000元</Text>
                                <Text style={[styles0.fz11,styles0.gray]}>目标金额</Text>
                            </View>
                            <View style={[styles0.flex,styles0.center]}>
                                <Text style={[styles0.fz12,styles0.black]}>24时24分24秒</Text>
                                <Text style={[styles0.fz11,styles0.gray]}>剩余时间</Text>
                            </View>
                            <View style={[styles0.flex,styles0.right]}>
                                <Text style={[styles0.fz12,styles0.black]}>10000</Text>
                                <Text style={[styles0.fz11,styles0.gray]}>投资人数</Text>
                            </View>
                        </View>
                    </View>
                    
                </TouchableOpacity>
            </View>
        )
    }
}

//创作
class MakeList extends React.Component {
    render() {
        return (
            <View style={[styles0.btmbor,styles.cz]}>
                <ImgModule newObj={{
                        title:'项目详情',
                        description:'大师手作独品，倾心定制,独一无二,灵感再现倾心定制,独一无二',
                        url:'http://pro.efeiyi.com/product/%E8%8C%B6%E9%A9%AC%E5%8F%A4%E9%81%93120160113174841.jpg@!product-details-picture'
                    }}/>
                <HeadMaster newObj={{
                        name:'朱炳仁2',
                        description:'铜雕技艺国家级传承人',
                        pic:'http://pro.efeiyi.com/product/%E8%8C%B6%E9%A9%AC%E5%8F%A4%E9%81%93120160113174841.jpg@!product-details-picture'
                    }} />
                <View style={[styles0.topbor,styles0.ml12,styles0.mr12,styles.czView]}>
                    <View style={styles.czRow}>
                        <Text style={[styles0.fz12,styles0.black]} numberOfLines={1}>最新一次更新： 5分钟前</Text>
                    </View>
                    <View style={styles.czRow}>
                        <Text style={[styles0.fz12,styles0.black,styles.czRow]} numberOfLines={1}>预计完工：1月24日</Text>
                    </View>
                </View>
            </View>
        )
    }
}
//拍卖
class AuctionList extends React.Component {
    render() {
        return (
            <View style={[styles0.btmbor,styles.pm]}>
                <ImgModule newObj={{
                        title:'项目详情',
                        description:'大师手作独品，倾心定制,独一无二,灵感再现倾心定制,独一无二',
                        url:'http://pro.efeiyi.com/product/%E8%8C%B6%E9%A9%AC%E5%8F%A4%E9%81%93120160113174841.jpg@!product-details-picture'
                    }}/>
                <HeadMaster newObj={{
                        name:'朱炳仁',
                        description:'铜雕技艺国家级传承人',
                        pic:'http://pro.efeiyi.com/product/%E8%8C%B6%E9%A9%AC%E5%8F%A4%E9%81%93120160113174841.jpg@!product-details-picture'
                }} />

                <View style={[styles0.ml12,styles0.mr12,styles0.topbor,styles.pmView]}>
                    <Text style={[styles0.fz12,styles0.black]}>拍卖时间：3月10日 9:00——15:00</Text>
                </View>

            </View>
        )
    }
}

//抽奖
class AwardList extends React.Component {
    render() {
        return (
            <View style={[styles0.btmbor,styles.cz]}>
                <ImgModule newObj={{
                        title:'项目详情',
                        description:'大师手作独品，倾心定制,独一无二,灵感再现倾心定制,独一无二',
                        url:'http://pro.efeiyi.com/product/%E8%8C%B6%E9%A9%AC%E5%8F%A4%E9%81%93120160113174841.jpg@!product-details-picture'
                    }}/>
                <HeadMaster newObj={{
                        name:'朱炳仁',
                        description:'铜雕技艺国家级传承人',
                        pic:'http://pro.efeiyi.com/product/%E8%8C%B6%E9%A9%AC%E5%8F%A4%E9%81%93120160113174841.jpg@!product-details-picture'
                    }} />
                <View style={[styles.topbor,styles0.ml12,styles0.mr12,styles.czView]}>
                    <View style={[styles0.topbor,styles.czRow]}>
                        <Text style={[styles0.fz12,styles0.black]}>
                            <Text>开奖倒计时：</Text>
                            <Text style={styles0.fz18}>24</Text>
                            <Text style={[styles0.fz10,styles0.gray]}>  小时  </Text>
                            <Text style={styles0.fz18}>00</Text>
                            <Text style={[styles0.fz10,styles0.gray]}>  分  </Text>
                            <Text style={styles0.fz18}>00</Text>
                            <Text style={[styles0.fz10,styles0.gray]}>  秒  </Text>
                        </Text>
                    </View>
                    <View style={styles.czRow}>
                        <Text style={[styles0.fz12,styles0.black,styles.czRow]} numberOfLines={1}>预计完工：1月24日</Text>
                    </View>
                </View>
            </View>
        )
    }
}


const styles=StyleSheet.create({
    //图片组件
    im:{
        height:215,
    },
    imView:{
        marginLeft:17,
        marginRight:17
    },
    imViewTitle:{
        fontSize:16,
        color:'#fff',
        position:'absolute',
        bottom:68,
        left:0
    },
    imViewDes:{
        width:200,
        lineHeight:18,
        fontSize:9,
        color:'#fff',
        position:'absolute',
        bottom:23,
        left:0,
    },
    //融资
    rz:{
        marginTop:8,
        paddingBottom:13,
    },
    rz_gress:{
        height:10,
    },
    rz_gressBg:{
        height:6,
        marginTop:2,
        backgroundColor:'#e4e4e4',
    },
    rz_gressBgLine:{
        height:6,
        backgroundColor:'#000',
        marginRight:3
    },
    rz_gressBgIcon:{
        width:6,
        height:6,
        backgroundColor:'#000',
        transform: [{rotate: '45deg'}],
        marginLeft:-5,
    },
    rz_gressText:{
        width:47,
        height:6,
        justifyContent:'center',
        marginTop:1,
        alignItems:'center'
    },
    rz_part:{
        marginTop:10,
    },
    //创作
    cz:{
        marginTop:8,
    },
    czView:{
        paddingTop:8,
        paddingBottom:8,
    },
    czRow: {
        height: 25,
        justifyContent:'center'
    },
    //拍卖
    pm:{
        marginTop:8,
    },
    pmView:{
        height:37,
        justifyContent:'center'
    }
})