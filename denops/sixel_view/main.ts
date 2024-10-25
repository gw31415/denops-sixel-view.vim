import type { Denops } from "https://deno.land/x/denops_std@v6.5.1/mod.ts";
import {
	assert,
	isInstanceOf,
	isString,
	isUnionOf,
} from "https://deno.land/x/unknownutil@v3.18.1/mod.ts";
import { img2sixel } from "./sixel.ts";

export function main(denops: Denops): Promise<void> {
	denops.dispatcher = {
		img2sixel(source, opts = {}) {
			assert(source, isUnionOf([isString, isInstanceOf(Uint8Array)]));
			return img2sixel(source, opts!);
		},
	};
	return Promise.resolve();
}
