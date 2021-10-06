import engine from '../../lib/engine/engine';
import cardT from './note.tmp';
import { getLocation, separateCoords } from '../../lib/geolocation';

export default class Notes {
    constructor(errorHandler) {
        this.getManualLocation = errorHandler;
        this.container = document.querySelector('.form-content');

        this.notes = this.container.querySelector('.content');
        this.input = document.querySelector('.note-input');

        this.container.addEventListener('submit', (e) => this.onSubmit(e));
    }

    async onSubmit(e) {
        e.preventDefault();

        const { value } = this.input;
        if (!value) return;

        await this.addNote(value);
        this.input.value = '';
    }

    async addNote(txt) {
        let location = null;

        try {
            location = await getLocation();
        } catch (e) {
            const locationStr = await this.getManualLocation();
            location = separateCoords(locationStr);
        }

        this.insertNote(txt, location);
    }

    insertNote(txt, location) {
        const html = engine(cardT(txt, location));
        this.notes.insertAdjacentHTML('afterbegin', html);
    }
}
