/**
 * Created by qiuxi on 2016/2/25.
 */
import React, {
    Component,
    StyleSheet,
    View,
Text
} from 'react-native';
import {Input,Button,styles} from './common';


//主页
export default class Login extends Component {
    render() {
        return (
            <View style={styles.loginView}>
                    <Input />
                    <Button />
                    <View style={styles.loginView}><Text>asdasdasd</Text></View>
            </View>
        )
    }
}

