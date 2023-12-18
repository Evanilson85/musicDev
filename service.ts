import TrackPlayer, { AppKilledPlaybackBehavior, Event  } from 'react-native-track-player';

export const PlaybackService = async () => {
  try {
    TrackPlayer.addEventListener(Event.RemotePlay, () => {
      TrackPlayer.play()
    })

    TrackPlayer.addEventListener(Event.RemotePause, () => {
      TrackPlayer.pause()
    });

    TrackPlayer.addEventListener(Event.RemoteNext, () => {
      TrackPlayer.skipToNext()
    });

    TrackPlayer.addEventListener(Event.RemotePrevious, () => 
    {
      TrackPlayer.skipToPrevious()
    });

    TrackPlayer.addEventListener(Event.RemoteStop, () => {
      TrackPlayer?.stop()
    });

    TrackPlayer.updateOptions({
      android: {
          // This is the default behavior
          appKilledPlaybackBehavior: AppKilledPlaybackBehavior.ContinuePlayback
      },
    });

    TrackPlayer.setPlayWhenReady(true);

  } catch (error) { 
    console.log(error)  
  }
}