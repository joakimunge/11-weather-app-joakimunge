import React, { Component } from 'react';
import moment from 'moment-timezone';

class Moment extends Component {
  render() {
    return (
      <div>
        {console.log(moment().tz('America/Los_Angeles').format('HH:mm:ss'))}
        {console.log(moment().tz('America/Los_Angeles').format('HH:mm:ss'))}
        
      </div>
    );
  }
}

export default Moment;