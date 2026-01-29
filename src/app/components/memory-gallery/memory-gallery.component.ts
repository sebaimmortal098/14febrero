import { Component, signal, Output, EventEmitter } from '@angular/core';

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
})
export class MemoryGalleryComponent {
  @Output() photoSelected = new EventEmitter<Photo>();
  photos = signal<Photo[]>([
    {
      url: '/assets/foto0.JPG',
      caption: 'Nuestra PRIMERA foto',
      rotation: 'transform -rotate-1',
    },
    {
      url: '/assets/foto1.JPG',
      caption: 'Nuestra primera navidad',
      rotation: 'transform -rotate-3',
    },
    {
      url: '/assets/foto2.JPG',
      caption: 'Día de picnic',
      rotation: 'transform rotate-2',
    },
    {
      url: '/assets/foto3.JPG',
      caption: 'Carita cuchi (amo esta foto)',
      rotation: 'transform rotate-1',
    },
    {
      url: '/assets/foto4.JPG',
      caption: 'En la uni juntos',
      rotation: 'transform -rotate-2',
    },
    {
      url: '/assets/foto5.JPG',
      caption: 'Tan bella tu siempre',
      rotation: 'transform rotate-3',
    },
    {
      url: '/assets/foto6.JPG',
      caption: 'En mi cumple con mi chaqueta',
      rotation: 'transform -rotate-1',
    },
    {
      url: '/assets/foto7.JPG',
      caption: 'Birras, tú con mis lentes y el primer te amo',
      rotation: 'transform -rotate-1',
    },
    {
      url: '/assets/foto8.JPG',
      caption: 'Ravahil girl AJAJAJ',
      rotation: 'transform -rotate-1',
    },
    {
      url: '/assets/foto10.JPG',
      caption: 'Somos iguales',
      rotation: 'transform -rotate-1',
    },
    {
      url: '/assets/foto9.JPG',
      caption: 'En la hacienda y tú siempre hermosa',
      rotation: 'transform -rotate-1',
    },
    {
      url: '/assets/foto12.JPG',
      caption: 'Amo tu cara en esta foto',
      rotation: 'transform -rotate-1',
    },
    {
      url: '/assets/foto13.JPG',
      caption: 'De esos días en el carro',
      rotation: 'transform -rotate-1',
    },
    {
      url: '/assets/foto14.JPG',
      caption: 'Mi primera vez dándote flores',
      rotation: 'transform -rotate-1',
    },
    {
      url: '/assets/foto15.JPG',
      caption: '9 de agosto',
      rotation: 'transform -rotate-1',
    },
    {
      url: '/assets/foto11.jpg',
      caption: 'Nuestros ojitos (los tuyos son más bonitos)',
      rotation: 'transform -rotate-1',
    },
  ]);

  selectPhoto(photo: Photo) {
    this.photoSelected.emit(photo);
  }
}

