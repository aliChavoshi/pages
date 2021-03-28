import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-paging',
  templateUrl: './paging.component.html',
  styleUrls: ['./paging.component.css']
})
export class PagingComponent implements OnInit {
  @Input() currentPage = 0;
  @Input() images = [];
  constructor() { }

  ngOnInit(): void {
  }
  getClass(i:number){
    if (i == this.currentPage) {
      return 'active';
    }
    return '';
  }
  checkWindowIndex(index : number){
    return Math.abs(this.currentPage-index) < 5;
  }
}
