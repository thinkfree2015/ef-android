/**
 * Created by Administrator on 2016/2/24.
 */
import React, {
    Component,
    StyleSheet,
    View,
    Image,
    Text,
    TouchableOpacity
} from 'react-native';
import Header from './common/header';
import {styles as styles0,ArrowRight} from './common/styles';



//主页面
export default class Message extends Component {
    render() {
        return (
            <View>
                <Header initObj={{title:'消息'}} />
                <MessageItems
                    renderIcon={require('./image/message/message1.png')}
                    page={'通知'}
                />
                <MessageItems
                    renderIcon={require('./image/message/message2.png')}
                    page={'评论'}
                />
                <MessageItems
                    renderIcon={require('./image/message/message3.png')}
                    page={'私信'}
                />
            </View>
        )
    }
}



//列表
class MessageItems extends React.Component {
    render() {
        return (
            <TouchableOpacity style={[styles0.topbor,styles0.btmbor,styles0.pl12,styles0.pr12,styles.xx_items]}>
                <Image style={[styles.xx_icon]} source={this.props.renderIcon} />
                <View style={styles0.vertical}>
                    <Text style={[styles0.black,styles0.fz14,styles.xx_text]}>{this.props.page}</Text>
                </View>
                <View style={[styles0.right,styles0.flex]}>
                    <ArrowRight />
                </View>
            </TouchableOpacity>
        )
    }
}


const styles=StyleSheet.create({
    xx_items:{
        borderColor:'#e2e2e2',
        flexDirection: 'row',
        alignItems: 'center',
        height:42,
        marginTop:9,
    },
    xx_text:{
        marginLeft:7
    },
    xx_icon:{
        width:13,
        height:15,
    },
});