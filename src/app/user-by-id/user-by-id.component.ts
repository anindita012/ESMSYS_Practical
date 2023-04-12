import { Component,OnInit, ViewChild, AfterViewInit } from '@angular/core';
import {Router} from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';
import { AppService } from '../app.service';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-user-by-id',
  templateUrl: './user-by-id.component.html',
  styleUrls: ['./user-by-id.component.css']
})
export class UserByIdComponent  implements OnInit, AfterViewInit {
  @ViewChild(MatSort)
  sort!: MatSort;
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  id:any;
  constructor(private router:Router,private service:AppService,private activatedRoute:ActivatedRoute){ }
  public displayedColumns = ['UserID', 'district', 'taluka', 'village', 'citysurveyoffice', 'ward','sheetno','survey_number','start_date'
,'end_date','Active',];
  public dataSource = new MatTableDataSource<any>();
  ngOnInit() {
    this.activatedRoute.params.subscribe((data)=>{
      console.log("getting id in otp verification page ",data)
      this.id=data['id'];
    })
   this.service.getEPPById(this.id).subscribe((ele)=>{
    console.log(ele);
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
}