import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { DemoMaterialModule } from '../material-module';    // Angular material components
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { OperationsComponent } from './operations/operations.component';
import { OperatorsComponent } from './operators/operators.component';

//Services
import { ShareOperationService } from "./share-operation.service";


import { CdkDragDropEnterPredicateExample } from './drag-and-drop/cdk-drag-drop-enter-predicate-example';
import { LayoutComponent } from './layout/layout.component';
import { ScaffoldingComponent } from './components/scaffolding/scaffolding.component';
import { NoMatchFoundComponent } from './components/no-match-found/no-match-found.component';

@NgModule({
  declarations: [
    AppComponent,
    OperationsComponent,
    OperatorsComponent,
    CdkDragDropEnterPredicateExample,
    LayoutComponent,
    ScaffoldingComponent,
    NoMatchFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    DemoMaterialModule,
    BrowserAnimationsModule
  ],
  providers: [ShareOperationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
