/**
 * Created by qiuxi on 2016/2/25.
 */
import React, {
    Component,
    StyleSheet,
    View,
    Text,
    TextInput,
    TouchableOpacity
} from 'react-native';
import {styles as styles0,Header} from './../common/styles';
import {LoginInput,LoginButton,Authcode} from './../common/nobusiness';
import { putJson, getJson} from '../util/jsonUtil';
import store from './../redux/store';
import { fetchPosts } from './../redux/actions/loginAction';
var timestamp=new Date().getTime();


//主页
export default class ForgetPwd extends Component {
    // 构造
      constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            inputPhone:"",
        };
      }
    getDataJsonCode(){
        let data='';
        console.log(this.state.inputPhone);
        putJson('username',this.state.inputPhone);
        putJson('timestamp',timestamp+"");
        data =getJson();
        console.log(data+"xxxxxxx");
        return  data;
    }
    getCode(){
        if (code==0){
            store.dispatch(fetchPosts('/app/sendCode.do',this.getDataJsonCode())).then((json) =>{
                /*var dataState = store.getState();
                 console.log("dataState.pageByLogin"+dataState.pageByLogin);*/
            }).catch((error)=>{
                console.log(error)
            }).done();
        }
    }
    back(){
        const { navigator } = this.props;
        navigator.pop();
    }
    confirm(){

    }
    render() {
        return (
            <View style={styles.login}>
                <Header
                    title={'忘记密码'}
                    BackIcon={true}
                    backPress={this.back.bind(this)}/>
                <LoginInput newObj={{
                    placeholder:'请输入手机号'}}
                    onChangeText ={(text) => this.setState({inputPhone: text})}/>
                <Authcode newObj={{text:'请输入验证码'}}
                          onChangeText={(text) => this.setState({inputVCode: text})}
                          onPress={this.getCode.bind(this)}/>
                <LoginInput newObj={{placeholder:'设置密码'}}
                            onChangeText={(text) => this.setState({inputPassword: text})}
                            secureTextEntry={true}/>
                <LoginButton newObj={{text:'确     定'}} oPress={this.confirm.bind(this)}/>
            </View>
        )
    }
}





const styles=StyleSheet.create({
    btn_view:{
        marginRight:22,
        marginTop:15
    },
    btn_text:{
        color:'#3b99ff'
    },






});