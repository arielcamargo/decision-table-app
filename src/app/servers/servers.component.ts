// Author: Ariel Camargo
import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})

export class ServersComponent implements OnInit
{
  TF1;
  TF2;
  TF3;
  result;
  bgColor;

  ngOnInit()
  {
  }

  onClicked(id: any)
  {
    if(id.includes('1'))
    {
      this.TF1 = id.includes('T');
    }
    else if(id.includes('2'))
    {
      this.TF2 = id.includes('T');
    }
    else
    {
      this.TF3 = id.includes('T');
    }
    if(this.TF2 != null && this.TF1 != null && this.TF3 != null)
    {
      this.result = this.TF1 + ' ' + this.TF2 + ' ' + this.TF3;
      this.bgColorMethod();
    }
  }

  bgColorMethod() {
    if(this.TF2 && this.TF1 && this.TF3 )
    this.bgColor = 'green';
    else
      this.bgColor = 'red';

    // if(this.TF1 && this.TF3)
    //   this.bgColor = 'green';
    // else
    //   this.bgColor = 'red';
  }
}
