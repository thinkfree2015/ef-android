/**
 * Created by qiuxi on 2016/2/16.
 */
import React, {Component,StyleSheet,Image,Text,View,ScrollView,ListView,TouchableOpacity} from 'react-native';
import ScrollableTabView from 'react-native-scrollable-tab-view';
import {styles as styles0,Header,LayoutBtn,IconDiscuss,IconInvestment,IconDesTips,IconDesTipsGray,IconPayment,sizeHeight} from './../common/styles';
import {TopImg,HeadMaster,TitleBar,DiscussMod,ProgressBar,ArtworkDetails,StickyBottom} from './../common/business';

//主页面
export default class ProjectDetails extends Component {
    constructor(props){
        super(props);
        this.state = {
            active:'false',
        };
    }
    onkeyDown(){
        this.setState({active:!this.state.active});
    }
    render(){
        let wSzie=Math.floor((this.state.width/592)*100);
        return(
            <View style={[styles0.flex,{backgroundColor:'#fff'}]}>
                <Header
                    title={'逐鹿顺意铜雕'}
                    BackIcon={true}
                    ShareIcon={true}
                />
                <ScrollView>
                    {/*大图*/}
                    <TopImg
                        text={'逐鹿顺意铜雕'}
                        pic={'http://pro.efeiyi.com/product/%E8%8C%B6%E9%A9%AC%E5%8F%A4%E9%81%93120160113174841.jpg@!product-details-picture'}
                    />
                    {/*大师头像、名字、描述*/}
                    <HeadMaster newObj={{
                           name:'朱炳仁',
                           description:'铜雕技艺国家级传承人',
                           pic:'http://pro.efeiyi.com/product/%E8%8C%B6%E9%A9%AC%E5%8F%A4%E9%81%93120160113174841.jpg@!product-details-picture'
                    }}/>
                    {/*大师头像下面的描述*/}
                    <View style={[styles0.ml12,styles0.mr12,styles0.btmbor,styles.des_box]}>
                        <Text style={[styles0.fz10,styles0.gray,styles.des_text]} numberOfLines={this.state.active?4:null}>逐鹿顺意铜雕，铜是人类最早使用的金属。早在史前时代，人们就开始采掘露天铜矿，拥有这样一款精巧绝伦的铜雕，若自己把玩，则个人的品位和气质更加凸显，若送于他人，也显得别出心裁，诚意十足。逐鹿顺意铜雕鹿顺意铜雕，铜是人类最早使用的金属。早在</Text>
                        <TouchableOpacity style={[styles0.center,styles.des_select]} onPress={this.onkeyDown.bind(this)} >
                            {this.state.active?<View style={[styles.des_icon]}></View>:<View style={[styles.des_icon,styles.des_icon_active]}></View>}
                        </TouchableOpacity>
                    </View>
                    {/*已融金额*/}
                    <View>
                        <View style={[styles0.row,styles0.ml12,styles0.mr12,styles0.center,styles.prog_view]}>
                            <Text style={[styles0.fz11,styles0.color6]}>已融金额 ：</Text>
                            <Text style={[styles0.fz12,styles0.black]}>14000</Text>
                            <Text style={[styles0.fz12,styles0.black]}>元</Text>
                        </View>
                        <ProgressBar newObj={{
                            group1Num:'3002元',
                            group1Text:'目标金额',
                            group2Num:'24时24分24秒',
                            group2Text:'剩余时间',
                            group3Num:'10000',
                            group3Text:'投资人数',
                        }}/>
                    </View>
                    {/*排行头像*/}
                    <View style={[styles0.topbor,styles0.btmbor,styles0.mt9,{paddingTop:19}]}>
                        <View style={[styles0.row,styles0.vertical]}>
                            <Portrait num1={true} pic={'http://cdn.duitang.com/uploads/item/201509/27/20150927191624_2tnMS.thumb.224_0.jpeg'}/>
                            <Portrait num2={true} pic={'http://cdn.duitang.com/uploads/item/201509/27/20150927191624_2tnMS.thumb.224_0.jpeg'}/>
                            <Portrait num3={true} pic={'http://cdn.duitang.com/uploads/item/201509/27/20150927191624_2tnMS.thumb.224_0.jpeg'}/>
                        </View>

                        <View style={[styles0.row,styles0.vertical]}>
                            <Portrait pic={'http://cdn.duitang.com/uploads/item/201509/27/20150927191624_2tnMS.thumb.224_0.jpeg'}/>
                            <Portrait pic={'http://cdn.duitang.com/uploads/item/201509/27/20150927191624_2tnMS.thumb.224_0.jpeg'}/>
                            <Portrait pic={'http://cdn.duitang.com/uploads/item/201509/27/20150927191624_2tnMS.thumb.224_0.jpeg'}/>
                            <Portrait pic={'http://cdn.duitang.com/uploads/item/201509/27/20150927191624_2tnMS.thumb.224_0.jpeg'}/>
                        </View>

                    </View>
                    {/*投资流程*/}
                    <LayoutBtn marginTop={9} btnText={'投资流程'}/>
                    {/*投资者记录*/}
                    <LayoutBtn marginTop={9} btnText={'投资者记录'}/>
                    {/*作品详情、项目进度、用户评论*/}
                    <View style={[styles0.flex,styles0.mt9,styles0.topbor,{height:sizeHeight-44}]}>
                        <ScrollableTabView tabBarUnderlineColor="#000" tabBarActiveTextColor ="#000" tabBarInactiveTextColor="#000">
                            <TabProduction tabLabel="作品详情"/>
                            <TabProgress tabLabel="项目进度"/>
                            <TabDiscuss tabLabel="用户评论"/>
                        </ScrollableTabView>
                    </View>
                </ScrollView>

                {/*悬浮在底部的评论、投资*/}
                <StickyBottom
                    buttonTwo={true}
                    btnOneText={'评论'}
                    btnOneIcon={IconDiscuss}
                    btnTwoText={'投资'}
                    btnTwoIcon={IconInvestment}
                />
            </View>
        )
    }
}

