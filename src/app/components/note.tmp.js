import { getTime } from '../lib/utils';

const textT = (txt) => ({
    block: 'span',
    cls: 'text',
    content: txt,
});

const dateT = () => ({
    block: 'span',
    cls: 'date',
    content: getTime(),
});

const coordsT = (location) => ({
    block: 'span',
    cls: 'coordinates',
    content: `[${location.latitude}, ${location.longitude}]`,
});

const noteT = (txt, location) => ({
    block: 'li',
    cls: 'note',
    content: [textT(txt), dateT(), coordsT(location)],
});

export default noteT;
