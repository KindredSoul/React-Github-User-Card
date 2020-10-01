import React from "react";

const MainUser = ({ mainUser }) => {
	const { login, followers, following, avatar_url, name, html_url } = mainUser;
	return (
		<div>
			<div>
				<img src={avatar_url} alt="" />
			</div>
			<h1>{login}</h1>
			<h2>Name: {name}</h2>
			<h2>
				<a href={html_url}>Github: {html_url} </a>
			</h2>
			<p>Followers: {followers}</p>
			<p>Following: {following}</p>
		</div>
	);
};

export default MainUser;
