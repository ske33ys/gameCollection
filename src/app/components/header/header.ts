import { Component } from '@angular/core';
import { Navbar } from '../navbar/navbar';

@Component({
  selector: 'header[main]',
  imports: [Navbar],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {

}
