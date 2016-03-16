/**
 * Created by qiuxi on 2016/2/25.
 */
import React,{
    Component,
    StyleSheet,
    View,
    Image,
    Text,
    TextInput,
    TouchableOpacity
} from 'react-native';
import {styles as styles0} from './styles';


//输入框
export class LoginInput extends React.Component{
    render(){
        let obj=this.props.newObj;
        return(
            <View style={[styles0.bor,styles.loginView]}>
                <TextInput
                    placeholderTextColor="#ccc"
                    placeholder={obj.placeholder}
                    secureTextEntry={this.props.secureTextEntry}
                    onChangeText={this.props.onChangeText}
                    onBlur={this.props.onBlur}
                    style={[styles0.fz11,styles0.flex,styles0.pl12,styles0.pr12,styles.input]}
                />
            </View>
        )
    }
}

//按钮
export class LoginButton extends React.Component{
    render(){
        let obj=this.props.newObj;
        return(
            <View style={[styles.loginView]}>
                <TouchableOpacity style={[styles0.row,styles.btn]} onPress={this.props.oPress}>
                    <View style={[styles0.row,styles0.center,styles0.flex,styles0.vertical,styles.btn]}>
                        <Text style={[styles0.fz12,styles0.white]}>{obj.text}</Text>
                    </View>
                </TouchableOpacity>
            </View>
        )
    }
}

//验证码
export class Authcode extends React.Component{
    render(){
        let obj=this.props.newObj;
        return(
            <View style={[styles0.bor,styles.loginView]}>
                <TextInput
                    placeholderTextColor="#ccc"
                    placeholder="请输入短信验证码"
                    style={[styles0.fz11,styles0.flex,styles0.pl12,styles0.pr12,styles.input]}
                    onChangeText={this.props.onChangeText}
                />
                <TouchableOpacity style={[styles0.center,styles0.vertical,styles.input_yzm]} onPress={this.props.onPress}>
                    <Text style={[styles0.fz11,styles0.gray]}>{obj.text}</Text>
                </TouchableOpacity>
            </View>
        )
    }


}



const styles=StyleSheet.create({
    loginView:{
        borderColor:'#e4e4e4',
        marginLeft:22,
        marginRight:22,
        marginTop:19,
    },
    input:{
        height:35,
        backgroundColor:'rgba(0,0,0,0)',
    },
    input_yzm:{
        width:100,
        height:19,
        position:'absolute',
        top:8,
        right:0,
        borderLeftWidth:0.5,
        borderColor:'#e4e4e4'
    },
    btn:{
        height:35,
        backgroundColor:'#000',
    },
});