"use client"
import React from "react";
import { Chip } from "@nextui-org/react";

export default function ProjectContent() {
    return (
        <div className="w-full h-fit flex-row flex gap-4 items-center ">
            <div className="h-screen">

            </div>
            <div className="h-screen w-[25vw] bg-default-500 flex flex-col justify-center z-40 fixed right-[12.5vw] top-0">
                <h1 className="text-base">Technologies</h1>
                <div className="flex flex-wrap gap-1">
                    <Chip key="Python" variant="faded" size="sm">Python</Chip>
                    <Chip key="JavaScript" variant="faded" size="sm">JavaScript</Chip>
                    <Chip key="TypeScript" variant="faded" size="sm">TypeScript</Chip>
                    <Chip key="Java" variant="faded" size="sm">Java</Chip>
                    <Chip key="CSharp" variant="faded" size="sm">C#</Chip>
                    <Chip key="Ruby" variant="faded" size="sm">Ruby</Chip>
                    <Chip key="Go" variant="faded" size="sm">Go</Chip>
                    <Chip key="PHP" variant="faded" size="sm">PHP</Chip>
                    <Chip key="Swift" variant="faded" size="sm">Swift</Chip>
                    <Chip key="Kotlin" variant="faded" size="sm">Kotlin</Chip>
                    <Chip key="Rust" variant="faded" size="sm">Rust</Chip>
                    <Chip key="Dart" variant="faded" size="sm">Dart</Chip>
                    <Chip key="Scala" variant="faded" size="sm">Scala</Chip>
                    <Chip key="Elixir" variant="faded" size="sm">Elixir</Chip>
                    <Chip key="HTML" variant="faded" size="sm">HTML</Chip>
                    <Chip key="CSS" variant="faded" size="sm">CSS</Chip>
                    <Chip key="SQL" variant="faded" size="sm">SQL</Chip>
                    <Chip key="R" variant="faded" size="sm">R</Chip>
                    <Chip key="Shell" variant="faded" size="sm">Shell</Chip>
                    <Chip key="Haskell" variant="faded" size="sm">Haskell</Chip>
                </div>
                
            </div>

                
        </div>
    )
}