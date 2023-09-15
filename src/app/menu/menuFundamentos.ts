import TerminalUtil from "@/util/terminalUtil";
import { terminal } from "terminal-kit";

export default async function MenuFundamentos() {
	TerminalUtil.titulo("Fundamentos");

	const resposta = await terminal.singleColumnMenu([
		"1. Polimorfismo",
		"Voltar"
	]).promise;

	switch (resposta.selectedIndex) {
		case 1:
			return;
	}

	await MenuFundamentos();
}
