/**
 * Created by Administrator on 2016/2/1.
 */
import React, {
    Component,
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
} from 'react-native';
import ScrollableTabView from 'react-native-scrollable-tab-view';
import HomeFinancingList from './financing_list';  //融资
import HomeMakeList from './make_list';  //制作
import HomeAuctionList from './auction_list';  //拍卖
import HomeAwardList from './award_list';  //抽奖

export default class RongYiCast extends Component {
    render() {
        return (
            <ScrollableTabView tabBarUnderlineColor="000" tabBarActiveTextColor ="#000" tabBarInactiveTextColor="#000">
                <HomeFinancingList tabLabel="融资"/>
                <HomeMakeList tabLabel="制作" />
                <HomeAuctionList tabLabel="拍卖" />
                <HomeAwardList tabLabel="抽奖" />
            </ScrollableTabView>
        )
    }
}


const styles=StyleSheet.create({
    row:{
      flexDirection:'row'
    },
    flex:{
        flex:1,
    }
})

