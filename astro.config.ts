import starlight from "@astrojs/starlight";
import svelte from "@astrojs/svelte";
import d2 from "astro-d2";
import { defineConfig } from "astro/config";
import starlightLinksValidator from "starlight-links-validator";
import starlightSidebarTopics from "starlight-sidebar-topics";

const prod = process.env.NODE_ENV === "production";

// https://astro.build/config
// @ts-ignore
// @ts-ignore
export default defineConfig({
	site: prod ? "https://docs.chamosmp.net" : undefined,
	integrations: [
		// save Markdown renderer configuration to globals for use by the on-demand renderer
		// order matters - we want this to use only our configuration
		{
			name: "docs:config-md",
			hooks: {
				"astro:config:setup": ({config}) => {
				},
			},
		},
		starlight({
			title: "PaperMC Docs",
			social: [{icon: 'github', label: 'GitHub', href: 'https://github.com/orgs/SQD-Studios/repositories'}],
			lastUpdated: true,
			editLink: {
				baseUrl: "https://github.com/PaperMC/docs/edit/main/",
			},
			customCss: [
				"@fontsource/poppins/400.css",
				// "@fontsource/poppins/600.css", // see src/styles/custom.css
				"@fontsource/jetbrains-mono/400.css",
				"@fontsource/jetbrains-mono/600.css",
				"./src/styles/custom.css",
			],
			components: {
				Head: "./src/components/overrides/Head.astro",
				SiteTitle: "./src/components/overrides/SiteTitle.astro",
				PageFrame: "./src/components/overrides/PageFrame.astro",
				Footer: "./src/components/overrides/Footer.astro",
				LastUpdated: "./src/components/overrides/LastUpdated.astro",
				Banner: "./src/components/overrides/Banner.astro",
				TableOfContents: "./src/components/overrides/TableOfContents.astro",
				MobileTableOfContents: "./src/components/overrides/MobileTableOfContents.astro",
				SocialIcons: "./src/components/overrides/SocialIcons.astro",
				// stop starlight-sidebar-topics from having its component there
				// we override the topics with our dropdown in PageFrame
				Sidebar: "@astrojs/starlight/components/Sidebar.astro",
			},
			plugins: [
				starlightLinksValidator({
					exclude: [
						"/adventure/version-history/*", // custom pages
					],
					errorOnInvalidHashes: false, // enable if you want to check hashes - it doesn't work with config diagrams
				}),
				starlightSidebarTopics(
					[
						{
							id: "orders",
							label: "ChamoOrders",
							link: "/ChamoOrders/",
							icon: "paper",
							items: [
								{
									label: "Introduction",
									items: [
										{
											label: "Getting started",
											items: ["ChamoOrders/Introduction"],
										}
									],
								}
							]
						}
					]
				),
			],
		})],
})