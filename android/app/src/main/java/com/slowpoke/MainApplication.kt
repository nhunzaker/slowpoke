package com.slowpoke

import com.facebook.react.ReactPackage
import com.nozbe.watermelondb.WatermelonDBPackage
import com.reactnativecommunity.webview.RNCWebViewPackage
import com.reactnativenavigation.NavigationApplication
import com.reactnativenavigation.react.NavigationReactNativeHost
import com.reactnativenavigation.react.ReactGateway

class MainApplication : NavigationApplication() {

    private val packages: List<ReactPackage>
        get() = listOf(
                RNCWebViewPackage(),
                WatermelonDBPackage()
        )

    override fun createReactGateway(): ReactGateway {
        val host = object : NavigationReactNativeHost(this, isDebug, createAdditionalReactPackages()) {
            override fun getJSMainModuleName() = "index"
        }

        return ReactGateway(this, isDebug, host)
    }

    override fun isDebug() = BuildConfig.DEBUG

    override fun createAdditionalReactPackages() = packages
}