/**
 * Created by huilonglong on 16/4/12.
 */
import { requireNativeComponent, PropTypes } from 'react-native';

var iface = {
    name: 'PatternView',
    propTypes: {
        zoomable: PropTypes.bool,
        interactive: PropTypes.bool,
        renderToHardwareTextureAndroid: PropTypes.bool,
        onLayout: PropTypes.bool,
        accessibilityLiveRegion: PropTypes.string,
        accessibilityComponentType: PropTypes.string,
        importantForAccessibility: PropTypes.string,
        accessibilityLabel: PropTypes.string,
        testID: PropTypes.string,
    }
};
//console.log("Pattern View JavaScript");

module.exports = requireNativeComponent('RCTPatternView', iface);