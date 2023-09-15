import TerminalUtil from "@/util/terminalUtil";
import { terminal } from "terminal-kit";

import MenuFundamentos from "./menuFundamentos";

export default async function MenuPrincipal() {
	TerminalUtil.titulo("Menu Principal");

	const resposta = await terminal.singleColumnMenu(["1. Fundamentos", "Sair"])
		.promise;

	switch (resposta.selectedIndex) {
		case 0:
			await MenuFundamentos();
			break;
		case 1:
			process.exit(0);
	}

	MenuPrincipal();
}
