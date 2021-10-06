/* eslint-disable class-methods-use-this */
import InputElem from './inputElem/inputElem';
import errMessages from './errMessages';

export default class ErrForm {
    constructor() {
        this.onSubmit = this.onSubmit.bind(this);
        this.container = document.querySelector('.err-form');
        this.input = new InputElem(this.container.geo);
        this.errHandler = this.onGeoFail();
        this.hide();
    }

    show() {
        this.container.classList.remove('hidden');
    }

    hide() {
        this.container.classList.add('hidden');
        this.input.clearField();
    }

    onGeoFail() {
        return async () => {
            this.show();
            const promise = new Promise((resolve) => {
                this.container.addEventListener('submit', this.onSubmit(resolve));
            });
            return promise;
        };
    }

    onSubmit(resolve) {
        const handler = (e) => {
            e.preventDefault();
            if (!this.checkSubmit()) return;

            this.container.removeEventListener('submit', handler);
            resolve(this.input.node.value);
            this.hide();
        };
        return handler;
    }

    checkSubmit() {
        if (this.container.checkValidity()) {
            if (this.input.checkPattern()) {
                return true;
            }
            this.input.showError(errMessages.geo.patternMismatch);
            return false;
        }

        const errorMsg = this.getInputError(this.input.node);
        this.input.showError(errorMsg);

        return false;
    }

    getInputError(node) {
        const findCallback = (key) => node.validity[key];
        const field = Object.keys(ValidityState.prototype).find(findCallback);
        return errMessages[node.name][field];
    }
}
