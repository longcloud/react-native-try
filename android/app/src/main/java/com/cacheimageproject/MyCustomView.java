package com.cacheimageproject;

import android.content.Context;
import android.view.MotionEvent;
import android.view.View;

import com.facebook.react.bridge.Arguments;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.WritableArray;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.uimanager.events.RCTEventEmitter;

/**
 * Created by huilonglong on 16/4/8.
 */
public class MyCustomView extends View {
    public MyCustomView(Context context) {
        super(context);
    }

    @Override
    public boolean onTouchEvent(MotionEvent e) {
        System.out.println("Custom Event Java 1");
        WritableMap event = Arguments.createMap();
        System.out.println("Custom Event Java 2");
        event.putString("message", "MyMessage");
        event.putString("type", "Touch");
        System.out.println("Custom Event Java 3");
        ReactContext reactContext = (ReactContext)getContext();
        System.out.println("Custom Event Java 4");
        reactContext.getJSModule(RCTEventEmitter.class).receiveEvent(
                getId(),
                "topChange",
                event);
//        WritableArray wa = Arguments.createArray();
//        wa.pushDouble(1.22);
//        WritableArray wa2 = Arguments.createArray();
//        wa2.pushDouble(2.33);
//        reactContext.getJSModule(RCTEventEmitter.class).receiveTouches(
//                "topTouchStart",
//                wa,
//                wa2);
        System.out.println("Custom Event Java 5");
        return true;
    }
}
