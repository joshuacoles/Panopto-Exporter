export interface Credentials {
  username: string,
  password: string
}

export interface PanoptoInfo {
  baseUrl: string,
  credentials: { token: string } | Credentials,
  copyrightAttribution: string
}

export interface PanoptoAccess {
  baseUrl: string,
  token: string,
  copyrightAttribution: string,
}

export interface FolderTarget {
  targetID: string,
  folderID: string
}

// Some times you can't get a folder because lecturers are frustrating, so instead we take a list of video urls
export interface ListTarget {
  targetID: string,
  title: string,
  videoIDs: string[]
}

export type FetchTarget = FolderTarget | ListTarget;

export function isFolderTarget(fetchTarget: FetchTarget): fetchTarget is FolderTarget {
  return 'folderID' in fetchTarget;
}

export function isListTarget(fetchTarget: FetchTarget): fetchTarget is ListTarget {
  return 'videoIDs' in fetchTarget;
}
