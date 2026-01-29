import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Photo {
  url: string;
  caption: string;
}

@Component({
  selector: 'app-photo-modal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './photo-modal.component.html',
  styleUrls: ['./photo-modal.component.css']
})
export class PhotoModalComponent {
  @Input() photo: Photo | null = null;
  @Output() closeModal = new EventEmitter<void>();

  close() {
    this.closeModal.emit();
  }
}
