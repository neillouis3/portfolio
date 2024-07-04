import React from 'react';

export default function SkillItem({ skill }) {
    return (
        <div
            class="
                bg-gray
                bg-opacity-50
                px-2
                py-0.5

                rounded-full
            "
        >
            <p
                class="
                    text-gray-light
                    xl:text-s
                "
            >{skill}</p>
        </div>
    );
}
