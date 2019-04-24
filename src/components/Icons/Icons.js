import React from 'react';
import Icon from '../Icon/Icon'

export default class Icons extends React.Component {
  render() {
    const { display } = this.props;
    return (
      <div className="icons--container" style={{display:display}}>
        <Icon />
        <Icon />
        <Icon />
        <Icon />
      </div>

    )
  }
}
