import React from 'react';
import { connect } from 'react-redux';

export default function AuralStatus(props) {
  return (
    <p
      id="status-readout"
      className="visuallyhidden"
      aria-live="assertive"
      aria-atomic="true"
    >
      {props.auralStatus}
    </p>
  );
}

const mapStateProps = state => ({
  auralStatus: state.auralStatus
});

export default connect(mapStateProps)(AuralStatus);