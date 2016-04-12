/**
 * Created by huilonglong on 16/4/12.
 */
import React, {Component} from 'react-native';
import {Actions, Scene, Router} from 'react-native-router-flux';
import Index from './src/Index';
import LineChatPage from './src/pages/LineChatPage';
import CacheImagePage from './src/pages/CacheImagePage'
import MyCustomViewPage from './src/pages/MyCustomViewPage'
import PatternAndroid from './src/pages/PatternAndroid'

export default class App extends Component {
    render() {
        return <Router>
            <Scene key="root"  hideNavBar={true}>
                <Scene key="index" component={Index} title="首页"/>
                <Scene key="linechart" component={LineChatPage} title="Line Chart"/>
                <Scene key="cacheImage" component={CacheImagePage} title="Cache Image"/>
                <Scene key="myCustomViewPage" component={MyCustomViewPage} title="custom view page"/>
                <Scene key="patternAndroid" component={PatternAndroid} title="模式锁"/>
            </Scene>
        </Router>
    }
}