// @flow

import { connect } from 'react-redux'
import { CurrencySettingsTitle } from './CurrencySettingsTitle.ui.js'
import type { CurrencySettingsTitleOwnProps } from './CurrencySettingsTitle.ui.js'
import type { State } from '../../../../modules/ReduxTypes.js'
import type { EdgeCurrencyPlugin } from 'edge-core-js'
import { getPlugin } from '../../Settings/selectors.js'

const mapStateToProps = (state: State, ownProps: CurrencySettingsTitleOwnProps) => {
  const plugin: EdgeCurrencyPlugin = getPlugin(state, ownProps.pluginName)
  return {
    logo: plugin.currencyInfo.symbolImage || ''
  }
}

const mapDispatchToProps = () => {
  return {

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CurrencySettingsTitle)
