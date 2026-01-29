import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-music-toggle',
  templateUrl: './music-toggle.component.html',
  styleUrls: ['./music-toggle.component.css'],
  standalone: true,
  imports: [CommonModule]
})
export class MusicToggleComponent {
  @Input() isPlaying: boolean = false;
  @Output() toggle = new EventEmitter<void>();

  toggleMusic() {
    this.toggle.emit();
  }
}
