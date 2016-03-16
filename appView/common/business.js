/**
 * Created by jiuxuan00 on 2016/2/25.
 */
import React,{Component,StyleSheet,Image,View,Text,TouchableOpacity} from 'react-native';
import {styles as styles0,IconHeart,IconEmail,IconMan,IconWoman,IconDiscuss,IconPayment} from './styles';

const IconComplete=require('./../image/complete.png');  //融资完成图标

//------------->艺术家头像部分
export class ArtistHead extends React.Component{

    render(){
        let obj=this.props.newObj;
        return(
            <View style={[styles0.flex,styles0.center]}>
                <Image style={styles.ahImg} source={{uri:obj.url}} />
                <View style={[styles0.center,styles0.flex]}>
                    <View style={[styles0.row,{marginLeft:11}]}>
                        <View><Text style={[styles0.black,styles.ahName]}>{obj.name}</Text></View>
                        <View style={styles0.row}>
                            {
                                this.props.SexIcon?<Image style={styles.ahSex} source={IconMan} />:<Image style={styles.ahSex} source={IconWoman} />
                            }
                        </View>
                    </View>
                    <View><Text style={[styles0.color6,styles0.fz11]}>{obj.description}</Text></View>
                </View>

                {
                    this.props.HeartEmail?
                        <View style={[styles0.row,styles0.flex,styles.ahIcon]}>
                            <TouchableOpacity>
                                <Image style={{width:19,height:18,marginRight:40}} source={IconHeart} />
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <Image style={{width:19,height:18}} source={IconEmail} />
                            </TouchableOpacity>
                        </View>
                        :null
                }

                {
                    this.props.OneRows?
                        <View style={[styles0.row,styles0.vertical,styles.oneRows]}>
                            <View style={styles0.row}>
                                <View style={styles0.vertical}><Text style={[styles0.fz11,styles0.color6]}>关注 {obj.OneRowsOne1}</Text></View>
                            </View>
                            <View style={styles0.row}>
                                <View style={[styles.ahline,styles.ahline2]}></View>
                                <View style={styles0.vertical}><Text style={[styles0.fz11,styles0.color6]}>粉丝 {obj.OneRowsTwo1}</Text></View>
                            </View>
                        </View>
                        :null
                }

                {
                    this.props.TwoRows?
                        <View style={[styles0.row,styles0.vertical,styles.twoRows]}>
                            <View style={styles0.row}>
                                <View style={styles0.center}>
                                    <View style={styles0.vertical}><Text style={[styles0.fz11,styles0.color6]}>{obj.TwoRowsOne1}</Text></View>
                                    <View style={styles0.vertical}><Text style={[styles0.fz11,styles0.color6]}>{obj.TwoRowsOne2}</Text></View>
                                </View>
                            </View>
                            <View style={styles0.row}>
                                <View style={styles.ahline}></View>
                                <View style={styles0.center}>
                                    <View style={styles0.vertical}><Text style={[styles0.fz11,styles0.color6]}>{obj.TwoRowsTwo1}</Text></View>
                                    <View style={styles0.vertical}><Text style={[styles0.fz11,styles0.color6]}>{obj.TwoRowsTwo2}</Text></View>
                                </View>
                            </View>
                            {
                                this.props.ThreeCol?
                                    <View style={styles0.row}>
                                        <View style={styles.ahline}></View>
                                        <View style={styles0.center}>
                                            <View style={styles0.vertical}><Text style={[styles0.fz11,styles0.color6]}>{obj.TwoRowsThree1}</Text></View>
                                            <View style={styles0.vertical}><Text style={[styles0.fz11,styles0.color6]}>{obj.TwoRowsThree2}</Text></View>
                                        </View>
                                    </View>
                                    :null
                            }
                        </View>
                        :null
                }
            </View>
        )


    }
}

