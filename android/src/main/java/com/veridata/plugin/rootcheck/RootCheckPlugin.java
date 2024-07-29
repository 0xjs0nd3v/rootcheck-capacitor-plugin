package com.veridata.plugin.rootcheck;

import android.util.Log;

public class RootCheckPlugin {

    public String echo(String value) {
        Log.i("Echo", value);
        return value;
    }
}
