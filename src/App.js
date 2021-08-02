import "./App.css";
import { Component } from "react";
import { CardList } from "./components/card-list/card-list.component";
import { Search } from "./components/search/search.component";

class App extends Component {
	constructor(props) {
		super();

		this.state = {
			monsters: [],
			searchField: "",
		};
	}

	componentDidMount() {
		fetch("http://jsonplaceholder.typicode.com/users")
			.then((response) => response.json())
			.then((users) => this.setState({ monsters: users }));
	}

	handleChange = (e) => {
		this.setState({ searchField: e.target.value });
	};

	render() {
		const { monsters, searchField } = this.state;
		const filteredMonsters = monsters.filter((monster) =>
			monster.name.toLowerCase().includes(searchField.toLowerCase())
		);
		return (
			<div className="App">
				<h1>Monsters Rolodex</h1>
				{/* search component */}
				<Search
					placeholder="Search Monster"
					handleChange={this.handleChange}
				/>

				{/* Cardist Component */}
				<CardList monsters={filteredMonsters} />
			</div>
		);
	}
}

export default App;
