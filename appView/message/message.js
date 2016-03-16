/**
 * Created by Administrator on 2016/2/24.
 */
import React, {Component,StyleSheet,View,Image,Text,TouchableOpacity} from 'react-native';
import {styles as styles0,Header,LayoutBtn,IconMes1,IconMes2,IconMes3} from './../common/styles';



//主页面
export default class Message extends Component {
    render() {
        return (
            <View>
                <Header
                    title={'消息'}
                    BackIcon={true}
                />
                <LayoutBtn
                    marginTop={9}
                    renderIcon={IconMes1}
                    btnText={'通知'}
                    iconShow={true}
                />
                <LayoutBtn
                    marginTop={9}
                    renderIcon={IconMes2}
                    btnText={'评论'}
                    iconShow={true}
                />
                <LayoutBtn
                    marginTop={9}
                    renderIcon={IconMes3}
                    btnText={'私信'}
                    iconShow={true}
                />
            </View>
        )
    }
}





const styles=StyleSheet.create({

});