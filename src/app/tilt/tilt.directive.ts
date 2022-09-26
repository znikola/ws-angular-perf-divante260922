import { Directive, ElementRef, Input } from '@angular/core';
import { map, merge } from 'rxjs';
import { fromEvent } from '@rx-angular/cdk/zone-less/rxjs';

@Directive({
  selector: '[tilt]',
})
export class TiltDirective {
  @Input('tilt') rotationDegree = 30;

  constructor(
    private elementRef: ElementRef<HTMLElement>
  ) {
    const { nativeElement } = elementRef;

    const rotate$ = fromEvent<MouseEvent>(
      nativeElement,
      'mouseenter'
    ).pipe(
      map(({ pageX}) => {
        const pos = determineDirection(pageX, nativeElement);

        return pos === 0
          ? `rotate(${this.rotationDegree}deg)`
          : `rotate(-${this.rotationDegree}deg)`;
      })
    );

    const reset$ = fromEvent(
      nativeElement,
      'mouseleave'
    ).pipe(map(() => 'rotate(0deg)'));

    merge(rotate$, reset$).subscribe(rotationDegree => {
      nativeElement.style.transform = rotationDegree;
    })

  }
}

/**
 * returns 0 if entered from left, 1 if entered from right
 */
function determineDirection(pos: number, element: HTMLElement): 0 | 1 {
  const width = element.clientWidth;
  const middle = element.getBoundingClientRect().left + width / 2;
  return pos > middle ? 1 : 0;
}
