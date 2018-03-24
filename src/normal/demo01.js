// @flow
import demo01 from "./appendix01";

export function exportFn1 (arg: string) {
	return(arg + `${demo01}`);
}

export function exportFn2() {
	function foo(x: string, y: number): number {
		return x.length * y;
	}
	return foo("Hello!", 2);
}