import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css'],
})
export class QuotesComponent implements OnInit {
  title = 'welcome to tech quotes';
  quotes: Quote[] = [
    new Quote(
      1,
      'Churchill',
      'Human spirit',
      '“The Pessimist Sees Difficulty In Every Opportunity. The Optimist Sees Opportunity In Every Difficulty.”',
      'Winston Churchill',
      new Date(2021, 8, 20),
      0,
      0
    ),
    new Quote(
      2,
      'Rob',
      'people',
      '“People Who Are Crazy Enough To Think They Can Change The World, Are The Ones Who Do.”',
      'Rob Siltanen',
      new Date(2021, 8, 20),
      0,
      0
    ),
    new Quote(
      3,
      'Maya',
      'Life',
      '“We May Encounter Many Defeats But We Must Not Be Defeated.”',
      'Maya Angelou',
      new Date(2021, 8, 20),
      0,
      0
    ),
    new Quote(
      4,
      'Unknown',
      'power of self-confidence',
      '“The Man Who Has Confidence In Himself Gains The Confidence Of Others.”',
      'Hasidic Proverb',
      new Date(2021, 8, 21),
      0,
      0
    ),
    new Quote(
      5,
      'Albert ',
      'Creativity',
      '“Creativity Is Intelligence Having Fun.”',
      'Albert Einstein',
      new Date(2021, 8, 21),
      0,
      0
    ),
    new Quote(
      6,
      'Alfred',
      'Tech and life',
      'For ',
      'Alice Kahn',
      new Date(2019, 7, 15),
      0,
      0
    ),
  ];
  get sortQuotes() {
    return this.quotes.sort((a, b) => {
      return <any>new Date(b.datePosted) - <any>new Date(a.datePosted);
    });
  }
  addedQuote(quote) {
    let arraysize = this.quotes.length;
    quote.id = arraysize + 1;
    quote.completeDate = new Date(quote.completeDate);
    this.quotes.push(quote);
  }
  quoteDelete(isRead, index) {
    if (isRead) {
      let toDelete = confirm(`Are you sure you want to delete this Quote?`);
      if (toDelete) {
        this.quotes.splice(index, 1);
      }
    }
  }

  displayInfo(index) {
    this.quotes[index].showInfo = !this.quotes[index].showInfo;
  }
  constructor() {}

  ngOnInit(): void {}
}
