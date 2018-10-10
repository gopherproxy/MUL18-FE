import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor() { 
    
  }

   // JS object array as class property (NOT as a variable)
	testData = [
		// 1 JS object in JSON
		{
			// Key : Value pair
			ProductName : 'Test product 1',
			UnitPrice : '49.75',
			QuantityPerUnit : '100 units per box',
			Available : 20
		},
		{
			ProductName : 'Test product 2',
			UnitPrice : '168.79',
			QuantityPerUnit : '20 cases per pallet',
			Available : 0
		},
		{
			ProductName : 'Test product 3',
			UnitPrice : '1268.15',
			QuantityPerUnit : '20 per box, 20 boxes',
			Available : 11
		},
		{
			ProductName : 'Test product 4',
			UnitPrice : '4568.10',
			QuantityPerUnit : '65 individually wrapped',
			Available : 5
		}
	]

  ngOnInit() {
	 console.log(this.testData[0]);
  }

}
