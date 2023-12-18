import * as S from './style'
import { AntDesign } from '@expo/vector-icons';
import { useContext } from 'react';
import { ContextMusic } from '../../../context/playMusicCurrent';
import { MusicPlayContext } from '../../../context/music'

export const CurrentMusic = () => {

  const { musicCurrent } = useContext(ContextMusic)
  const { changePage, page } = useContext(MusicPlayContext)

  const teste = () => {
    console.log('teste')
  }

  return (
    <S.Container>
      <S.ContainerTitle onPress={() => changePage('play')}>
        <S.Image source={{ uri: 'https://i.pinimg.com/736x/c8/91/f8/c891f8f181317828567463d9cc453c72.jpg' }} />
        <S.Div>
          <S.Title>{ musicCurrent?.name  }</S.Title>
          <S.Title>The chainsmoke {page}</S.Title>
        </S.Div>
      </S.ContainerTitle>
      <S.ContainerPlay>
        <S.Favorite>
          <AntDesign name="hearto" size={30} color="#fff" />
        </S.Favorite>
        <S.Play>
          <AntDesign name="play" size={30} color="#fff" />
        </S.Play>
      </S.ContainerPlay>
    </S.Container>
  )
}