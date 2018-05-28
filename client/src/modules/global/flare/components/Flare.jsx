import React, { Component } from 'react';
import Snackbar from 'material-ui/Snackbar';

export default class Flare extends Component {
	render() {
		const { handleRequestClose, message, open } = this.props;
		return (
			<Snackbar
				style={{
					'borderRadius': '5pt'
				}}
				bodyStyle={{
					'height': '60px',
					'width:' : '200px'
				}}
				contentStyle={{
					'textAlign': 'center',
					'paddingTop':'12px',
					'fontFamily': 'Montserrat',
					'color': 'white',
					'fontSize': '18px'
				}}
				open={open}
				message={message}
				autoHideDuration={4000}
				onRequestClose={handleRequestClose}
			/>
		);
	}
}
