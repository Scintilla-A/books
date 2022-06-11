import { AfterViewInit, ChangeDetectorRef, Component, OnChanges, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSort } from '@angular/material/sort';
import { StoreService } from 'src/shared/store/store.service';
import { MatTableDataSource } from '@angular/material/table';
import { AddRowComponent } from './modal/add-row/add-row.component';

export interface arrElement {
  title: string;
  year: string;
  author_name: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit, AfterViewInit, OnChanges {
  title = 'book-mgmt';
  public thList: arrElement[] = [{ title: 'Book Title', year: 'Year', author_name: 'Author Name' },];
  public bookList: arrElement[] = [
    { title: 'Dune', year: '1965', author_name: 'Frank Herbert' },
    { title: 'Enders Game', year: '1985', author_name: 'Orson Scott Card' },
    { title: '1984', year: '1949', author_name: 'George Orwell' },
    { title: 'Farenheit 451', year: '1953', author_name: 'Ray Bradbury' },
    { title: 'Brave New World', year: '1932', author_name: 'Aldous Huxley' }
  ];
  public displayedColumns: string[] = [
    'book_Title',
    'year',
    'author_Name'
  ];
  @ViewChild(MatSort) sort!: MatSort;
  dataSource = new MatTableDataSource(this.bookList);

  constructor(
    public dialog: MatDialog,
    public storeService: StoreService,
    public changeDetectorRef: ChangeDetectorRef
  ) {

  }

  ngOnInit() {
    this.storeService.set(1, this.bookList);
  }
  ngAfterViewInit() {
    this.dataSource.data = this.storeService.get(1);
    this.dataSource.sort = this.sort;

  }
  ngOnChanges() {
    this.dataSource.data = this.storeService.get(1);
  }

  public deleteRow(index: any, row: any): void {
    var newArray = this.dataSource.data.filter(function (el) {
      return el.year !== row.year;
    }
    );
    this.dataSource.data = newArray;
    this.storeService.set(1, newArray);
  }

  public openModal(event: any): void {
    const dialogUploadRef = this.dialog.open(AddRowComponent, {
      width: '40%',
      direction: 'ltr',
      hasBackdrop: true,
      disableClose: true,
      autoFocus: false,
      restoreFocus: false

    });
    dialogUploadRef.afterClosed().subscribe(res => {
    });
  }

  public addList(event: any): void {
    this.dataSource.data = this.storeService.get(1);
    this.dataSource.sort = this.sort;
    this.changeDetectorRef.detectChanges();
  }

  public deleteList(event: any): void {
    this.dataSource.data = [];
  }
}
