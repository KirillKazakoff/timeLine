// eslint-disable-next-line import/prefer-default-export
import { DateTime } from 'luxon';

export function getRandomInt(min, max) {
    const minInt = Math.ceil(min);
    const maxInt = Math.floor(max);
    return Math.floor(Math.random() * (maxInt - minInt)) + minInt;
}

export function getTime() {
    return DateTime.now().toFormat('dd.LL.yy, HH:mm');
}
