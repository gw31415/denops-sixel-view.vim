import { Denops } from "https://deno.land/x/denops_std@v5.1.0/mod.ts";
import { img2sixel } from "./sixel.ts";
import {
	assert,
	isInstanceOf,
	isOneOf,
	isString,
} from "https://deno.land/x/unknownutil@v3.10.0/mod.ts#^.ts";

export function main(denops: Denops): Promise<void> {
	denops.dispatcher = {
		img2sixel(source, opts = {}) {
			assert(source, isOneOf([isString, isInstanceOf(Uint8Array)]));
			return img2sixel(source, opts!);
		},
	};
	return Promise.resolve();
}
