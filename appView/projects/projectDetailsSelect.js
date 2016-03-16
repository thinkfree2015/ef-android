/**
 * Created by qiuxi on 2016/2/16.
 */
import React, {
    Component,
    StyleSheet,
    Image,
    Text,
    View,
    ScrollView,
    ListView,
    TextInput,
    TouchableOpacity
} from 'react-native';

import {styles as styles0,Header,LayoutBlackBtn} from './../common/styles';



//主页面
export default class ProjextDetailsSelect extends Component {
    render(){
        return(
            <View style={[styles0.flex]}>
                <Header
                    title={'投资'}
                    BackIcon={true}
                />
                <ScrollView style={styles.box}>
                    <View style={[styles.tz_items]}>
                        <View style={[styles0.row,styles0.flex]}>
                            <TouchableOpacity style={[styles0.center,styles0.flex,styles0.bor,styles0.mt12,styles.items_btn]}><Text style={styles0.black}>2元</Text></TouchableOpacity>
                            <TouchableOpacity style={[styles0.center,styles0.flex,styles0.bor,styles0.mt12,styles.items_btn]}><Text style={styles0.black}>8元</Text></TouchableOpacity>
                            <TouchableOpacity style={[styles0.center,styles0.flex,styles0.bor,styles0.mt12,styles.items_btn]}><Text style={styles0.black}>18元</Text></TouchableOpacity>
                        </View>
                        <View style={[styles0.row,styles0.flex]}>
                            <TouchableOpacity style={[styles0.center,styles0.flex,styles0.bor,styles0.mt12,styles.items_btn]}><Text style={styles0.black}>28元</Text></TouchableOpacity>
                            <TouchableOpacity style={[styles0.center,styles0.bg0,styles0.flex,styles0.bor,styles0.mt12,styles.items_btn]}><Text style={styles0.white}>88元</Text></TouchableOpacity>
                            <TouchableOpacity style={[styles0.center,styles0.flex,styles0.bor,styles0.mt12,styles.items_btn]}><Text style={styles0.black}>全包</Text></TouchableOpacity>
                        </View>
                    </View>

                    <View style={[styles0.pl12,styles0.pr12,styles.tz_form]}>
                        <View style={[styles0.bor,styles0.mt12,styles.tz_price]}>
                            <View style={styles.tz_price_t1}><Text style={[styles0.black,styles0.fz12]}>其他金额</Text></View>
                            <TextInput style={[styles0.fz11,styles0.pl12,styles0.pr12,styles.tz_ipt]}
                                       placeholder="投资最低2"
                                       textAlign="end"
                                       underlineColorAndroid="transparent"
                            />
                            <View style={styles.tz_price_t2}><Text style={[styles0.black,styles0.fz12]}>元</Text></View>
                        </View>

                        <View style={[styles0.bor,styles0.mt12,styles.tz_price]}>
                            <TextInput style={[styles0.fz11,styles0.pl12,styles0.pr12,styles0.flex,styles.tz_ipt,styles.tz_ipt2]}
                                       placeholder="评论"
                                       multiline={true}

                            />
                        </View>

                        <View style={[styles0.mt25,styles0.mb25]}>
                            <LayoutBlackBtn newObj={{text:'投资88元'}}
                                            textAlign={'end'}
                            />
                        </View>

                        <View style={styles.tz_text}>
                            <Text style={[styles0.fz11,styles0.gray]}>1.您投资的作品将在融资成功后进行拍卖，拍卖所的金额将作为所有投资者的投资回报，个人所得回报与所投金额成正比。</Text>
                            <Text style={[styles0.fz11,styles0.gray]}>2.若作品流拍，将在所有投资者中抽取（公证透明）一位幸运者，送出作品。</Text>
                        </View>

                    </View>
                </ScrollView>
            </View>
        )
    }
}


const styles=StyleSheet.create({
    tz_box:{
        flexWrap:'wrap',
        flex:3,
    },
    tz_items:{
        paddingLeft:6.5,
        paddingRight:7
    },
    items_btn:{
        borderColor:'#000',
        marginLeft:5,
        marginRight:5,
        paddingTop:10,
        paddingBottom:10,
    },
    tz_price_t1:{
        position:'absolute',
        top:9,
        left:12
    },
    tz_price_t2:{
        position:'absolute',
        top:7.5,
        right:12
    },
    tz_ipt:{
        height:35,
        textAlign:'right',
        paddingRight:26,
    },
    tz_ipt2:{
        textAlign:'left'
    }
})
