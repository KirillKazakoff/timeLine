import { separateCoords } from '../../lib/geolocation';

test('there is space and comma between', () => {
    const insert = '51.50851, -0.12572';
    const expected = {
        latitude: '51.509',
        longitude: '-0.126',
    };
    const result = separateCoords(insert);
    expect(result).toEqual(expected);
});

test('there is comma between', () => {
    const insert = '51.50851,-0.12572';
    const expected = {
        latitude: '51.509',
        longitude: '-0.126',
    };
    const result = separateCoords(insert);
    expect(result).toEqual(expected);
});

test('there is space between', () => {
    const insert = '51.50851 -0.12572';
    const expected = {
        latitude: '51.509',
        longitude: '-0.126',
    };
    const result = separateCoords(insert);
    expect(result).toEqual(expected);
});

test('there are brackets', () => {
    const insert = '[51.50851 -0.12572]';
    const expected = {
        latitude: '51.509',
        longitude: '-0.126',
    };
    const result = separateCoords(insert);
    expect(result).toEqual(expected);
});
