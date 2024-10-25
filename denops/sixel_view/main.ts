import type { Denops } from "jsr:@denops/std";
import {
	assert,
	isInstanceOf,
	isString,
	isUnionOf,
} from "jsr:@core/unknownutil";
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
