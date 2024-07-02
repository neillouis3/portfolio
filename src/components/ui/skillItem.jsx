import React from 'react';

export default function SkillItem({ skill }) {
    return (
        <div
            class="
                bg-white
                px-2

                rounded-full
            "
        >
            <p
            >{skill}</p>
        </div>
    );
}
