/**
 * Created by huilonglong on 16/4/8.
 */
import React, { requireNativeComponent, PropTypes } from 'react-native';

var RCTMyCustomView = requireNativeComponent(`RCTMyCustomView`, MyCustomView, {
    nativeOnly: {onChange: true}
});

class MyCustomView extends React.Component {
    constructor() {
        super();
        this._onChange = this._onChange.bind(this);
    }
    _onChange(event: Event) {
        console.log('_onChange', event.nativeEvent);
        if (!this.props.onChangeMessage) {
            return;
        }
        if(event.nativeEvent.message == "MyMessage"){
            this.props.onChangeMessage(event);
        }

    }
    render() {
        return <RCTMyCustomView {...this.props} onChange={(event) => this._onChange(event)} />;
    }
}
MyCustomView.propTypes = {
    /**
     * Callback that is called continuously when the user is dragging the map.
     */
    onChangeMessage: React.PropTypes.func,
    renderToHardwareTextureAndroid: PropTypes.bool,
    onLayout: PropTypes.bool,
    accessibilityLiveRegion: PropTypes.string,
    accessibilityComponentType: PropTypes.string,
    importantForAccessibility: PropTypes.string,
    accessibilityLabel: PropTypes.string,
    testID: PropTypes.string,
};



module.exports = MyCustomView;