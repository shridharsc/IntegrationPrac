import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  carInfo: any;
  data = [];
  page: number = 1;
  query: any;
  constructor(public common:CommonService) { }

  ngOnInit() {
    this.common.getList().subscribe(res=>{
      this.carInfo = Object.keys(res).forEach(e=>{
        this.data.push(res[e][0]);
      })
    },
    (err)=>{
      console.log(err)
    })
  }

  onPageChange(event) {
    this.page = event;
    console.log(this.page);
    window.scroll(0, 0);
  }

  changetp() {
    this.page = 1;
  }

}
