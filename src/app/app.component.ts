import { Component } from '@angular/core';
import { AngularFirestore ,AngularFirestoreCollection} from 'angularfire2/firestore';
import { FirebaseListObservable} from 'angularfire2/database-deprecated';
import { Observable } from 'rxjs';
import {AngularFireList} from 'angularfire2/database';
import { AngularFireDatabase , AngularFireDatabaseModule } from 'angularfire2/database';


class Book {
    constructor(public title) { }
}
export interface Item { name: string;}
@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'app works!';
    private itemCollection: AngularFirestoreCollection<Item>;
    items: FirebaseListObservable<Book[]>;
    item: Observable<Item[]>;
    itemlist: any[];
    constructor(db: AngularFireDatabase) {
        db.list("/item").valueChanges().subscribe( item =>{
            this.itemlist = item;
            console.log(this.itemlist);
        });
        console.log("START");
        console.log(this.item);
        console.log("END");



    }
}
