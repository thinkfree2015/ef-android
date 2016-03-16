/**
 * Created by jiuxuan00 on 2016/2/16.
 */
import React, {Component,StyleSheet,Image,Text,View,ScrollView,ListView,TouchableOpacity} from 'react-native';
import ScrollableTabView from 'react-native-scrollable-tab-view';
import {styles as styles0,Header,LayoutBtn,IconBond,IconDiscuss} from './../common/styles';
import {TopImg,HeadMaster,TitleBar,DiscussMod,ProgressBar,InvestorsRecord,ArtworkDetails} from './../common/business';




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
        return(
            <View style={[styles0.flex]}>
                <Header
                    title={'逐鹿顺意铜雕'}
                    BackIcon={true}
                    ShareIcon={true}
                />
                <ScrollView>
                    {/*详情页第一屏大图*/}
                    <TopImg
                        text={'逐鹿顺意铜雕'}
                        pic={'http://pro.efeiyi.com/product/%E8%8C%B6%E9%A9%AC%E5%8F%A4%E9%81%93120160113174841.jpg@!product-details-picture'}
                        IconComplete={true}
                    />
                    {/*起拍价和时间*/}
                    <View style={[styles0.row,styles0.p12,styles0.topbor,styles0.btmbor]}>
                        <View style={[styles0.center,styles0.vertical,styles.pm_qp]}>
                            <Text style={styles0.black}>
                                <Text style={styles0.fz10}>起拍价：</Text>
                                <Text style={styles0.fz12}>2000元</Text>
                            </Text>
                        </View>
                        <View style={[styles0.center,styles0.vertical,styles0.bg0,styles.pm_time]}>
                            <Text style={[styles0.white,styles0.fz10]}>
                                <Text>距拍卖开始</Text>
                                <Text style={styles0.fz15}> 24 </Text>
                                <Text>小时</Text>
                                <Text style={styles0.fz15}> 00 </Text>
                                <Text>分</Text>
                                <Text style={styles0.fz15}> 00 </Text>
                                <Text>秒</Text>
                            </Text>
                        </View>
                    </View>
                    {/*大师头像、名字、描述*/}
                    <HeadMaster newObj={{
                           name:'朱炳仁',
                           description:'铜雕技艺国家级传承人',
                           pic:'http://pro.efeiyi.com/product/%E8%8C%B6%E9%A9%AC%E5%8F%A4%E9%81%93120160113174841.jpg@!product-details-picture'
                    }}/>
                    {/*大师头像下面的描述*/}
                    <View style={[styles0.ml12,styles0.mr12,styles0.btmbor,styles.des_box]}>
                        <Text style={[styles0.fz10,styles0.gray,styles.des_text]} numberOfLines={this.state.active?4:null}>逐鹿顺意铜雕，铜是人类最早使用的金属。早在史前时代，人们就开始采掘露天铜矿，拥有这样一款精巧绝伦的铜雕，若自己把玩，则个人的品位和气质更加凸显，若送于他人，也显得别出心裁，诚意十足。逐鹿顺意铜雕鹿顺意铜雕，铜是人类最早使用的金属。早在</Text>
                        <TouchableOpacity style={[styles0.center,styles0.mt6,styles.des_select]} onPress={this.onkeyDown.bind(this)} >
                            {this.state.active?<View style={[styles0.arrow,styles.des_arrow]}></View>:<View style={[styles0.arrow,styles.des_arrow,styles.des_arrowTop]}></View>}
                        </TouchableOpacity>
                    </View>
                    {/*有效出价、浏览次数、加价幅度、延时周期*/}
                    <View style={[styles0.row,styles0.pt12,styles0.pb12,styles0.btmbor]}>
                        <View style={[styles0.flex,styles0.center,styles0.vertical]}>
                            <Text style={[styles0.fz12,styles0.black]}>2000次</Text>
                            <Text style={[styles0.fz11,styles0.gray]}>有效出价</Text>
                        </View>
                        <View style={[styles0.flex,styles0.center,styles0.vertical]}>
                            <Text style={[styles0.fz12,styles0.black]}>10000次</Text>
                            <Text style={[styles0.fz11,styles0.gray]}>浏览次数</Text>
                        </View>
                        <View style={[styles0.flex,styles0.center,styles0.vertical]}>
                            <Text style={[styles0.fz12,styles0.black]}>2000元</Text>
                            <Text style={[styles0.fz11,styles0.gray]}>加价幅度</Text>
                        </View>
                        <View style={[styles0.flex,styles0.center,styles0.vertical]}>
                            <Text style={[styles0.fz12,styles0.black]}>30秒</Text>
                            <Text style={[styles0.fz11,styles0.gray]}>延时周期</Text>
                        </View>
                    </View>
                    {/*拍卖纪录*/}
                    <View style={[styles0.pl12,styles0.pr12,styles0.pb12,styles0.mb12,styles0.btmbor]}>
                        <TitleBar
                            title={'拍卖纪录'}
                        />
                        <View style={styles0.center}>
                            <Text style={[styles0.fz11,styles0.gray]}>暂无拍卖纪录</Text>
                            <Text style={[styles0.fz11,styles0.gray]}>拍卖马上开始，请您耐心等待</Text>
                        </View>
                    </View>
                    {/*作品详情、项目进度、用户评论*/}
                    <View style={[styles0.flex,styles0.topbor,{height:800}]}>
                        <ScrollableTabView tabBarUnderlineColor="#000" tabBarActiveTextColor ="#000" tabBarInactiveTextColor="#000">
                            <TabProduction tabLabel="作品详情"/>
                            <TabProgress tabLabel="项目进度" />
                            <TabDiscuss tabLabel="用户评论"/>
                        </ScrollableTabView>
                    </View>
                </ScrollView>
                {/*悬浮在底部的评论、投资*/}
                <View style={[styles0.row,styles.fixBox]}>
                    {/*评论按钮*/}
                    <TouchableOpacity style={[styles0.flex,styles0.center,styles0.vertical,styles.fix_btn]}>
                        <Image style={{width:19,height:18,marginBottom:3}} source={IconDiscuss}/>
                        <Text style={[styles0.white,styles0.fz9]}>评论</Text>
                    </TouchableOpacity>
                    {/*缴纳保证金*/}
                    <TouchableOpacity style={[styles0.flex,styles0.center,styles0.vertical,styles.fix_btn]}>
                        <Image style={{width:19,height:18,marginBottom:3}} source={IconBond}/>
                        <Text style={[styles0.white,styles0.fz9]}>缴纳保证金</Text>
                    </TouchableOpacity>
                </View>
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
class TabProgress extends React.Component{
    render(){
        return(
            <View style={[styles0.pl12,styles0.pr12,styles.xm_gress]}>
                <TitleBar
                    title={'项目进度'}
                />
                <View style={[styles0.topbor]}>
                    {/*抽奖*/}
                    <View style={[styles0.mt6,styles0.mt12]}>
                        <Text style={styles0.fz11}>
                            <Text style={styles0.black}>抽奖  </Text><Text>（若流拍）</Text><Text>敬请期待</Text>
                        </Text>
                    </View>
                    {/*拍卖*/}
                    <View style={[styles0.mt6,styles0.mb6]}>
                        <Text style={[styles0.fz11,styles0.black]}>03月01日08点  拍卖</Text>
                        <Text style={styles0.fz11}>拍卖即将开始，敬请期待...</Text>
                    </View>
                    {/*项目状态*/}
                    <View style={[styles0.mt6,styles0.mb6]}>
                        <Text style={[styles0.fz11,styles0.black]}>项目状态：</Text>
                    </View>
                    <View style={[styles0.mt6,styles0.mb6]}>
                        <Text style={[styles0.fz11,styles0.black]}>02月25日08点</Text>
                        <Text style={[styles0.fz11]}>已经制作完成了，下面是成品图。</Text>
                    </View>
                    <Image style={{height:180}} source={{uri:'http://pro.efeiyi.com/product/%E8%8C%B6%E9%A9%AC%E5%8F%A4%E9%81%93120160113174841.jpg@!product-details-picture'}} />
                    <View style={[styles0.mt6,styles0.mb6]}>
                        <Text style={[styles0.fz11,styles0.black]}>02月22日08点</Text>
                        <Text style={styles0.fz11}>我已经开始烧制了，烧制是最为关键的一步，若烧制失败，作品就功亏一篑了。</Text>
                    </View>
                    <Image style={{height:180}} source={{uri:'http://pro.efeiyi.com/product/%E8%8C%B6%E9%A9%AC%E5%8F%A4%E9%81%93120160113174841.jpg@!product-details-picture'}} />
                    {/*创作*/}
                    <View style={[styles0.mt6,styles0.mb6]}>
                        <Text style={[styles0.fz11,styles0.black]}>02月17日08点  创作</Text>
                        <Text style={styles0.fz11}>目前，该作品已创作了5天10时</Text>
                        <Text style={styles0.fz11}>预计作品创作结束还有2天</Text>
                    </View>
                    {/*融资*/}
                    <View style={[styles0.mt6,styles0.mb12]}>
                        <Text style={[styles0.fz11,styles0.black]}>02月14日14点  融资</Text>
                        <Text style={styles0.fz11}>融资完成</Text>
                    </View>
                </View>
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
                        replayid1:'Joe:我非常认同你的观点',
                        replayid2:'Joe:我非常认同你的观点222222'
                    }}/>
                    <DiscussMod
                        newObj={{
                            pic:'http://pro.efeiyi.com/product/%E8%8C%B6%E9%A9%AC%E5%8F%A4%E9%81%93120160113174841.jpg@!product-details-picture',
                            name:'Joe',
                            time:'2015-10-12 16:20',
                            description:'原来铜雕是一门高深的技艺，之前从来没有关注过，觉得中国的非 遗文化值得我们去传承。',
                        }}
                        replayHide={false}
                        newReplay={{
                            anInfo:'Joe:我非常认同你的观点',
                        }}
                    />
                </View>

            </View>
        );
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
        height:15
    },
    des_arrow:{
        width:8,
        height:8,
        transform: [{rotate: '-45deg'}],
        borderColor:'#ccc',
    },
    des_arrowTop:{
        transform: [{rotate: '135deg'}],
        marginTop:5,
    },
    //已投金额
    prog_view:{
        height:38,
    },
    //--------------->用户评论
    discuss:{
        borderBottomWidth:1,
        borderColor:'#e2e2e2'
    },
    //底部悬浮 评论和投资按钮
    fixBox:{
        height:49,
    },
    fix_btn:{
        backgroundColor:'#000'
    },
    //起拍价和时间
    pm_qp:{
        width:108,
        height:35,
        backgroundColor:'#e4e4e4',
        borderRadius:5,
        position:'absolute',
        top:12,
        left:12
    },
    pm_time:{
        marginLeft:118,
        height:35,
        borderRadius:5,
        flex:1
    },
    //项目进度
    xm_gress:{
        borderColor:'#e2e2e2'
    },
    xm_gressView:{
        paddingTop:10,
        paddingBottom:10,
    },
    xm_gressViewItems:{
        height:35,
    },
    processText:{
        backgroundColor:'#fff',
        paddingTop:4,
        paddingBottom:4,
    },
    processTextIcon:{
        width:10,
        height:10,
        marginRight:5,
        marginTop:3
    },
    processline:{
        width:1,
        height:35,
        backgroundColor:'#e2e2e2',
        position:'absolute',
        top:0,
        right:10,
    },


})
