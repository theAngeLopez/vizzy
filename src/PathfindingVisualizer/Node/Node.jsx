import React, { Component } from 'react';

import './Node.scss';

export default class Node extends Component {
	constructor(props) {
		super(props);
		this.setState = {};
	}
	
	render() {
		return <div className="node"></div>;
	}
}