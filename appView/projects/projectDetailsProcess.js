/**
 * Created by qiuxi on 2016/2/16.
 */
import React, {Component,StyleSheet,Image,Text,View,ScrollView,ListView,TouchableOpacity,sizeWidth} from 'react-native';
import {styles as styles0,Header,LayoutBtn,IconFlowImg} from './../common/styles';


//主页面
export default class DetailsProcess extends Component {
    render(){
        return(
            <View style={[styles0.flex]}>
                <Header
                    title={'投资流程'}
                    BackIcon={true}
                />
                <ScrollView>
                    <View style={[styles0.pl12,styles0.pr12,styles0.pb12]}>
                        <Image style={[styles0.mt12,styles.img,{width:sizeWidth-24,height:88}]} source={IconFlowImg} />
                        <View>
                            <Text style={[styles0.fz11,styles0.lh18]}>投资说明：</Text>
                            <Text style={[styles0.fz11,styles0.lh18]}>1、用户可选择投资份额投资该项目，若到融资时间结点时，未达到目标融资金额，则所有融资金额全额退还至用户个人账户中。</Text>
                            <Text style={[styles0.fz11,styles0.lh18]}>2、用户投资金额达到目标后，大师开始进行创作，过程中，大师会定期发布作品创作动态。</Text>
                            <Text style={[styles0.fz11,styles0.lh18]}>3、制作完成后，作品进行拍卖，所拍得金额将按照投资者所投资比例全部发到所有投资者手中。</Text>
                            <Text style={[styles0.fz11,styles0.lh18]}>4、若作品在拍卖过程中流拍，系统将在所有投资者中抽出一位幸运者，送出作品（一个公开的东西）。</Text>
                            <Text style={[styles0.fz11,styles0.black,styles0.mt6]}>注：用户投资回报=拍品价格*（投资金额/目标金额）</Text>
                        </View>
                    </View>
                </ScrollView>
            </View>
        )
    }
}




const styles=StyleSheet.create({
    img:{
        marginBottom:20,
        resizeMode:'contain'
    }
})
