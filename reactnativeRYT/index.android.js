/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';
import React, {
    AppRegistry,
    Component,
    Text,
    View,
    Navigator
} from 'react-native';
import HomeView from './appView/projects/project';
import { Provider } from 'react-redux';
import store from './appView/redux/store';
export default class Start extends Component {
    render() {
        var defaultName = 'HomeView';
        var defaultComponent = HomeView;
        return (
            <Provider store={store} key="provider">
                <Navigator
                    initialRoute={{ name: defaultName, component: defaultComponent }}
                    configureScene={(route) => {
                    return Navigator.SceneConfigs.VerticalDownSwipeJump;
                }}
                    renderScene={(route, navigator) => {
                    let Component = route.component;
                    return <Component {...route.params} navigator={navigator} />
                }}/>
            </Provider>
        );

    }
}
AppRegistry.registerComponent('RongYiCast', () => Start);
