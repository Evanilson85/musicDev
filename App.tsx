import { useEffect, useState, useContext } from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, useColorScheme, Text } from 'react-native';
import { ThemeProvider } from 'styled-components';
import TrackPlayer, { AppKilledPlaybackBehavior  } from 'react-native-track-player';

import { ProviderMusic } from './src/context/playMusicCurrent';
import { MusicPlayProvider } from './src/context/music';
import { PlaybackService } from './service';
import { MusicPlayContext } from './src/context/music';

// component
import themes from './src/themes';
import { CurrentMusic } from './src/components/music/currentMusic';
import { Home } from './src/pages/home';
import { Routes } from './src/routes';
import { Header } from './src/components/header';

export default function App() {

  const { page } = useContext(MusicPlayContext)
  const [read, setRead] = useState(false)

  useEffect(() => {
    if(!read) {
      setup()
    }
  },[]);

  const setup = async () => {
    await TrackPlayer.registerPlaybackService(() => PlaybackService);
    await TrackPlayer.setupPlayer()

    TrackPlayer.updateOptions({
      android: {
        appKilledPlaybackBehavior: AppKilledPlaybackBehavior.PausePlayback
    },
    });
    setRead(true)
  }

  const colorDefault = useColorScheme() 
  const theme = themes.dark
  // const theme = colorDefault ? themes[colorDefault] : themes.dark
  const colorStatus = colorDefault == 'dark' ? 'light' : 'dark'

  return (
    <ThemeProvider theme={theme}>
      {!read ? <Text>Espera um pouco</Text> : (
        <MusicPlayProvider>
          <ProviderMusic>
            <Header />
            <Routes /> 
            {/* <Home /> */}
            <View style={styles.container}>
              <StatusBar style={colorStatus} backgroundColor={theme.colors.screenPage}  translucent animated networkActivityIndicatorVisible={true}  />
              {/* <CurrentMusic /> */}
            </View>
          </ProviderMusic>
        </MusicPlayProvider> 
        )
      }
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'relative'
  },
});




// "main": "node_modules/expo/AppEntry.js",