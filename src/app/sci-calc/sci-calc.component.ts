import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sci-calc',
  templateUrl: './sci-calc.component.html',
  styleUrls: ['./sci-calc.component.scss']
})
export class SciCalcComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  
  title = "SCIENTIFIC CALCULATOR";
  equation: string = "";
  operations: string[] = ['-', '+', '/', '*'];

  backspaceCalc(display: string) {   
    if (this.equation != ""){
        this.equation = display.substring(0, display.length-1);
        display = this.equation;
    }
  }

  clearCalc(display: string) {
    this.equation = "";
    display = this.equation;
  }

  calcClick(entry: string, display: string) {
    this.equation = display;  // in case things were typed via the keyboard 
    this.equation = this.equation.concat(entry);
    display = this.equation;
  }
          
  evaluateCalc(display: string) {   
    this.equation = display;  // in case things were typed via the keyboard 

    while (this.equation.includes("!")) {
      let factorialStart = 0; 
      let factorialStop = 0; 

        for(let i = 0; i < this.equation.length; i++) {
            if(this.operations.includes(this.equation[i])) { 
                factorialStart = i + 1; 
            } else if (this.equation[i] == '!') {
                factorialStop = i; 
                break;
            }
        }

        let factorialOf = eval(this.equation.substring(factorialStart, factorialStop));
        let factorial = 1;
                         
        for(let i = 2; i <= factorialOf; i++) 
            factorial = factorial*i; 

        this.equation = this.equation.substring(0, factorialStart).concat(String(factorial).concat(this.equation.substring(factorialStop + 1, this.equation.length)));
    }

    while (this.equation.includes("%")) {
        let percentageStart = 0; 
        let percentageStop = 0; 

        for(let i = 0; i < this.equation.length; i++) {
            if(this.operations.includes(this.equation[i])) { 
                percentageStart = i + 1; 
            } else if (this.equation[i] == '%') {
                percentageStop = i; 
                break;
            }
        }

        let percentageOf = eval(this.equation.substring(percentageStart, percentageStop));
        let percentage :string = String(percentageOf/100);
        // Calculator.calcDisplay.value = equation.substring(percentageStart, percentageStop); 
        this.equation = this.equation.substring(0, percentageStart).concat(percentage.concat(this.equation.substring(percentageStop + 1, this.equation.length)));
    }
    this.equation = eval(this.equation); 
    // if (result == "NaN") alert('This equation cannot be solved');
    // else display = result; 
    display = this.equation;
    // else alert( result);
} 


}
