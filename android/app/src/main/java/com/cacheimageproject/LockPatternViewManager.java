package com.cacheimageproject;

import android.graphics.Color;
import android.view.View;

import com.cacheimageproject.patternview.PatternView;
import com.facebook.react.uimanager.SimpleViewManager;
import com.facebook.react.uimanager.ThemedReactContext;

/**
 * Created by huilonglong on 16/4/12.
 */
public class LockPatternViewManager extends SimpleViewManager<PatternView> {
    @Override
    public String getName() {
        return "RCTPatternView";
    }
//    <!--<com.eftimoff.patternview.PatternView-->
//    <!--android:id="@+id/patternView"-->
//    <!--android:layout_width="wrap_content"-->
//    <!--android:layout_height="wrap_content"-->
//    <!--patternview:pathColor="@color/primary_dark_material_light"-->
//    <!--patternview:circleColor="@color/highlighted_text_material_light"-->
//    <!--patternview:dotColor="@android:color/black"-->
//    <!--patternview:gridRows="5"-->
//    <!--patternview:gridColumns="4"/>-->

    @Override
    protected PatternView createViewInstance(ThemedReactContext reactContext) {
        final PatternView patternView = new PatternView(reactContext);
        patternView.setCircleColor(Color.GREEN);
        patternView.setCircleColor(Color.RED);
        patternView.setDotColor(Color.BLACK);
        patternView.setGridRows(3);
        patternView.setGridColumns(3);
        return patternView;
    }
}
