import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-basic-dropdown',
  templateUrl: './basic-dropdown.component.html',
  styleUrls: ['./basic-dropdown.component.css']
})
export class BasicDropdownComponent {

  @Input()
  items: any[]

  @Input()
  itemTitle: string;

  @Input()
  selectedItem: any = { id: 0 };

  @Output()
  itemSelected = new EventEmitter<string>();

  setItem(id: string) {
    this.selectedItem = id;
    this.itemSelected.emit(id);
  }
}