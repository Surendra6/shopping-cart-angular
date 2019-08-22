import { Component, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem, copyArrayItem, CdkDrag} from '@angular/cdk/drag-drop';

import { CommonService } from '../../../services/common.service';

@Component({
  selector: 'app-emoji-layout',
  templateUrl: './emoji-layout.component.html',
  styleUrls: ['./emoji-layout.component.css']
})
export class EmojiLayoutComponent implements OnInit {

  constructor(private commonService: CommonService) { }

  emojiList: object[] = [];
  draggableEmojiList: object[] = [];
  droppedEmojiList: object[] = [];

  fetchingEmojis: boolean = false;

  ngOnInit() {
    this.fetchEmojis();
  }

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);
    }
  }

  fetchEmojis() {
    this.fetchingEmojis = true;
    this.commonService.getEmojis()
    .subscribe((response: any) => {
      this.fetchingEmojis = false;
      this.emojiList = Object.entries(response);
      this.draggableEmojiList = this.emojiList.slice(1193,1220); // clock: 260 - 280
    });
  }
}
