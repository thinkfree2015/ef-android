/**
 * Created by Administrator on 2016/3/8.
 */
/**
 * Created by Administrator on 2016/2/20.
 */
'use strict';
import React, {
    AppRegistry,
    Component,
    StyleSheet,
    View,
    ListView,
    Image,
    Text,
    ScrollView,
    TouchableOpacity,
    TextInput

} from 'react-native';
//样式
import {styles as styles0,ArrowRight,Header} from './../common/styles';
import {Accbalance as Accbalance0,Acchint,Account} from './../deal/recharge';
import {IssueBtn as IssueBtn0} from './../projects/artisthub'
//主页
export default class Newsponsor extends Component{
    render() {
        return (
            <ScrollView>
                {/*提示*/}
                <View style={[styles0.center,styles0.vertical,{height:30,backgroundColor:'#ff0000'}]}><Text style={[styles0.white,styles0.fz12]}>项目详情是空的哦...</Text></View>
                {/*头部*/}
                <Header  BackIcon={true} title={'发起新项目'}/>
                <View style={[styles0.pl12,styles0.pr12,styles0.flex]}>
                    <View style={[styles0.vertical,{height:42}]}>
                        <Text style={[styles0.fz12,styles0.black]}>请输入项目详情</Text>
                    </View>
                    <View  style={[styles.poninput]} >
                        <TextInput
                            style={[styles0.flex,styles0.fz12,styles0.black,styles0.vertical]}
                            value="请输入文字或照片"
                            placeholderTextColor="#ccc"
                            underlineColorAndroid="transparent"
                            textAlignVertical={'top'}
                            multiline={true}
                            numberOfLines={10}
                        />
                    </View>
                </View>
                {/*发布状态*/}
                    <View style={[styles0.mr12,styles0.ml12,styles.ponlink]}>
                        <Ponbtn Newobj={{name:'发 布'}} />
                        <Ponbtn Newobj={{name:'保 存 为 草 稿'}}/>
                       <View style={[styles.ponshow]}><IssueBtn0 newObj={{content:'视频'}} /><IssueBtn0 newObj={{content:'拍照'}} /><IssueBtn0 newObj={{content:'手机相册'}} /></View>
                 </View>
            </ScrollView>
        )
    }
}
export class Ponbtn extends React.Component {
    render() {
        let obj = this.props.Newobj;
        return (
            <TouchableOpacity style={[styles0.btn,styles0.center,styles0.vertical,{marginBottom:15}]}>
                 <Text style={[styles0.fz13,styles0.white]}>{obj.name}</Text>
            </TouchableOpacity>
        )
    }

}
export const styles=StyleSheet.create({
    poninput:{
       borderWidth:0.5,
       borderColor:'#e2e2e2',
       height:180
    },
    ponlink:{
        paddingTop:25,
    },
    ponshow:{
       backgroundColor:'#f0f0f0',
        paddingBottom:10,
    }
});