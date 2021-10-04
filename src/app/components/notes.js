import engine from '../lib/engine/engine';
import cardT from './note.tmp';
import getLocation from '../lib/geolocation';

export default class Notes {
    constructor() {
        this.container = document.querySelector('.form');

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
        const location = await getLocation();

        const html = engine(cardT(txt, location));
        this.notes.insertAdjacentHTML('afterbegin', html);
    }
}
