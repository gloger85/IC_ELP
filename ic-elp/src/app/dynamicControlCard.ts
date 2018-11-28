import { DynamicControlBase } from './dynamicControlBase';

export class DynamicControlCard extends DynamicControlBase<string> {
  controlType = 'card';
  text: string;

  constructor(options: {} = {}) {
    super(options);
    this.text = options['text'] || '';
  }
}