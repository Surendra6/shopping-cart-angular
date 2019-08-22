import { TestBed } from '@angular/core/testing';

import { ShareOperationService } from './share-operation.service';

describe('ShareOperationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ShareOperationService = TestBed.get(ShareOperationService);
    expect(service).toBeTruthy();
  });
});
