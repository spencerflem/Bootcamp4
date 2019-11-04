import React from 'react';

class Search extends React.Component 
{
	constructor(props) {
		super(props);
		this.filterInput = React.createRef();
		this.filterUpdate = this.filterUpdate.bind(this);
	}

	filterUpdate() {
		//Here you will need to update the value of the filter with the value from the textbox
		this.props.filterUpdate(this.filterInput.current.value)

	}

	render() {
		//You will need to save the value from the textbox and update it as it changes
		//You will need the onChange value for the input tag to capture the textbox value

		return (
			<form onSubmit={e => e.preventDefault()}>
				<input type="text"
					placeholder="Type to Filter"
					ref={this.filterInput}
					onChange={this.filterUpdate} />
			</form>
		);
	}
}
export default Search;
