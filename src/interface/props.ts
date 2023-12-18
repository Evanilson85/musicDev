export interface PropContextMusicChildren {
  children: React.ReactNode
}

export interface PropsContextCurrentMusic {
  title?: string,
  music?: string,
  uri?: string
}

export interface PropsList {
  name?: string
  uri?: string
  albumId?: any
}

export interface PropsContextAll {
  updateSetCurrentMusic: (params: PropsList) => void
  audioList: any
  musicCurrent?: PropsList
  setUpdateList: any
}

export interface PropsContextAllMusic {
  page: string
  setPage: any
  changePage: (e: string) => void
}