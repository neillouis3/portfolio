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

                w-full
				p-2
                h-auto
                items-center
				
				bg-gray-dark
				rounded-2xl
				border-2
				border-gray
            "
			>
				<ReactSocialMediaIcons
					borderWith="0"
					borderColor="#FFFFFF"
					borderStyle="none"
					roundness="50%"
					backgroundColor="#282C34"
					target="_blank"
					icon="github"
					url="https://github.com/neillouis3"
				/>

				<ReactSocialMediaIcons
					borderWith="0"
					borderColor="#FFFFFF"
					borderStyle="none"
					roundness="50%"
					backgroundColor="#282C34"
					target="_blank"
					icon="linkedin"
					url="https://www.linkedin.com/in/neillouis3/"
				/>

				<ReactSocialMediaIcons
					borderWith="0"
					borderColor="#FFFFFF"
					borderStyle="none"
					roundness="50%"
					backgroundColor="#282C34"
					target="_blank"
					icon="instagram"
					url="https://www.instagram.com/neillouis3/"
				/>
			</div>
		</>
	);
}
