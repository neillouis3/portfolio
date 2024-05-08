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
                        font-bold
                        text-gray
                    "
                >{date}</p>
                <p
                    class="
                        font-bold
                    "
                >{certification}</p>
                <p
                    class="
                        font-bold
                    "
                >{issuer}</p>
            </div>
        </>
    );
}