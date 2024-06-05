import React from 'react';
import ProgLangItem from './progLangItem';

export default function ProgLang() {
    return (
        <>
            <div
                class="
                    container
                    bg-gray-dark
                    border-2
                    border-gray
                    rounded-lg

                    h-auto

                    p-4

                    flex
                    flex-wrap
                    gap-4
                "
            
            >
                <ProgLangItem lang="Python"/>
                <ProgLangItem lang="Java"/>
                <ProgLangItem lang="C"/>
                <ProgLangItem lang="JavaScript"/>
                <ProgLangItem lang="HTML"/>
                <ProgLangItem lang="CSS"/>
                <ProgLangItem lang="React"/>
                <ProgLangItem lang="Tailwind"/>
                <ProgLangItem lang="Bootstrap"/>
                <ProgLangItem lang="Django"/>
                <ProgLangItem lang="Flask"/>
                <ProgLangItem lang="SQL"/>
                <ProgLangItem lang="MongoDB"/>
                <ProgLangItem lang="Git"/>
                <ProgLangItem lang="GitHub"/>
                <ProgLangItem lang="VS Code"/>


            </div>
        

        </>

    );
}