import React from "react";
import Typed from "react-typed";


function Profile() {
	return (
		<>
			<div 
				class="
					container 
					flex
					flex-col

					justify-center
					items-center

					rounded-lg
					border-2
					border-gray

					w-72
					h-72

					bg-transparent

					p-2
				"
			>
				<div 
					class="
						container 
						flex
						justify-center
						items-center\

						bg-transparent
						
					"
				>
					<img
						class="profileImage"
						src="https://i.imgur.com/4LQ0Jtj.jpg"
						alt="profile"
					/>
				</div>
				<div 
					class="
						container 
						flex
						flex-col
						justify-center
						items-center
						text-center

						bg-transparent
						
						
					"
				>
					<h1 class="profileText">Neil Louise</h1>

					<h2 class="profileText"></h2>
					<Typed
						class="profileText"
						strings={[
							"Software Engineer",
							"UI/UX Designer",
							"Graphic Designer",
						]}
						typeSpeed={75}
						delaySpeed={1000}
						loop
					/>
                    <p class="profileText">3rd Year Computer Engineering Student at Memorial University</p>
				</div>
			</div>
		</>
	);
}

export default Profile;
