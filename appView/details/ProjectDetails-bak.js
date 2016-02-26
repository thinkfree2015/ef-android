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
            <View style={[styles.flex]}>
                <Header initObj={{title:'项目详情'}} />
                <ScrollView>
                    <TopImg newObj={{
                        title:'逐鹿顺意铜雕',
                        url:'http://pro.efeiyi.com/product/%E8%8C%B6%E9%A9%AC%E5%8F%A4%E9%81%93120160113174841.jpg@!product-details-picture'
                    }}/>
                    <HeadMaster newObj={{
                           name:'朱炳仁',
                           description:'铜雕技艺国家级传承人',
                           url:'http://pro.efeiyi.com/product/%E8%8C%B6%E9%A9%AC%E5%8F%A4%E9%81%93120160113174841.jpg@!product-details-picture'
                    }} />


                    <View style={[styles.viewa,styles.retract12]}>
                        <Text style={styles.viewaText} numberOfLines={this.state.active?4:null}>逐鹿顺意铜雕，铜是人类最早使用的金属。早在史前时代，人们就开始采掘露天铜矿，拥有这样一款精巧绝伦的铜雕，若自己把玩，则个人的品位和气质更加凸显，若送于他人，也显得别出心裁，诚意十足。逐鹿顺意铜雕，铜是人类最早使用的金属。早在逐鹿顺意铜雕，铜是人类最早使用的金属。早在史前时代，人们就开始采掘露天铜矿，拥有这样一款精巧绝伦的铜雕，若自己把玩，则个人的品位和气质更加凸显，若送于他人，也显得别出心裁，诚意十足。逐鹿顺意铜雕，铜是人类最早使用的金属。早在逐鹿顺意铜雕，铜是人类最早使用的金属。早在史前时代，人们就开始采掘露天铜矿，拥有这样一款精巧绝伦的铜雕，若自己把玩，则个人的品位和气质更加凸显，若送于他人，也显得别出心裁，诚意十足。逐鹿顺意铜雕，铜是人类最早使用的金属。早在逐鹿顺意铜雕，铜是人类最早使用的金属。早在史前时代，人们就开始采掘露天铜矿，拥有这样一款精巧绝伦的铜雕，若自己把玩，则个人的品位和气质更加凸显，若送于他人，也显得别出心裁，诚意十足。逐鹿顺意铜雕，铜是人类最早使用的金属。早在逐鹿顺意铜雕，铜是人类最早使用的金属。早在史前时代，人们就开始采掘露天铜矿，拥有这样一款精巧绝伦的铜雕，若自己把玩，则个人的品位和气质更加凸显，若送于他人，也显得别出心裁，诚意十足。逐鹿顺意铜雕，铜是人类最早使用的金属。早在逐鹿顺意铜雕，铜是人类最早使用的金属。早在史前时代，人们就开始采掘露天铜矿，拥有这样一款精巧绝伦的铜雕，若自己把玩，则个人的品位和气质更加凸显，若送于他人，也显得别出心裁，诚意十足。逐鹿顺意铜雕，铜是人类最早使用的金属。早在逐鹿顺意铜雕，铜是人类最早使用的金属。早在史前时代，人们就开始采掘露天铜矿，拥有这样一款精巧绝伦的铜雕，若自己把玩，则个人的品位和气质更加凸显，若送于他人，也显得别出心裁，诚意十足。逐鹿顺意铜雕，铜是人类最早使用的金属。早在逐鹿顺意铜雕，铜是人类最早使用的金属。早在史前时代，人们就开始采掘露天铜矿，拥有这样一款精巧绝伦的铜雕，若自己把玩，则个人的品位和气质更加凸显，若送于他人，也显得别出心裁，诚意十足。逐鹿顺意铜雕，铜是人类最早使用的金属。早在逐鹿顺意铜雕，铜是人类最早使用的金属。早在史前时代，人们就开始采掘露天铜矿，拥有这样一款精巧绝伦的铜雕，若自己把玩，则个人的品位和气质更加凸显，若送于他人，也显得别出心裁，诚意十足。逐鹿顺意铜雕，铜是人类最早使用的金属。早在逐鹿顺意铜雕，铜是人类最早使用的金属。早在史前时代，人们就开始采掘露天铜矿，拥有这样一款精巧绝伦的铜雕，若自己把玩，则个人的品位和气质更加凸显，若送于他人，也显得别出心裁，诚意十足。逐鹿顺意铜雕，铜是人类最早使用的金属。早在逐鹿顺意铜雕，铜是人类最早使用的金属。早在史前时代，人们就开始采掘露天铜矿，拥有这样一款精巧绝伦的铜雕，若自己把玩，则个人的品位和气质更加凸显，若送于他人，也显得别出心裁，诚意十足。逐鹿顺意铜雕，铜是人类最早使用的金属。早在</Text>
                        <TouchableOpacity style={styles.viewaSelect} onPress={this.onkeyDown.bind(this)} >
                            {this.state.active?<View style={[styles.viewaSelectIcon]}></View>:<View style={[styles.viewaSelectIcon,styles.viewaSelectIconActive]}></View>}
                        </TouchableOpacity>
                    </View>

                    <View style={[styles.row,styles.viewb]}>
                        <TouchableOpacity style={[styles.row,styles.flex]}>
                            <Text style={[styles.fz12,styles.black]}>投资金额</Text>
                            <View style={[styles.right,styles.flex]}>
                                <View style={styles.viewbArrowRight}></View>
                            </View>
                        </TouchableOpacity>
                    </View>

                    <View style={[styles.viewc]}>
                        <TitleBar newObj={{title:'项目详情'}} />
                        <Image style={[styles.viewcImg,{height:100}]} source={require('./../image/details/flowImg.png')} />
                        <View>
                            <Text style={[styles.fz11,styles.text1]}>投资说明：</Text>
                            <Text style={[styles.fz11,styles.text1]}>1、用户投资金额达到目标后，大师开始制作商品，过程中，大师会定期发布项目进展动态。</Text>
                            <Text style={[styles.fz11,styles.text1]}>2、制作完成后，商品进行拍卖，所拍得金额将按照投资者所投资比例全部发到所有投资者手中。</Text>
                            <Text style={[styles.fz11,styles.text1]}>3、若商品在拍卖过程中流拍，我们将在所有投资者中抽出一位幸运者，送出商品（一个公开的东西）。</Text>
                            <Text style={[styles.fz11,styles.text2]}>注：用户投资回报=拍品价格*（投资金额/目标金额）</Text>
                        </View>
                    </View>

                    <Record />

                    <View style={[styles.flex,{height:800}]}>
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


