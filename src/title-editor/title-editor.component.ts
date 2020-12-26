import { Component, Input, OnInit,  EventEmitter, Output } from "@angular/core";

@Component({
  selector: "title-editor",
  templateUrl: "./title-editor.component.html",
  styleUrls: []
})
export class TitleEditorComponent  {
  @Input() title: string;
  @Output() toLowerCase = new EventEmitter<string>();

  toLower() {
    console.log(666)
    this.toLowerCase.emit(this.title.toLowerCase())
  }
}
