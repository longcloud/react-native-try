/**
 * Created by huilonglong on 16/4/12.
 */
import React, {
    AppRegistry,
    Component,
    StyleSheet,
} from 'react-native';

import MyCustomView from '../components/MyCustomView';

export default class MyCustomViewPage extends Component {
    constructor (props){
        super(props);
        this.state = {myViewWith: 300};
    }

    _onChangeMessage(event){
        console.log("custom event", event);
        this.setState( {myViewWith: 100})
    }

    render() {
        return (
            <MyCustomView style={[styles.customView, {width: this.state.myViewWith}]} onChangeMessage={(event) => this._onChangeMessage(event)}/>

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

