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
    TouchableOpacity
} from 'react-native';
import {styles as styles0,ArrowLeft,ArrowRight,ShareIcon} from './styles';


export default class Header extends Component {

    render(){
        let obj=this.props.initObj;
        return(
            <View style={[styles0.row,styles0.center,styles0.pl12,styles0.pr12,styles0.topbor,styles0.btmbor,styles.header,]}>
                <TouchableOpacity style={styles.h_icon} onPress={this._pop}>
                    <ArrowLeft />
                </TouchableOpacity>
                <View style={[styles0.row,styles0.flex,styles0.center]}>
                    <Text style={[styles0.color3,styles0.fz14]} numberOfLines={1}>{obj.title}</Text>
                </View>
                <TouchableOpacity style={[styles.h_icon]} onPress={this._pop}>
                    <ShareIcon/>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.h_text]} onPress={this._pop}>
                    <Text style={styles0.black}>注册</Text>
                </TouchableOpacity>
            </View>
        )
    }

    _pop(){
        this.props.navigator.pop();
    }

}

const styles=StyleSheet.create({
    header:{
        height:44,
        borderColor:'#e2e2e2',
        backgroundColor:'#fff',
    },
    h_icon:{
        height:16,
        left:0,
    },
    h_aLeft:{
        borderColor:'#333',
        marginLeft:3,
    }
})