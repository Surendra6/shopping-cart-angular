import {Component} from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem, copyArrayItem, CdkDrag} from '@angular/cdk/drag-drop';

/**
 * @title Drag&Drop enter predicate
 */
@Component({
  selector: 'cdk-drag-drop-enter-predicate-example',
  templateUrl: 'cdk-drag-drop-enter-predicate-example.html',
  styleUrls: ['cdk-drag-drop-enter-predicate-example.css'],
})
export class CdkDragDropEnterPredicateExample {
  all = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  even = [10];

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      console.log("1");
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);      
    } else if (event.container.data.length < 4) {
      console.log("2");
      copyArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);
    }

    // copyArrayItem(event.previousContainer.data,
    //                       event.container.data,
    //                       event.previousIndex,
    //                       event.currentIndex);
  }

  /** Predicate function that only allows even numbers to be dropped into a list. */
  evenPredicate(item: CdkDrag<number>) {
    return item.data % 2 === 0;
  }

  /** Predicate function that doesn't allow items to be dropped into a list. */
  noReturnPredicate() {
    return false;
  }
}


/**  Copyright 2019 Google Inc. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */