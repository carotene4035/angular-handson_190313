import { TestBed, inject } from '@angular/core/testing';

import { CalcEngineService } from './calc-engine.service';

describe('CalcEngineService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CalcEngineService]
    });
  });

  it('should be created', inject([CalcEngineService], (service: CalcEngineService) => {
    expect(service).toBeTruthy();
  }));
});
