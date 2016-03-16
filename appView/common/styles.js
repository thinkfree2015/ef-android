/**
 * Created by jiuxuan on 2016/2/25.
 */
import React,{Component,StyleSheet,View,Image,Text,TouchableOpacity,Dimensions} from 'react-native';
//图标
export const [IconDiscuss,IconInvestment,IconBond,IconDesTips,IconDesTipsGray,IconFlowImg,
    IconHeart,IconEmail,IconMan,IconWoman,IconMes1,IconMes2,IconMes3,LogoWechat,LogoSina,LogoQQ,IconPayment]=[
    require('./../image/icon-discuss.png'),    //评论图标
    require('./../image/icon-invest.png'), //投资
    require('./../image/icon-bond.png'),       //缴纳保证金
    require('./../image/icon-tips.png'),        //项目进度图标(黑色)
    require('./../image/icon-tips-gray.png'),    //项目进度图标(灰色)
    require('./../image/img-flow.png'),        //图片
    require('./../image/icon-focus.png'),     //关注图标
    require('./../image/icon-email.png'),     //私信图标
    require('./../image/icon-man.png'),       //男性图标
    require('./../image/icon-woman.png'),     //女性图标
    require('./../image/icon-mes1.png'),      //通知图标
    require('./../image/icon-mes2.png'),      //评论图标
    require('./../image/icon-mes3.png'),      //私信图标
    require('./../image/logo_weixin.png'),  //登录微信图标
    require('./../image/logo_sina.png'),    //登录新浪图标
    require('./../image/logo_qq.png'),       //登录qq图标
    require('./../image/icon-payment.png'),
]



//屏幕尺寸
export const [sizeWidth,sizeHeight]=[
    Dimensions.get('window').width,//屏幕宽度
    Dimensions.get('window').height //屏幕高度
]

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
//头部导航
export class Header extends Component {
    render(){
        const IconShare=require('./../image/share_icon.png'); //分享图标
        return(
            <View style={[styles.row,styles.center,styles.pl12,styles.pr12,styles.topbor,styles.btmbor,styles.bgf,styles.header]}>
                {
                    //返回上一页
                    this.props.BackIcon?
                        <TouchableOpacity style={[styles.h_left]} onPress={this.props.backPress} >
                            <ArrowLeft />
                        </TouchableOpacity>
                        :null
                }

                {
                    //申请艺术家
                    this.props.applyText?
                        <TouchableOpacity style={styles.h_left} onPress={this.props.applyPress}>
                            <Text style={[styles.fz13,styles.black]}>申请为艺术家</Text>
                        </TouchableOpacity>
                        :null
                }

                <View style={[styles.row,styles.flex,styles.center,styles.vertical]}>
                    <Text style={[styles.color3,styles.fz14]} numberOfLines={1}>{this.props.title}</Text>
                </View>

                {
                    //右侧分享
                    this.props.ShareIcon?
                        <TouchableOpacity style={[styles.h_right,{top:15}]} onPress={this.props.sharePress}>
                            <Image style={styles.share} source={IconShare} />
                        </TouchableOpacity>
                        :null
                }

                {
                    //右侧保存
                    this.props.saveBtn?
                        <TouchableOpacity style={styles.h_right} onPress={this.props.savePress}>
                            <Text style={styles.black}>保存</Text>
                        </TouchableOpacity>
                        :null
                }

                {
                    //右侧设置
                    this.props.setting?
                        <TouchableOpacity style={styles.h_right} onPress={this.props.setPress}>
                            <Text style={styles.black}>设置</Text>
                        </TouchableOpacity>
                        :null
                }

                {
                    //右侧完成
                    this.props.complete?
                        <TouchableOpacity style={styles.h_right} onPress={this.props.completePress}>
                            <Text style={styles.black}>完成</Text>
                        </TouchableOpacity>
                        :null
                }

            </View>
        )
    }
}

//通栏按钮(白色背景、上下边框、右侧箭头)
export class LayoutBtn extends React.Component {
    render() {
        return (
            <TouchableOpacity style={[styles.topbor,styles.btmbor,styles.pl12,styles.pr12,styles.row,styles.center,styles.xx_items,{marginTop:this.props.marginTop}]}>
                {/*左侧图标*/}
                {
                    this.props.iconShow?<Image style={[styles.xx_icon]} source={this.props.renderIcon} />:null
                }
                {/*按钮上显示的文字*/}
                <View style={styles.vertical}>
                    <Text style={[styles.black,styles.fz14,styles.xx_text]}>{this.props.btnText}</Text>
                </View>
                <View style={[styles.right,styles.flex]}>
                    <View style={[styles.row,styles.center]}>
                        {/*右侧用户头像*/}
                        {
                            this.props.userImg?<View><Image style={[styles.xx_iconuser]} source={{uri:this.props.renderUserImg}} /></View>:null
                        }
                        {/*右侧箭头*/}
                        <ArrowRight />
                    </View>
                </View>
            </TouchableOpacity>
        )
    }
}

