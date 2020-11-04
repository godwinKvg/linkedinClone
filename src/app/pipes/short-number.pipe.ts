import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shortNumber'
})
export class ShortNumberPipe implements PipeTransform {

  transform(value: number): string {
    if (value === 0){
      return null;
    }
    let abs = Math.abs(value);
    /* const rounder = Math.pow(10, 1); */
    const isNegative = value < 0; // will also work for Negetive numbers
    let key = '';

    const powers = [
      { key: 'Q', value: Math.pow(10, 15) },
      { key: 'T', value: Math.pow(10, 12) },
      { key: 'B', value: Math.pow(10, 9) },
      { key: 'M', value: Math.pow(10, 6) },
      { key: 'K', value: 1000 }
    ];

    powers.forEach(power => {
      let reduced = abs / power.value ;
      reduced = Number(reduced.toFixed(1));
      /* reduced = Math.round(reduced * rounder) / rounder; */
      if (reduced >= 1) {
        abs = reduced;
        key = power.key;
        return (isNegative ? '-' : '') + abs + key;
      }
    });
    return (isNegative ? '-' : '') + abs + key;
  }
}
