import { 
   Component, 
   Input, 
   ViewEncapsulation,
   OnChanges,
   OnInit,
   SimpleChanges,
   DoCheck,
   AfterContentInit,
   AfterContentChecked,
   OnDestroy,
   ViewChild,
   ElementRef,
   ContentChild} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation:ViewEncapsulation.Emulated //none ShadowDom
})
export class ServerElementComponent implements 
OnInit,
OnChanges,
DoCheck,
AfterContentInit,
AfterContentChecked,
OnDestroy {

  @ViewChild('heading',{static:true}) header:ElementRef
 @Input('elementX') elementT:{type:string,name:string,content:string};
 @Input() name:string;
  @ContentChild('contentParagraph',{static:true}) contentPara:ElementRef
  constructor() {

   }


   ngOnInit(): void {
    console.log("NgOnInit run")
    console.log("Content text"+this.header.nativeElement.textContent)
    console.log("Content text"+this.contentPara.nativeElement.textContent)
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log("NgOnChanges run")
    console.log(changes)
    //  this.name=changes.name.previousValue;
  }
  ngDoCheck(){
    console.log("DoCheck Called")
  }
  ngAfterContentInit(){
    console.log("ngAfterContentInit called(dance)")
     console.log("Content text "+this.header.nativeElement.textContent)
     console.log("Content text "+this.contentPara.nativeElement.textContent)
  }
  ngAfterContentChecked(){
    console.log("NgAfterContentChecked called")
  }
  ngOnDestroy(){
    console.log("NgOnDestroy Called")
  }
}
