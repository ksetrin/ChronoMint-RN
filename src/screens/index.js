/* @flow */
import registerScreens from './registerScreens'
import SplashScreen from './SplashScreen'
import OptionSelector from './Login/OptionSelector'
import LoginSettings from './Login/LoginSettings'

const screens = {
  SplashScreen,
  Login: {
    OptionSelector,
    LoginSettings
  }
}

const screenIds: typeof screens = registerScreens(screens)

export default screenIds