//------------->艺术家项目列表
export class ArtistItems extends React.Component{
    render(){
        let obj=this.props.newObj;
        return(
            <View style={[styles0.pb12,styles0.pt12,styles.ahitems]}>
                <Image style={{height:180}} source={{uri:obj.pic}} />
                <View style={styles.ahitemsBox}>
                    <View style={[styles0.vertical,styles.ahitemsH]}><Text style={[styles0.fz11,styles0.black]}>{obj.title}</Text></View>
                    <View style={[styles0.vertical,styles.ahitemsH]}><Text style={[styles0.fz11,styles0.black]}>项目金额：{obj.price}</Text></View>
                    <View style={[styles0.vertical,styles0.center,styles.ahitemsState]}><Text style={[styles0.fz11,styles0.color3]}>{obj.status}</Text></View>
                </View>
                <View>
                    <Text style={[styles0.fz11,styles0.gray,styles.ahitemsT]}>项目描述：{obj.describe}</Text>
                </View>
            </View>

        )
    }
}

//------------->大师头像+名称
export class HeadMaster extends React.Component{
    render(){
        let obj=this.props.newObj;
        return(
            <TouchableOpacity style={styles.hm}>
                <View style={[styles0.row,styles.hmRow]}>
                    <Image style={styles.hmRowImg} source={{uri:obj.pic}} />
                    <Text style={[styles0.fz11,styles0.black]}>{obj.name}</Text>
                    <View style={styles.hmline}></View>
                    <Text style={[styles0.flex,styles0.fz11,styles0.black]} numberOfLines={1}>{obj.description}</Text>
                </View>
            </TouchableOpacity>
        )
    }
}

//------------->标题
export class TitleBar extends React.Component {
    render(){
        return(
            <View style={[styles0.row,styles.titleBar]}>
                <View><Text style={[styles0.fz12,styles0.black]} numberOfLines={1}>{this.props.title}</Text></View>
                {
                    this.props.pepNum?<View style={[styles0.flex,styles0.right]}><Text style={[styles0.fz12,styles0.gray]} numberOfLines={1}>{this.props.pepNumText}</Text></View>:null
                }
            </View>
        )
    }
}

//------------->评论
export class DiscussMod extends React.Component{
    render(){
        let obj=this.props.newObj;
        let replay=this.props.newReplay;
        return(
            <View style={[styles0.mb12,styles0.pt12,styles.dis_Items]}>
                <Image style={styles.dis_Img} source={{uri:obj.pic}} />
                <View style={styles.dis_ask}>
                    <View style={[styles0.row,styles0.center,styles.dis_name]}>
                        <Text style={[styles0.fz11,styles0.black]}>{obj.name}</Text>
                    </View>
                    {
                        this.props.timeHide?null:
                            <View style={[styles0.row,styles0.center,styles.dis_time]}>
                                <Text style={[styles0.fz12,styles0.gray]}>{obj.time}</Text>
                            </View>
                    }
                    <View style={styles.dis_des}>
                        <Text style={[styles0.fz11,styles0.black,styles.dis_txt]}>{obj.description}</Text>
                    </View>
                </View>
                {/*评论回复*/}
                {
                    this.props.replayHide?
                        <View>
                            <View style={styles0.mb6}>
                                <Text style={[styles0.fz11,styles0.black,styles0.flex]}>{replay.anInfo}</Text>
                            </View>
                        </View>
                        :null
                }


            </View>
        )
    }
}

