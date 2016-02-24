import React,{
    Component,
    StyleSheet,
    Text,
    View
} from 'react-native';
import Util from './util'


export default class z extends Component {
  render(){
    return (
        <View>
          <View style={styles.go}></View>
        </View>
    );
  }
}


const styles = StyleSheet.create({
  go:{
    borderLeftWidth: 4 * Util.pixel,
    borderBottomWidth: 4 * Util.pixel,
    width:15,
    height:15,
    transform: [{rotate: '45deg'}],
    borderColor:'#FFF',
    marginLeft:10
  }
});