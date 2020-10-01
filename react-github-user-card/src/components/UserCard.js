import React from "react";

const UserCard = ({ follower }) => {
	const { login, avatar_url, html_url } = follower;
	return (
		<div>
			<div>
				<img src={avatar_url} alt="" />
			</div>
			<h1>Follower Handle: {login}</h1>
			<h2>
				<a href={html_url}>Github: {html_url} </a>
			</h2>
		</div>
	);
};

export default UserCard;
