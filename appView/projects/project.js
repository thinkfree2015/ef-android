/**
 * Created by jiuxuan00 on 2016/2/1.
 */
import React, {Component,StyleSheet,Image,View,Text,ScrollView,TouchableOpacity,ListView} from 'react-native';
import ScrollableTabView from 'react-native-scrollable-tab-view';
import {HeadMaster,ProgressBar} from './../common/business';
import {styles as styles0,sizeWidth} from './../common/styles';
import store from './../redux/store';
import { putJson, getJson} from '../util/jsonUtil';
import { fetchPosts } from './../redux/actions/loginAction';
var timestamp=new Date().getTime();
//主页面
export default class Home extends Component {
    render() {
        return (
            <ScrollableTabView tabBarUnderlineColor="#000" tabBarActiveTextColor ="#000" tabBarInactiveTextColor="#000">
                <FinancingList tabLabel="融资"/>
                <MakeList tabLabel="创作" />
                <AuctionList tabLabel="拍卖" />
                <AwardList tabLabel="抽奖" />
            </ScrollableTabView>
        )
    }
}

//产品图片组件
class ImgModule extends React.Component{
    render(){
        return(
            <View style={styles.box}>
                <Image style={styles.im} source={{uri:this.props.pic}}/>
                <View style={styles.imView}>
                    <Text style={styles.imViewTitle}>{this.props.title}</Text>
                    <Text style={styles.imViewDes} numberOfLines={2}>{this.props.description}</Text>
                </View>
            </View>
        )
    }
}

//文字部分组件
class TextLine extends React.Component{
    render(){
        return(
            <View style={[styles0.row,styles0.center,styles.pj_infoText]}>
                <View style={[styles0.vertical]}><Text style={[styles0.fz12,styles0.black]} numberOfLines={1}>{this.props.describe}</Text></View>
                <View style={[styles.circle,{backgroundColor:this.props.circleBg}]}></View>
            </View>
        )
    }
}

//融资
class FinancingList extends React.Component {
    // 构造
      constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            dataSource: new ListView.DataSource({
                rowHasChanged: (row1, row2) => row1 !== row2,
            }),
            loaded: false,
            index:1,
        };
      }
    componentDidMount() {
        this.fetchData();
    }
    getDataJsonCode(){
        let data='';
        putJson('pageSize',this.state.index*3+"");
        console.log("pageSize"+this.state.index);
        putJson('pageNum','1')
        putJson('timestamp',timestamp+"");
        data =getJson();
        console.log("data"+data)
        return  data;
    }
    _onEndReached(){
        this.setState({
            index:this.state.index+1
        })
        console.log("this.state.index"+this.state.index);
        this.fetchData();
    }
    fetchData() {
        store.dispatch(fetchPosts('/app/investorIndex.do',this.getDataJsonCode())).then((json) =>{
            var responseData = store.getState().pageByLogin.ServerData;
             console.log("responseData"+responseData);
            if (responseData.resultCode==0){
                this.setState({
                    dataSource: this.state.dataSource.cloneWithRows(responseData.objectList),
                    loaded: true,
                });
            }
        }).catch((error)=>{
            console.log(error)
        }).done();
    }
    render() {
        if (!this.state.loaded) {
            return this.renderLoadingView();
        }

        return (
        <View style={styles0.flex}>
            <ListView
                dataSource={this.state.dataSource}
                renderRow={this._renderRow.bind(this)}
                onEndReached={this._onEndReached.bind(this)}
            />
        </View>

        );
    }

    renderLoadingView() {
        return (
            <View style={styles0.container}>
                <Text>
                    Loading ...
                </Text>
            </View>
        );
    }
    transDate(endTime){
      console.log( new Date(parseInt(endTime) ).toLocaleString().replace(/年|月/g, "-").replace(/日/g, " ")) ;
    let mytime=new Array();
    let timestamp = Date.parse(new Date());
    let oldTime = parseInt(endTime);
    let intervalTime = (oldTime -timestamp)/1000;

    if((intervalTime/60/60/24)>=1){//>=1 day
        let day = parseInt(intervalTime/60/60/24);
        let hour = parseInt((intervalTime-(day*60*60*24))/60/60);
        let min =parseInt((intervalTime-(day*60*60*24)-(hour*60*60))/60);
        let sec = parseInt(intervalTime-(day*60*60*24)-(hour*60*60)-min*60);
        mytime[0] =day;
        mytime[1] =hour;
        mytime[2] =min;
        mytime[3] =sec;
        return mytime;
    }else if((intervalTime/60/60/24)<1 && (intervalTime/60/60)>=1){
        let hour = parseInt((intervalTime)/60/60);
        let min =parseInt((intervalTime-(hour*60*60))/60);
        let sec = parseInt(intervalTime-(hour*60*60)-min*60);
        mytime[0] =hour;
        mytime[1] =min;
        mytime[2] =sec;
        return mytime;
    }else if((intervalTime/60/60)<1 && (intervalTime/60)>=1){
        let min =parseInt((intervalTime)/60);
        let sec = parseInt(intervalTime-min*60);
        mytime[0] ="00";
        mytime[1] =min;
        mytime[2] =sec;
        return mytime;
    }else if((intervalTime/60)<1 && intervalTime>0){
        let sec = intervalTime;
        mytime[0] ="00";
        mytime[1] ="00";
        mytime[2] =sec;
        return mytime;
    }else{
        mytime[0] ="00";
        mytime[1] ="00";
        mytime[2] ="00";
        return mytime;
    }
}
    _renderRow(projectList) {
        let  mytime=this.transDate(projectList.artwork.investEndDatetime);
        let progrssbar=(projectList.artwork.investsMoney/projectList.artwork.investGoalMoney)*(sizeWidth-24-47);
        let percentage=projectList.artwork.investsMoney/projectList.artwork.investGoalMoney;
        return (
            <View style={[styles0.btmbor,styles0.pb12,styles.pj_items]} >
                <TouchableOpacity >
                    <ImgModule
                        pic={projectList.artwork.picture_url}
                        title={projectList.artwork.title}
                        description={projectList.artwork.brief}
                    />

                </TouchableOpacity>
                <TouchableOpacity >
                    <HeadMaster newObj={{
                                name:projectList.master.name,
                                description:projectList.master.brief,
                                pic:projectList.master.picture_url
                            }}/>
                </TouchableOpacity>
                <ProgressBar newObj={{
                            group1Num:projectList.artwork.investGoalMoney,
                            group1Text:'目标金额',
                            group2Num:mytime.length==3?mytime[0]+'时'+mytime[1]+'分'+mytime[2]+'秒':mytime[0]+'天'+mytime[1]+'时'+mytime[2]+'分',
                            group2Text:'剩余时间',
                            group3Num:projectList.artwork.investorsNum,
                            group3Text:'投资人数',
                            prograssBar:progrssbar,
                            percentage:percentage,
                        }}/>
            </View>

        );
    }


}

