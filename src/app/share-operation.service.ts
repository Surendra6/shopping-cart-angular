import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()

export class ShareOperationService {

  private messageSource = new BehaviorSubject("addition");
  currentOperation = this.messageSource.asObservable();

  constructor() { }

  changeOperation(operation: string) {
    this.messageSource.next(operation);
  }
}