//------------->Tab---作品详情
class TabProduction extends React.Component{
    render(){
        return(
            <ArtworkDetails
                pic={'http://pro.efeiyi.com/product/%E8%8C%B6%E9%A9%AC%E5%8F%A4%E9%81%93120160113174841.jpg@!product-details-picture'}
                describe={'作品的灵感来源，寓意及象征，作品创作的动态，作品的基本情况等相关内容。'}
            />
        )
    }
}

//------------->Tab---项目进度
class TabProgress extends React.Component {
    render(){
        return(
            <View style={[styles0.pl12,styles0.pr12,styles0.mt12,styles0.btmbor,styles0.topbor]}>
                <View style={styles0.btmbor}>
                    <TitleBar
                        title={'项目进度'}
                    />
                </View>

                <View style={[styles0.pt12,styles0.pb12]}>
                    <TabProgressBox
                        status={true}
                        statusTitle={'目前，该项目已经开展了 24天59时59分'}
                        statusText={'融资'}
                    />

                    <TabProgressBox
                        status={false}
                        statusTitle={'敬请期待'}
                        statusText={'创作'}
                    />

                    <View style={[styles0.row,styles0.center,styles.xm_items]}>
                        <Text style={[styles0.fz11,styles0.black]}>距离项目融资截止还有 24天59时59分</Text>
                        <View style={{position:'absolute',top:5,right:0}}>
                            <View style={styles.xm_line}></View>
                        </View>
                    </View>

                    <View style={[styles0.row,styles0.center,styles.xm_items]}>
                        <Text style={[styles0.fz11,styles0.black]}>项目目标金额 30000元</Text>
                        <View style={{position:'absolute',top:5,right:0}}>
                            <View style={styles.xm_line}></View>
                        </View>
                    </View>

                    <View style={[styles0.row,styles0.center,styles.xm_items]}>
                        <Text style={[styles0.fz11,styles0.black]}>项目目前融资金额 20000元</Text>
                        <View style={{position:'absolute',top:5,right:0}}>
                            <View style={styles.xm_line}></View>
                        </View>
                    </View>



                    <View style={[styles0.row,styles0.center,styles.xm_items]}>
                        <Text style={[styles0.fz11,styles0.gray]}>敬请期待</Text>
                        <View style={{position:'absolute',top:5,right:0}}>
                            <View style={styles.xm_line}></View>
                            <View style={[styles0.row,styles.xm_text]}>
                                <Image style={styles.xm_icon} source={IconDesTipsGray} />
                                <Text style={[styles0.fz11,styles0.gray]}>拍卖</Text>
                            </View>
                        </View>
                    </View>


                    <View style={[styles0.row,styles0.center,styles.xm_items]}>
                        <Text style={[styles0.fz11,styles0.gray]}>敬请期待</Text>
                        <View style={{position:'absolute',top:5,right:0}}>
                            <View style={styles.xm_line}></View>
                            <View style={[styles0.row,styles.xm_text]}>
                                <Image style={styles.xm_icon} source={IconDesTipsGray} />
                                <Text style={[styles0.fz11,styles0.gray]}>抽奖</Text>
                            </View>
                        </View>
                    </View>


                </View>
            </View>
        )
    }
}

