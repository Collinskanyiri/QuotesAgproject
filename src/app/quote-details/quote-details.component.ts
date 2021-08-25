import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote-detail',
  templateUrl: './quote-details.component.html',
  styleUrls: ['./quote-details.component.css'],
})
export class QuoteDetailComponent implements OnInit {
  @Input() quote!: Quote;
  @Output() isComplete = new EventEmitter<boolean>();

  deleteQuote(complete: boolean) {
   this.isComplete.emit(complete);
  }

  likesincrement() {
    let like = this.quote.likes;
    like++;
    this.quote.likes = like;
  }

  dislikesincrement() {
    let dislike = this.quote.dislikes;
    dislike++;
    this.quote.dislikes = dislike;
  }

  constructor() {}

  ngOnInit(): void {}
}
