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
            disable404Route: true,
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
                            id: "chamoitemskins",
                            link: '/chamoitemskins',
                            icon: 'chamoitemskins',
                            items: [
                                {
                                    label: "Administration",
                                    items: [
                                        {
                                            label: "Introduction",
                                            items: [
                                                'chamoitemskins/administration/introduction/installing',
                                                'chamoitemskins/administration/introduction/understanding',
                                                'chamoitemskins/administration/introduction/migration',
                                                'chamoitemskins/administration/introduction/configuring',
                                                'chamoitemskins/administration/introduction/selfpack',
                                                'chamoitemskins/administration/introduction/editor',
                                            ],
                                        },
                                        {
                                            label: "Commands, permissions and placeholders",
                                            items: [
                                                'chamoitemskins/administration/commandsetc/commands',
                                                'chamoitemskins/administration/commandsetc/permissions',
                                                'chamoitemskins/administration/commandsetc/placeholders',
                                            ],
                                        },
                                    ]
                                },
                                {
                                    label: "Development",
                                    items: [
                                        {
                                            label: "Getting started",
                                            items: [
                                                'chamoitemskins/development/getting-started/start-using',
                                                'chamoitemskins/development/getting-started/examples',
                                            ],
                                        },
                                        {
                                            label: "API",
                                            items: [
                                                {
                                                    label: "Services",
                                                    items: [
                                                        'chamoitemskins/development/api/service/category',
                                                        'chamoitemskins/development/api/service/favorite',
                                                        'chamoitemskins/development/api/service/grant',
                                                        'chamoitemskins/development/api/service/migrate',
                                                        'chamoitemskins/development/api/service/rarity',
                                                        'chamoitemskins/development/api/service/skin',
                                                    ],
                                                },
                                                'chamoitemskins/development/api/events',
                                            ],
                                        }
                                    ],
                                }
                            ],
                        },

                    ], {
                        exclude: [
                            '/nu/javadocs/**/*',
                        ]
                    },
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
            social: [
                {
                    icon: 'github',
                    label: 'GitHub',
                    href: 'https://github.com/SQD-Studios/'
                },
                {
                    icon: 'seti:java',
                    label: 'Javados',
                    href: '/docs/nu/javadocs/selection'
                },
                {
                    icon: 'discord',
                    label: 'Discord',
                    href: 'https://discord.gg/YmQs87ZTBB'
                }
            ],

        }),
    ],

    vite: {
        plugins: [tailwindcss()],
    },
});