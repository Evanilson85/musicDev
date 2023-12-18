import { createContext, useEffect, useState, useMemo } from 'react'
import * as Props from '../interface/props'
import * as MediaLibrary from 'expo-media-library';

import TrackPlayer from 'react-native-track-player';

export const ContextMusic = createContext<Props.PropsContextAll>({} as Props.PropsContextAll)

export const ProviderMusic = ({ children }: Props.PropContextMusicChildren) => {

  const [musicCurrent, setMusicCurrent] = useState<Props.PropsList>({})
  const [audioList, setAudioList] = useState<MediaLibrary.Asset[]>([]);
  const [updateList, setUpdateList] = useState(0)
  const [hasNextPageMusic, setHasNextPageMusic] = useState(true)

 

  useEffect(() => {
    // getAudios();
  }, []);
  
  useEffect(() => {
    if(hasNextPageMusic) {
      getAudios();
    }
  },[updateList])

  const getAudios = async () => {
    const { status } = await MediaLibrary.requestPermissionsAsync(
      
    );
    if (status !== 'granted') {
      console.log('Permissão não concedida para acessar a mídia.');
      return;
    }

    // const { totalCount, hasNextPage } = await MediaLibrary.getAssetsAsync({ mediaType: 'audio' });
    const { assets, hasNextPage, totalCount } = await MediaLibrary.getAssetsAsync({ first: 20, after: `${updateList}`, mediaType: 'audio' })
    const mp3Assets = assets.filter(asset =>
      asset.filename.toLowerCase().endsWith('.mp3')
    );
    // console.log(assets)
    setAudioList((prev) => [...prev, ...assets]);
    setHasNextPageMusic(hasNextPage)
    addList()
    // console.log(mp3Assets.length, hasNextPage, totalCount, audioList.length)
  };

  const updateSetCurrentMusic = (params: Props.PropsList ) => {
    setMusicCurrent(params)
    // console.log(params)
  }

  const addList = async () => {
    // const musicPlay = await TrackPlayer.setupPlayer()
    // console.log(musicPlay)
  }

  // const itensProvider = useMemo(() => ({ 
  //   updateSetCurrentMusic,
  //   audioList,
  //   musicCurrent,
  // }), [musicCurrent])
  const itensProvider = {
    updateSetCurrentMusic,
    audioList,
    musicCurrent,
    setUpdateList
  }
  
  return(
    <ContextMusic.Provider value={itensProvider} >
      {children}
    </ContextMusic.Provider>
  )
}