package com.slowpoke

import com.facebook.react.ReactPackage
import com.reactnativecommunity.webview.RNCWebViewPackage
import com.reactnativenavigation.NavigationApplication
import com.reactnativenavigation.react.NavigationReactNativeHost
import com.reactnativenavigation.react.ReactGateway
import java.util.*

class MainApplication : NavigationApplication() {

    protected val packages: List<ReactPackage>
        get() = Arrays.asList<ReactPackage>(
                RNCWebViewPackage()
        )

    override fun createReactGateway(): ReactGateway {
        val host = object : NavigationReactNativeHost(this, isDebug, createAdditionalReactPackages()) {
            override fun getJSMainModuleName(): String {
                return "index"
            }
        }
        return ReactGateway(this, isDebug, host)
    }

    override fun isDebug(): Boolean {
        return BuildConfig.DEBUG
    }

    override fun createAdditionalReactPackages(): List<ReactPackage>? {
        return packages
    }
}