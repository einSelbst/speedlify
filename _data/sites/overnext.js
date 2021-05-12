module.exports = {
	name: "Overnext", // optional, falls back to object key
	description: "Overnext test site",
	// skip if localhost
	// skip if this is a new fork of the speedlify (not Zach’s)
	skip: !process.env.CONTEXT,
	options: {
		frequency: 60 * 11 + 30, // 11h, 30m
		// Use "run" if the sites don’t share assets on the same origin
		//           and we can reset chrome with each run instead of
		//           each site in every run (it’s faster)
		// Use "site" if sites are all on the same origin and share assets.
		freshChrome: "site",
	},
	urls: [
		"https://overnext.netlify.app",
		"https://overnext.netlify.app/it",
		"https://overnext.netlify.app/dog",
		"https://overnext.netlify.app/page-1",
		"https://overnext.netlify.app/hybrid/post/1",
		"https://overnext.netlify.app/it/account-settings/billing",
		"https://overnext.netlify.app/it/legal/privacy"
		"https://overnext.vercel.app",
		"https://overnext.vercel.app/it",
		"https://overnext.vercel.app/dog",
		"https://overnext.vercel.app/page-1",
		"https://overnext.vercel.app/hybrid/post/1",
		"https://overnext.vercel.app/it/account-settings/billing",
		"https://overnext.vercel.app/it/legal/privacy"
	]
};
