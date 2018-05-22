/**
 * Copyright 2017–2018, LaborX PTY
 * Licensed under the AGPL Version 3 license.
 *
 * @flow
 */
 
const isThatKey = (selectedProvider, selectedNetwork) => (
  ({ provider, network }) => (
    provider === selectedProvider && network === selectedNetwork
  )
)

// TODO [AO]: to check it, unused at the moment
export const hasKey = (state, provider, network) => (
  state.sensitive.keys.some(isThatKey(provider, network))
)

// TODO [AO]: to check it, unused at the moment
export const getEncryptedKeys = (state, provider, network) => (
  state.sensitive.keys.filter(isThatKey(provider, network))
)
