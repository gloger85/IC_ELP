import { DynamicControlBase } from './dynamicControlBase';

export class DynamicControlAutocomplete extends DynamicControlBase<string> {
  controlType = 'autocomplete';
  suggestions?: Function;
  completeMethod?: Function;
  placeholder?: string;
  forceSelection?: string;
  field?: string;

  constructor(options: {} = {}) {
    super(options);
    this.suggestions = options['suggestions'] || '';
    this.completeMethod = options['completeMethod'] || '';
    this.placeholder = options['placeholder'] || '';
    this.forceSelection = options['forceSelection'] || '';
    this.field = options['field'] || '';
  }
}
