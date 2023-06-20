import Vimeo from '@vimeo/player'
const throttle = require('lodash.throttle');

const iframe = document.querySelector('iframe');
const player = new Vimeo(iframe);

const onPlay = function ({seconds}) {
    localStorage['videoplayer-current-time'] = seconds;
};

player.on('timeupdate', throttle(onPlay, 1500));
if (localStorage['videoplayer-current-time']) {
    player.setCurrentTime(localStorage['videoplayer-current-time']);
};

