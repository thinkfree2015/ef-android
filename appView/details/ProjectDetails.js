/**
 * Created by qiuxi on 2016/2/16.
 */
import React, {
    Component,
    StyleSheet,
    Image,
    Text,
    View,
    ScrollView,
    ListView,
    TouchableOpacity
} from 'react-native';
import ScrollableTabView from 'react-native-scrollable-tab-view';
import {styles as styles0} from './../common/styles';
import Header from './../common/header';
import {HeadMaster} from './../common/business';


//主页面
export default class ProjextDetails extends Component {
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
            <View style={[styles0.flex]}>
                <Header initObj={{title:'项目详情'}} />
                <ScrollView>
                    <TopImg newObj={{
                        title:'逐鹿顺意铜雕',
                        url:'http://pro.efeiyi.com/product/%E8%8C%B6%E9%A9%AC%E5%8F%A4%E9%81%93120160113174841.jpg@!product-details-picture'
                    }}/>
                    <HeadMaster newObj={{
                           name:'朱炳仁',
                           description:'铜雕技艺国家级传承人',
                           pic:'http://pro.efeiyi.com/product/%E8%8C%B6%E9%A9%AC%E5%8F%A4%E9%81%93120160113174841.jpg@!product-details-picture'
                    }}/>

                    <View style={[styles.viewa,styles0.pl12,styles.pr12]}>
                        <Text style={styles.viewaText} numberOfLines={this.state.active?4:null}>逐鹿顺意铜雕，铜是人类最早使用的金属。早在史前时代，人们就开始采掘露天铜矿，拥有这样一款精巧绝伦的铜雕，若自己把玩，则个人的品位和气质更加凸显，若送于他人，也显得别出心裁，诚意十足。逐鹿顺意铜雕，铜是人类最早使用的金属。早在逐鹿顺意铜雕，铜是人类最早使用的金属。早在史前时代，人们就开始采掘露天铜矿，拥有这样一款精巧绝伦的铜雕，若自己把玩，则个人的品位和气质更加凸显，若送于他人，也显得别出心裁，诚意十足。逐鹿顺意铜雕，铜是人类最早使用的金属。早在逐鹿顺意铜雕，铜是人类最早使用的金属。早在史前时代，人们就开始采掘露天铜矿，拥有这样一款精巧绝伦的铜雕，若自己把玩，则个人的品位和气质更加凸显，若送于他人，也显得别出心裁，诚意十足。逐鹿顺意铜雕，铜是人类最早使用的金属。早在逐鹿顺意铜雕，铜是人类最早使用的金属。早在史前时代，人们就开始采掘露天铜矿，拥有这样一款精巧绝伦的铜雕，若自己把玩，则个人的品位和气质更加凸显，若送于他人，也显得别出心裁，诚意十足。逐鹿顺意铜雕，铜是人类最早使用的金属。早在逐鹿顺意铜雕，铜是人类最早使用的金属。早在史前时代，人们就开始采掘露天铜矿，拥有这样一款精巧绝伦的铜雕，若自己把玩，则个人的品位和气质更加凸显，若送于他人，也显得别出心裁，诚意十足。逐鹿顺意铜雕，铜是人类最早使用的金属。早在逐鹿顺意铜雕，铜是人类最早使用的金属。早在史前时代，人们就开始采掘露天铜矿，拥有这样一款精巧绝伦的铜雕，若自己把玩，则个人的品位和气质更加凸显，若送于他人，也显得别出心裁，诚意十足。逐鹿顺意铜雕，铜是人类最早使用的金属。早在逐鹿顺意铜雕，铜是人类最早使用的金属。早在史前时代，人们就开始采掘露天铜矿，拥有这样一款精巧绝伦的铜雕，若自己把玩，则个人的品位和气质更加凸显，若送于他人，也显得别出心裁，诚意十足。逐鹿顺意铜雕，铜是人类最早使用的金属。早在逐鹿顺意铜雕，铜是人类最早使用的金属。早在史前时代，人们就开始采掘露天铜矿，拥有这样一款精巧绝伦的铜雕，若自己把玩，则个人的品位和气质更加凸显，若送于他人，也显得别出心裁，诚意十足。逐鹿顺意铜雕，铜是人类最早使用的金属。早在逐鹿顺意铜雕，铜是人类最早使用的金属。早在史前时代，人们就开始采掘露天铜矿，拥有这样一款精巧绝伦的铜雕，若自己把玩，则个人的品位和气质更加凸显，若送于他人，也显得别出心裁，诚意十足。逐鹿顺意铜雕，铜是人类最早使用的金属。早在逐鹿顺意铜雕，铜是人类最早使用的金属。早在史前时代，人们就开始采掘露天铜矿，拥有这样一款精巧绝伦的铜雕，若自己把玩，则个人的品位和气质更加凸显，若送于他人，也显得别出心裁，诚意十足。逐鹿顺意铜雕，铜是人类最早使用的金属。早在逐鹿顺意铜雕，铜是人类最早使用的金属。早在史前时代，人们就开始采掘露天铜矿，拥有这样一款精巧绝伦的铜雕，若自己把玩，则个人的品位和气质更加凸显，若送于他人，也显得别出心裁，诚意十足。逐鹿顺意铜雕，铜是人类最早使用的金属。早在</Text>
                        <TouchableOpacity style={styles.viewaSelect} onPress={this.onkeyDown.bind(this)} >
                            {this.state.active?<View style={[styles.viewaSelectIcon]}></View>:<View style={[styles.viewaSelectIcon,styles.viewaSelectIconActive]}></View>}
                        </TouchableOpacity>
                    </View>

