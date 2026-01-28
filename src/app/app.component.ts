import { Component, signal } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { HeroComponent } from './components/hero/hero.component';
import { LetterComponent } from './components/letter/letter.component';
import { MemoryGalleryComponent } from './components/memory-gallery/memory-gallery.component';
import { LetterIconComponent } from './components/letter-icon/letter-icon.component'; // Importa el nuevo componente

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, HeroComponent, LetterComponent, MemoryGalleryComponent, LetterIconComponent], // Añade el nuevo componente a los imports
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  isLetterOpen = signal(false);

  toggleLetter() {
    this.isLetterOpen.set(!this.isLetterOpen());
  }
}

