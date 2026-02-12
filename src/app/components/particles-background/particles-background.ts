import { Component, ElementRef, ViewChild, AfterViewInit, OnDestroy, HostListener, PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

interface Particle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  opacity: number;
  color: string;
}

@Component({
  selector: 'app-particles-background',
  standalone: true,
  templateUrl: './particles-background.html',
  styleUrl: './particles-background.css',
})
export class ParticlesBackgroundComponent implements AfterViewInit, OnDestroy {
  @ViewChild('canvas', { static: true }) canvasRef!: ElementRef<HTMLCanvasElement>;
  private ctx!: CanvasRenderingContext2D;
  private particles: Particle[] = [];
  private animationFrameId: number | null = null;
  private isBrowser: boolean;

  constructor(@Inject(PLATFORM_ID) platformId: Object) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  ngAfterViewInit(): void {
    if (this.isBrowser) {
      this.initCanvas();
      this.animate();
    }
  }

  ngOnDestroy(): void {
    if (this.animationFrameId) {
      cancelAnimationFrame(this.animationFrameId);
    }
  }

  @HostListener('window:resize')
  onResize(): void {
    if (this.isBrowser) {
      this.resizeCanvas();
    }
  }

  private initCanvas(): void {
    const canvas = this.canvasRef.nativeElement;
    this.ctx = canvas.getContext('2d')!;
    this.resizeCanvas();
    this.createParticles();
  }

  private resizeCanvas(): void {
    const canvas = this.canvasRef.nativeElement;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }

  private createParticles(): void {
    const particleCount = 80;
    const colors = ['rgba(255, 255, 255, ', 'rgba(255, 200, 210, ', 'rgba(255, 180, 190, '];

    this.particles = [];
    for (let i = 0; i < particleCount; i++) {
      this.particles.push({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        size: Math.random() * 3 + 1,
        speedX: (Math.random() - 0.5) * 0.5,
        speedY: (Math.random() - 0.5) * 0.5 - 0.2,
        opacity: Math.random() * 0.5 + 0.1,
        color: colors[Math.floor(Math.random() * colors.length)]
      });
    }
  }

  private animate(): void {
    this.ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);

    this.particles.forEach(p => {
      p.x += p.speedX;
      p.y += p.speedY;

      if (p.y < -10) p.y = window.innerHeight + 10;
      if (p.x < -10) p.x = window.innerWidth + 10;
      if (p.x > window.innerWidth + 10) p.x = -10;

      this.ctx.beginPath();
      this.ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      this.ctx.fillStyle = p.color + p.opacity + ')';
      this.ctx.fill();

      p.opacity += (Math.random() - 0.5) * 0.02;
      if (p.opacity < 0.1) p.opacity = 0.1;
      if (p.opacity > 0.6) p.opacity = 0.6;
    });

    this.animationFrameId = requestAnimationFrame(() => this.animate());
  }
}
