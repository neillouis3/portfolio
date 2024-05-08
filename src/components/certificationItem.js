import React from "react";

export default function CertificatonItem ({certification, date, issuer}) {
    return (
        <>
            <div
                class="
                    container
                "
            >
                <p>{date}</p>
                <p>{certification}</p>
                <p>{issuer}</p>
            </div>
        </>
    );
}