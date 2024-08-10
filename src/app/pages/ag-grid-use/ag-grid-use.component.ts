import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ColDef, GridApi, GridReadyEvent, GridOptions  } from "ag-grid-community"

@Component({
  selector: 'app-ag-grid-use',
  templateUrl: './ag-grid-use.component.html',
  styleUrls: ['./ag-grid-use.component.css']
})
export class AgGridUseComponent implements OnInit {
  private gridApi!: GridApi<any>;
  public rowSelection: 'single' | 'multiple' = 'multiple';

  userList : any[] = [];

  @ViewChild('name') nameInput!: ElementRef;
  @ViewChild('username') usernameInput!: ElementRef;
  @ViewChild('email') emailInput!: ElementRef;
  @ViewChild('city') cityInput!: ElementRef;

  colDefs: ColDef[] = [
    { field: "address.city", headerName: "City", headerCheckboxSelection: true, checkboxSelection: true, rowDrag: true, },
    { field: "id", headerName: "User Id",
      cellRenderer: (item: any) => {
        return "EMP-" + item.value
      },
      checkboxSelection: true
    },
    { field: "name", headerName: "Name", filter: 'agTextColumnFilter' },
    { field: "username", headerName: "User Name" },
    { field: "email", headerName: "Email", editable: true },
  ];

  defaultColDef: ColDef = {
    flex: 1,
    minWidth: 100,
    resizable: true,
  }

  gridOptions: GridOptions = {
    rowDragManaged: true,
    animateRows: true,
    rowSelection: 'multiple',
  };

  constructor( private http: HttpClient ) { }

  ngOnInit(): void {
    this.getUser();
  }

  onBtExport() {
    this.gridApi.exportDataAsCsv();
  }

  onGridReady(params: GridReadyEvent<any>) {
    this.gridApi = params.api
  }


  deleteSelectedRows() {
    const selectedData = this.gridApi.getSelectedRows();
    this.gridApi.applyTransaction({ remove: selectedData });
  }

  addUser() {
    const randomUserId = Math.floor(Math.random() * 10) + 1;
    this.http.get(`https://jsonplaceholder.typicode.com/users/${randomUserId}`).subscribe((newUser: any) => {
      newUser.id = this.userList.length +++ 1;
      this.gridApi.applyTransaction({ add: [newUser] });
    });
  }

  addNewUser(name: string, username: string, email: string, city: string){
    const newUser = {
      id: this.userList.length +++ 1,
      name: name,
      username: username,
      email: email,
      address: {
        city: city
      }
    }
    this.gridApi.applyTransaction({ add: [newUser] });

    this.nameInput.nativeElement.value = '';
    this.usernameInput.nativeElement.value = '';
    this.emailInput.nativeElement.value = '';
    this.cityInput.nativeElement.value = '';
  }

  getUser(){
    this.http.get('https://jsonplaceholder.typicode.com/users').subscribe((response: any) => {
      this.userList = response
    })
  }
}
