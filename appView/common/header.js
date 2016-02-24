import React,{
    Component,
    View,
    StyleSheet,
    Text,
    TouchableOpacity,
    Platform
} from 'react-native';
import Icon from './left_icon';

export default class Header extends Component{
  render(){
    var obj = this.props.initObj;
    return (
        <View style={[styles.header, styles.row, styles.center]}>
            <TouchableOpacity style={[styles.row,styles.center,styles.icon]} onPress={this._pop}>
                <Icon/>
                <Text style={styles.fontFFF}>{obj.backName}</Text>
            </TouchableOpacity>
          <View style={[styles.title, styles.center]}>
            <Text style={[styles.fontFFF, styles.titlePos]} numberOfLines={1}>{obj.title}</Text>
          </View>
            <TouchableOpacity style={[styles.row,styles.center,styles.icon]} onPress={this._pop}>

            </TouchableOpacity>
        </View>
    )
  }

  _pop(){
    this.props.navigator.pop();
  }
}


const styles = StyleSheet.create({
    row:{
        flexDirection:'row'
    },
    header:{
        flex:1,
        height:50,
        backgroundColor:'#3497FF',
        alignItems:'center',
        paddingTop: Platform.OS === 'ios' ? 20 : 0,  // 处理iOS状态栏
        height: Platform.OS === 'ios' ? 68 : 48,   // 处理iOS状态栏
    },
    fontFFF:{
        color:'#fff',
        fontSize:17,
        fontWeight:'bold',
    },
    icon:{
        width:56,
    },
    title:{
        flex:1,
        alignItems:'center',
        height:30,
        backgroundColor:'rgba(0,0,0,0)',

    },
    center:{
        justifyContent:'center',
        alignItems:'center'
    }
});

