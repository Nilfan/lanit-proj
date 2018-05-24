export interface Tweet {
    body: String;
    userUrl: String;
​​​    userId: number;
​​​    name: String;
    postId: number;
    time: Date;
}

// tslint:disable-next-line:no-empty-interface
export interface Tweets extends Array<Tweet> {
}
