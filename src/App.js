
import React, { Component } from 'react';
import Contacts from './components/contacts';
class App extends Component {
	state = {
		contacts: []
	}
	componentDidMount() {
		fetch('/people')
			.then(res => console.log(res))
			.then((data) => {
				//this.setState({ contacts: data })
				console.log(data);
			})
			.catch(console.log)
	}
	render() {
		return (
			// <Contacts contacts={this.state.contacts} />
			<h1>Heeloo worlddd</h1>
		);
	}
}

export default App;