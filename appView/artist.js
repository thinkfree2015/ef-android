/**
 * Created by qiuxi on 2016/2/24.
 */
import React, {
    Component,
    StyleSheet,
    View,
    Image,
    Text,
    ScrollView,
    TouchableOpacity
} from 'react-native';
import ScrollableTabView from 'react-native-scrollable-tab-view';
import Util from './common/util';
import Header from './common/header';

//--------->头像部分
export class ArtistHead extends React.Component{
    render(){
        let obj=this.props.newObj;
        return(
            <View style={[styles.center,ah.aHead]}>
                <Image style={ah.ahImg} source={{uri:obj.url}} />
                <View style={[ah.vText,styles.center]}>
                    <Text style={[styles.black,ah.ahName]}>{obj.name}</Text>
                    <Text style={[styles.color6,styles.fz11]}>{obj.description}</Text>
                </View>
                <View style={[styles.row,ah.ahIcon,styles.flex]}>
                    <TouchableOpacity>
                        <Image style={{width:21,height:18,marginRight:40}} source={require('./image/artist/iconHeart.png')} />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image style={{width:23,height:18}} source={require('./image/artist/iconEmail.png')} />
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}
const ah=StyleSheet.create({
    ahImg:{
        width:78,
        height:78,
        borderRadius:100,
        marginTop:27,
        marginBottom:20,
    },
    ahName:{
        fontSize:15,
        marginBottom:13,
    },
    ahIcon:{
        marginTop:20,
        marginBottom:20
    }
})

//--------->Tab个人介绍
export class PersonalIntroduce extends React.Component{
    render() {
        return (
            <ScrollView>
                <ArtistHead newObj={{
                       url:'http://pro.efeiyi.com/product/%E8%8C%B6%E9%A9%AC%E5%8F%A4%E9%81%93120160113174841.jpg@!product-details-picture',
                       name:'朱炳仁',
                       description:'铜雕技艺国家级传承人'
                }} />
                <View style={[styles.row,styles.vBox]}>
                    <View style={[styles.center,styles.items]}>
                        <View style={styles.itemsv}><Text style={[styles.fz11,styles.color6]}>1000</Text></View>
                        <View style={styles.itemsv}><Text style={[styles.fz11,styles.color6]}>关注者</Text></View>
                    </View>
                    <View style={pi.line}></View>
                    <View style={[styles.center,styles.items]}>
                        <View style={styles.itemsv}><Text style={[styles.fz11,styles.color6]}>¥20000</Text></View>
                        <View style={styles.itemsv}><Text style={[styles.fz11,styles.color6]}>被投资金额 </Text></View>
                    </View>
                    <View style={pi.line}></View>
                    <View style={[styles.center,styles.items]}>
                        <View style={styles.itemsv}><Text style={[styles.fz11,styles.color6]}>100</Text></View>
                        <View style={styles.itemsv}><Text style={[styles.fz11,styles.color6]}>投资者</Text></View>
                    </View>
                </View>

                <View style={styles.vImg}>
                    <Image style={{height:210}} source={{uri:'http://pro.efeiyi.com/product/%E8%8C%B6%E9%A9%AC%E5%8F%A4%E9%81%93120160113174841.jpg@!product-details-picture'}} />
                    <View style={styles.vImgDes}>
                        <Text style={[styles.fz11,styles.vImgDesText]}>朱炳仁，铜雕技艺国家级传承人，清同治绍兴“朱府铜艺”四代传人，被中国文联及中国民协命名为中国民间文化杰出传承人，铜雕技艺国家级非物质文化遗产唯一传承人。朱炳仁被誉为“中国当代铜建筑之父”，他独创的熔铜艺术开创了“熔现实主义”新流派，造就出的一种新的美学、视觉、艺术概念，是对世界已有的艺术流派的一种颠覆。他独具风采的诗书画印综合才艺，在国内外有很高评价，他还倾其所能、澄清心虑、规天矩地、以铜为精华创建了中国唯一一座江南铜屋即朱炳仁铜雕艺术博物馆。现为中国工艺美术大师、著名熔铜艺术家，西泠印社社员。</Text>
                    </View>
                </View>

            </ScrollView>

        )
    }
}
const pi=StyleSheet.create({
    line:{
        width:1*Util.pixel,
        height:11,
        backgroundColor:'#ccc',
        marginLeft:14,
        marginRight:14,
        marginTop:13,
    }
})

//--------->Tab项目
export class Project extends React.Component{
    render() {
        return (
            <ScrollView>
                <ArtistHead newObj={{
                       url:'http://pro.efeiyi.com/product/%E8%8C%B6%E9%A9%AC%E5%8F%A4%E9%81%93120160113174841.jpg@!product-details-picture',
                       name:'朱炳仁',
                       description:'铜雕技艺国家级传承人'
                }} />

                <View style={[styles.row,styles.vBox]}>
                    <View style={[styles.center,styles.items]}>
                        <View style={styles.itemsv}><Text style={[styles.fz11,styles.color6]}>1000</Text></View>
                        <View style={styles.itemsv}><Text style={[styles.fz11,styles.color6]}>关注者</Text></View>
                    </View>
                    <View style={pi.line}></View>
                    <View style={[styles.center,styles.items]}>
                        <View style={styles.itemsv}><Text style={[styles.fz11,styles.color6]}>¥20000</Text></View>
                        <View style={styles.itemsv}><Text style={[styles.fz11,styles.color6]}>被投资金额 </Text></View>
                    </View>
                    <View style={pi.line}></View>
                    <View style={[styles.center,styles.items]}>
                        <View style={styles.itemsv}><Text style={[styles.fz11,styles.color6]}>100</Text></View>
                        <View style={styles.itemsv}><Text style={[styles.fz11,styles.color6]}>投资者</Text></View>
                    </View>
                </View>

                <View style={styles.proItems}>
                    <Image style={{height:180}} source={{uri:'http://pro.efeiyi.com/product/%E8%8C%B6%E9%A9%AC%E5%8F%A4%E9%81%93120160113174841.jpg@!product-details-picture' }} />
                    <View style={styles.proItemsV}>
                        <View style={[styles.proItemsText]}><Text style={[styles.fz12,styles.black]}>四不猴铜雕摆件</Text></View>
                        <View style={styles.proItemsText}><Text style={[styles.fz12,styles.black]}>项目金额：20000</Text></View>
                        <View style={styles.proItemsStatus}><Text style={[styles.fz11,styles.color3]}>审核阶段</Text></View>
                    </View>
                    <View>
                        <Text style={[styles.fz11,styles.gray,styles.proItemsText2]}>项目描述：四不猴铜雕摆件，富有东方哲学，寓意为“不听不应该听的，不看不应该看的，不说不应该说的，不做不应该做的”处世哲学。</Text>
                    </View>
                </View>

                <View style={styles.proItems}>
                    <Image style={{height:180}} source={{uri:'http://pro.efeiyi.com/product/%E8%8C%B6%E9%A9%AC%E5%8F%A4%E9%81%93120160113174841.jpg@!product-details-picture' }} />
                    <View style={styles.proItemsV}>
                        <View style={[styles.proItemsText]}><Text style={[styles.fz12,styles.black]}>四不猴铜雕摆件</Text></View>
                        <View style={styles.proItemsText}><Text style={[styles.fz12,styles.black]}>项目金额：20000</Text></View>
                        <View style={styles.proItemsStatus}><Text style={[styles.fz11,styles.color3]}>审核阶段</Text></View>
                    </View>
                    <View>
                        <Text style={[styles.fz11,styles.gray,styles.proItemsText2]}>项目描述：四不猴铜雕摆件，富有东方哲学，寓意为“不听不应该听的，不看不应该看的，不说不应该说的，不做不应该做的”处世哲学。</Text>
                    </View>
                </View>

            </ScrollView>
        )
    }
}


//主页
export default class Artist extends Component {
    render() {
        return (
            <View style={[styles.flex]}>
                <Header initObj={{title:'艺术家'}} />
                <ScrollableTabView tabBarUnderlineColor="000" tabBarActiveTextColor ="#000" tabBarInactiveTextColor="#000">
                    <PersonalIntroduce tabLabel="个人介绍"/>
                    <Project tabLabel="项目" />
                </ScrollableTabView>

            </View>
        )
    }
}

const styles=StyleSheet.create({
    row:{
      flexDirection:'row'
    },
    flex:{
        flex:1
    },
    center:{
        alignItems:'center'
    },
    gray:{
        color:'#808080'
    },
    color3:{
        color:'#333333'
    },
    color6:{
      color:'#666666'
    },
    fz11:{
        fontSize:11,
    },
    fz12:{
        fontSize:12,
    },
    black:{
      color:'#000'
    },
    vBox:{
        justifyContent:'center',
        borderBottomWidth:0.5,
        borderColor:'#e4e4e4',
        paddingBottom:25,
    },
    itemsv:{
        height:18,
        justifyContent:'center',
    },
    vImg:{
        marginTop:12
    },
    vImgDes:{
        padding:12,
    },
    vImgDesText:{
        lineHeight:16
    },
    //列表
    proItems:{
         marginLeft:12,
         marginRight:12,
         marginTop:12,
         paddingBottom:10,
         borderBottomWidth:0.5,
         borderColor:'#e4e4e4',
    },
    proItemsV:{
        paddingTop:8,
        paddingBottom:8,
        paddingRight:65,
    },
    proItemsText:{
        height:20,
        justifyContent:'center',
    },
    proItemsText2:{
        lineHeight:16
    },
    proItemsStatus:{
        width:65,
        height:20,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#f0f0f0',
        borderRadius:5,
        position:'absolute',
        top:8,
        right:0
    }





})
