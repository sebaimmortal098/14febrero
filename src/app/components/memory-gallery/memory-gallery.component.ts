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
  styleUrls: ['./memory-gallery.component.css'],
})
export class MemoryGalleryComponent {
  @Output() photoSelected = new EventEmitter<Photo>();
  photos = signal<Photo[]>([
    {
      url: '/assets/foto0.webp',
      caption: 'Nuestra PRIMERA foto',
      rotation: 'transform -rotate-1',
    },
    {
      url: '/assets/foto1.webp',
      caption: 'Nuestra primera navidad',
      rotation: 'transform -rotate-3',
    },
    {
      url: '/assets/foto2.webp',
      caption: 'Día de picnic',
      rotation: 'transform rotate-2',
    },
    {
      url: '/assets/foto3.webp',
      caption: 'Carita cuchi (amo esta foto)',
      rotation: 'transform rotate-1',
    },
    {
      url: '/assets/foto4.webp',
      caption: 'En la uni juntos',
      rotation: 'transform -rotate-2',
    },
    {
      url: '/assets/foto5.webp',
      caption: 'Tan bella tu siempre',
      rotation: 'transform rotate-3',
    },
    {
      url: '/assets/foto6.webp',
      caption: 'En mi cumple con mi chaqueta',
      rotation: 'transform -rotate-1',
    },
    {
      url: '/assets/foto7.webp',
      caption: 'Birras, tú con mis lentes y el primer te amo',
      rotation: 'transform -rotate-1',
    },
    {
      url: '/assets/foto8.webp',
      caption: 'Ravahil girl AJAJAJ',
      rotation: 'transform -rotate-1',
    },
    {
      url: '/assets/foto10.webp',
      caption: 'Somos iguales',
      rotation: 'transform -rotate-1',
    },
    {
      url: '/assets/foto9.webp',
      caption: 'En la hacienda y tú siempre hermosa',
      rotation: 'transform -rotate-1',
    },
    {
      url: '/assets/foto12.webp',
      caption: 'Amo tu cara en esta foto',
      rotation: 'transform -rotate-1',
    },
    {
      url: '/assets/foto13.webp',
      caption: 'De esos días en el carro',
      rotation: 'transform -rotate-1',
    },
    {
      url: '/assets/foto14.webp',
      caption: 'Mi primera vez dándote flores',
      rotation: 'transform -rotate-1',
    },
    {
      url: '/assets/foto15.webp',
      caption: '9 de agosto',
      rotation: 'transform -rotate-1',
    },
    {
      url: '/assets/foto11.webp',
      caption: 'Nuestros ojitos (los tuyos son más bonitos)',
      rotation: 'transform -rotate-1',
    },
    {
      url: '/assets/foto16.webp',
      caption: 'Mi ponquecito gordito',
      rotation: 'transform -rotate-1',
    },
    {
      url: '/assets/foto17.webp',
      caption: 'Mira que guapa',
      rotation: 'transform -rotate-1',
    },
    {
      url: '/assets/foto18.webp',
      caption: ':)',
      rotation: 'transform -rotate-1',
    },
    {
      url: '/assets/foto19.webp',
      caption: 'En la noche en un parque, luego de un ensayo',
      rotation: 'transform -rotate-1',
    },
    {
      url: '/assets/foto20.webp',
      caption: 'Mira que hermosa, esa carita tan linda',
      rotation: 'transform -rotate-1',
    },
  ]);

  selectPhoto(photo: Photo) {
    this.photoSelected.emit(photo);
  }
}

