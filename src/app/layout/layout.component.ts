import {MediaMatcher} from '@angular/cdk/layout';
import {ChangeDetectorRef, Component, OnDestroy, ViewChild} from '@angular/core';
import {CommonService} from '../services/common.service';
import {merge, Observable, of as observableOf} from 'rxjs';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnDestroy {

  mobileQuery: MediaQueryList;

  displayedColumns: string[] = ['created', 'state', 'number', 'title'];

  tableData: object[];

  resultsLength = 0;

  fillerNav = Array.from({length: 5}, (_, i) => `Item ${i + 1}`);

  private _mobileQueryListener: () => void;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher, private commonService: CommonService) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  ngAfterViewInit() {
  }

  getRepoIssues(): void {
    this.commonService.getRepoIssues()
    .subscribe((response: any) => {
      this.tableData = response["items"];
      this.resultsLength = response["total_count"];
      console.log("this.tableData:: "+this.tableData);
    });    
  }

  getEmojis(): void {
    this.commonService.getEmojis()
    .subscribe((response: any) => {
      this.tableData = response["items"];
      this.resultsLength = response["total_count"];
      console.log("this.tableData:: "+this.tableData);
    });    
  }
}
