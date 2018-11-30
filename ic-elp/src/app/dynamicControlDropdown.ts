import { SelectItem } from 'primeng/api';
import { DynamicControlBase } from './dynamicControlBase';

export class DynamicControlDropdown extends DynamicControlBase<string> {
  controlType = 'dropdown';
  options: SelectItem[];
  onChange?: Function;

  constructor(options: {} = {}) {
    super(options);
    this.options = options['options'] || '';
    this.onChange = options['onChange'] || '';
  }
}
