import { Person } from './person';


export class Algorithm
{
    totalAmount : number;
    
    result : string;
    toLowMoney : Person[];

   constructor(people : Person[])
   {
    this.toLowMoney = people;
   }

  

  giveMoney(person : Person, index : number, noEquel : number, j : number) 
  {
    if(person === undefined &&  this.toLowMoney.length === 0) return;
    else if (person === undefined) {
      person = this.toLowMoney[0];
      index = 0
    }

    if(person.give < 0) this.giveMoney(this.toLowMoney[index + 1], index + 1, 0, 0)
    console.log(index + " : " + this.toLowMoney.length);

    for(var i = 0; i < this.toLowMoney.length; i++)
      {
        switch (noEquel)
        {
          case 0 :
            {
              console.log(this.toLowMoney);
              if(Math.abs(person.give) === Math.abs(this.toLowMoney[i].give) && index !== i)
              {
                
                //add string who needs to pay who
                this.result += person.name + " has to give " + person.give + " cents to " + this.toLowMoney[i].name + "\n";
                this.toLowMoney.splice(index, 1);
                this.toLowMoney.splice(i, 1);
              
                console.log("Hello1");
                console.log(index + " : " + this.toLowMoney.length);
                if(this.toLowMoney.length === 0 || this.toLowMoney.length === 1) return ; 
                this.giveMoney(this.toLowMoney[0], 0, 0, 0);
                
                
                
                return;
              }
              else if(i == this.toLowMoney.length - 1)
              {
                console.log(person.give + " " + this.toLowMoney[i].give);
                console.log("Hello2");
                this.giveMoney(person, index, 1, 0);
                return;
              }
              
              if(this.toLowMoney.length === 0 || this.toLowMoney.length === 1) return; 

              
            }
            break;
          case 1 :
            {
              console.log(Math.abs(person.give) + " " + Math.abs(this.toLowMoney[i].give));
              if(Math.abs(person.give) < Math.abs(this.toLowMoney[i].give) )
              {
                
                this.toLowMoney[i].give += person.give;
                this.result += person.name + " has to give " + person.give + " cents to " + this.toLowMoney[i].name + "\n";
                this.toLowMoney.splice(index, 1);
                
                console.log("Hello3");
                //add string who needs to pay who
                this.giveMoney(this.toLowMoney[0], 0, 0, 0);
                return;
              }
              else if(person.give > (-1 *this.toLowMoney[i].give ))
              {
                person.give += this.toLowMoney[i].give;
                this.result += person.name + " has to give " +  -1 * this.toLowMoney[i].give + " cents to " + this.toLowMoney[i].name + ", \n";
                this.toLowMoney.splice(j, 1);
                
                console.log("Hello3");
                //add string who needs to pay who
                this.giveMoney(this.toLowMoney[0], 0, 0, 0);
              }
              console.log("Hello5");
              
              
              
            }
            break;
        }
      }
      this.giveMoney(this.toLowMoney[index +1 ], index +1, 0, 0);
    
  }
}