//创作
class MakeList extends React.Component {
    render() {
        return (
            <View style={styles0.flex}>
                <ScrollView>
                    <View style={[styles0.btmbor,styles.pj_items]}>
                        <ImgModule
                            pic={'http://pro.efeiyi.com/product/%E8%8C%B6%E9%A9%AC%E5%8F%A4%E9%81%93120160113174841.jpg@!product-details-picture'}
                            title={'项目详情'}
                            description={'大师手作独品，倾心定制,独一无二,灵感再现倾心定制,独一无二'}
                        />
                        <HeadMaster newObj={{
                            name:'朱炳仁2',
                            description:'铜雕技艺国家级传承人',
                            pic:'http://pro.efeiyi.com/product/%E8%8C%B6%E9%A9%AC%E5%8F%A4%E9%81%93120160113174841.jpg@!product-details-picture'
                        }} />
                        <View style={[styles0.topbor,styles0.ml12,styles0.mr12,styles.pj_info]}>
                            <TextLine
                                describe={'最新一次更新：5分钟前'}
                                circleBg={'#f43531'}
                            />
                            <TextLine
                                describe={'预计完工：1月24日'}
                            />
                        </View>
                    </View>

                    <View style={[styles0.btmbor,styles.pj_items]}>
                        <ImgModule
                            pic={'http://pro.efeiyi.com/product/%E8%8C%B6%E9%A9%AC%E5%8F%A4%E9%81%93120160113174841.jpg@!product-details-picture'}
                            title={'项目详情'}
                            description={'大师手作独品，倾心定制,独一无二,灵感再现倾心定制,独一无二'}
                        />
                        <HeadMaster newObj={{
                            name:'朱炳仁2',
                            description:'铜雕技艺国家级传承人',
                            pic:'http://pro.efeiyi.com/product/%E8%8C%B6%E9%A9%AC%E5%8F%A4%E9%81%93120160113174841.jpg@!product-details-picture'
                        }} />
                        <View style={[styles0.topbor,styles0.ml12,styles0.mr12,styles.pj_info]}>
                            <TextLine
                                describe={'创作延时'}
                            />
                            <TextLine
                                describe={'预计完工：2月28日'}
                            />
                        </View>
                    </View>
                </ScrollView>
            </View>



        )
    }
}
//拍卖
class AuctionList extends React.Component {
    render() {
        return (
            <View style={styles0.flex}>
                <ScrollView>
                    <View style={[styles0.btmbor,styles.pj_items]}>
                        <ImgModule
                            pic={'http://pro.efeiyi.com/product/%E8%8C%B6%E9%A9%AC%E5%8F%A4%E9%81%93120160113174841.jpg@!product-details-picture'}
                            title={'项目详情'}
                            description={'大师手作独品，倾心定制,独一无二,灵感再现倾心定制,独一无二'}
                        />
                        <HeadMaster newObj={{
                            name:'朱炳仁',
                            description:'铜雕技艺国家级传承人',
                            pic:'http://pro.efeiyi.com/product/%E8%8C%B6%E9%A9%AC%E5%8F%A4%E9%81%93120160113174841.jpg@!product-details-picture'
                        }} />
                        <View style={[styles0.topbor,styles0.ml12,styles0.mr12,styles.pj_info]}>
                            <TextLine
                                describe={'拍卖时间：3月10日 9:00——15:00'}
                            />
                        </View>
                    </View>


                    <View style={[styles0.btmbor,styles.pj_items]}>
                        <ImgModule
                            pic={'http://pro.efeiyi.com/product/%E8%8C%B6%E9%A9%AC%E5%8F%A4%E9%81%93120160113174841.jpg@!product-details-picture'}
                            title={'项目详情'}
                            description={'大师手作独品，倾心定制,独一无二,灵感再现倾心定制,独一无二'}
                        />
                        <HeadMaster newObj={{
                            name:'朱炳仁',
                            description:'铜雕技艺国家级传承人',
                            pic:'http://pro.efeiyi.com/product/%E8%8C%B6%E9%A9%AC%E5%8F%A4%E9%81%93120160113174841.jpg@!product-details-picture'
                        }} />
                        <View style={[styles0.topbor,styles0.ml12,styles0.mr12,styles.pj_info]}>
                            <TextLine
                                describe={'正在拍卖中...'}
                            />
                            <TextLine
                                describe={'当前价格：10000元'}
                            />
                            <TextLine
                                describe={'出价次数：100次'}
                            />
                        </View>
                    </View>

                    <View style={[styles0.btmbor,styles.pj_items]}>
                        <ImgModule
                            pic={'http://pro.efeiyi.com/product/%E8%8C%B6%E9%A9%AC%E5%8F%A4%E9%81%93120160113174841.jpg@!product-details-picture'}
                            title={'项目详情'}
                            description={'大师手作独品，倾心定制,独一无二,灵感再现倾心定制,独一无二'}
                        />
                        <HeadMaster newObj={{
                            name:'朱炳仁',
                            description:'铜雕技艺国家级传承人',
                            pic:'http://pro.efeiyi.com/product/%E8%8C%B6%E9%A9%AC%E5%8F%A4%E9%81%93120160113174841.jpg@!product-details-picture'
                        }} />
                        <View style={[styles0.topbor,styles0.ml12,styles0.mr12,styles.pj_info]}>
                            <TextLine
                                describe={'拍品得主：游客123'}
                            />
                            <TextLine
                                describe={'成交价：10000元'}
                            />
                        </View>
                    </View>


                </ScrollView>
            </View>



        )
    }
}

