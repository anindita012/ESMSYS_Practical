import { Component,OnInit, ViewChild, AfterViewInit} from '@angular/core';
import {Router} from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';
import { AppService } from '../app.service';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
@Component({
  selector: 'app-all-users',
  templateUrl: './all-users.component.html',
  styleUrls: ['./all-users.component.css']
})

export class AllUsersComponent implements OnInit, AfterViewInit {
  @ViewChild(MatSort)
  sort!: MatSort;
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  constructor(private router:Router,private service:AppService){ }
  public displayedColumns = ['UserID', 'FirstName', 'MobileNo', 'EmailID', 'EPPCount', 'action'
];
public dataSource = new MatTableDataSource<any>();
ngOnInit() {
 this.service.getData().subscribe((ele)=>{
  this.dataSource.data=ele.data;
 })
}
ngAfterViewInit(): void {
  this.dataSource.sort = this.sort;
  this.dataSource.paginator = this.paginator;
}
public doFilter = (value:any) => {
  value=(value.target as HTMLInputElement).value
  this.dataSource.filter = value.trim().toLocaleLowerCase();
}
public redirectToDetails = (id: string) => {
    console.log("directed id",id)
    this.router.navigate([`/EPPNumberById`,id])
}
}
