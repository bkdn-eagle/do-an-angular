import { Component, OnInit } from '@angular/core';
import { QuanAnService } from '../services/quan-an.service';
import { QuanAn } from 'app/models/quan-an';

@Component({
  selector: 'app-quan-an',
  templateUrl: './quan-an.component.html',
  styleUrls: ['./quan-an.component.scss']
})
export class QuanAnComponent implements OnInit {

  public quanAns: QuanAn[] = [];
  constructor(
    private _quanAn: QuanAnService,
  ) { }

  ngOnInit() {
    this._getQuanAns();
  }

  private _getQuanAns() {
    this._quanAn.getQuanAns()
      .subscribe(res => {
        res.map(qa => this.quanAns.push(new QuanAn(qa)));

        console.log(this.quanAns, 11);

      });
  }

}
