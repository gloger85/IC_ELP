import { DynamicControlBase } from './dynamicControlBase';

export class DynamicControlSlide extends DynamicControlBase<string> {
  controlType = 'p-slider';
  class: string;
  range?: boolean;
  slideMin?: number;
  slideMax?: number;

  constructor(options: {} = {}) {
    super(options);
    this.class = options['class'] || '';
    this.range = options['range'] || '';
    this.slideMin = options['slideMin'] || '';
    this.slideMax = options['slideMax'] || '';
  }
}
