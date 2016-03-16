/**
 * Created by jiuxuan00 on 2016/3/1.
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
import {styles as styles0,Header} from './../common/styles';
import {ArtistHead,ArtistItems,TitleBar} from './../common/business';

//主页面
export default class Artist extends Component {
    render() {
        return (
            <View style={[styles0.flex]}>
                <Header
                    title={'三毛猫'}
                    BackIcon={true}
                />
                <ScrollView tabBarUnderlineColor="#000" tabBarActiveTextColor ="#000" tabBarInactiveTextColor="#000">
                    <ArtistHead
                        newObj={{
                            url:'http://pro.efeiyi.com/product/%E8%8C%B6%E9%A9%AC%E5%8F%A4%E9%81%93120160113174841.jpg@!product-details-picture',
                            name:'三毛猫',
                            description:'他很懒，什么都没留下',
                            OneRowsOne1:'5000',
                            OneRowsTwo1:'1500',
                            TwoRowsOne1:'¥10000 ',
                            TwoRowsOne2:'投资金额',
                            TwoRowsTwo1:'¥10100',
                            TwoRowsTwo2:'投资回报',
                            TwoRowsThree1:'100',
                            TwoRowsThree2:'粉丝'
                            }}
                        SexIcon={false}  //性别  true是男  false是女
                        HeartEmail={true}  //关注和发送私信  true显示 false隐藏
                        OneRows={false}  //1行布局
                        TwoRows={true}  //2行布局
                        ThreeCol={true} //2行3列布局  true是3列布局 false是2列布局
                    />

                    <View style={[styles0.pl12,styles0.pr12,styles0.topbor,styles0.mt25]}>
                        <View style={styles0.btmbor}>
                            <TitleBar title={'投资项目'} />
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
                        <View style={styles0.btmbor}>
                            <ArtistItems newObj={{
                                pic:'http://pro.efeiyi.com/product/%E8%8C%B6%E9%A9%AC%E5%8F%A4%E9%81%93120160113174841.jpg@!product-details-picture',
                                title:'四不猴铜雕摆件',
                                price:'2000',
                                status:'拍卖阶段',
                                describe:'四不猴铜雕摆件，富有东方哲学，寓意为“不听不应该听的，不看不应该看的，不说不应该说的，不做不应该做的”处世哲学。'
                            }}/>
                        </View>
                    </View>

                </ScrollView>
            </View>
        )
    }
}

const styles=StyleSheet.create({
    user_tzpro:{

    }
})