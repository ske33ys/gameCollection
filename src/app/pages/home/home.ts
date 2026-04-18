import { Component } from '@angular/core';
import { Navbar } from '../../components/navbar/navbar';
import { Header } from '../../components/header/header';

@Component({
  selector: 'home',
  imports: [Header],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

}
