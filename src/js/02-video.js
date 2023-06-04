import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const vimeoPlayer = new Player('vimeo-player');


const savePlaybackTime = throttle(async () => {
  try {
    const currentTime = await vimeoPlayer.getCurrentTime();
    localStorage.setItem('videoplayer-current-time', currentTime);
  } catch (error) {
    console.error('Error saving playback time:', error);
  }
}, 1000); 
const restorePlaybackTime = async () => {
  const savedTime = localStorage.getItem('videoplayer-current-time');
  if (savedTime) {
    try {
      await vimeoPlayer.setCurrentTime(savedTime);
    } catch (error) {
      console.error('Error restoring playback time:', error);
    }
  }
};


const onPlay = function(data) {
   
};

player.on('play', onPlay);


restorePlaybackTime();

