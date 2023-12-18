import React from "react";
import Typed from "react-typed";
import "./profile.css";

function Profile() {
	return (
		<>
			<div className="profileContainer">
				<div className="profileImageContainer">
					<img
						className="profileImage"
						src="https://i.imgur.com/4LQ0Jtj.jpg"
						alt="profile"
					/>
				</div>
				<div className="profileTextContainer">
					<h1 className="profileText">Neil Louise</h1>

					<h2 className="profileText"></h2>
					<Typed
						className="bannerText"
						strings={[
							"Software Engineer",
							"UI/UX Designer",
							"Graphic Designer",
						]}
						typeSpeed={75}
						delaySpeed={1000}
						loop
					/>
				</div>
			</div>
		</>
	);
}

export default Profile;
