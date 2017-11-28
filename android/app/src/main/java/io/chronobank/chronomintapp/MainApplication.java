package io.chronobank.chronomintapp;

import com.reactnativenavigation.NavigationApplication;

import com.facebook.react.ReactApplication;
import com.hieuvp.fingerprint.ReactNativeFingerprintScannerPackage;
import com.peel.react.rnos.RNOSModule;
import com.reactnativedocumentpicker.ReactNativeDocumentPicker;
import com.reactnativedocumentpicker.ReactNativeDocumentPicker;
import com.reactnativedocumentpicker.ReactNativeDocumentPicker;
import com.peel.react.rnos.RNOSModule;
import com.reactnativenavigation.NavigationReactPackage;
import com.learnium.RNDeviceInfo.RNDeviceInfo;
import com.babisoft.ReactNativeLocalization.ReactNativeLocalizationPackage;
import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;
import com.facebook.react.shell.MainReactPackage;
import com.facebook.soloader.SoLoader;

import java.util.Arrays;
import java.util.List;

public class MainApplication extends NavigationApplication {

  private final ReactNativeHost mReactNativeHost = new ReactNativeHost(this) {
    @Override
    public boolean getUseDeveloperSupport() {
      return BuildConfig.DEBUG;
    }

    @Override
    protected List<ReactPackage> getPackages() {
      return Arrays.<ReactPackage>asList(
          new MainReactPackage(),
            new ReactNativeFingerprintScannerPackage(),
            new RNOSModule(),
            new ReactNativeDocumentPicker(),
            new ReactNativeDocumentPicker(),
            new ReactNativeDocumentPicker(),
            new RNOSModule(),
            new NavigationReactPackage(),
            new RNDeviceInfo(),
            new ReactNativeLocalizationPackage()
      );
    }

    @Override
    protected String getJSMainModuleName() {
      return "index";
    }
  };

  @Override
  public ReactNativeHost getReactNativeHost() {
    return mReactNativeHost;
  }

  @Override
  public boolean isDebug() {
      // Make sure you are using BuildConfig from your own application
      return BuildConfig.DEBUG;
  }

  @Override
  public void onCreate() {
    super.onCreate();
    SoLoader.init(this, /* native exopackage */ false);
  }
}
