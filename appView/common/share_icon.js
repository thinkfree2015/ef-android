/**
 * Created by qiuxi on 2016/2/16.
 */
import React, {
    Component,
    StyleSheet,
    Image,
    View
} from 'react-native';

//const Share_Icon = require('./../image/header/share_icon.png');


export default class ShareIcon extends Component {
    render(){
        return (
            <View>
                <Image style={styles.share} source={require('./../image/header/share_icon.png')} />
            </View>
        );
    }
}


const styles = StyleSheet.create({
    share:{
        width:19,
        height:15,
    }
});