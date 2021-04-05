import { Component, OnInit, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
 @Output() serverCreated=new EventEmitter<{serverName:string,serverContent:string}>();
 @Output() bluePrintCreated=new EventEmitter<{serverName:string,serverContent:string}>();
  newServerName
  newServerContent
  @ViewChild('serverContentInput') serverContentInput:ElementRef
  constructor() { }

  ngOnInit(): void {
  }

  onAddServer(nameInput:HTMLInputElement) {
    this.newServerContent=this.serverContentInput.nativeElement.value
    this.newServerName=nameInput
   this.serverCreated.emit({
     serverName:this.newServerName,
     serverContent:this.newServerContent
   })
  }

  onAddBlueprint() {
    this.newServerContent=this.serverContentInput.nativeElement.value
    this.bluePrintCreated.emit({
      serverName:this.newServerName,
      serverContent:this.newServerContent
    })
  }
}
