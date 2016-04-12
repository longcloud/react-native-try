/**
 * Created by huilonglong on 16/4/8.
 */
import { requireNativeComponent, PropTypes } from 'react-native';

var iface = {
    name: 'LineChart',
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
console.log("Line Chart JavaScript");

module.exports = requireNativeComponent('RCTLineChart', iface);