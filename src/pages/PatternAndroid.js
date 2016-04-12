/**
 * Created by huilonglong on 16/4/12.
 */
/**
 * Created by huilonglong on 16/4/12.
 */

import React, {
    AppRegistry,
    Component,
    StyleSheet,
} from 'react-native';

import PatternAndroid from '../components/PatternLock';

export default class PatternAndroidPage extends Component {
    constructor (props){
        super(props);
    }

    render() {
        return (
            <PatternAndroid style={styles.patternLock}/>

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