//------------->首图
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
const styles_img=StyleSheet.create({
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
    }
})
//------------->大师头像+名称
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
        height:54,
        marginLeft:12,
        marginRight:12,
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
})
//------------->标题
class TitleBar extends React.Component {
    render(){
        let obj=this.props.newObj;
        return(
            <View style={styles.titleBar}>
                <Text style={[styles.fz12,styles.black]} numberOfLines={1}>{obj.title}</Text>
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
            <View style={[styles.record,styles.retract12]}>
                <TitleBar newObj={{title:'投资者记录'}} />
                <View style={[styles.row,styles.recordItems]}>
                    <Image style={styles.recordHead} source={{uri:'http://pro.efeiyi.com/product/%E8%8C%B6%E9%A9%AC%E5%8F%A4%E9%81%93120160113174841.jpg@!product-details-picture'}} />
                    <View style={[styles.flex,styles.row]}>
                        <Text style={[styles.fz11,styles.black]}>13964175327</Text>
                    </View>
                    <View style={[styles.flex,styles.row]}>
                        <Text style={[styles.fz11,styles.black]}>投资了100元</Text>
                    </View>
                    <View style={[styles.flex,styles.row,styles.right]}>
                        <Text style={[styles.fz11,styles.gray]}>2016-01-20</Text>
                    </View>
                </View>

                <View style={[styles.row,styles.recordItems]}>
                    <Image style={styles.recordHead} source={{uri:'http://pro.efeiyi.com/product/%E8%8C%B6%E9%A9%AC%E5%8F%A4%E9%81%93120160113174841.jpg@!product-details-picture'}} />
                    <View style={[styles.flex,styles.row]}>
                        <Text style={[styles.fz11,styles.black]}>13964175327</Text>
                    </View>
                    <View style={[styles.flex,styles.row]}>
                        <Text style={[styles.fz11,styles.black]}>投资了100元</Text>
                    </View>
                    <View style={[styles.flex,styles.row,styles.right]}>
                        <Text style={[styles.fz11,styles.gray]}>2016-01-20</Text>
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
            <View style={[styles.flex]}>
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
            <View style={styles.process}>
                <TitleBar newObj={{title:'项目进度'}} />
                <View style={styles.processViewa}>
                    <View style={[styles.row,styles.viewaItems]}>
                        <Text style={[styles.fz11,styles.black]}>目前，该项目已经开展了</Text>
                        <Text style={[styles.fz11,styles.black]}>24天59时59分</Text>
                        <View style={styles.processline}></View>
                        <View style={{ flex:1, alignItems:'flex-end'}}>
                            <View style={[styles.row,styles.processText]}>
                                <Image style={styles.processTextIcon} source={require('./../image/details/tips.png')} />
                                <Text style={[styles.fz11,styles.black]}>融资</Text>
                            </View>
                        </View>
                    </View>

                    <View style={[styles.row,styles.processItems]}>
                        <Text style={[styles.fz11,styles.black]}>距离项目融资截止还有</Text>
                        <Text style={[styles.fz11,styles.black]}>24天59时59分</Text>
                        <View style={styles.processline}></View>
                    </View>

                    <View style={[styles.row,styles.processItems]}>
                        <Text style={[styles.fz11,styles.black]}>项目目标金额</Text>
                        <Text style={[styles.fz11,styles.black]}>30000元</Text>
                        <View style={styles.processline}></View>
                    </View>

                    <View style={[styles.row,styles.processItems]}>
                        <Text style={[styles.fz11,styles.black]}>项目目前融资金额</Text>
                        <Text style={[styles.fz11,styles.black]}>20000元</Text>
                        <View style={styles.processline}></View>
                    </View>

                    <View style={[styles.row,styles.processItems]}>
                        <Text style={[styles.fz11,styles.gray]}>敬请期待</Text>
                        <View style={styles.processline}></View>
                        <View style={{ flex:1, alignItems:'flex-end'}}>
                            <View style={[styles.row,styles.processText]}>
                                <Image style={styles.processTextIcon} source={require('./../image/details/tips.png')} />
                                <Text style={[styles.fz11,styles.gray]}>创作</Text>
                            </View>
                        </View>
                    </View>

                    <View style={[styles.row,styles.processItems]}>
                        <Text style={[styles.fz11,styles.gray]}>敬请期待</Text>
                        <View style={styles.processline}></View>
                        <View style={{ flex:1, alignItems:'flex-end'}}>
                            <View style={[styles.row,styles.processText]}>
                                <Image style={styles.processTextIcon} source={require('./../image/details/tips.png')} />
                                <Text style={[styles.fz11,styles.gray]}>拍卖</Text>
                            </View>
                        </View>
                    </View>

                    <View style={[styles.row,styles.processItems]}>
                        <Text style={[styles.fz11,styles.gray]}>敬请期待</Text>
                        <View style={styles.processline}></View>
                        <View style={{ flex:1, alignItems:'flex-end'}}>
                            <View style={[styles.row,styles.processText]}>
                                <Image style={styles.processTextIcon} source={require('./../image/details/tips.png')} />
                                <Text style={[styles.fz11,styles.gray]}>抽奖</Text>
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
            <View style={[styles.flex,styles.discuss]}>
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
                    <Text style={[styles.fz11,styles.black]}>{news.title}</Text>
                    <Text style={[styles.fz11,styles.gray]}>2015-10-12   16:16</Text>
                    <Text style={[styles.fz11,styles.black]} numberOfLines={2}>{news.summary}</Text>
                </View>
            </View>
        );
    }
}


//----------> Styles ------------
const styles=StyleSheet.create({
    row:{flexDirection:'row'},
    flex:{flex:1},
    left:{alignSelf:'flex-start'},
    center:{alignItems:'center'},
    right:{alignItems:'flex-end'},
    fz10:{fontSize:10},
    fz11:{fontSize:11},
    fz12:{fontSize:12},
    fz18:{fontSize:18},
    black:{color:'#000'},
    gray:{color:'#666'},
    retract12:{
        paddingLeft:12,
        paddingRight:12,
    },
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
    //--------------->投资流程
    viewc:{
        paddingLeft:12,
        paddingRight:12,
        paddingBottom:11,
        borderTopWidth:0.5,
        borderBottomWidth:0.5,
        borderColor:'#e2e2e2',
    },
    viewcImg:{
        marginTop:13,
        marginBottom:20,
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
    process:{
        marginTop:12,
        paddingLeft:12,
        paddingRight:12,
        borderTopWidth:0.5,
        borderBottomWidth:0.5,
        borderColor:'#e2e2e2'
    },
    processViewa:{
        paddingTop:10,
        paddingBottom:10,
    },
    processItems:{
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