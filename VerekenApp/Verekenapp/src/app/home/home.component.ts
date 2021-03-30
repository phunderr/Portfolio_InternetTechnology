import { stringify } from '@angular/compiler/src/util';
import { Component, OnInit, ɵCompiler_compileModuleAndAllComponentsSync__POST_R3__ } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Person } from '../person';
import { Algorithm } from '../algoritm'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  clickCounter: number = 1;
  name: string = '';
  amount: string;
  result: string = '';


  people: Person[] = [{name : "John", moneySpent : 4000, give : 0}, {name : "Mark", moneySpent : 2300, give : 0}, {name : "ddfgs", moneySpent : 900, give : 0}, {name : "Mghj", moneySpent : 500, give : 0}];
  toLowMoney :Person[] = [];
  totalAmount : number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  countClick() {
    
    var regex = /^[0-9]*$/;

    if (this.name.length > 2 && regex.test(this.amount))
    {
      console.log(this.amount)
      var value = +this.amount;
      this.clickCounter += 1;
      this.people[this.people.length] =  {name: this.name, moneySpent : value, give :  0}
      this.name = "";
      this.amount = "";
    }
    
  }


  Calculate()
  {
    
    for (var i =0; i< this.people.length; i++)
    {

      this.people[i].give = 0;

    }

    this.result = '';
    for (var i =0; i< this.people.length; i++)
    {

      this.totalAmount += this.people[i].moneySpent;

    }

    this.totalAmount = this.totalAmount/this.people.length;

    for (var i =0; i< this.people.length; i++)
    {
      var spent = this.people[i].moneySpent
      if ( spent !== this.totalAmount)
      {
        this.people[i].give = this.totalAmount - spent;
        this.toLowMoney[i] = this.people[i];
      }

    }
    var ag = new Algorithm(this.toLowMoney);
    ag.giveMoney(this.toLowMoney[0], 0 ,0, 0);

    this.result = ag.result;
    console.log(this.result);
  }
}