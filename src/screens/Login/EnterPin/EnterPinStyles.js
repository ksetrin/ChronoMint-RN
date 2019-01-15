/**
 * Copyright 2017–2018, LaborX PTY
 * Licensed under the AGPL Version 3 license.
 */

import { StyleSheet } from 'react-native'
import { headerHeight } from '../../../common/constants/screens'

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingTop: 60,
  },
  pinDigit: {
    margin: 10,
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: '#A3A3CC',
  },
  pinDigitActive: {
    backgroundColor: 'white',
  },
  input: {
    display: 'none',
  },
})
