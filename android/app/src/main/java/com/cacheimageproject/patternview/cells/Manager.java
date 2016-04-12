package com.cacheimageproject.patternview.cells;

/**
 * Created by huilonglong on 16/4/12.
 */
public interface Manager<T> {

    int getRowCount();

    int getColumnCount();

    T get(final int row, final int column);

    int getSize();

    void clear();

    void draw(T t, final boolean drawn);

    void draw(final int row, final int column, final boolean drawn);

    void clearDrawing();

    boolean isDrawn(final int row, final int column);

    boolean isDrawn(T t);
}