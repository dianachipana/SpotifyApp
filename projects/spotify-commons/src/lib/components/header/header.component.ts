import { Component, OnInit, Input, forwardRef, Output, EventEmitter } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';


interface HeaderOption {
  title: string;
  url: string;
}

@Component({
  selector: 'spotify-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class SpotifyHeaderComponent{
  @Input() brandUrl: string;
  @Input() brand: string;
  @Input() logo: string;
  @Input() options: HeaderOption[] = [];
  @Output() click: EventEmitter<string> = new EventEmitter<string>();
  @Input() mostrar
  constructor() { }

  ngOnInit(): void {
  }

}
