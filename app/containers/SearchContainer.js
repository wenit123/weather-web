var React = require('react');
var PropTypes = React.PropTypes;
var Search = require('../components/Search');
var Main = require('../containers/Main');

var SearchContainer = React.createClass({

	getDefaultProps: function () {
    	return {
    	  	direction: 'column'
    	}
  	},
  
  	propTypes: {
    	direction: PropTypes.string
  	},
	
	getInitialState: function () {
    	return {
      		city: ''
    	}
  	},

  	handleSubmitCity: function () {
    	console.log(this.state.city)
  	},

  	handleUpdateCity: function (e) {
    	this.setState({
      	city: e.target.value
   	 	})
  	},
  

  	render: function () {
    	return (
      		<Search
        	direction={this.props.direction}
        	onSubmitCity={this.handleSubmitCity}
        	onUpdateCity={this.handleUpdateCity}
        	city={this.state.city} />
    )
  }

});

module.exports = SearchContainer;