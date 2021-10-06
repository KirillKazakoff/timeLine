/* eslint-disable consistent-return */
/* eslint-disable no-param-reassign */
import './tooltip.css';

export default class InputElem {
    constructor(node) {
        this.node = node;
        this.coords = this.node.getBoundingClientRect();
    }

    showError(message) {
        this.hideError();

        const tooltip = document.createElement('div');
        tooltip.className = 'tooltip form-error';
        tooltip.textContent = message;
        document.body.appendChild(tooltip);

        this.position(tooltip);
        setTimeout(() => tooltip.remove(), 5000);

        this.tooltip = tooltip;
    }

    position(tooltip) {
        const tipTop = `${this.coords.top + this.coords.height / 2 - tooltip.offsetHeight / 2 + window.scrollY}px`;
        tooltip.style.top = tipTop;
        tooltip.style.left = `${this.coords.right + 10 + window.scrollX}px`;
    }

    hideError() {
        if (this.tooltip) this.tooltip.remove();
    }

    clearField() {
        this.node.value = '';
    }

    checkPattern() {
        const { value } = this.node;
        const strArr = value.split('');

        const first = strArr.shift();
        const last = strArr.pop();

        if (first !== '[' && last !== ']') {
            return true;
        }
        if (first === '[' && last === ']') {
            return true;
        }
        return false;
    }
}
