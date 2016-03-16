/**
 * Created by root on 16-3-4.
 */
'use strict';

import React, {
    NativeModules,
    Text,
    Image,
    TouchableHighlight,
    View,
    Component,
    StyleSheet
} from 'react-native';
var PickerImage = NativeModules.ImagePickerManager;
import { putJson, getJson,getJsonStr} from '../util/jsonUtil';
export default class ReactNativeDemo extends Component {
    constructor(props){
        super(props);
        this.state = {
            image: {uri: ""}
        };
    }

    launchPicker() {
        var options = {
            title: '选择头像', // specify null or empty string to remove the title
            cancelButtonTitle: '取消',
            takePhotoButtonTitle: '拍照', // specify null or empty string to remove this button
            chooseFromLibraryButtonTitle: '从图库选择', // specify null or empty string to remove this button
            customButtons: {
                'Choose Photo from Facebook': 'fb' // [Button Text] : [String returned upon selection]
            },
            quality: 1,
            allowsEditing: false, // Built in iOS functionality to resize/reposition the image
            noData: false // Disables the base64 `data` field from being generated (greatly improves performance on large photos)
            //storageOptions: { // if this key is provided, the image will get saved in the documents directory (rather than a temporary directory)
            //    skipBackup: true, // image will NOT be backed up to icloud
            //    path: 'images' // will save image at /Documents/images rather than the root
            //}
        };

        /**
         * The first arg will be the options object for customization, the second is
         * your callback which sends bool: didCancel, object: response.
         *
         * response.didCancel will inform you if the user cancelled the process
         * response.error will contain an error message, if there is one
         * response.data is the base64 encoded image data (photos only)
         * response.uri is the uri to the local file asset on the device (photo or video)
         * response.isVertical will be true if the image is vertically oriented
         * response.width & response.height give you the image dimensions
         */

        var _this = this;
        PickerImage.showImagePicker(options, (response) => {
            if (response.didCancel) {
                console.log('User cancelled image picker');
            } else if (response.error) {
                console.log('ImagePickerManager Error: ', response.error);
            } else if (response.customButton) {
                console.log('User tapped custom button: ', response.customButton);
            } else {
                // Get the source and set the state
                console.log("Got the response", response);
                const source = {uri: response.uri, isStatic: true};
                _this.setState({
                    image: {uri: source.uri}
                });
                this.filesUpload("http://192.168.1.69:8001/app/completeUserInfo.do",source.uri)
            }
        });

    }
    getDataJson(){
        let data='';
        putJson('username',"18510251819");
        putJson('nickname',"三行");
        putJson('timestamp',"1234567890123");
        putJson('sex',"1");
        data =getJsonStr();
        return  data;
    }
    filesUpload(url,uri){
        var data=new FormData();
        data.append("username","18510251819");
        data.append("nickname","三行");
        data.append("sex","1");
        data.append("headPortrait",{uri:uri,name:"image.jpg",type:"image/jpg"});
        data.append("timestamp","1234567890123");
        data.append("signmsg",this.getDataJson().toString());
        let fetchOptions = {
            method: 'POST',
            headers: {
                'charset':'utf-8',
                'Content-Type': 'multipart/form-data'
            },
        };
        fetchOptions.body=data;
        fetch(url, fetchOptions)
            .then((response) => /*response.json())
             .then(json => {
             callback(json);
             console.log(json);
             })
             .catch((error) => {
             console.log(error+"yyyyyy");
             })*/
            {console.log(response); return response.json()})
            .then((responseDate) => {
                return responseDate;
            })
            .catch((error) => {
                console.log(error);
            })
            .done();
    }
    render() {
        return (
            <View >
                <Image style={styles.image} source={this.state.image} />
                <TouchableHighlight onPress={this.launchPicker.bind(this)}>
                    <Text>Select an image...</Text>
                </TouchableHighlight>
            </View>
        );
    }
}

const styles=StyleSheet.create({
    image:{
        width:80,
        height:80
    }
});