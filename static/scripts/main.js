require('bootstrap');
require('bootstrap.css');

var $ = require('jQuery'),
	React = require('react');

var AppComponent = require('./appComponent.js');

React.render(<AppComponent/>, document.body);

