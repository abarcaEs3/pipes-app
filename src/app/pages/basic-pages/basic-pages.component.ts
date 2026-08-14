import { LowerCasePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-basic-pages',
  imports: [LowerCasePipe, UpperCasePipe, TitleCasePipe],
  templateUrl: './basic-pages.component.html',
})
export default class BasicPageComponent {

  nameLower = signal('carlos');
  nameUpper = signal('CARLOS');
  fullName = signal('cArLOs AbARcA');
}
