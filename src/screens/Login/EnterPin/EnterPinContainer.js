/**
 * Copyright 2017–2018, LaborX PTY
 * Licensed under the AGPL Version 3 license.
 */

import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import EnterPin from './EnterPin'
import { PIN_LENGTH }  from '../../../common/constants/globals'

class EnterPinContainer extends PureComponent {

  static propTypes = {
    navigation: PropTypes.shape({
      navigate: PropTypes.func.isRequired,
    }).isRequired,
  }

  state = {
    pin: '',
  }

  handleChangePin = (pin: string) => {
    this.setState({ pin: pin.trim() })

    if (pin.length < PIN_LENGTH) return

    if (!this.props.pin) return this.gotoConfirmPin(pin)

    if (this.props.pin === pin) {
      this.handleLogin()

      return
    }

    alert(I18n.t('EnterPin.pinsNotMatch'))
  }

  gotoConfirmPin = (pin) => {
    this.props.navigator.push({
      screen: 'EnterPin',
      title: I18n.t('EnterPin.confirmTitle'),
      passProps: {
        pin,
        privateKey: this.props.privateKey,
        password: this.props.password,
        isLogin: this.props.isLogin,
        account: this.props.account,
      },
    })
  }


  render () {
    return (
      <EnterPin
        onChangePin={this.handleChangePin}
        pinDigitsFilledCount={this.state.pin.length}
        pinDigitsTotalCount={PIN_LENGTH}
      />
    )
  }
}

export default EnterPinContainer
