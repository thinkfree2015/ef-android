/**
 * Created by jiuxuan on 2016/2/24.
 */
import React, {Component,StyleSheet,View,Image,Text,ScrollView,TouchableOpacity} from 'react-native';

import {styles as styles0,Header} from './../common/styles';
import {DiscussMod,TitleBar} from './../common/business';


//主页面
export default class MessageDiscuss extends Component {
    render() {
        return (
            <View style={styles0.flex}>
                <Header
                    title={'消息'}
                    BackIcon={true}
                />
                <ScrollView>
                    <View style={[styles0.pl12,styles0.pr12,styles0.topbor,styles0.btmbor,styles0.mt9]}>
                        <TitleBar title={'逐鹿顺意铜雕'} />
                        <View style={styles0.topbor}>
                            <DiscussMod
                                newObj={{
                                    pic:'http://pro.efeiyi.com/product/%E8%8C%B6%E9%A9%AC%E5%8F%A4%E9%81%93120160113174841.jpg@!product-details-picture',
                                    name:'Joe',
                                    time:'2015-10-12   16:16',
                                    description:'原来铜雕是一门高深的技艺，之前从来没有关注过，觉得中国的非 遗文化值得我们去传承。',
                                }}
                                reply={true}
                                newReplay={{
                                    anInfo:'Joe:我非常认同你的观点'
                                }}
                            />
                        </View>
                    </View>

                    <View style={[styles0.pl12,styles0.pr12,styles0.topbor,styles0.btmbor,styles0.mt9]}>
                        <TitleBar title={'项目名称'} />
                        <View style={styles0.topbor}>
                            <DiscussMod
                                newObj={{
                                    pic:'http://pro.efeiyi.com/product/%E8%8C%B6%E9%A9%AC%E5%8F%A4%E9%81%93120160113174841.jpg@!product-details-picture',
                                    name:'Joe',
                                    time:'2015-10-12   16:16',
                                    description:'原来铜雕是一门高深的技艺，之前从来没有关注过，觉得中国的非 遗文化值得我们去传承。',
                                }}
                                reply={true}
                                newReplay={{
                                    anInfo:'Joe:我非常认同你的观点'
                                }}
                            />
                        </View>
                    </View>
                </ScrollView>

            </View>
        )
    }
}



const styles=StyleSheet.create({




});