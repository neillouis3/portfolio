import React from 'react';

export default function SkillItem({ skill }) {
    return (
        <div
            class="
                bg-white
                pl-2
                pr-2
                pt-1
                pb-1

                rounded-md
            "
        >
            <p
            >{skill}</p>
        </div>
    );
}
