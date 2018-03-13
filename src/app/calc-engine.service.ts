import { Injectable } from '@angular/core';

@Injectable()
/** 違うコンポーネントからも使えるようになる */
export class CalcEngineService {

  constructor() { }

  onExceCcalculator(value1: number, value2: number) {
    return value1 +  value2;
  }

}
