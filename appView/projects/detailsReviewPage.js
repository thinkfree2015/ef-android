/**
 * Created by qiuxi on 2016/2/1.
 */
import React, {Component,StyleSheet,Image,View,Text,TextInput,ScrollView,TouchableOpacity} from 'react-native';
import {styles as styles0,Header} from './../common/styles';
import {DiscussMod} from './../common/business';

//主页面
export default class DetailsReviewPage extends Component {
    render() {
        return (
           <View style={styles0.flex}>
               <Header
                   title={'评论'}
                   BackIcon={true}
               />
               <ScrollView>
                   <View style={[styles0.mt9,styles0.pl12,styles0.pr12,styles0.topbor,styles0.btmbor]}>
                       <View style={[styles0.topbor,styles.rp_items]}>
                           <DiscussMod
                               newObj={{
                                    pic:'http://pro.efeiyi.com/product/%E8%8C%B6%E9%A9%AC%E5%8F%A4%E9%81%93120160113174841.jpg@!product-details-picture',
                                    name:'Joe',
                                    description:'原来铜雕是一门高深的技艺，之前从来没有关注过，觉得中国的非 遗文化值得我们去传承。',
                               }}
                               timeHide={true}
                           />
                       </View>
                       <View style={[styles0.topbor,styles.rp_items]}>
                           <DiscussMod
                               newObj={{
                                    pic:'http://pro.efeiyi.com/product/%E8%8C%B6%E9%A9%AC%E5%8F%A4%E9%81%93120160113174841.jpg@!product-details-picture',
                                    name:'Joe',
                                    description:'原来铜雕是一门高深的技艺，之前从来没有关注过，觉得中国的非 遗文化值得我们去传承。',
                               }}
                               timeHide={true}
                           />
                       </View>
                   </View>
               </ScrollView>

               <View style={[styles0.pl12,styles0.pr12,styles.sb_box]}>
                   <View style={styles.sb_ipt}>
                       <TextInput style={{fontSize:10,backgroundColor:'#fff',flex:1}}
                                  underlineColorAndroid={'transparent'}
                                  defaultValue='默认信息默认信息默认信息'
                       />
                   </View>
                   <TouchableOpacity style={[styles0.center,styles0.vertical,styles0.bg0,styles.sb_btn]}>
                       <Text style={[styles0.white,styles0.fz11]}>发送</Text>
                   </TouchableOpacity>
               </View>

           </View>
        )
    }
}



const styles=StyleSheet.create({
    rp_items:{
      marginTop:-0.5
    },
    sb_box:{
        paddingTop:5,
        paddingBottom:5,
        backgroundColor:'#e4e4e4',
    },
    sb_ipt:{
        height:32,
        paddingRight:50
    },
    sb_btn:{
        width:40,
        height:32,
        position:'absolute',
        top:5,
        right:12
    }
})