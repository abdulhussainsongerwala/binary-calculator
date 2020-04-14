import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-app2',
  templateUrl: './app2.component.html',
  styleUrls: ['./app2.component.scss']
})
export class App2Component {
  display = '';

  read = (input) => this.display += input;
  clear = () => this.display = '';
  
  execute() {
      let sections = this.display.split(/(\+|-|\*|\/)/);
      const expression = parseInt(sections[0], 2) + sections[1] + parseInt(sections[2], 2);
      const resultDecimal = Math.floor(eval(expression));
      this.display = resultDecimal.toString(2); // converts to binary
  }

}