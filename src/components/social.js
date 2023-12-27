import React from "react";
import { ReactSocialMediaIcons } from "react-social-media-icons";

export default function Social() {
	return (
		<>
			<div
				class="
                container 
                flex
                flex-row
                gap-4
                justify-center
                rounded-lg
                border-2
                border-gray
                w-72
                h-16
                items-center

            "
			>
				<ReactSocialMediaIcons
					borderWith="1"
					borderColor="#5C6370"
					borderStyle="solid"
					roundness="50%"
					backgroundColor="none"
					target="_blank"
					icon="github"
					url="https://github.com/neillouis3"
				/>

				<ReactSocialMediaIcons
					borderWith="1"
					borderColor="#5C6370"
					borderStyle="solid"
					roundness="50%"
					backgroundColor="none"
					target="_blank"
					icon="linkedin"
					url="https://www.linkedin.com/in/neillouis3/"
				/>

				<ReactSocialMediaIcons
					borderWith="1"
					borderColor="#5C6370"
					borderStyle="solid"
					roundness="50%"
					backgroundColor="none"
					target="_blank"
					icon="instagram"
					url="https://www.instagram.com/neillouis3/"
				/>
			</div>
		</>
	);
}
