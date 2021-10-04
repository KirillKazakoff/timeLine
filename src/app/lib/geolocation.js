/* eslint-disable no-param-reassign */
function getFixedTransfrom(coords) {
    const { latitude, longitude } = coords;

    return Object.entries({ latitude, longitude }).reduce((total, [key, value]) => {
        total[key] = value.toFixed(3);
        return total;
    }, {});
}

export default function getLocation() {
    if (navigator.geolocation) {
        return (async () => {
            const promise = new Promise((resolve) => {
                navigator.geolocation.getCurrentPosition((position) => resolve(position));
            });

            const result = await promise;
            return getFixedTransfrom(result.coords);
        })();
    }
    return false;
}
