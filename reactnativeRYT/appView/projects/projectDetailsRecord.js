/**
 * Created by jiuxuan00 on 2016/2/16.
 */
import React, {Component,StyleSheet,Image,Text,View,ScrollView,TouchableOpacity} from 'react-native';
import {styles as styles0,Header,ArrowLeft} from './../common/styles';
import {TitleBar,InvestorsRecord} from './../common/business';


//主页面
export default class ProjextDetailsRecord extends Component{
    render(){
        return(
            <View style={[styles0.flex]}>
                <Header
                    title={'投资者记录'}
                    BackIcon={true}
                />
                <ScrollView>
                    <View style={[styles0.btmbor,styles0.topbor,styles0.pl12,styles0.pb12,styles0.pr12,styles0.mt9]}>
                        <TitleBar
                            title={'投资者'}
                            pepNum={true}
                            pepNumText={100+'人投资'}
                        />
                        <InvestorsRecord newObj={{
                            pic:'http://pro.efeiyi.com/product/%E8%8C%B6%E9%A9%AC%E5%8F%A4%E9%81%93120160113174841.jpg@!product-details-picture',
                            phone:'13964175327',
                            tzNum:'投资了100元',
                            time:'2016-01-20'
                        }}/>
                        <InvestorsRecord newObj={{
                            pic:'http://pro.efeiyi.com/product/%E8%8C%B6%E9%A9%AC%E5%8F%A4%E9%81%93120160113174841.jpg@!product-details-picture',
                            phone:'13964175327',
                            tzNum:'投资了100元',
                            time:'2016-01-20'
                        }}/>
                        <InvestorsRecord newObj={{
                            pic:'http://pro.efeiyi.com/product/%E8%8C%B6%E9%A9%AC%E5%8F%A4%E9%81%93120160113174841.jpg@!product-details-picture',
                            phone:'13964175327',
                            tzNum:'投资了100元',
                            time:'2016-01-20'
                        }}/>
                        <InvestorsRecord newObj={{
                            pic:'http://pro.efeiyi.com/product/%E8%8C%B6%E9%A9%AC%E5%8F%A4%E9%81%93120160113174841.jpg@!product-details-picture',
                            phone:'13964175327',
                            tzNum:'投资了100元',
                            time:'2016-01-20'
                        }}/>
                    </View>
                </ScrollView>
            </View>
        )
    }
}


const styles=StyleSheet.create({

})
