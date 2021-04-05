import { Component, OnChanges, OnInit,SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  serverElements = [{type:'server',name:'server 1',content:'this is a demo server'}];

  onServerAdded(serverData:{serverName:string,serverContent:string})
  {
    this.serverElements.push({
      type:"server",
      name:serverData.serverName,
      content:serverData.serverContent
    })

  }
  onBluePrintAdded(bluePrintCreated:{serverName:string,serverContent:string})
  {
    this.serverElements.push({
      type:"blueprint",
      name:bluePrintCreated.serverName,
      content:bluePrintCreated.serverContent
    })

  }
  setName()
  {
    this.serverElements[0].name="changed"
  }
  setSplice(){
    this.serverElements.splice(0,1)
  }

  
}