                    <View style={[styles0.row,styles.viewb]}>
                        <TouchableOpacity style={[styles0.row,styles0.flex]}>
                            <Text style={[styles0.fz12,styles0.black]}>投资金额</Text>
                            <View style={[styles0.right,styles0.flex]}>
                                <View style={styles.viewbArrowRight}></View>
                            </View>
                        </TouchableOpacity>
                    </View>

                    <Record />

                    <View style={[styles0.flex,{height:800}]}>
                        <ScrollableTabView tabBarUnderlineColor="000" tabBarActiveTextColor ="#000" tabBarInactiveTextColor="#000">
                            <TabProduction tabLabel="作品详情"/>
                            <TabProgress tabLabel="项目进度"/>
                            <TabDiscuss tabLabel="用户评论"/>
                        </ScrollableTabView>
                    </View>


                </ScrollView>

            </View>
        )
    }
}

//------------->标题
class TitleBar extends React.Component {
    render(){
        let obj=this.props.newObj;
        return(
            <View style={styles.titleBar}>
                <Text style={[styles0.fz12,styles0.black]} numberOfLines={1}>{obj.title}</Text>
            </View>
        )
    }
}

//------------->投资者记录
class Record extends React.Component {
    constructor(props){
        super(props);
        this.state= {
            active:'false',
        };
    }
    onkeyDown(){
        this.setState({active:!this.state.active});
    }
    render(){
        return(
            <View style={[styles.record,styles0.btmbor,styles0.topbor,styles0.pl12,styles0.pr12]}>
                <TitleBar newObj={{title:'投资者记录'}} />
                <View style={[styles0.row,styles.recordItems]}>
                    <Image style={styles.recordHead} source={{uri:'http://pro.efeiyi.com/product/%E8%8C%B6%E9%A9%AC%E5%8F%A4%E9%81%93120160113174841.jpg@!product-details-picture'}} />
                    <View style={[styles0.flex,styles0.row]}>
                        <Text style={[styles0.fz11,styles0.black]}>13964175327</Text>
                    </View>
                    <View style={[styles0.flex,styles0.row]}>
                        <Text style={[styles0.fz11,styles0.black]}>投资了100元</Text>
                    </View>
                    <View style={[styles0.flex,styles0.row,styles.right]}>
                        <Text style={[styles0.fz11,styles.gray]}>2016-01-20</Text>
                    </View>
                </View>

                <View style={[styles0.row,styles.recordItems]}>
                    <Image style={styles.recordHead} source={{uri:'http://pro.efeiyi.com/product/%E8%8C%B6%E9%A9%AC%E5%8F%A4%E9%81%93120160113174841.jpg@!product-details-picture'}} />
                    <View style={[styles0.flex,styles0.row]}>
                        <Text style={[styles0.fz11,styles0.black]}>13964175327</Text>
                    </View>
                    <View style={[styles0.flex,styles0.row]}>
                        <Text style={[styles0.fz11,styles0.black]}>投资了100元</Text>
                    </View>
                    <View style={[styles0.flex,styles0.row,styles.right]}>
                        <Text style={[styles0.fz11,styles.gray]}>2016-01-20</Text>
                    </View>
                </View>

                <TouchableOpacity style={styles.viewaSelect} onPress={this.onkeyDown.bind(this)} >
                    {this.state.active?<View style={[styles.viewaSelectIcon]}></View>:<View style={[styles.viewaSelectIcon,styles.viewaSelectIconActive]}></View>}
                </TouchableOpacity>

            </View>

        )
    }
}

