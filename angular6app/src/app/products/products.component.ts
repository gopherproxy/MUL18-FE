import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})

export class ProductsComponent implements OnInit {

  constructor(private httpService: HttpClient) { }

   // JS object array as class property
	testData : string [];
	
	// (prod) is a parameter for the function
	checkStock = function(prod){
			// ternary operator: cond ? true : false;
			alert(prod.Available > 0 ? prod.Available + ' units available' : 'Not in stock')
		}
	
  ngOnInit () {
    this.httpService.get('./assets/test-data.json').subscribe(
      data => {
        this.testData = data as string [];	 // FILL THE ARRAY WITH DATA.
        //  console.log(this.arrBirds[1]);
      },
      (err: HttpErrorResponse) => {
        console.log (err.message);
      }
    );
  }
// end class	
}