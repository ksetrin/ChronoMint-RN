/**
 * Copyright 2017–2018, LaborX PTY
 * Licensed under the AGPL Version 3 license.
 *
 * @flow
 */

import React, { PureComponent } from 'react'
import WalletTemplates, { type TTemplate } from '../screens/WalletTemplates'

class WalletTemplatesContainer extends PureComponent<{}, {}> {
  /* eslint-disable-next-line no-unused-vars */
  handleSelectTemplate = (template: TTemplate) => () => {
    throw 'Not implemented yet'
  }
  
  render () {
    return (<WalletTemplates
      templates={templates}
      onSelectTemplate={this.handleSelectTemplate}
    />)
  }
}

export default WalletTemplatesContainer

const templates = [
  {
    id: '0',
    symbol: 'ETH',
    value: 0.1,
    title: 'Subscription payment',
    address: '1Q1pE5vPGEEMqRcVRMbtBK842Y6Pzo6nK9',
    image: require('../images/coin-ethereum-small.png'),
  },
]
