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
    borderLeftWidth: 2 * Util.pixel,
    borderBottomWidth: 2 * Util.pixel,
    width:15,
    height:15,
    transform: [{rotate: '-135deg'}],
    borderColor:'#ccc',
    alignSelf:'flex-end',
    position:'relative',
    top:18,
  }
});