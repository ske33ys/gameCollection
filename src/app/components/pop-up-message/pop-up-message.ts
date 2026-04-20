import { Component, input, signal } from '@angular/core';

@Component({
  selector: 'pop-up-message',
  imports: [],
  templateUrl: './pop-up-message.html',
  styleUrl: './pop-up-message.css',
})
export class PopUpMessage {
  message = input<string>('');
  bgColor = input<string>('#fff');
  display = signal<string>('none');

  showUp() {
    this.display.set('block');

    setTimeout(() => {
      this.display.set('none');
    }, 2000);
  }

  ngOnInit() {
    this.showUp();
  }
}
