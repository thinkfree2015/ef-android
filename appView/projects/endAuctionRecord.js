/**
 * Created by jiuxuan00 on 2016/2/16.
 */
import React, {Component,StyleSheet,Image,Text,View,ScrollView,TouchableOpacity} from 'react-native';
import {styles as styles0,Header} from './../common/styles';
import {TitleBar,InvestorsRecord,AuctionRecord} from './../common/business';


//主页面
export default class ProjextDetailsRecord extends Component{
    render(){
        return(
            <View style={[styles0.flex]}>
                <Header
                    title={'拍卖记录'}
                    BackIcon={true}
                />
                <ScrollView>
                    <View style={[styles0.btmbor,styles0.topbor,styles0.pl12,styles0.pr12,styles0.mt9]}>
                        <View style={{marginTop:-1}}>
                            <View style={styles0.topbor}>
                                <AuctionRecord
                                    height={37}
                                    name={'三毛猫'}
                                    price={'100元'}
                                    time={'2016-01-20  15:00:00'}
                                />
                            </View>
                            <View style={styles0.topbor}>
                                <AuctionRecord
                                    height={37}
                                    name={'三毛猫'}
                                    price={'100元'}
                                    time={'2016-01-20  15:00:00'}
                                />
                            </View>
                            <View style={styles0.topbor}>
                                <AuctionRecord
                                    height={37}
                                    name={'三毛猫'}
                                    price={'100元'}
                                    time={'2016-01-20  15:00:00'}
                                />
                            </View>
                            <View style={styles0.topbor}>
                                <AuctionRecord
                                    height={37}
                                    name={'三毛猫'}
                                    price={'100元'}
                                    time={'2016-01-20  15:00:00'}
                                />
                            </View>
                            <View style={styles0.topbor}>
                                <AuctionRecord
                                    height={37}
                                    name={'三毛猫'}
                                    price={'100元'}
                                    time={'2016-01-20  15:00:00'}
                                />
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </View>
        )
    }
}


const styles=StyleSheet.create({

})
