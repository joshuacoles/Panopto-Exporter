import got from "got";
import { FolderData } from "./panoptoTypes/FolderData";
import { PanoptoAccess } from "./types";
import { readFile, writeFile } from 'fs/promises'
import { existsSync } from 'fs'

// Folders we can't cache anything as we make a single call
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

export async function fromVideo(panopto: PanoptoAccess, videoId: string) {
  // let cachePath = `./fetchCache/${videoId}.json`;
  // if (panopto.shouldUseCache && existsSync(cachePath)) {
  //   return JSON.parse(await readFile(cachePath, 'utf-8'));
  // }

  const embedHtml = await fetchEmbed(panopto, videoId);

  // Yes we are using regex to "parse" html...
  // Obligatory https://stackoverflow.com/questions/1732348/regex-match-open-tags-except-xhtml-self-contained-tags/1732454
  // We are only extracting specific parts of templated html we don't control, it is already brittle using a proper
  // parser won't help.
  const title = embedHtml.match(/<title>(.+)<\/title>/)![1];
  const url = embedHtml.match(/"VideoUrl":"([^"]+)"/)![1].replace(/\\/g, '');

  const data = { title, url };

  // if (panopto.shouldUseCache) {
  //   await writeFile(cachePath, JSON.stringify(data));
  // }

  return data;
}
