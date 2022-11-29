/**
 * @Author: Daniel Riera
 * @Version: 1.0.0
 */
import React, { PureComponent } from 'react'
import { View } from 'react-native'

class Spacer extends PureComponent {
  render() {
    const {
      style,
    } = this.props;
    return (
      <View style={[{flex:1}, style]}/>
    )
  }
}

export default Spacer;
