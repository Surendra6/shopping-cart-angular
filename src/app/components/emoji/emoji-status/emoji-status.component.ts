import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-emoji-status',
  templateUrl: './emoji-status.component.html',
  styleUrls: ['./emoji-status.component.css']
})
export class EmojiStatusComponent implements OnInit {
  @Input() draggableEmojiList:object[] = [];

  @Input() droppedEmojiList:object[] = [];

  constructor() { }

  ngOnInit() {
  }

}
