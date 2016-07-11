import React from 'react';
import Reflux, { Store } from 'reflux';
import axios from 'axios';
import { URL } from '../constants';

class TopicStore extends Store {
	constructor(props) {
		super(props);
	}

	getTopics() {
		return axios.get(URL('topics/default'))
				.then(json => { 
					this.topisc = json.data;
				}).bind(this);
	}
}

export default TopicStore;