import { Component, OnInit, Renderer2, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-client-layout',
  templateUrl: './client-layout.component.html',
  styleUrls: ['./client-layout.component.css']
})
export class ClientLayoutComponent implements OnInit {

  constructor(
    private renderer: Renderer2,
    @Inject(DOCUMENT) private document: Document,
    public AuthApiService: AuthService // rendu public pour être utilisé dans le HTML
  ) {}

  ngOnInit(): void {
    this.loadStyles();
    this.loadScriptsSequentially();
  }

  private loadStyles() {
    this.loadStyle('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500;600;700;800&display=swap');
    this.loadStyle('assets/vendor/bootstrap/css/bootstrap.min.css');
    this.loadStyle('assets/css/fontawesome.css');
    this.loadStyle('assets/css/templatemo-tale-seo-agency.css');
    this.loadStyle('assets/css/owl.css');
    this.loadStyle('assets/css/animate.css');
    this.loadStyle('https://unpkg.com/swiper@7/swiper-bundle.min.css');
  }

  private async loadScriptsSequentially() {
    await this.loadScript('assets/vendor/jquery/jquery.min.js');
    await this.loadScript('assets/vendor/bootstrap/js/bootstrap.min.js');
    await this.loadScript('assets/js/isotope.min.js');
    await this.loadScript('assets/js/owl-carousel.js');
    await this.loadScript('assets/js/tabs.js');
    await this.loadScript('assets/js/popup.js');
    await this.loadScript('assets/js/custom.js');
  }

  private loadStyle(href: string) {
    const linkElement = this.renderer.createElement('link');
    linkElement.rel = 'stylesheet';
    linkElement.href = href;
    this.renderer.appendChild(this.document.head, linkElement);
  }

  private loadScript(src: string): Promise<void> {
    return new Promise((resolve, reject) => {
      const scriptElement = this.renderer.createElement('script');
      scriptElement.src = src;
      scriptElement.type = 'text/javascript';
      scriptElement.onload = () => resolve();
      scriptElement.onerror = () => reject(`Failed to load script ${src}`);
      this.renderer.appendChild(this.document.body, scriptElement);
    });
  }
}
