/**
 * Copyright 2017–2018, LaborX PTY
 * Licensed under the AGPL Version 3 license.
 */

export const DUCK_BITCOIN = 'bitcoin'


export const BITCOIN_CREATE_WALLET = 'BITCOIN/CREATE_WALLET'
export const BITCOIN_UPDATE_BALANCE = 'BITCOIN/BALANCE_UPDATE'
export const BITCOIN_SELECT_WALLET = 'BITCOIN/SELECT_WALLET'
export const BITCOIN_CREATE_TX_DRAFT = 'BITCOIN/CREATE_TX_DRAFT'
export const BITCOIN_DELETE_TX_DRAFT = 'BITCOIN/DELETE_TX_DRAFT'
export const BITCOIN_DROP_SELECTED_WALLET = 'BITCOIN/DROP_SELECTED_WALLET'
export const BITCOIN_TX_UPDATE_RECIPIENT = 'BITCOIN/TX_DRAFT/UPDATE_RECIPIENT'
export const BITCOIN_TX_UPDATE_AMOUNT = 'BITCOIN/TX_DRAFT/UPDATE_AMOUNT'
export const BITCOIN_TX_UPDATE_TOKEN = 'BITCOIN/TX_DRAFT/UPDATE_TOKEN'
export const BITCOIN_TX_UPDATE_FEE = 'BITCOIN/TX_DRAFT/UPDATE_FEE'
export const BITCOIN_TX_UPDATE_FEE_MULTIPLIER = 'BITCOIN/TX_DRAFT/UPDATE_FEE_MULTIPLIER'
export const BITCOIN_TX_UPDATE_UNSIGNED_TX = 'BITCOIN/TX_DRAFT/UPDATE_UNSIGNED_TX'
export const BITCOIN_TX_UPDATE_SIGNED_TX = 'BITCOIN/TX_DRAFT/UPDATE_SIGNED_TX'
export const BITCOIN_TX_UPDATE_HISTORY = 'BITCOIN/TX/UPDATE_HISTORY'

// Actions to operate with preparation of a transaction Create/update, accept before send or reject.
export const BITCOIN_TX_UPDATE = 'BITCOIN/TX/UPDATE'
export const BITCOIN_TX_ACCEPT = 'BITCOIN/TX/ACCEPT'

// Get top latest block number of a selected bitcoin-like blockchain
export const BITCOIN_HTTP_GET_BLOCKS_HEIGHT = 'BITCOIN/HTTP/GET_BLOCKS_HEIGHT'
export const BITCOIN_HTTP_GET_BLOCKS_HEIGHT_SUCCESS = 'BITCOIN/HTTP/GET_BLOCKS_HEIGHT_SUCCESS'
export const BITCOIN_HTTP_GET_BLOCKS_HEIGHT_FAILURE = 'BITCOIN/HTTP/GET_BLOCKS_HEIGHT_FAILURE'

// Get info about transaction for a selected bitcoin-like blockchain
export const BITCOIN_HTTP_GET_TX_INFO = 'BITCOIN/HTTP/GET_TX_INFO'
export const BITCOIN_HTTP_GET_TX_INFO_SUCCESS = 'BITCOIN/HTTP/GET_TX_INFO_SUCCESS'
export const BITCOIN_HTTP_GET_TX_INFO_FAILURE = 'BITCOIN/HTTP/GET_TX_INFO_FAILURE'

// Get transactions history (list) for a selected bitcoin-like blockchain
export const BITCOIN_HTTP_GET_TX_LIST = 'BITCOIN/HTTP/GET_TX_LIST'
export const BITCOIN_HTTP_GET_TX_LIST_SUCCESS = 'BITCOIN/HTTP/GET_TX_LIST_SUCCESS'
export const BITCOIN_HTTP_GET_TX_LIST_FAILURE = 'BITCOIN/HTTP/GET_TX_LIST_FAILURE'

// Get address info for a selected bitcoin-like blockchain
export const BITCOIN_HTTP_GET_ADDRESS_INFO = 'BITCOIN/HTTP/GET_ADDRESS_INFO'
export const BITCOIN_HTTP_GET_ADDRESS_INFO_SUCCESS = 'BITCOIN/HTTP/GET_ADDRESS_INFO_SUCCESS'
export const BITCOIN_HTTP_GET_ADDRESS_INFO_FAILURE = 'BITCOIN/HTTP/GET_ADDRESS_INFO_FAILURE'

// Send preliminary prepared (signed) transaction for a selected bitcoin-like blockchain
export const BITCOIN_HTTP_POST_SEND_TX = 'BITCOIN/HTTP/POST_SEND_TX'
export const BITCOIN_HTTP_POST_SEND_TX_SUCCESS = 'BITCOIN/HTTP/POST_SEND_TX_SUCCESS'
export const BITCOIN_HTTP_POST_SEND_TX_FAILURE = 'BITCOIN/HTTP/POST_SEND_TX_FAILURE'

// Operation 'sign bitcoin'
export const BITCOIN_SIGN_TX = 'BITCOIN/SIGN/TX'
export const BITCOIN_SIGN_TX_SUCCESS = 'BITCOIN/SIGN/TX_SUCCESS'
export const BITCOIN_SIGN_TX_FAILURE = 'BITCOIN/SIGN/TX_FAILURE'

// Show modal dialog window for the devices such as Trezor or Ledger
export const BITCOIN_SHOW_SIGN_TX_CONFIRMATION_MODAL_DIALOG = 'BITCOIN/BITCOIN_SHOW_SIGN_TX_CONFIRMATION_MODAL_DIALOG'
export const BITCOIN_CLOSE_SIGN_TX_CONFIRMATION_MODAL_DIALOG = 'BITCOIN/BITCOIN_CLOSE_SIGN_TX_CONFIRMATION_MODAL_DIALOG'