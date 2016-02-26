/**
 * Created by jiuxuan on 2016/2/25.
 */
import React, {
    Component,
    StyleSheet,
    View,
    Image,
    Text,
    TextInput,
    TouchableOpacity
} from 'react-native';

//输入框
export class Input extends Component {
    render() {
        return (
            <View style={styles.login}>
                <View style={styles.loginView}>
                    <TextInput
                        placeholderTextColor="#ccc"
                        placeholder="请输入用户名/邮箱/已验证手机"
                        onChangeText={(text) => this.setState({input:text})}
                        style={[styles.fz11,styles.flex,styles.input]}
                    />
                </View>
            </View>
        )
    }
}

//按钮
export class Button extends Component {
    render() {
        return (
            <View style={styles.login}>
                <View style={[styles.loginView,{borderWidth:0}]}>
                    <TouchableOpacity style={[styles.row,styles.btn]}>
                        <View style={[styles.row,styles.center,styles.flex,styles.btn]}>
                            <Text style={[styles.fz12,styles.white]}>登  录</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

export  const styles=StyleSheet.create({
    row:{flexDirection:'row'},
    flex:{flex:1},
    left:{alignSelf:'flex-start'},
    center:{alignItems:'center', justifyContent:'center'},
    right:{alignItems:'flex-end'},
    fz10:{fontSize:10},
    fz11:{fontSize:11},
    fz12:{fontSize:12},
    fz18:{fontSize:18},
    black:{color:'#000'},
    gray:{color:'#666'},
    white:{color:'#fff'},
    loginView:{
        borderWidth:0.5,
        borderColor:'#e4e4e4',
        marginLeft:22,
        marginRight:22,
        marginTop:19,
        backgroundColor:'#f00'
    },
    input:{
        height:35,
        paddingLeft:12,
        paddingRight:12,
        backgroundColor:'rgba(0,0,0,0)',
    },
    btn:{
        height:35,
        paddingLeft:12,
        paddingRight:12,
        backgroundColor:'#000',
    },
    loginView2:{
        marginLeft:22,
        marginRight:22,
    },
    partner:{
        marginTop:25,
        marginBottom:12,
    },
    partnerLine:{
        height:1,
        borderTopWidth:0.5,
        borderColor:'#e4e4e4',
    },
    partnerLogo:{
        width:35,
        height:35,
        resizeMode:'contain',
        marginLeft:12,
        marginRight:12
    }
});