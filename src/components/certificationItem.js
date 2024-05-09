import React from "react";

export default function CertificatonItem ({certification, date, issuer, isBottom}) {
    return (
        <>
            <div
                class={
                    isBottom ? "container" : "container mb-10"}
            >
                <p
                    class="
                        font-black
                        text-gray
                    "
                >{date}</p>
                <p
                    class="
                        font-extrabold
                    "
                >{certification}</p>
                <p
                    class="
                        font-semibold
                    "
                >{issuer}</p>
            </div>
        </>
    );
}