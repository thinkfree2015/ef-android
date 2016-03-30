/**
 * Created by qiuxi on 2016/2/24.
 */
import React, {Component,StyleSheet,View,Image,Text,ScrollView} from 'react-native';
import ScrollableTabView from 'react-native-scrollable-tab-view';
import {styles as styles0,Header} from './../common/styles';
import {ArtistHead,ArtistItems} from './../common/business';

//主页
export default class Artist extends Component {
    render() {
        return (
            <View style={[styles0.flex]}>
                <Header
                    title={'艺术家'}
                    BackIcon={true}
                    ShareIcon={true}
                />
                <ScrollableTabView>
                    <PersonalIntroduce tabLabel="个人介绍"/>
                    <Project tabLabel="项目" />
                </ScrollableTabView>
            </View>
        )
    }
}


//--------->Tab个人介绍
class PersonalIntroduce extends React.Component{
    render() {
        return (
            <ScrollView>
                <ArtistHead
                    newObj={{
                            url:'http://pro.efeiyi.com/product/%E8%8C%B6%E9%A9%AC%E5%8F%A4%E9%81%93120160113174841.jpg@!product-details-picture',
                            name:'朱炳仁',
                            description:'他很懒，什么都没留下',
                            OneRowsOne1:'5000',
                            OneRowsTwo1:'1500',
                            TwoRowsOne1:'¥10000 ',
                            TwoRowsOne2:'投资金额',
                            TwoRowsTwo1:'¥10100',
                            TwoRowsTwo2:'投资回报',
                            TwoRowsThree1:'100',
                            TwoRowsThree2:'投资者'
                            }}
                    SexIcon={true}  //性别  true是男  false是女
                    HeartEmail={true}  //关注和发送私信  true显示 false隐藏
                    OneRows={false}  //1行布局
                    TwoRows={true}  //2行布局
                    ThreeCol={true} //2行3列布局  true是3列布局 false是2列布局
                />
                <View style={[styles0.pt12,styles0.topbor,styles.vImg]}>
                    <Image style={{height:210}} source={{uri:'http://pro.efeiyi.com/product/%E8%8C%B6%E9%A9%AC%E5%8F%A4%E9%81%93120160113174841.jpg@!product-details-picture'}} />
                    <View style={[styles0.p12,styles.vImgDes]}>
                        <Text style={[styles0.fz11,styles.vImgDesText]}>朱炳仁，铜雕技艺国家级传承人，清同治绍兴“朱府铜艺”四代传人，被中国文联及中国民协命名为中国民间文化杰出传承人，铜雕技艺国家级非物质文化遗产唯一传承人。朱炳仁被誉为“中国当代铜建筑之父”，他独创的熔铜艺术开创了“熔现实主义”新流派，造就出的一种新的美学、视觉、艺术概念，是对世界已有的艺术流派的一种颠覆。他独具风采的诗书画印综合才艺，在国内外有很高评价，他还倾其所能、澄清心虑、规天矩地、以铜为精华创建了中国唯一一座江南铜屋即朱炳仁铜雕艺术博物馆。现为中国工艺美术大师、著名熔铜艺术家，西泠印社社员。</Text>
                    </View>
                </View>

            </ScrollView>

        )
    }
}


//--------->Tab项目
class Project extends React.Component{
    render() {
        return (
            <ScrollView>
                <ArtistHead
                    newObj={{
                            url:'http://pro.efeiyi.com/product/%E8%8C%B6%E9%A9%AC%E5%8F%A4%E9%81%93120160113174841.jpg@!product-details-picture',
                            name:'朱炳仁',
                            description:'他很懒，什么都没留下',
                            OneRowsOne1:'5000',
                            OneRowsTwo1:'1500',
                            TwoRowsOne1:'¥10000 ',
                            TwoRowsOne2:'投资金额',
                            TwoRowsTwo1:'¥10100',
                            TwoRowsTwo2:'投资回报',
                            TwoRowsThree1:'100',
                            TwoRowsThree2:'投资者'
                            }}
                    SexIcon={true}  //性别  true是男  false是女
                    HeartEmail={true}  //关注和发送私信  true显示 false隐藏
                    OneRows={false}  //1行布局
                    TwoRows={true}  //2行布局
                    ThreeCol={true} //2行3列布局  true是3列布局 false是2列布局
                />

                <View style={[styles0.pl12,styles0.pr12,styles0.topbor,styles.vImg]}>
                    <View style={styles0.btmbor}>
                        <ArtistItems newObj={{
                            pic:'http://pro.efeiyi.com/product/%E8%8C%B6%E9%A9%AC%E5%8F%A4%E9%81%93120160113174841.jpg@!product-details-picture',
                            title:'四不猴铜雕摆件',
                            price:'2000',
                            status:'审核阶段',
                            describe:'四不猴铜雕摆件，富有东方哲学，寓意为“不听不应该听的，不看不应该看的，不说不应该说的，不做不应该做的”处世哲学。'
                        }}/>
                    </View>
                    <View style={styles0.btmbor}>
                        <ArtistItems newObj={{
                            pic:'http://pro.efeiyi.com/product/%E8%8C%B6%E9%A9%AC%E5%8F%A4%E9%81%93120160113174841.jpg@!product-details-picture',
                            title:'四不猴铜雕摆件',
                            price:'2000',
                            status:'审核阶段',
                            describe:'四不猴铜雕摆件，富有东方哲学，寓意为“不听不应该听的，不看不应该看的，不说不应该说的，不做不应该做的”处世哲学。'
                        }}/>
                    </View>
                </View>

            </ScrollView>
        )
    }
}




const styles=StyleSheet.create({
    //个人介绍
    vImg:{
        marginTop:25
    },
    vImgDesText:{
        lineHeight:16
    }
})
