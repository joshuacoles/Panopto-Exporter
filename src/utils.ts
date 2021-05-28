import got from "got";
import { FolderData } from "./panoptoTypes/FolderData";
import { PanoptoAccess } from "./types";

export async function fetchFolderData(panopto: PanoptoAccess, folderID: string): Promise<FolderData> {
  return got.post(`${panopto.baseUrl}/Panopto/Services/Data.svc/GetSessions`, {
    headers: {
      "Cookie": `.ASPXAUTH=${panopto.token}`
    },

    json: {
      queryParameters: {
        folderID,

        query: null,
        sortColumn: 1,
        sortAscending: false,
        maxResults: 200,
        page: 0,
        startDate: null,
        endDate: null,
        bookmarked: false,
        getFolderData: true,
        isSharedWithMe: false,
        includePlaylists: true
      }
    }
  }).json();
}

export async function fetchEmbed(panopto: PanoptoAccess, videoId: string): Promise<string> {
  return got.get(`${panopto.baseUrl}/Panopto/Services/Data.svc/GetSessions`, {
    headers: {
      "Cookie": `.ASPXAUTH=${panopto.token}`
    },

    searchParams: {
      id: videoId,
    }
  }).text();
}

export async function fromVideo(panopto: PanoptoAccess, videoID: string) {
  const data = await fetchEmbed(panopto, videoID);
  const title = data.match(/<title>(.+)<\/title>/)![1];
  const url = data.match(/"VideoUrl":"([^"]+)"/)![1].replace(/\\/g, '');

  return { title, url };
}
