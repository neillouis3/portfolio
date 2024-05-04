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

					w-full
					h-72


					p-2
				"
			>
				<div 
					class="
						container 
						flex
						justify-center
						items-center

						bg-transparent
						
					"
				>
					<img
						class="
							w-1/2
							h-36
							rounded-full
						"

						src="../../images/profilePhoto.png"
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
					<h1 class="
							text-xs
						"
					>Neil Louise</h1>

					<Typed
						style={{ size: "1rem" }}

						strings={[
							"Software Engineer",
							"UI/UX Designer",
							"Graphic Designer",
						]}
						typeSpeed={75}
						delaySpeed={1000}
						loop
					/>
                    <p class="
							text-xs
						"
					>3rd Year Computer Engineering Student at Memorial University</p>
				</div>
			</div>
		</>
	);
}

export default Profile;
