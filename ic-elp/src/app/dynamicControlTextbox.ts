import { DynamicControlBase } from './dynamicControlBase';

export class DynamicControlTextbox extends DynamicControlBase<string> {
  controlType = 'textbox';
  type: string;

  constructor(options: {} = {}) {
    super(options);
    this.type = options['type'] || '';
  }
}