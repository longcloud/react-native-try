/**
 * Created by huilonglong on 16/4/12.
 */


import React, {
    AppRegistry,
    Component,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    ScrollView,
    TouchableHighlight,
    Button
} from 'react-native';

import LineChart from './pages/LineChatPage';
import {Actions} from 'react-native-router-flux';
import ToastAndroid from './modules/ToastAndroid';

export default class CacheImageProject extends Component {
    //constructor (props){
    //    super(props);
    //    this.state = {myViewWith: 300};
    //}
    //
    showToast() {
        ToastAndroid.show("Awesome", ToastAndroid.SHORT);
    }
    //
    //_onChangeMessage(event){
    //    console.log("custom event", event);
    //    this.setState( {myViewWith: 100})
    //}

//<TouchableHighlight onPress={() => this._onChangeMessage()} style={[styles.Button,{width:this.state.myViewWith}]}>
//<Text>
//点击我
//</Text>
//</TouchableHighlight>
// <LineChart style={styles.lineChart} zoomable={true}/>
//<ScrollView contentContainerStyle={styles.contentContainer}>
//<MyCustomView style={[styles.customView, {width: this.state.myViewWith}]} onChangeMessage={(event) => this._onChangeMessage(event)}/>
//
//
//
//</ScrollView>



    render() {
        return (
            <View className={styles.container}>
                <Text style={styles.welcome}>
                    React native android 原生调用练习
                </Text>
                <TouchableOpacity onPress={() => Actions.linechart()} style={styles.touchable}>
                    <Text className={styles.touchText}>
                        Go Line Chart
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => Actions.patternAndroid()} style={styles.touchable}>
                    <Text className={styles.touchable}>
                        Go Pattern Lock
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => Actions.myCustomViewPage()} style={styles.touchable}>
                    <Text className={styles.touchable}>
                        Go My Custom View
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => Actions.cacheImage()} style={styles.touchable}>
                    <Text className={styles.touchable}>
                        Go Cache Image
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.showToast()} style={styles.touchable}>
                    <Text className={styles.touchable}>
                        Call Native Toast and Show Debug Dialog
                    </Text>
                </TouchableOpacity>
            </View>

        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 30,
        textAlign: 'center',
        marginTop:50
    },
    touchable: {
        marginBottom: 10,
        alignItems: 'center',
        flex: 1
    },
    touchText: {
        color: '#FF0000',
        marginBottom: 5,
        textAlign: 'left',
    },
    contentContainer: {
        paddingVertical: 20
    },
    customView: {
        height:150,
        borderColor: '#FFFF00',
        borderWidth: 2,
        backgroundColor:"#FF00FF",
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
    lineChart: {
        flex: 1,
        height: 500,
        width: 300
    },
    Button: {
        marginTop: 100
    },
    patternLock: {
        width: 300,
        height: 300
    }
});