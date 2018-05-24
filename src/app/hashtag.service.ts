import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Tweet, Tweets } from './tweet.interface';
import { Observable } from 'rxjs/Observable';
import { filter } from 'rxjs/operators';
import * as AuthLib from 'oauthio-web';


@Injectable()
export class HashtagService {

    tweets: Tweets = [];
    provider: String = 'twitter';
    cachedAuth: any;
    public observableObj: any;
    private observer: any;
    authPublic: String = 'iRwhWPDYqvYKO0Umpps2DVvkCqY';
    // authSecret: String = 's8-_ldzsX5GaTEFLtL6Qdao1F4s';
    // private consumerKey: String = 'deVRKGERnMJPLum83XKK7Wsnc';
    // private consumerSecret: String = 'WU0BG4htUxvUKuXNyNjwALs36ybe9XFP1y6mcKWsfaoF12GF1Q';




    constructor(private httpClient: HttpClient) {
        this.observableObj = new Observable((localObserver) => {
            this.observer = localObserver;
            this.observer.next(this.tweets);
        });
        AuthLib.OAuth.initialize(this.authPublic);
        AuthLib.OAuth.popup('twitter', { cache: true })
            .done(function (result) {
                console.log('Authorization success');
            })
            .fail(function (err) {
                alert('Authorization error');
            });
    }

    getTweetList(): Observable<Tweets> {
        return this.observableObj;
    }

    getTweetsByHashtag(hashtag: String) {
        AuthLib.OAuth.create(this.provider).get('/1.1/search/tweets.json', {
            data: {
                'q': hashtag,
                'result_type': 'recent',
                'tweet_mode': 'extended'
            }
        }).done(response => {
            console.log(response);
            this.tweets = response.statuses.map(post =>
                ({
                    body: post.full_text,
                    userUrl: post.user.url,
                    userId: post.user.id,
                    name: post.user.name,
                    postId: post.id,
                    time: new Date(post.created_at)
                })
            );
            return this.observer.next(this.tweets);
        }).fail(error => {
            console.log(error);
        });
    }

    deleteTweet(postId: number) {
        this.tweets = this.tweets.filter((tweet: Tweet) => tweet.postId !== postId);
        return this.observer.next(this.tweets);
    }

}


