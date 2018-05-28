import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { createStructuredSelector } from 'reselect';

import { clearFlareMessage, popFlareMessage } from './actions';
import { getMessages } from './selectors';

import { Flare } from './components';

class FlareContainer extends Component {
	render() {
		const { messages } = this.props;
		const open = !!messages.length;
		const message = open && messages[0];

		const flareProps = {
			open,
			message,
			onRequestClose: popFlareMessage
		};

		return open ? <Flare {...flareProps}/> : null;
	}
}

const mapStateToProps = createStructuredSelector({ messages: getMessages });
const mapDispatchToProps = dispatch => {
	return bindActionCreators({
		clearFlareMessage,
		popFlareMessage,
	}, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(FlareContainer);