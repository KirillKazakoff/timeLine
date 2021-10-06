/* eslint-disable prefer-template */
/* eslint-disable no-param-reassign */
function getFixedTransfrom(coords) {
    const { latitude, longitude } = coords;

    return Object.entries({ latitude, longitude }).reduce((total, [key, value]) => {
        total[key] = value.toFixed(3);
        return total;
    }, {});
}

export function getLocation() {
    if (navigator.geolocation) {
        return (async () => {
            const promise = new Promise((resolve, reject) => {
                navigator.geolocation.getCurrentPosition((position) => {
                    resolve(position);
                }, (error) => {
                    reject(error);
                });
            });

            const result = await promise;
            return getFixedTransfrom(result.coords);
        })();
    }
    return false;
}

export function separateCoords(coordsStr) {
    const coords = coordsStr.match(/[+\-\d.]+/g);
    const mapped = coords.map((axis) => parseFloat(axis).toFixed(3));

    const [latitude, longitude] = mapped;

    return { latitude, longitude };
}
