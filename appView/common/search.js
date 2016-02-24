import React,{
    Component,
    StyleSheet,
    Text,
    View,
    TabBarIOS,
    TextInput
} from 'react-native';
import Util from './util';



export default class Search extends Component{
  render(){
    return (
        <View style={styles.flex_1}>
          <TextInput style={[styles.flex_1, styles.input]} {...this.props}/>
        </View>
    );
  }
}



const styles = StyleSheet.create({
  flex_1:{
    flex:1
  },
  input:{
    borderWidth:Util.pixel,
    height:40,
    borderColor:'#DDDDDD',
    paddingLeft:5
  }
});