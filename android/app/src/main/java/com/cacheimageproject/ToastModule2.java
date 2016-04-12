package com.cacheimageproject;

import android.util.Log;
import android.view.KeyEvent;
import android.widget.Toast;

import com.facebook.react.ReactActivity;
import com.facebook.react.ReactInstanceManager;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

import java.lang.reflect.Field;
import java.lang.reflect.InvocationTargetException;
import java.lang.reflect.Method;
import java.util.HashMap;
import java.util.Map;

/**
 * Created by huilonglong on 16/4/8.
 */
@SuppressWarnings("unchecked")
public class ToastModule2 extends ReactContextBaseJavaModule {
    private static final String DURATION_SHORT_KEY = "SHORT";
    private static final String DURATION_LONG_KEY = "LONG";

    public ToastModule2(ReactApplicationContext reactContext) {
        super(reactContext);
    }

    @Override
    public String getName() {
        return "ToastAndroid2";
    }

    @Override
    public Map<String, Object> getConstants() {
        final Map<String, Object> constants = new HashMap<>();
        constants.put(DURATION_SHORT_KEY, Toast.LENGTH_SHORT);
        constants.put(DURATION_LONG_KEY, Toast.LENGTH_LONG);
        return constants;
    }

    @ReactMethod
    public void show(String message, int duration) throws NoSuchFieldException, IllegalAccessException, NoSuchMethodException, InvocationTargetException, InstantiationException {
        getCurrentActivity().runOnUiThread(new Runnable() {
            @Override
            public void run() {
                ((ReactActivity)getCurrentActivity()).onKeyUp(KeyEvent.KEYCODE_MENU,null);
            }
        });

        System.out.println("instance of instance manager 1");
        Field field = ReactActivity.class.getDeclaredField("mReactInstanceManager");

        System.out.println("instance of instance manager 2");
        field.setAccessible(true);

        System.out.println("instance of instance manager 3");
        final ReactInstanceManager mReactInstanceManager = (ReactInstanceManager) field.get(getCurrentActivity());


        System.out.println("instance of instance manager 4");
        final Method showDevOptionsDialog = ReactInstanceManager.class.getMethod("showDevOptionsDialog", null);
        showDevOptionsDialog.setAccessible(true);
        System.out.println("instance of instance manager 5");
        getCurrentActivity().runOnUiThread(new Runnable() {
            @Override
            public void run() {
                try {
                    showDevOptionsDialog.invoke(mReactInstanceManager, null);
                } catch (IllegalAccessException e) {
                    e.printStackTrace();
                } catch (InvocationTargetException e) {
                    e.printStackTrace();
                }
            }
        });


        System.out.println("instance of instance manager 6");
        Toast.makeText(getReactApplicationContext(), message, duration).show();
    }
}
