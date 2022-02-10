

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'clone'
})
export class ClonePipe implements PipeTransform {
  transform(value: any, args?: any): any {
    return clone(value);
  }
}

export const clone: any = (obj: any) =>
  Array.isArray(obj)
    ? obj.map(item => clone(item))
    : obj instanceof Date
    ? new Date(obj.getTime())
    : obj && typeof obj === 'object'
    ? Object.getOwnPropertyNames(obj).reduce((o: any, prop: string) => {
        o[prop] = clone(obj[prop]);
        return o;
      }, {})
    : obj;