//------------->进度条部分
export class ProgressBar extends React.Component{
    render(){
        let obj=this.props.newObj;
        return(
            <View>
                <View style={[styles0.row,styles0.pl12,styles0.pr12,styles.progress]}>
                    <View style={[styles0.flex,styles0.row,styles.progressBg]}>
                        <View style={[styles0.bg0,styles.progressLine,{width:obj.prograssBar}]}></View>
                        <View style={[styles0.bg0,styles.progressIcon]}></View>
                    </View>
                    <View style={[styles0.center,styles0.vertical,styles.progressText]}><Text style={[styles0.fz11,styles0.black]}>{(obj.percentage*100)+"%"}</Text></View>
                </View>

                <View style={[styles0.row,styles0.ml12,styles0.mr12,styles.progressInfo]}>
                    <View style={[styles0.flex,styles0.left]}>
                        <Text style={[styles0.fz12,styles0.black]}>{obj.group1Num}</Text>
                        <Text style={[styles0.fz11,styles0.gray]}>{obj.group1Text}</Text>
                    </View>
                    <View style={[styles0.flex,styles0.center]}>
                        <Text style={[styles0.fz12,styles0.black]}>{obj.group2Num}</Text>
                        <Text style={[styles0.fz11,styles0.gray]}>{obj.group2Text}</Text>
                    </View>
                    <View style={[styles0.flex,styles0.right]}>
                        <Text style={[styles0.fz12,styles0.black]}>{obj.group3Num}</Text>
                        <Text style={[styles0.fz11,styles0.gray]}>{obj.group3Text}</Text>
                    </View>
                </View>
            </View>
        )
    }
}

//------------->投资者记录
export class InvestorsRecord extends React.Component{
    render(){
        let obj=this.props.newObj;
        return(
            <View style={[styles0.row,styles0.flex,styles0.topbor,styles0.center,styles.rd_items]}>
                <Image style={styles.rd_img} source={{uri:obj.pic}} />
                <View style={[styles0.flex]}>
                    <Text style={[styles0.fz11,styles0.black]}>{obj.phone}</Text>
                </View>
                <View style={[styles0.flex,styles0.center]}>
                    <Text style={[styles0.fz11,styles0.black]} numberOfLines={1}>{obj.tzNum}</Text>
                </View>
                <View style={[styles0.flex,styles0.right]}>
                    <Text style={ [styles0.fz11,styles0.gray]} numberOfLines={1}>{obj.time}</Text>
                </View>
            </View>
        )
    }
}

//------------->详情页第一屏大图
export class TopImg extends React.Component {
    render(){
        return(
            <View>
                <Image style={[styles0.mt9,styles.des_tp]} source={{uri:this.props.pic}} />
                <View style={[styles0.ml12,styles0.mr12,styles.des_tpbox]}>
                    <Text style={styles.des_tbtext} numberOfLines={1}>{this.props.text}</Text>
                </View>
                {
                    this.props.IconComplete?<Image style={styles.des_tpImg} source={IconComplete}/>:null
                }
            </View>
        )
    }
}

//------------->作品详情
export class ArtworkDetails extends React.Component{
    render(){
        return(
            <View style={[styles0.flex,styles0.mt12,styles0.pl12,styles0.pr12]}>
                <Image style={{height:200}} source={{uri:this.props.pic}} />
                <Text style={[styles0.fz11,styles0.mt6,styles0.gray]}>{this.props.describe}</Text>
            </View>
        )
    }
}

//------------->拍卖记录
export class AuctionRecord extends React.Component{
    render(){
        return(
            <View style={[styles0.row,styles0.flex,styles0.center,{height:this.props.height}]}>
                <View style={[styles0.flex]}>
                    <Text style={[styles0.fz11,styles0.black]}>{this.props.name}</Text>
                </View>
                <View style={[styles0.flex,styles0.center]}>
                    <Text style={[styles0.fz11,styles0.black]} numberOfLines={1}>{this.props.price}</Text>
                </View>
                <View style={[styles0.flex,styles0.right,{flex:2}]}>
                    <Text style={ [styles0.fz11,styles0.gray]} numberOfLines={1}>{this.props.time}</Text>
                </View>
            </View>
        )
    }
}

//------------->详情页底部固定按钮
export class StickyBottom extends React.Component{
    render(){
        return(
            <View style={[styles0.row,styles0.bg0,styles.sb_black]}>
                <TouchableOpacity style={[styles0.flex,styles0.center,styles0.vertical,styles.fix_btn]}>
                    <Image style={{width:19,height:18,marginBottom:3}} source={this.props.btnOneIcon}/>
                    <Text style={[styles0.white,styles0.fz9]}>{this.props.btnOneText}</Text>
                </TouchableOpacity>
                {
                    this.props.buttonTwo?
                        <TouchableOpacity style={[styles0.flex,styles0.center,styles0.vertical,styles.fix_btn]}>
                            <Image style={{width:19,height:18,marginBottom:3}} source={this.props.btnTwoIcon}/>
                            <Text style={[styles0.white,styles0.fz9]}>{this.props.btnTwoText}</Text>
                        </TouchableOpacity>
                        :null
                }

            </View>
        )
    }
}

