import React, { Component } from 'react';
import Header from './header';
import TopicList from './topic-list';

const getContent = (props) => {
	if( props.children ) return props.children;

	return <TopicList />
};

const Main = (props) => {
	return (
		<div>
			<Header />
			{ getContent(props) }
		</div>
	);
};

export default Main;