import defaultTheme from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				terminal: {
					bg: "#0b0e14",
					surface: "#11161f",
					border: "#232b38",
					text: "#dbe4ea",
					dim: "#8892a0",
				},
				neon: {
					cyan: "#5ff5e0",
					magenta: "#ff5ec4",
					lime: "#c6ff5e",
					amber: "#ffcc5e",
				},
			},
			fontFamily: {
				pixel: ['"Press Start 2P"', "cursive"],
				mono: ['"JetBrains Mono"', ...defaultTheme.fontFamily.mono],
				term: ['"VT323"', "monospace"],
			},
			boxShadow: {
				glow: "0 0 6px theme(colors.neon.cyan), 0 0 24px theme(colors.neon.cyan / 40%)",
				"glow-magenta":
					"0 0 6px theme(colors.neon.magenta), 0 0 24px theme(colors.neon.magenta / 40%)",
			},
			keyframes: {
				blink: { "0%,49%": { opacity: 1 }, "50%,100%": { opacity: 0 } },
				typewriter: { from: { width: "0" }, to: { width: "100%" } },
				scanline: {
					from: { backgroundPosition: "0 0" },
					to: { backgroundPosition: "0 100%" },
				},
			},
			animation: {
				blink: "blink 1s step-end infinite",
				typewriter: "typewriter 2.5s steps(30,end)",
				scanline: "scanline 8s linear infinite",
			},
		},
	},
	plugins: [],
}
