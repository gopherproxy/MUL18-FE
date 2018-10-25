import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable} from 'rxjs';
import { NgForm} from '@angular/forms';

@Component({
  selector: 'app-firebase',
  templateUrl: './firebase.component.html',
  styleUrls: ['./firebase.component.css']
})
export class FirebaseComponent implements OnInit {

  constructor(public db: AngularFireDatabase) { 
  	this.items = db.list('items').valueChanges();
  }

  itemValue = '';
  items: Observable<any[]>; // creates an observable that will start listening to updates on any array	
  
  onSubmit(){
	  
	  this.db.list('/items').push({ content : this.itemValue})  
  }
  
  ngOnInit() {
  }

}
