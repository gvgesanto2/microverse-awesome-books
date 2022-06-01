import { DateTime } from 'luxon';
import createNodeElem from '../utils/createElem.utils.js';

const MAIN_DATE_ID = 'main-date';

export default class MainDateView {
  constructor() {
    this.id = MAIN_DATE_ID;
  }

  createElem = () => createNodeElem({
    tag: 'p',
    id: this.id,
    text: DateTime.now(),
  });

  render = (parentElemId) => {
    const parentElem = document.getElementById(parentElemId);
    parentElem.appendChild(this.createElem());
  };
}
