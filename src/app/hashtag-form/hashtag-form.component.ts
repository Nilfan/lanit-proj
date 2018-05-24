import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { HashtagService } from '../hashtag.service';
import { Observable } from 'rxjs/Observable';

import { Subscription } from 'rxjs/Subscription';
import { Tweets, Tweet } from '../tweet.interface';


@Component({
    selector: 'app-hashtag-form',
    templateUrl: './hashtag-form.component.html',
    styleUrls: ['./hashtag-form.component.scss']
})
export class HashtagFormComponent implements OnInit {

    hashtagControl: FormControl;
    prevHashtag: String = 'Search';
    constructor(private hashtagService: HashtagService) {
        this.hashtagControl = new FormControl('', [
                Validators.required,
                Validators.pattern('\#[a-zA-Z0-9]*')
        ]);
     }

    ngOnInit() {
    }

    submit() {
        this.prevHashtag = 'For example: ' + this.hashtagControl.value;
        this.hashtagService.getTweetsByHashtag(this.hashtagControl.value);
        this.hashtagControl.setValue('');
        this.hashtagControl.markAsUntouched();
        }

}