//------------->Tab---作品详情
class TabProduction extends React.Component {
    render(){
        return(
            <View style={[styles0.flex]}>
                <View style={styles.viewd}>
                    <TopImg newObj={{
                        url:'http://pro.efeiyi.com/product/%E8%8C%B6%E9%A9%AC%E5%8F%A4%E9%81%93120160113174841.jpg@!product-details-picture'
                        }}/>
                    <View style={styles.viewdv}>
                        <Text style={styles.viewdvText}>作品的灵感来源，寓意及象征，作品创作的动态，作品的基本情况等相关内容。
                            逐鹿顺意铜雕，铜是人类最早使用的金属。早在史前时代，人们就开始采掘露天铜矿，拥有这样一款精巧绝伦的铜雕，若自己把玩，则个人的品位和气质更加凸显，若送于他人，也显得别出心裁，诚意十足。逐鹿顺意铜雕，铜是人类最早使用的金属。</Text>
                    </View>
                </View>
            </View>
        )
    }
}

//------------->Tab---项目进度
class TabProgress extends React.Component {
    render(){
        return(
            <View style={styles.xm_gress}>
                <TitleBar newObj={{title:'项目进度'}} />
                <View style={styles.xm_gressView}>
                    <View style={[styles0.row,styles.xm_gressViewItems]}>
                        <Text style={[styles0.fz11,styles0.black]}>目前，该项目已经开展了</Text>
                        <Text style={[styles0.fz11,styles0.black]}>24天59时59分</Text>
                        <View style={styles.processline}></View>
                        <View style={{ flex:1, alignItems:'flex-end'}}>
                            <View style={[styles0.row,styles.processText]}>
                                <Image style={styles.processTextIcon} source={require('./../image/details/tips.png')} />
                                <Text style={[styles0.fz11,styles0.black]}>融资</Text>
                            </View>
                        </View>
                    </View>

                    <View style={[styles0.row,styles.xm_gressViewItems]}>
                        <Text style={[styles0.fz11,styles0.black]}>距离项目融资截止还有</Text>
                        <Text style={[styles0.fz11,styles0.black]}>24天59时59分</Text>
                        <View style={styles.processline}></View>
                    </View>

                    <View style={[styles0.row,styles.xm_gressViewItems]}>
                        <Text style={[styles0.fz11,styles0.black]}>项目目标金额</Text>
                        <Text style={[styles0.fz11,styles0.black]}>30000元</Text>
                        <View style={styles.processline}></View>
                    </View>

                    <View style={[styles0.row,styles.xm_gressViewItems]}>
                        <Text style={[styles0.fz11,styles0.black]}>项目目前融资金额</Text>
                        <Text style={[styles0.fz11,styles0.black]}>20000元</Text>
                        <View style={styles.processline}></View>
                    </View>

                    <View style={[styles0.row,styles.xm_gressViewItems]}>
                        <Text style={[styles0.fz11,styles.gray]}>敬请期待</Text>
                        <View style={styles.processline}></View>
                        <View style={{ flex:1, alignItems:'flex-end'}}>
                            <View style={[styles0.row,styles.processText]}>
                                <Image style={styles.processTextIcon} source={require('./../image/details/tips.png')} />
                                <Text style={[styles0.fz11,styles.gray]}>创作</Text>
                            </View>
                        </View>
                    </View>

                    <View style={[styles0.row,styles.xm_gressViewItems]}>
                        <Text style={[styles0.fz11,styles.gray]}>敬请期待</Text>
                        <View style={styles.processline}></View>
                        <View style={{ flex:1, alignItems:'flex-end'}}>
                            <View style={[styles0.row,styles.processText]}>
                                <Image style={styles.processTextIcon} source={require('./../image/details/tips.png')} />
                                <Text style={[styles0.fz11,styles.gray]}>拍卖</Text>
                            </View>
                        </View>
                    </View>

                    <View style={[styles0.row,styles.xm_gressViewItems]}>
                        <Text style={[styles0.fz11,styles.gray]}>敬请期待</Text>
                        <View style={styles.processline}></View>
                        <View style={{ flex:1, alignItems:'flex-end'}}>
                            <View style={[styles0.row,styles.processText]}>
                                <Image style={styles.processTextIcon} source={require('./../image/details/tips.png')} />
                                <Text style={[styles0.fz11,styles.gray]}>抽奖</Text>
                            </View>
                        </View>
                    </View>

                </View>
            </View>
        )
    }
}

//------------->Tab---用户评论
var NEWS_LIST_API_URL = 'http://88.studyteam.sinaapp.com/rnn/news_list.json';
class TabDiscuss extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            dataSource : new ListView.DataSource({
                rowHasChanged : (row1, row2) => row1 !== row2
            }),
            loaded : false,
        };
    }
    componentDidMount () {
        this.fetchData();
    }
    fetchData() {
        fetch(NEWS_LIST_API_URL)
            .then((response) => response.json())
            .then((responseData) => {
                this.setState({
                    dataSource : this.state.dataSource.cloneWithRows(responseData),
                    loaded : true,
                });
            })
            .done();
    }
    render() {
        return (
            <View style={[styles0.flex,styles.discuss]}>
                <TitleBar newObj={{title:'评论'}} />
                <ListView
                    pageSize={2}
                    dataSource={this.state.dataSource}
                    renderRow={this.renderNews}
                />
            </View>
        );
    }
    renderNews(news) {
        return (
            <View style={styles.discussItems}>
                <Image style={styles.discussItemsImg} source={{uri:news.pic}} />
                <View style={styles.disItemsInfo}>
                    <Text style={[styles0.fz11,styles0.black]}>{news.title}</Text>
                    <Text style={[styles0.fz11,styles0.gray]}>2015-10-12   16:16</Text>
                    <Text style={[styles0.fz11,styles0.black]} numberOfLines={2}>{news.summary}</Text>
                </View>
            </View>
        );
    }
}

