import { Component, OnInit } from '@angular/core';
import { CalcEngineService} from '../calc-engine.service'

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css'],
  providers: [CalcEngineService]
})
export class CalculatorComponent implements OnInit {

  value1: number = 1;
  value2: number = 2;
  result: number = 3;

  constructor(
    private calcEngineService: CalcEngineService
  ) { }

  ngOnInit() {
  }

  onExceCcalculator() {
    this.result = this.calcEngineService.onExceCcalculator(this.value1, this.value2);
  }

}