class TabProgressBox extends React.Component{
    render(){
        return(
            <View>
                {
                    this.props.status?
                        //融资部分
                        <View style={[styles0.row,styles0.center,styles.xm_items]}>
                            <Text style={[styles0.fz11,styles0.black]}>{this.props.statusTitle}</Text>
                            <View style={{position:'absolute',top:5,right:0}}>
                                <View style={styles.xm_line}></View>
                                <View style={[styles0.row,styles.xm_text]}>
                                    <Image style={styles.xm_icon} source={IconDesTips} />
                                    <Text style={[styles0.fz11,styles0.black]}>{this.props.statusText}</Text>
                                </View>
                            </View>
                        </View>:
                        //敬请期待
                        <View style={[styles0.row,styles0.center,styles.xm_items]}>
                            <Text style={[styles0.fz11,styles0.gray]}>{this.props.statusTitle}</Text>
                            <View style={{position:'absolute',top:5,right:0}}>
                                <View style={styles.xm_line}></View>
                                <View style={[styles0.row,styles.xm_text]}>
                                    <Image style={styles.xm_icon} source={IconDesTipsGray} />
                                    <Text style={[styles0.fz11,styles0.gray]}>{this.props.statusText}</Text>
                                </View>
                            </View>
                        </View>
                }
            </View>



        )
    }
}


//------------->Tab---用户评论
class TabDiscuss extends React.Component {
    render() {
        return (
            <View style={[styles0.flex,styles0.pl12,styles0.pr12,styles.discuss]}>
                <TitleBar
                    title={'评论'}
                />
                <View style={styles0.topbor}>
                    <DiscussMod newObj={{
                        pic:'http://pro.efeiyi.com/product/%E8%8C%B6%E9%A9%AC%E5%8F%A4%E9%81%93120160113174841.jpg@!product-details-picture',
                        name:'Joe',
                        time:'2015-10-12 16:20',
                        description:'原来铜雕是一门高深的技艺，之前从来没有关注过，觉得中国的非 遗文化值得我们去传承。',
                    }}/>
                    <DiscussMod newObj={{
                        pic:'http://pro.efeiyi.com/product/%E8%8C%B6%E9%A9%AC%E5%8F%A4%E9%81%93120160113174841.jpg@!product-details-picture',
                        name:'Joe',
                        time:'2015-10-12 16:20',
                        description:'原来铜雕是一门高深的技艺，之前从来没有关注过，觉得中国的非 遗文化值得我们去传承。',
                    }}/>
                </View>
            </View>
        );
    }
}


//排行头像
class Portrait extends React.Component{
    render(){
        const  iconGold = require('./../image/goldGrade.png');//金等级
        const  iconSilver = require('./../image/silverGrade.png');//银等级
        const  iconCuprum = require('./../image/cuprumGrade.png');//铜等级
        const  iconOpen = require('./../image/open.png');//打开
        const  iconOff = require('./../image/off.png');//收起
        return(
            <View style={[styles.piclist,styles0.center,styles0.vertical]}>
                <Image style={[styles.picview,{width:40,height:40}]} source={{uri:this.props.pic}} />
                {
                    this.props.num1?<Image style={[styles.iconview,styles.poiton,{width:20,height:20}]} source={iconGold} />:null
                }
                {
                    this.props.num2?<Image style={[styles.iconview,styles.poiton,{width:20,height:20}]} source={iconSilver} />:null
                }
                {
                    this.props.num3?<Image style={[styles.iconview,styles.poiton,{width:20,height:20}]} source={iconCuprum} />:null
                }
            </View>
        )
    }
}



const styles=StyleSheet.create({
    //--------------->文字
    des_box:{
        borderColor:'#e2e2e2'
    },
    des_text:{
        lineHeight:15
    },
    des_select:{
        height:15,
        marginTop:6,
        marginBottom:6,
    },
    des_icon:{
        borderLeftWidth:1,
        borderBottomWidth:1,
        width:15,
        height:15,
        transform: [{rotate: '-45deg'}],
        borderColor:'#ccc',
        marginLeft:3,
        marginTop:-3,
    },
    des_icon_active:{
        transform: [{rotate: '135deg'}],
        marginTop:5,
    },
    //已投金额
    prog_view:{
        height:38,
    },
    //--------------->项目进度
    xm_items:{
        height:35,
    },
    xm_text:{
        backgroundColor:'#fff',
        paddingTop:4,
        paddingBottom:4,
    },
    xm_icon:{
        width:10,
        height:10,
        marginRight:5,
        marginTop:2.5
    },
    xm_line:{
        width:1,
        height:35,
        backgroundColor:'#e2e2e2',
        position:'absolute',
        top:0,
        right:10,
    },
    //--------------->用户评论
    discuss:{
        borderBottomWidth:1,
        borderColor:'#e2e2e2'
    },
    //
    piclist:{
        marginLeft:4,
        marginRight:4,
        marginBottom:13
    },
    picview:{
        width:24,
        height:24,
        borderRadius:24
    },
    iconview:{
        width:12,
        height:12,
        position:'absolute',
        bottom:0,
        right:0
    }
})