//------------->头图
class TopImg extends Component {
    render(){
        let obj=this.props.newObj;
        return(
            <View>
                <Image style={styles.timg} source={{uri:obj.url}} />
                <View style={styles.timgView}>
                    <Text style={styles.timgText} numberOfLines={1}>{obj.title}</Text>
                </View>
            </View>
        )
    }
}
const styles=StyleSheet.create({
    //头图
    timg:{
        height:320,
        resizeMode:'cover',
        marginTop:9
    },
    timgView:{
        marginLeft:12,
        marginRight:12,
        position:'absolute',
        bottom:12,
    },
    timgText:{
        fontSize:14,
        color:'#fff',
    },
    //标题
    titleBar:{
        height:37,
        borderBottomWidth:0.5,
        borderColor:'#e2e2e2',
        alignItems:'center',
        flexDirection:'row',
    },
    //--------------->文字
    viewa:{
        borderBottomWidth:0.5,
        borderColor:'#e2e2e2'
    },
    viewaText:{
        fontSize:10,
        lineHeight:15,
        color:'#808080'
    },
    viewaSelect:{
        height:15,
        alignItems:'center',
        marginTop:6,
        marginBottom:6,
    },
    viewaSelectIcon:{
        borderLeftWidth:1,
        borderBottomWidth:1,
        width:15,
        height:15,
        transform: [{rotate: '-45deg'}],
        borderColor:'#ccc',
        marginLeft:3,
        marginTop:-3,
    },
    viewaSelectIconActive:{
        transform: [{rotate: '135deg'}],
        marginTop:5,
    },
    //--------------->投资金额
    viewb:{
        height:42,
        paddingLeft:12,
        paddingRight:12,
        marginTop:9,
        marginBottom:9,
        borderTopWidth:0.5,
        borderBottomWidth:0.5,
        borderColor:'#e2e2e2',
        alignItems:'center',
    },
    viewbArrowRight:{
        borderLeftWidth:0.5,
        borderBottomWidth:0.5,
        width:10,
        height:10,
        transform: [{rotate: '-135deg'}],
        borderColor:'#333',
        marginTop:3,
        marginRight:2,
    },
    //--------------->投资记录
    record:{
        paddingBottom:11,
        borderTopWidth:0.5,
        borderBottomWidth:0.5,
        borderColor:'#e2e2e2',
        marginTop:9,
    },
    recordItems:{
        height: 27,
        alignItems:'center',
        marginTop:12
    },
    recordHead: {
        width: 27,
        height: 27,
        borderRadius: 30,
        marginRight:8,
    },
    //--------------->作品详情
    viewd:{
        paddingLeft:12,
        paddingRight:12,
        paddingTop:3,
        flex:1
    },
    viewdv:{
        paddingTop:5,
        paddingBottom:5,
    },
    viewdvText:{
        fontSize:11,
        color:'#808080',
        lineHeight:16,
    },
    //--------------->项目进度
    xm_gress:{
        marginTop:12,
        paddingLeft:12,
        paddingRight:12,
        borderTopWidth:0.5,
        borderBottomWidth:0.5,
        borderColor:'#e2e2e2'
    },
    xm_gressView:{
        paddingTop:10,
        paddingBottom:10,
    },
    xm_gressViewItems:{
        height:35,
        alignItems:'center',
    },
    processText:{
        alignItems:'center',
        backgroundColor:'#fff',
        paddingTop:4,
        paddingBottom:4,
    },
    processTextIcon:{
        width:10,
        height:10,
        marginRight:5,
    },
    processline:{
        width:1,
        height:35,
        backgroundColor:'#e2e2e2',
        position:'absolute',
        top:0,
        right:10,
    },
    //--------------->用户评论
    discuss:{
        paddingLeft:12,
        paddingRight:12,
        borderBottomWidth:1,
        borderColor:'#e2e2e2'
    },
    discussItems:{
        paddingLeft:52,
        marginTop:12,
    },
    discussItemsImg:{
        width:30,
        height:30,
        borderRadius:30,
        position:'absolute',
        top:0,
        left:12,
    }

})
