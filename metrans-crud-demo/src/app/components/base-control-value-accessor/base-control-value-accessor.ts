import { ControlValueAccessor } from '@angular/forms';

export class BaseControlValueAccessor<T> implements ControlValueAccessor {
  public disabled = false;

  private model: T;

  get value(): T {
    return this.model;
  }
  set value(v: T) {
    this.model = v;
    this.onChange(this.model);
  }

  // call when value has changed programatically
  public onChange(newVal: T) {}
  public onTouched(_?: any) {}

  // model -> view changes
  public writeValue(obj: T): void { this.value = obj; }
  public registerOnChange(fn: any): void { this.onChange = fn; }
  public registerOnTouched(fn: any): void { this.onTouched = fn; }
  public setDisabledState?(isDisabled: boolean): void { this.disabled = isDisabled; }
}
