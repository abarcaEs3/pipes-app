import { DatePipe, LowerCasePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { Component, effect, signal } from '@angular/core';

@Component({
  selector: 'app-basic-pages',
  imports: [LowerCasePipe, UpperCasePipe, TitleCasePipe, DatePipe],
  templateUrl: './basic-pages.component.html',
})
export default class BasicPageComponent {

  nameLower = signal('carlos');
  nameUpper = signal('CARLOS');
  fullName = signal('cArLOs AbARcA');

  customDate = signal(new Date());

  tickingDateEffect = effect((onCleanDate) => {
    const interval = setInterval(() => {
      this.customDate.set(new Date());
    }, 1000);

    onCleanDate(() => {
      clearInterval(interval);
    })
  })
}
