import { Component, Input, OnInit,  EventEmitter, Output } from "@angular/core";

@Component({
  selector: "ng-list",
  templateUrl: "./list.component.html",
  styleUrls: []
})
export class ListComponent  {
  @Input() list: string[];
  @Input() year: number;

  @Output() syncList = new EventEmitter<number>();

  del(i) {
    console.log(i);
    this.list.splice(i, 1)
  }

  sync() {
    // console.log('sync', this.list);
    this.year = 666
    // this.syncList.emit(this.year)
  }

  push() {
    // this.list.push(this.list.length+'')
    this.list = [
      ...this.list,
      this.list.length+''
    ]
  }

}