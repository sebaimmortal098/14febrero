import { Component } from '@angular/core';

@Component({
  selector: 'app-letter',
  standalone: true,
  templateUrl: './letter.component.html',
  styleUrl: './letter.component.css',
})
export class LetterComponent {
  protected readonly paperTextureUrl = '/assets/paper-texture.jpeg';
}

