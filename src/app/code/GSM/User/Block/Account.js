import React from 'react';

class GSMUserBlockAccount extends React.Component {
	render() {
		let {message, type} = this.props;
		return <div className="mt-3">
			<button className={"btn btn-" + (type ? type : 'primary')}>{message}</button>
		</div>;
	}
}

export default GSMUserBlockAccount;