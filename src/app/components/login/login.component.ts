import { Component, OnInit } from '@angular/core';
import {InputTextModule} from 'primeng/inputtext';
import { Subject } from 'rxjs';
import { LunaService } from '../../services/luna.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {

  
  constructor(private lunaService: LunaService) { }

  ngOnInit() {
    
  }

  /**
   * Check the Pin and get a Token
   * @param pin 
   */
  checkPin(pin: string){
    if(pin.length == 6){
      console.log(typeof pin);
      this.lunaService.getToken(pin)
      .subscribe( (response) => {console.log(response.Token)})
    }
  
  }

}
