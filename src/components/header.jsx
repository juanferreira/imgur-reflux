import React from 'react';
import { Link } from 'react-router';

const Header = () => {
	return (
		<nav className="navbar navbar-default header">
			<div className="container-fluid">
				<Link to="/" className="navbar-brand">Imgur Browser</Link>

				<ul className="nav navbar-nav navbar-right">
					<li><a>Topic #1</a></li>
				</ul>
			</div>
		</nav>
	);
};

export default Header;