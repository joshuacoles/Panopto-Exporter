import { Feed } from "feed";
import mimer from "mimer";

import { fetchFolderData, fromVideo } from "./utils";
import { FetchTarget, FolderTarget, isFolderTarget, isListTarget, ListTarget, PanoptoAccess } from "./types";

export async function createFeedFromList(panopto: PanoptoAccess, { targetID, title, videoIDs }: ListTarget) {
  const feed = new Feed({
    id: targetID,
    title: title,
    copyright: panopto.copyrightAttribution
  });

  for (let videoID of videoIDs) {
    const { title, url } = await fromVideo(panopto, videoID);

    feed.addItem({
      guid: videoID,
      title: title,
      link: url,

      // FIXME we can get the actual publish date from the DeliveryInfo url but that requires two hits per video so for now we avoid
      date: new Date(),

      enclosure: {
        title: 'video',
        url: url,
        type: mimer(url),
      }
    })
  }

  return feed;
}

export async function createFeedFromFolder(panopto: PanoptoAccess, { targetID, folderID }: FolderTarget) {
  const folderData = await fetchFolderData(panopto, folderID);

  const feed = new Feed({
    id: targetID,
    title: folderData.d.Results[0].FolderName,
    link: `${panopto.baseUrl}/Panopto/Pages/Sessions/List.aspx#folderID="${folderID}"`,
    copyright: panopto.copyrightAttribution
  });

  for (let item of folderData.d.Results) {
    const startTime = item.StartTime;
    const unixTs: number = +startTime.match(/\/Date\((\d+)\)\//)![1];
    const date = new Date(unixTs);

    feed.addItem({
      guid: item.DeliveryID,
      title: item.SessionName,
      link: item.ViewerUrl,
      date,

      enclosure: {
        title: 'video',
        url: item.IosVideoUrl,
        type: mimer(item.IosVideoUrl),
      }
    })
  }

  return feed;
}

export async function createFeed(panopto: PanoptoAccess, target: FetchTarget): Promise<Feed> {
  if (isFolderTarget(target)) return createFeedFromFolder(panopto, target);
  if (isListTarget(target)) return createFeedFromList(panopto, target);
  else throw 'Unknown target type'
}
