import { Component, signal, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { HeroComponent } from './components/hero/hero.component';
import { LetterComponent } from './components/letter/letter.component';
import { MemoryGalleryComponent } from './components/memory-gallery/memory-gallery.component';
import { AnimatedIcon } from "./animated-icon/animated-icon";
import { MusicToggleComponent } from './components/music-toggle/music-toggle.component';
import { PhotoModalComponent } from './components/photo-modal/photo-modal.component';

interface Photo {
  url: string;
  caption: string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, HeaderComponent, HeroComponent, LetterComponent, MemoryGalleryComponent, AnimatedIcon, MusicToggleComponent, PhotoModalComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  @ViewChild('audioPlayer') audioPlayerRef!: ElementRef<HTMLAudioElement>;
  isLetterOpen = signal(false);
  isPlaying = false;
  selectedPhoto: Photo | null = null;

  private audioPlayer!: HTMLAudioElement;

  ngAfterViewInit() {
    this.audioPlayer = this.audioPlayerRef.nativeElement;
    this.audioPlayer.volume = 0.5; // Opcional: ajusta el volumen
    this.playMusicOnLoad();
  }

  private playMusicOnLoad() {
    this.audioPlayer.play().then(() => {
      this.isPlaying = true;
    }).catch(error => {
      console.log('La reproducción automática fue bloqueada por el navegador.');
      this.isPlaying = false;
    });
  }

  toggleLetter() {
    this.isLetterOpen.set(!this.isLetterOpen());
  }

  toggleMusic() {
    if (this.isPlaying) {
      this.audioPlayer.pause();
    } else {
      this.audioPlayer.play();
    }
    this.isPlaying = !this.isPlaying;
  }

  onPhotoSelected(photo: Photo) {
    this.selectedPhoto = photo;
  }

  onCloseModal() {
    this.selectedPhoto = null;
  }
}

