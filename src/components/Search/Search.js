import React, { Component } from 'react';
import { Redirect } from "react-router-dom";

import './Search.css';

class Search extends Component {

	constructor(props) {
		super(props);
		this.state = {value: ''}

		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleChange = this.handleChange.bind(this);

	}

  handleChange(event) {
    this.setState({value: event.target.value, submitted: false});
  }

	handleSubmit(event) {
		event.preventDefault();
		this.setState({
			submitted: true
		})
	}

  render() {
    return (
    	<div>
	      <form onSubmit={this.handleSubmit}>
	        <input className="search" value={this.state.value} onChange={this.handleChange} type="text" name="search" placeholder="Find a location.."/>
	      </form>
	      {this.state.submitted &&
          <Redirect push to={{
            pathname: '/location/' + this.state.value,
          }}/>

        }

	     </div>
    );
  }
}

export default Search;