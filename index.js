// import { resolve } from "path";
import vite from "vite";
import preact from "@preact/preset-vite";

async function viteDev(options) {
	const server = await vite.createServer({
		configFile: false,
		root: options.root,
		plugins: [preact.default()],
	});

	await server.listen();
}

export default viteDev;
