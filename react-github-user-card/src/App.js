import React, { Component } from "react";
import "./App.css";
import MainUser from "./components/MainUser";
import UserCard from "./components/UserCard";

/* user data required
  {login, avatar_url, id, html_url, email,
  followers, name, blog}
*/

class App extends Component {
	constructor() {
		super();
		this.state = {
			users: [],
			mainUser: {},
		};
	}

	componentDidMount() {
		this.fetchUsers(this.state.users);
	}

	fetchUsers = (user) => {
		console.log(user);
		fetch(`https://api.github.com/users/KindredSoul`)
			.then((res) => res.json())
			.then((data) => {
				console.log(data);
				this.setState({ mainUser: data });
				console.log(this.state.mainUser);
				fetch(`${data.followers_url}`)
					.then((res) => res.json())
					.then((data) => {
						console.log(data);
						data.map((follower) => {
							return this.setState({
								users: [...this.state.users, follower],
							});
						});
						console.log(this.state.users);
					})
					.catch((error) => console.log("error: ", error));
			})
			.catch((error) => console.log("error: ", error));
	};

	render() {
		return (
			<div className="App">
				<header className="App-header">
					<MainUser mainUser={this.state.mainUser} />
					{this.state.users.map((follower) => (
						<UserCard key={follower.id} follower={follower} />
					))}
				</header>
			</div>
		);
	}
}

export default App;