//抽奖
class AwardList extends React.Component {
    render() {
        return (
            <View style={styles0.flex}>
                <ScrollView>
                    <View style={[styles0.btmbor,styles.pj_items]}>
                        <ImgModule
                            title={'项目详情'}
                            description={'大师手作独品，倾心定制,独一无二,灵感再现倾心定制,独一无二'}
                            pic={'http://pro.efeiyi.com/product/%E8%8C%B6%E9%A9%AC%E5%8F%A4%E9%81%93120160113174841.jpg@!product-details-picture'}
                        />
                        <HeadMaster newObj={{
                            name:'朱炳仁',
                            description:'铜雕技艺国家级传承人',
                            pic:'http://pro.efeiyi.com/product/%E8%8C%B6%E9%A9%AC%E5%8F%A4%E9%81%93120160113174841.jpg@!product-details-picture'
                        }} />

                        <View style={[styles0.topbor,styles0.ml12,styles0.mr12,styles.pj_info]}>
                            <View style={styles.pj_infoText}>
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

                            <TextLine
                                describe={'拍品得主：游客123'}
                            />

                        </View>
                    </View>
                </ScrollView>
            </View>



        )
    }
}


const styles=StyleSheet.create({
    pj_items:{
        marginTop:8
    },
    pj_info:{
        paddingTop:8,
        paddingBottom:8,
    },
    pj_infoText:{
        height:24
    },
    pj_time:{
        position:'absolute',
        top:0,
        right:0
    },
    circle:{
        width:6,
        height:6,
        marginTop:-10,
        borderRadius:10,
        marginLeft:3
    },
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


})