import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

// from converts almost any type into observables

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    const newObservable = new Observable<number>((observer) => {
      for (let i = 0; i < 5; i++) {
        setTimeout(() => {
          observer.next(i);
        }, 1000);
      }
     
    });

    let observer = {
      next: (data: number) => console.log(data),
      error: (error: string) => console.log(error),
      complete: () => console.log('The new observable is completed its task'),
    };
    newObservable.subscribe(observer);
  }
}
