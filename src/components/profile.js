import React from "react";



function Profile() {
	return (
		<>
			<div 
				class="
					container 

					justify-center
					items-center
					text-center

					bg-gray-dark
					rounded-lg
					border-2
					border-gray

					w-full
					xl:h-full
					xl:pb-10
					xl:pt-10
					xl:pl-4
					xl:pr-4
					2xl:h-60
					2xl:p-4

					3xl:h-80
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
							rounded-lg
							mx-auto

							xl:w-24
							xl:h-24
							xl:mb-5

							2xl:w-24
							2xl:h-24

							3xl:w-32
							3xl:h-32
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
							2xl:text-md
							3xl:text-3xl
							2xl:mt-4
							xl:text-2xl

							font-bold
							text-white
						"
					>Neil Louise A. Castillon</h1>

					<p
						class="
							-mt-1
							text-s
							text-white
						"
					>Software Engineer</p>
                    <p class="
							text-s
							mt-3
							text-gray-light
						"
					>3rd Year Computer Engineering Student at Memorial University</p>
				</div>
			</div>
		</>
	);
}

export default Profile;
