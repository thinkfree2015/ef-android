/**
 * Created by jiuxuan on 2016/2/25.
 */
import React, {
    Component,
    StyleSheet,
    Image,
    View,
    Text,
    TouchableOpacity,
} from 'react-native';
import {styles as styles0} from './styles';


//大师头像+名称
export class HeadMaster extends React.Component{
    render(){
        let obj=this.props.newObj;
        return(
            <View style={styles.hm}>
                <View style={[styles0.row,styles.hmRow]}>
                    <Image style={styles.hmRowImg} source={{uri:obj.pic}} />
                    <Text style={[styles0.fz11,styles0.black]}>{obj.name}</Text>
                    <View style={styles.line}></View>
                    <Text style={[styles0.flex,styles0.fz11,styles0.black]} numberOfLines={1}>{obj.description}</Text>
                </View>
            </View>
        )
    }
}




const styles=StyleSheet.create({
    hm:{
        height:54,
        marginLeft:12,
        marginRight:12,
    },
    hmRow:{
        height:27,
        alignItems:'center',
        marginTop:13,
        marginBottom:13,
    },
    hmRowImg:{
        width:27,
        height:27,
        marginRight:8,
        borderRadius:100,
    },
    line:{
        width:1,
        height:8,
        backgroundColor:'#000',
        marginTop:2,
        marginLeft:10,
        marginRight:10,
    },



})