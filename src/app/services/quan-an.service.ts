import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable()
export class QuanAnService {

  private _quanAnCollection;

  constructor(
    private db: AngularFireDatabase,
  ) { }

  public getQuanAns() {
    this._quanAnCollection = this.db.list('/quanans');
    return this._quanAnCollection.valueChanges();
  }

}
