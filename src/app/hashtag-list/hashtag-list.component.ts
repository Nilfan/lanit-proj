import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { HashtagService } from '../hashtag.service';
import { Tweets, Tweet } from '../tweet.interface';

@Component({
  selector: 'app-hashtag-list',
  templateUrl: './hashtag-list.component.html',
  styleUrls: ['./hashtag-list.component.scss']
})
export class HashtagListComponent implements OnInit {

  subscription: Subscription;
  tweets: Tweets;

  constructor(private hashtagService: HashtagService) { }

  removeTweet(tweetId: number) {
    this.hashtagService.deleteTweet(tweetId);
  }

  ngOnInit() {
    this.subscription = this.hashtagService.getTweetList()
      .subscribe(list => {
        this.tweets = list;
      });
  }

  getTime(date: Date) {
    const addZero = function (i) {
      if (i < 10) {
        i = "0" + i;
      }
      return i;
    };
    let hours = addZero(date.getHours());
    let minutes = addZero(date.getMinutes());
    return ('' + minutes + ':' + hours + '        ' + date.getDay() + '/' + date.getMonth()  + '/' + date.getFullYear());
  }

  // tslint:disable-next-line:use-life-cycle-interface
  ngOnDestroy() {
    this.subscription.unsubscribe(); // For performance
  }



}
