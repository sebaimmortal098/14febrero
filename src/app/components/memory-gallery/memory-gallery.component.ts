import { Component, signal } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';

interface Photo {
  url: string;
  caption: string;
  rotation: string;
}

@Component({
  selector: 'app-memory-gallery',
  standalone: true,
  templateUrl: './memory-gallery.component.html',
  styleUrl: './memory-gallery.component.css',
  animations: [
    trigger('fadeUp', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(20px)' }),
        animate('0.8s ease-out', style({ opacity: 1, transform: 'translateY(0)' })),
      ]),
    ]),
  ],
})
export class MemoryGalleryComponent {
  photos = signal<Photo[]>([
    {
      url: '/assets/gallery/1.jpg',
      caption: 'Our first trip',
      rotation: 'transform -rotate-3',
    },
    {
      url: '/assets/gallery/2.jpg',
      caption: 'Beach days',
      rotation: 'transform rotate-2',
    },
    {
      url: '/assets/gallery/3.jpg',
      caption: 'City lights',
      rotation: 'transform rotate-1',
    },
    {
      url: '/assets/gallery/4.jpg',
      caption: 'Coffee dates',
      rotation: 'transform -rotate-2',
    },
    {
      url: '/assets/gallery/5.jpg',
      caption: 'Anniversary dinner',
      rotation: 'transform rotate-3',
    },
    {
      url: '/assets/gallery/6.jpg',
      caption: 'Just because',
      rotation: 'transform -rotate-1',
    },
  ]);
}

