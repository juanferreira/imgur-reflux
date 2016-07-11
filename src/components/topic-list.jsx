import React, { Component } from 'react';
import TopicStore from '../stores/topic-store';

class TopicList extends Component {
	constructor(props) {
		super(props);

		this.state = { topics: [] };
	}

	componentWillMount() {
		TopicStore.then(() => {
			this.setState({
				topics: TopicStore.topics
			});
		}).bind(this);
	}

	render() {
		return (
			<div className="list-group">
				TopicList
				{ this.renderTopics() }
			</div>
		);
	}

	renderTopics() {
		return this.state.topics.map(topic => <li>topic</li>);
	}
}

export default TopicList;