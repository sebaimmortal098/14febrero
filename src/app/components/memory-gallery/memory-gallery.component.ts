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
      url: 'https://i.pinimg.com/564x/c2/47/e9/c247e93bfd76a14f639318b56207b8a5.jpg',
      caption: 'Our first trip',
      rotation: 'transform -rotate-3',
    },
    {
      url: 'https://i.pinimg.com/564x/0e/1a/f0/0e1af06a365b3b9a428424391a0a2caf.jpg',
      caption: 'Beach days',
      rotation: 'transform rotate-2',
    },
    {
      url: 'https://i.pinimg.com/564x/4b/8a/8a/4b8a8a8e3e3e3e3e3e3e3e3e3e3e3e3e.jpg',
      caption: 'City lights',
      rotation: 'transform rotate-1',
    },
    {
      url: 'https://i.pinimg.com/564x/a4/20/93/a4209361f03b3de9a4a4a4a4a4a4a4a4.jpg',
      caption: 'Coffee dates',
      rotation: 'transform -rotate-2',
    },
    {
      url: 'https://i.pinimg.com/564x/9b/8d/3c/9b8d3c6a9b6c6b6b6b6b6b6b6b6b6b6b.jpg',
      caption: 'Anniversary dinner',
      rotation: 'transform rotate-3',
    },
    {
      url: 'https://i.pinimg.com/564x/5a/5a/5a/5a5a5a5a5a5a5a5a5a5a5a5a5a5a5a5a.jpg',
      caption: 'Just because',
      rotation: 'transform -rotate-1',
    },
  ]);
}

