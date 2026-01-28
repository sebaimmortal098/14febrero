import { Component, signal } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { HeroComponent } from './components/hero/hero.component';
import { LetterComponent } from './components/letter/letter.component';
import { MemoryGalleryComponent } from './components/memory-gallery/memory-gallery.component';
import { AnimatedIcon } from "./animated-icon/animated-icon";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, HeroComponent, LetterComponent, MemoryGalleryComponent, LetterComponent, AnimatedIcon], // Añade el nuevo componente a los imports
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  isLetterOpen = signal(false);

  toggleLetter() {
    this.isLetterOpen.set(!this.isLetterOpen());
  }
}

