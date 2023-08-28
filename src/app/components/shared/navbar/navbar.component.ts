import { animate, state, style, transition, trigger } from '@angular/animations';
import { AfterViewInit, Component, ElementRef, HostListener, Renderer2, ViewChild } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  animations: [
    trigger('menuAnimation', [
      state('open', style({
        opacity: 1,
        maxHeight: '1000px'
      })),
      state('close', style({
        opacity: 0,
        maxHeight: '0'
      })),
      transition('close <=> open', [
        animate('0.6s ease-in-out')
      ]),
      transition('open => close', [
        animate('0.6s ease-in-out')
      ])
    ])
  ]
})
export class NavbarComponent {
  @ViewChild('aboutmeSection', { static: true }) aboutmeSection!: ElementRef;
  @ViewChild('experiencesSection', { static: true }) experiencesSection!: ElementRef;
  @ViewChild('introductionSection', { static: true }) introductionSection!: ElementRef;
  @ViewChild('studySection', { static: true }) studySection!: ElementRef;

  scrollToSection(sectionId:string){
    const section = document.getElementById(sectionId);
    if(section){
      section.scrollIntoView({behavior:'smooth'});
    }
  }
  isOpen = true;
  isSmallScreen = false;
  openElement: HTMLElement | null = null;
  constructor(private renderer: Renderer2, private el: ElementRef) { }
  ngOnInit(): void {
    this.detectedResolution();
  }
  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.detectedResolution();
  }
  detectedResolution() {
    this.isSmallScreen = window.innerWidth < 1282;
    this.openElement = this.el.nativeElement.querySelector('.navbar-nav');
    if (this.isSmallScreen) {
      this.renderer.setStyle(this.openElement, 'display', 'none');
      const buttonResponsive = this.el.nativeElement.querySelector('.responsive-menu-button');
      this.renderer.setStyle(buttonResponsive,'display','flex');
    } else {
      this.renderer.setStyle(this.openElement, 'display', 'flex');
    }
  }
  toggleMenu() {
    this.isOpen = !this.isOpen;
    if (this.isOpen) {
      this.renderer.setStyle(this.openElement, 'display', 'flex');
    } else {
      this.renderer.setStyle(this.openElement, 'display', 'none');
    }
  }


}
