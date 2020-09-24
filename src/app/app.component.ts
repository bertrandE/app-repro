import { Component, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnDestroy {
  title = 'app-repro';
  foo: any;

  ngOnDestroy(): void {

    // this.foo is undefined, this will throw a TypeError
    console.log(this.foo.bar);
  }
}
