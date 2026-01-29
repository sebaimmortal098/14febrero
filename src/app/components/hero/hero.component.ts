import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-hero',
  standalone: true,
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css',
})
export class HeroComponent {
  @Output() openLetter = new EventEmitter<void>();
  // Reemplaza por tu foto real cuando quieras
  protected readonly photoUrl = '/assets/paper-texture.jpg';
}

