import { logging } from 'protractor';
import { Directive,TemplateRef,ViewContainerRef,Input } from '@angular/core';

@Directive({
  selector: '[appTimes]'
})
export class TimesDirective {

  constructor(
    private viewContainerRef : ViewContainerRef,
    private templateRef : TemplateRef<any>)
    {}
    @Input('appTimes') set render(time : number){
      this.viewContainerRef.clear();
      for (let i = 0; i < time; i++) {
          this.viewContainerRef.createEmbeddedView(this.templateRef,{});
      }
    }
}