//通栏按钮(黑色背景)
export class LayoutBlackBtn extends React.Component{
    render(){
        let obj=this.props.newObj;
        return(
            <TouchableOpacity style={[styles.row,styles.btn]}>
                <View style={[styles.row,styles.center,styles.flex,styles.vertical,styles.btn]}>
                    <Text style={[styles.fz12,styles.white]}>{obj.text}</Text>
                </View>
            </TouchableOpacity>
        )
    }
}

//弹出框Alert
export class ModalAlert extends React.Component{
    render(){
        return(
            <View style={[styles.modal_dialog,{width:sizeWidth,height:sizeHeight}]}>
                <View style={[styles.bgf,styles.center,styles.modal_bd,{width:sizeWidth-100}]}>
                    <View style={{padding:12,height:109,justifyContent:'center'}}>
                        <Text style={[styles.fz11,styles.black]} numberOfLines={5}>{this.props.content}</Text>
                    </View>
                    <TouchableOpacity style={[styles.center,styles.vertical,styles.bg0,styles.modal_btn]}>
                        <Text style={[styles.white,styles.fz12]}>{this.props.btnText}</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}



//公共样式
export const styles=StyleSheet.create({
    row:{flexDirection:'row'},
    flex:{flex:1},
    left:{alignSelf:'flex-start'},
    right:{alignItems:'flex-end'},
    center:{alignItems:'center'},
    vertical:{justifyContent:'center'},
    fz9:{fontSize:9},
    fz10:{fontSize:10},
    fz11:{fontSize:11},
    fz12:{fontSize:12},
    fz13:{fontSize:13},
    fz14:{fontSize:14},
    fz15:{fontSize:15},
    fz16:{fontSize:16},
    fz18:{fontSize:18},
    white:{color:'#fff'},
    black:{color:'#000'},
    gray:{color:'#808080'},
    color3:{color:'#333'},
    color6:{color:'#666'},
    color3b:{color:'#3b99ff'},
    bold:{fontWeight:'bold'},
    mt6:{marginTop:6},
    mt9:{marginTop:9},
    mb9:{marginBottom:9},
    mt12:{marginTop:12},
    mb6:{marginBottom:6},
    mb12:{marginBottom:12},
    mt25:{marginTop:25},
    mb25:{marginBottom:25},
    ml12:{marginLeft:12},
    mr12:{marginRight:12},
    pl12:{paddingLeft:12},
    pr12:{paddingRight:12},
    pt12:{paddingTop:12},
    pb12:{paddingBottom:12},
    p12:{padding:12},
    lh18:{lineHeight:18},
    topbor:{borderTopWidth:0.5,borderColor:'#e2e2e2'},
    btmbor:{borderBottomWidth:0.5,borderColor:'#e2e2e2',},
    bor:{borderWidth:0.5,borderColor:'#e2e2e2'},
    bg0:{backgroundColor:'#000'},
    bgc:{backgroundColor:'#ccc'},
    bgf:{backgroundColor:'#fff'},
    //弹出层背景
    alert:{backgroundColor:'rgba(0,0,0,.5)',position:'absolute',top:0,left:0},
    //Header
    header:{height:44},
    h_left:{height:16,left:0,position:'absolute',top:14,left:12},
    h_right:{position:'absolute',top:12,right:12},
    //箭头
    arrow:{borderLeftWidth:1,borderBottomWidth:1,width:10,height:10,borderColor:'#333',},
    //箭头-左
    aLeft:{transform:[{rotate:'45deg'}],marginTop:3,marginLeft:2,},
    //箭头-右
    aRight:{transform:[{rotate:'-135deg'}],marginTop:0,marginRight:2},
    //箭头-下
    aDown:{transform:[{rotate:'-45deg'}],marginBottom:2},
    //分享
    share:{width:19,height:15},
    //通栏按钮(黑色背景)
    btn:{height:35,backgroundColor:'#000'},
    //通栏按钮(白色背景、上下边框、右侧箭头)
    xx_items:{borderColor:'#e2e2e2',height:42},
    xx_text:{marginLeft:7},
    xx_icon:{width:13,height:15,},
    xx_iconuser:{width:30,height:30,borderRadius:30,marginRight:5},
    //弹出框
    modal_dialog:{
        alignItems:'center',
        justifyContent:'center'
    },
    modal_bd:{
        height:156,
        borderRadius:10,
        backgroundColor:'#fff'
    },
    modal_btn:{
        width:180,
        height:35,
    }
});