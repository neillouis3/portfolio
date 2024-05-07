import React from "react";
import Typed from "react-typed";


function Profile() {
	return (
		<>
			<div 
				class="
					container 


					justify-center
					items-center
					text-center
					w-full
					h-60


					p-4

					bg-white
					rounded-lg
					border-2
					border-black

				"
			>
				<div 
					class="
						container 	
						justify-center
						bg-black	
					"
				>
					<img
						class="
							w-24
							h-24
							rounded-lg
							mx-auto
						"

						src="../../images/profilePhoto.png"
						alt="profile"
					/>
				</div>
				<div 
					class="
						container 

						justify-center
						items-center
						text-center

						bg-transparent
						
						
					"
				>
					<h1 class="
							text-md
							mt-4
							mb-0
							font-bold
						"
					>Neil Louise A. Castillon</h1>

					<p
						class="
							-mt-1
							text-xs
						"
					>Software Engineer</p>
                    <p class="
							text-xs
							mt-3
							text-slate-500
						"
					>3rd Year Computer Engineering Student at Memorial University</p>
				</div>
			</div>
		</>
	);
}

export default Profile;
