// @flow

type ActionType =
  | 'CLOSE_DELETE_WALLET_MODAL'
  | 'CLOSE_GETSEED_WALLET_MODAL'
  | 'CLOSE_RENAME_WALLET_MODAL'
  | 'CLOSE_RESYNC_WALLET_MODAL'
  | 'CLOSE_SPLIT_WALLET_MODAL'
  | 'CLOSE_VIEW_XPUB_WALLET_MODAL'
  | 'LOCK_WALLET_SEED'
  | 'OPEN_DELETE_WALLET_MODAL'
  | 'OPEN_GETSEED_WALLET_MODAL'
  | 'OPEN_RENAME_WALLET_MODAL'
  | 'OPEN_RESYNC_WALLET_MODAL'
  | 'OPEN_SPLIT_WALLET_MODAL'
  | 'OPEN_VIEW_XPUB_WALLET_MODAL'
  | 'UNLOCK_WALLET_SEED'
  | 'selectFromWalletCryptoExchange'
  | 'selectToWalletCryptoExchange'
  | 'swapFromToCryptoWallets'
  | 'openWalletSelectorModal'
  | 'updateCryptoExchangeRate'
  | 'updateCryptoReverseExchangeRate'
  | 'updateCryptoExchangeInfo'
  | 'updateCryptoReverseExchangeInfo'
  | 'updateShiftTransactionFee'
  | 'invalidateShiftTransaction'
  | 'shiftCryptoCurrency'
  | 'shiftComplete'
  | 'shiftError'
  | 'openCryptoExecConfModal'
  | 'closeCryptoExecConfModal'
  | 'startMakeSpendCrypto'
  | 'doneMakeSpendCrypto'
  | 'setCryptoExchangeAmounts'
  | 'receivedTRansactionError'
  | 'receivedInsufficentFundsError'
  | 'genericShapeShiftError'
  | 'CHANGE_EXCHANGE_FEE'
  | 'onAvailableShapeShiftTokens'
  | 'START_SHIFT_TRANSACTION'
  | 'DONE_SHIFT_TRANSACTION'
  | 'OPEN_AB_ALERT'
  | 'CLOSE_AB_ALERT'
  | 'useLegacyRequestAddress'
  | 'useRegularRequestAddress'
  | 'UPDATE_RECEIVE_ADDRESS_SUCCESS'
  | 'newReceiveAddress'
  | 'saveEdgeLobby'
  | 'invalidateEdgeLobby'
  | 'setLobbyError'
  | 'eraseDeepLink'
  | 'accountInitComplete'
  | 'disableOTPReset'
  | 'setConfirmPasswordError'
  | 'ACCOUNT/LOGGED_IN'
  | 'LOGOUT'
  | 'Core/Context/ADD_CONTEXT'
  | 'Core/Context/ADD_USERNAMES'
  | 'Core/Context/DELETE_LOCAL_ACCOUNT_REQUEST'
  | 'Core/Context/DELETE_LOCAL_ACCOUNT_SUCCESS'
  | 'Core/Context/DELETE_LOCAL_ACCOUNT_ERROR'
  | 'Core/Wallets/UPDATE_WALLETS'
  | 'ExchangeRates/UPDATE_EXCHANGE_RATES'
  | 'Logs/SEND_LOGS_PENDING'
  | 'Logs/SEND_LOGS_REQUEST'
  | 'Logs/SEND_LOGS_SUCCESS'
  | 'Logs/SEND_LOGS_FAILURE'
  | 'OPEN_SELECT_USER'
  | 'CLOSE_SELECT_USER'
  | 'LIST_USER_USER_SIDE_MENU'
  | 'SELECT_USERS_SIDE_MENU'
  | 'REMOVE_USERS_SIDE_MENU'
  | 'UI/components/DropdownAlert/DISPLAY_DROPDOWN_ALERT'
  | 'UI/components/DropdownAlert/DISMISS_DROPDOWN_ALERT'
  | 'UI/components/ErrorAlert/DISPLAY_ERROR_ALERT'
  | 'UI/components/ErrorAlert/DISMISS_ERROR_ALERT'
  | 'UPDATE_EXCHANGE_RATES'
  | 'OPEN_HELP_MODAL'
  | 'CLOSE_HELP_MODAL'
  | 'SHOW_PASSWORD_RECOVERY_MODAL'
  | 'HIDE_PASSWORD_RECOVERY_MODAL'
  | 'PasswordReminderModal/CHECK_PASSWORD_START'
  | 'PasswordReminderModal/CHECK_PASSWORD_SUCCESS'
  | 'PasswordReminderModal/CHECK_PASSWORD_FAIL'
  | 'PasswordReminderModal/REQUEST_CHANGE_PASSWORD'
  | 'PasswordReminderModal/PASSWORD_REMINDER_POSTPONED'
  | 'PasswordReminderModal/SET_PASSWORD_REMINDER_START'
  | 'PasswordReminderModal/SET_PASSWORD_REMINDER_SUCCESS'
  | 'PasswordReminderModal/SET_PASSWORD_REMINDER_FAIL'
  | 'UI/components/TransactionAlert/DISPLAY_TRANSACTION_ALERT'
  | 'UI/components/TransactionAlert/DISMISS_TRANSACTION_ALERT'
  | 'TOGGLE_SELECTED_WALLET_LIST_MODAL'
  | 'ENABLE_SELECTED_WALLET_LIST_MODAL'
  | 'DISABLE_SELECTED_WALLET_LIST_MODAL'
  | 'TOGGLE_SCAN_TO_WALLET_LIST_MODAL'
  | 'ENABLE_SCAN_TO_WALLET_LIST_MODAL'
  | 'DISABLE_SCAN_TO_WALLET_LIST_MODAL'
  | 'TOGGLE_WALLET_LIST_MODAL_VISIBILITY'
  | 'ENABLE_WALLET_LIST_MODAL_VISIBILITY'
  | 'DISABLE_WALLET_LIST_MODAL_VISIBILITY'
  | 'TOGGLE_TRANSACTIONS_WALLET_LIST_MODAL'
  | 'ENABLE_TRANSACTIONS_WALLET_LIST_MODAL'
  | 'DISABLE_TRANSACTIONS_WALLET_LIST_MODAL'
  | 'SET_KEYBOARD_HEIGHT'
  | 'ADD_TOKEN_START'
  | 'ADD_TOKEN_SUCCESS'
  | 'ADD_NEW_CUSTOM_TOKEN_SUCCESS'
  | 'ADD_NEW_CUSTOM_TOKEN_FAILURE'
  | 'UPDATE_WALLET_NAME'
  | 'SELECT_WALLET_TYPE'
  | 'SELECT_FIAT'
  | 'UI/Wallets/UPSERT_WALLETS'
  | 'UI/Wallets/ACTIVATE_WALLET_ID'
  | 'UI/Wallets/ARCHIVE_WALLET_ID'
  | 'UI/Wallets/SELECT_WALLET'
  | 'MANAGE_TOKENS'
  | 'MANAGE_TOKENS_START'
  | 'MANAGE_TOKENS_SUCCESS'
  | 'DELETE_CUSTOM_TOKEN_START'
  | 'DELETE_CUSTOM_TOKEN_SUCCESS'
  | 'DELETE_CUSTOM_TOKEN_FAILURE'
  | 'UPDATE_WALLET_ENABLED_TOKENS'
  | 'EDIT_CUSTOM_TOKEN_START'
  | 'EDIT_CUSTOM_TOKEN_SUCCESS'
  | 'EDIT_CUSTOM_TOKEN_FAILURE'
  | 'UPDATE_EXISTING_TOKEN_SUCCESS'
  | 'OVERWRITE_THEN_DELETE_TOKEN_SUCCESS'
  | 'ADD_NEW_TOKEN_THEN_DELETE_OLD_SUCCESS'
  | 'UPDATE_WALLET_LOADING_PROGRESS'
  | 'INSERT_WALLET_IDS_FOR_PROGRESS'
  | 'CLOSE_ALL_WALLET_LIST_MODALS'
  | 'UI/Wallets/REFRESH_RECEIVE_ADDRESS'
  | 'UI/Wallets/CREATE_WALLET_START'
  | 'UI/Wallets/CREATE_WALLET_SUCCESS'
  | 'UI/Wallets/CREATE_WALLET_FAILURE'
  | 'UI/Wallets/REFRESH_RECEIVE_ADDRESS'
  | string

type LegacyAction = {
  type: ActionType,
  data?: any
}

export type Action = LegacyAction
