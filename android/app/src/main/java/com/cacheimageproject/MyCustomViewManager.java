package com.cacheimageproject;

import android.view.MotionEvent;
import android.view.View;

import com.facebook.react.bridge.Arguments;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.uimanager.SimpleViewManager;
import com.facebook.react.uimanager.ThemedReactContext;
import com.facebook.react.uimanager.events.RCTEventEmitter;

/**
 * Created by huilonglong on 16/4/8.
 */
public class MyCustomViewManager extends SimpleViewManager<MyCustomView> {

    public static final String REACT_CLASS = "RCTMyCustomView";

    @Override
    public String getName() {
        return REACT_CLASS;
    }

    @Override
    protected MyCustomView createViewInstance(ThemedReactContext reactContext) {
        final MyCustomView customView = new MyCustomView(reactContext);
//        customView.setOnTouchListener(new View.OnTouchListener() {
//            @Override
//            public boolean onTouch(View v, MotionEvent event) {
//                System.out.println("on Touch Listener");
//                WritableMap wm = Arguments.createMap();
//                wm.putString("type", "touch11");
//                wm.putString("param1", "touch12");
//                ReactContext reactContext = (ReactContext)customView.getContext();
//                reactContext.getJSModule(RCTEventEmitter.class).receiveEvent(
//                         customView.getId(),
//                        "topChange",
//                        wm);
//                return true;
//            }
//        });
        return customView;
    }
}
