/**
 * Copyright 2017–2018, LaborX PTY
 * Licensed under the AGPL Version 3 license.
 */

import React, { PureComponent } from 'react'
import { View, TextInput, Platform } from 'react-native'
import PropTypes from 'prop-types'
// import Input from '../../../components/Input'
// import PrimaryButton from '../../../components/PrimaryButton'
// import i18n from '../../../locales/translation'
import styles from './EnterPinStyles'

export default class EnterPin extends PureComponent {

  static propTypes = {
    onChangePin: PropTypes.func,
    pinDigitsTotalCount: PropTypes.number,
    pinDigitsFilledCount: PropTypes.number,
  }

  renderPinDigit = (item: any, index: number) => {
    const isPinDigitActive = this.props.pinDigitsFilledCount > index

    return (<View
      style={[
        styles.pinDigit,
        isPinDigitActive ? styles.pinDigitActive : {},
      ]}
      key={index}
    />)
  }

  render () {
    const {
      pinDigitsTotalCount,
      onChangePin,
    } = this.props
    return (
      <View style={styles.container}>
        {
          Array(pinDigitsTotalCount).fill(1).map(this.renderPinDigit)
        }
        <TextInput
          autoFocus
          style={styles.input}
          keyboardType={Platform.OS === 'ios' ? 'number-pad' : 'numeric'}
          onChangeText={onChangePin}
          keyboardAppearance='dark'
        />
      </View>
    )
  }
}
