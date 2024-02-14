import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-private-zone',
  templateUrl: './private-zone.component.html',
  styleUrls: ['./private-zone.component.css']
})
export class PrivateZoneComponent {
  showScrollTopButton: boolean = false;

  @HostListener('window:scroll', [])
  onScroll(): void {

    this.showScrollTopButton = window.scrollY > 300;
  }

  scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
