package com.cacheimageproject;

import android.graphics.Color;
import android.support.annotation.Nullable;
import android.util.Log;
import android.view.LayoutInflater;
import android.widget.RelativeLayout;

import com.facebook.react.uimanager.SimpleViewManager;
import com.facebook.react.uimanager.ThemedReactContext;
import com.facebook.react.uimanager.annotations.ReactProp;


import java.util.ArrayList;
import java.util.List;

import lecho.lib.hellocharts.model.Line;
import lecho.lib.hellocharts.model.LineChartData;
import lecho.lib.hellocharts.model.PointValue;
import lecho.lib.hellocharts.view.LineChartView;

/**
 * Created by huilonglong on 16/4/8.
 */
public class ReactChartManager extends SimpleViewManager<LineChartView> {

    public static final String REACT_CLASS = "RCTLineChart";

    public ReactChartManager() {
    }

    @Override
    public String getName() {
        return REACT_CLASS;
    }

    @Override
    protected LineChartView createViewInstance(ThemedReactContext reactContext) {
        LineChartView chart = new LineChartView(reactContext);
        chart.setViewportCalculationEnabled(false);
//        chart.setMinimumWidth(200);
//        chart.setMinimumHeight(50);
        System.out.println("Start Line Chart");
        Log.d("Test", "Start Line Chart");
        List<PointValue> values = new ArrayList<PointValue>();
        values.add(new PointValue(0, 2));
        values.add(new PointValue(1, 4));
        values.add(new PointValue(2, 3));
        values.add(new PointValue(3, 4));

        //In most cased you can call data model methods in builder-pattern-like manner.
        Line line = new Line(values).setColor(Color.GREEN).setCubic(true);
        line.setStrokeWidth(2);
        List<Line> lines = new ArrayList<Line>();
        lines.add(line);

        LineChartData data = new LineChartData();
        data.setLines(lines);

        chart.setLineChartData(data);
        return chart;
    }

    @ReactProp(name = "zoomable")
    public void setZommable(LineChartView view, @Nullable boolean isZommable){
        view.setZoomEnabled(isZommable);
    }

    @ReactProp(name = "interactive")
    public void setInteractive(LineChartView view, @Nullable boolean isZommable){
        view.setInteractive(isZommable);
    }
}
