import Notes from '../components/note/notes';
import ErrForm from '../components/errForm/errForm';

export default class Controller {
    constructor() {
        window.onload = () => {
            this.errForm = new ErrForm();
            this.notes = new Notes(this.errForm.errHandler);
        };
    }
}
