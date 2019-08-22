import { Component, OnInit } from '@angular/core';
import { ShareOperationService } from "../share-operation.service";

@Component({
  selector: 'app-operations',
  templateUrl: './operations.component.html',
  styleUrls: ['./operations.component.css']
})
export class OperationsComponent implements OnInit {

  result = 0;
  operation = "";
  operator = "+";
  
  constructor(private shareOperation: ShareOperationService) { }

  ngOnInit() {
    this.shareOperation.currentOperation.subscribe(operation => this.operation = operation);
  }

  onSubmit(data){
      switch(this.operation){
        case "addition":          
          this.result = data.operand1 + data.operand2;          
          break;
        case "subtraction":
            this.result = data.operand1 - data.operand2;
            this.operator = "-";
            break;
        case "multiplication":
            this.result = data.operand1 * data.operand2;
            this.operator = "*";
            break;
        case "division":
            this.result = data.operand1 * data.operand2;
            this.operator = "*";
            break;
      }
  }
}
