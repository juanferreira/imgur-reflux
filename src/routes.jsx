import React from 'react';
import { Router, Route } from 'react-router';

import Main from './components/main';

export default (
	<Router>
		<Route path="/" component={Main}>
		</Route>
	</Router>
);
