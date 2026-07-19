// @ts-check
import {defineConfig} from 'astro/config';
import starlight from '@astrojs/starlight';

import tailwindcss from '@tailwindcss/vite';
import starlightSidebarTopics from 'starlight-sidebar-topics'

// https://astro.build/config
export default defineConfig({
    site: 'https://sqdstudios.github.io',
    base: 'docs/',
    integrations: [

        starlight({
            favicon: 'favicon.ico',
            plugins: [
                starlightSidebarTopics([
                        {
                            label: 'ABX Velocity',
                            link: '/abxvelocity/administration/introduction/installing',
                            icon: 'velocity',
                            items: [
                                {
                                    label: "Administration",
                                    items: [
                                        {
                                            label: "Introduction",
                                            items: ['abxvelocity/administration/introduction/installing'],
                                        },

                                    ]
                                },
                            ],
                        },
                        {
                            label: 'ChamoParty',
                            link: '/chamoparty/administration/introduction/installing',
                            icon: 'chamoparty',
                            items: [
                                {
                                    label: "Administration",
                                    items: [
                                        {
                                            label: "Introduction",
                                            items: ['chamoparty/administration/introduction/installing'],
                                        },

                                    ]
                                },
                            ],
                        },
                        {
                            label: 'ChamoItemSkins',
                            link: '/chamoitemskins/administration/introduction/installing',
                            icon: 'chamoitemskins',
                            items: [
                                {
                                    label: "Administration",
                                    items: [
                                        {
                                            label: "Introduction",
                                            items: ['chamoitemskins/administration/introduction/installing'],
                                        },

                                    ]
                                },
                            ],
                        },

                    ], {
                    exclude: ['/nu/javadocs/**/*']
                    }
                )
            ],
            title: 'SQD Studios Documentation',
            components: {
                Footer: './src/components/overrides/Footer.astro',
                Banner: './src/components/overrides/Banner.astro',
                Sidebar: './src/components/Sidebar.astro',
                SocialIcons: './src/components/overrides/SocialIcons.astro',
            },
            editLink: {
                baseUrl: 'https://github.com/SQD-Studios/docs/tree/master/',
            },
            tableOfContents: {minHeadingLevel: 1, maxHeadingLevel: 3},
            customCss: [
                // Path to your Tailwind base styles:
                './src/styles/global.css',
                './src/fonts/font-face.css',
            ],
            logo: {
                src: './src/assets/SQDStudios.webp',
            },
            social: [{icon: 'github', label: 'GitHub', href: 'https://github.com/SQD-Studios/'}, {
                icon: 'seti:java',
                label: 'Javados',
                href: '/docs/nu/javadocs/selection'
            },],

        }),
    ],

    vite: {
        plugins: [tailwindcss()],
    },
});