import { PanoptoAccess, PanoptoInfo, FetchTarget } from "./types";
import { authenticate } from "./auth";
import { createFeed } from "./generateFeed";
import { writeFile } from "fs/promises";

export async function run(panoptoInfo: PanoptoInfo, targets: FetchTarget[]) {
  let panopto: PanoptoAccess = { ...panoptoInfo, token: await authenticate(panoptoInfo) };
  await Promise.all(targets.map(async target => {
    let feed = await createFeed(panopto, target);
    await writeFile(target.targetID + '.rss', feed.rss2());
  }))
}
