import { Component } from '@angular/core';

@Component({ // decorator
  selector: 'app-root', //<- tag in index.html
  templateUrl: './app.component.html', // view-template for component
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Webdevelopment with Angular 6 and Bootstrap'; // class property type string
	text = 'The Angular logo:';
}
