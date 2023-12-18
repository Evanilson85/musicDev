import { createContext, useState } from 'react'
import { PropContextMusicChildren, PropsContextAllMusic } from '../interface/props'

export const MusicPlayContext = createContext<PropsContextAllMusic>({} as PropsContextAllMusic)

export const MusicPlayProvider = ({ children }: PropContextMusicChildren) => {

    const [page, setPage] = useState('home')
    
    const changePage = (value: string) => {
      setPage(value)
    }

    return(
      <MusicPlayContext.Provider value={{page, setPage, changePage}}>
        {children}
      </MusicPlayContext.Provider>
    )
}