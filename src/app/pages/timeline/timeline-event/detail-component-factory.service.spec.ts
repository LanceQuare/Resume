import { TestBed } from '@angular/core/testing';

import { DetailComponentFactoryService } from './detail-component-factory.service';

describe('DetailComponentFactoryService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DetailComponentFactoryService = TestBed.get(DetailComponentFactoryService);
    expect(service).toBeTruthy();
  });
});
