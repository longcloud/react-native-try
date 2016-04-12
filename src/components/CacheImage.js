/**
 * Created by huilonglong on 16/4/6.
 */
'use strict';

var React = require('react-native');
var {
    StyleSheet,
    View,
    } = React;

var CacheImage = require('@remobile/react-native-cache-image');

var CacheImageIdMgr = {
    CACHE_ID_USER_HEAD: 0,
    CACHE_ID_USER_HEAD1: 1,
    CACHE_ID_USER_HEAD2: 2,
};

var SERVER = 'https://o1i0j0zqz.qnssl.com/';

module.exports = React.createClass({
    render: function() {
        return (
            <View style={styles.container}>
                <CacheImage
                    resizeMode='stretch'
                    url={"https://o1i0j0zqz.qnssl.com/img/qk000327.jpg"}
                    style={styles.image}
                    cacheId={CacheImageIdMgr.CACHE_ID_USER_HEAD}
                />
            </View>
        );
    }
});

var styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    image: {
        width:200,
        height:200,
    }
});