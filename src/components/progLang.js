import React from 'react';
import ProgLangItem from './progLangItem';
import {Tooltip} from "@nextui-org/tooltip";
export default function ProgLang() {
    return (
        <>
            <div
                class="
                    container
                    bg-gray-dark
                    border-2
                    border-gray
                    rounded-2xl

                    h-auto

                    p-4

                    flex
                    flex-wrap
                    gap-2
                "
            
            >


                <ProgLangItem lang="Python"/>
                <ProgLangItem lang="Java"/>
                <ProgLangItem lang="C++"/>
                <ProgLangItem lang="C#"/>
                <ProgLangItem lang="JS"/>
                <ProgLangItem lang="HTML"/>
                <ProgLangItem lang="CSS"/>
                <ProgLangItem lang="React"/>
                <ProgLangItem lang="Tailwind"/>
                <ProgLangItem lang="Django"/>
                <ProgLangItem lang="Flask"/>
                <ProgLangItem lang="SQL"/>
                <ProgLangItem lang="MongoDB"/>
                <ProgLangItem lang="Git"/>

                <hr
                    class="
                        border-orange
                        border-1.5
                        w-full
                    "
                />

                <ProgLangItem lang="Figma"/>

                <ProgLangItem lang="PSpice"/>
                <ProgLangItem lang="Matlab"/>
                <ProgLangItem lang="CAD"/>



            </div>
        

        </>

    );
}