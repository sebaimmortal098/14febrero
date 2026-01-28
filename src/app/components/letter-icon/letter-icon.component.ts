import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-letter-icon',
  standalone: true,
  imports: [],
  template: `
    <div class="fixed bottom-8 right-8 z-50 cursor-pointer transform transition-transform hover:scale-110" (click)="openLetter.emit()">
      <img src="/assets/letter-icon.svg" alt="Open Letter" class="w-20 h-20 drop-shadow-lg">
    </div>
  `,
  styles: []
})
export class LetterIconComponent {
  @Output() openLetter = new EventEmitter<void>();
}
