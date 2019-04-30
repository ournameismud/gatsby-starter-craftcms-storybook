const { plugins } = require('./postcss.config')
const activeEnv =
	process.env.ACTIVE_ENV || process.env.NODE_ENV || 'development'

require('dotenv').config({
	path: `.env.${activeEnv}`
})

module.exports = {
	siteMetadata: {
		title: `spon.io`,
		author: `Dave Stockley`,
		description: `Freelance Frontend Web Developer based in Bristol, UK. React, Gatsby, Javascript, CSS, Craftcms`,
		siteUrl: `https://spon.io/`,
		social: {
			twitter: `magicspon`
		}
	},
	plugins: [
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `uploads`,
				path: `${__dirname}/static/img`
			}
		},
		{
			resolve: `gatsby-plugin-postcss`,
			options: {
				postCssPlugins: plugins
			}
		},

		`gatsby-transformer-sharp`,
		`gatsby-plugin-sharp`,

		{
			resolve: 'gatsby-source-graphql',
			options: {
				fieldName: 'craft',
				typeName: 'Craft',
				url: process.env.API_URL,
				headers: {
					Authorization: process.env.API_BEARER
				}
			}
		},

		// {
		// 	resolve: `gatsby-plugin-manifest`,
		// 	options: {
		// 		name: `Spon | Frontend Developer`,
		// 		short_name: `spon.io`,
		// 		start_url: `/`,
		// 		background_color: `#ffffff`,
		// 		theme_color: `#141C39`,
		// 		display: `minimal-ui`,
		// 		icon: `content/assets/gatsby-icon.png`
		// 	}
		// },
		// `gatsby-plugin-offline`,
		`gatsby-plugin-react-helmet`
	]
}