const styles=StyleSheet.create({
    //大师头像+名称
    hm:{
        height:54,
        marginLeft:12,
        marginRight:12,
    },
    hmRow:{
        height:27,
        alignItems:'center',
        marginTop:13,
        marginBottom:13,
    },
    hmRowImg:{
        width:27,
        height:27,
        marginRight:8,
        borderRadius:100,
    },
    hmline:{
        width:1,
        height:8,
        backgroundColor:'#000',
        marginTop:2,
        marginLeft:10,
        marginRight:10,
    },
    //标题
    titleBar:{
        height:37,
        borderColor:'#e2e2e2',
        alignItems:'center',
        flexDirection:'row',
    },
    //评论
    dis_Items:{
        paddingLeft:42,
    },
    dis_Img:{
        width:30,
        height:30,
        borderRadius:30,
        position:'absolute',
        top:12,
        left:0,
    },
    dis_name:{
        height:14,
    },
    dis_time:{
        height:22,
    },
    dis_txt:{
        lineHeight:18
    },

    //big(艺术家头像部分)
    oneRows:{
        marginTop:20,
    },
    twoRows:{
        marginTop:20,
    },
    ahImg:{
        width:78,
        height:78,
        borderRadius:100,
        marginTop:27,
        marginBottom:20,
    },
    ahSex:{
        width:11,
        height:13,
        marginTop:5,
        marginLeft:8
    },
    ahName:{
        fontSize:15,
        marginBottom:13,
    },
    ahIcon:{
        marginTop:20,
    },
    ahline:{
        width:1,
        height:11,
        borderLeftWidth:0.5,
        borderColor:'#ccc',
        marginLeft:14,
        marginRight:14,
        marginTop:13,
    },
    ahline2:{
        marginTop:3
    },
    active:{
        margin:0
    },
    //艺术家项目列表
    ahitems:{
        borderColor:'#e4e4e4',
    },
    ahitemsBox:{
        paddingTop:8,
        paddingBottom:8,
        paddingRight:65
    },
    ahitemsH:{
        height:20,
    },
    ahitemsT:{
        lineHeight:18
    },
    ahitemsState:{
        width:65,
        height:20,
        backgroundColor:'#f0f0f0',
        borderRadius:5,
        position:'absolute',
        top:8,
        right:0
    },
    //进度条
    progress:{
        height:10,
    },
    progressBg:{
        height:6,
        marginTop:2,
        backgroundColor:'#ccc',
    },
    progressLine:{
        height:6,
        marginRight:3
    },
    progressIcon:{
        width:6,
        height:6,
        transform: [{rotate: '45deg'}],
        marginLeft:-5,
    },
    progressText:{
        width:47,
        height:6,
        marginTop:1,
    },
    progressInfo:{
        marginTop:10,
    },
    //投资者记录
    rd_items:{
        height:45,
        paddingLeft:35
    },
    rd_img:{
        width: 27,
        height: 27,
        borderRadius: 30,
        position:'absolute',
        top:8,
        left:0
    },
    //详情页第一屏大图
    des_tp:{
        height:320,
        resizeMode:'cover'
    },
    des_tpbox:{
        position:'absolute',
        bottom:12
    },
    des_tbtext:{
        fontSize:14,
        color:'#fff',
    },
    des_tpImg:{
        width:39,
        height:39,
        position:'absolute',
        bottom:12,
        right:12
    },
    //底部悬浮 评论和投资按钮
    sb_black:{
        height:49,
    },
    fix_btn:{
        backgroundColor:'#000'
    },



})
