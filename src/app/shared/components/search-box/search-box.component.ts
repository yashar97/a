import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'shared-search-box',
  standalone: false,
  templateUrl: './search-box.component.html',
  styleUrl: './search-box.component.css'
})
export class SearchBoxComponent {

  @Input()
  placeholder!: string;

  @ViewChild('txtInput')
  txtInput!: ElementRef<HTMLInputElement>;

  @Output()
  onValue: EventEmitter<string> = new EventEmitter();

  obtenerValor(): void {
    const valor: string = this.txtInput.nativeElement.value;
    this.onValue.emit(valor);
    this.txtInput.nativeElement.value = '';
  }

}
