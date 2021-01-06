import React, { Component } from 'react';

import './Node.css';

export default class Node extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	
	render() {
		const {isStart, isFinish} = this.props;
		const modClassName = isFinish
			? 'node-finish'
			: isStart
			? 'node-start'
			: '';

		return <div className={`node ${modClassName}`}></div>;
	}
}

export const DEFAULT_NODE = {
	row: 0,
	col: 0,
}