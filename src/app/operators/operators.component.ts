import { Component, OnInit } from '@angular/core';
import { ShareOperationService } from "../share-operation.service";

@Component({
  selector: 'app-operators',
  templateUrl: './operators.component.html',
  styleUrls: ['./operators.component.css']
})
export class OperatorsComponent implements OnInit {

  selectedOperation = "";

  operators = [{
    operation: "addition",
    symbol: "+"
  }, 
  {
    operation: "subtraction",
    symbol: "-"
  },
  {
    operation: "multiplication",
    symbol: "*"
  },
  {
    operation: "division",
    symbol: "/"
  }];

  constructor(private shareOperation: ShareOperationService) { }

  ngOnInit() {
    this.shareOperation.currentOperation.subscribe(selectedOperation => this.selectedOperation = selectedOperation);
  }

  onOperatorClick(operator) {
    this.selectedOperation = operator.operation;
    this.shareOperation.changeOperation(this.selectedOperation); 
    console.log(this.selectedOperation);
  }

}
