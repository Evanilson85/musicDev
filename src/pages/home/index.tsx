import { Container, Text, DivScroll,Scroll } from './style'
import { Header } from '../../components/header'
import { ListPlay } from '../../components/List'

import { TouchableOpacity } from 'react-native'

import { useContext, useEffect } from 'react'
import { FlatList } from 'react-native'

import { ContextMusic } from '../../context/playMusicCurrent'

import TrackPlayer, { State, Event } from 'react-native-track-player';

export const Home = () => {
  
  const { audioList, setUpdateList } = useContext(ContextMusic)

  useEffect(() => {
    // teste2()
  }, [audioList])

  const teste2 = async () => {
    const volume = await TrackPlayer.getVolume();

    const teste = [
      {
        artist: "Teste", 
        id: "59960", 
        title: "Caixa de música.ogg", 
        url: "file:///storage/emulated/0/Alarms/Ethan_Dufault_-_Kryptonite(MP3_128K).mp3"
      }, 
      // {
      //   artist: "Teste", 
      //   id: "59962", 
      //   title: "Piano.ogg", 
      //   url: "file:///storage/emulated/0/Alarms/Ethan_Dufault_-_Kryptonite(MP3_128K).mp3"
      // }
    ]

    const newAudios = audioList.map((el: any) => {
      const { filename, id, uri } = el
      return {
        url: uri,
        title: filename,
        artist: 'Teste',
        id: id
      }
    });

    // await TrackPlayer.removeUpcomingTracks();
    await TrackPlayer.add(teste);
    const pr = await TrackPlayer.getProgress()
    await TrackPlayer.play();
    console.log(pr)
  }


  const renderMusic = ({item, index}: any) => {
    return <ListPlay key={index} name={item.filename} uri={item.uri} albumId={item.albumId} />
  }

  const teste = () => {
    setUpdateList((prev: any) => prev + 20)
  }

  return(
    <Container>
      {/* <Header /> */}
      <DivScroll>
        {/* <TouchableOpacity onPress={() => {}}>
          <Text>teste 123</Text>
        </TouchableOpacity>
        <Text>teste 123</Text>
        <Text>teste 123</Text>
        <Text>teste 123</Text> */}
      </DivScroll>
      <Scroll>
        <FlatList
          data={audioList}
          renderItem={renderMusic}
          keyExtractor={(_, index) => index.toString()}
          onEndReached={teste}
          onEndReachedThreshold={0.1}
        />
      </Scroll>
    </Container>
  )
}