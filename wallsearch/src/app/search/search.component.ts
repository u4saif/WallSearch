import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SearchService } from './search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  searchObj;
  find: string = 'hi';
  constructor(private searchImg: SearchService,
              private aroute: ActivatedRoute, private route: Router) { }

   ngOnInit() {
    this.aroute.queryParams.subscribe((param)=>{
      this.find=param.find;
    });
    console.log(this.find);
    let search= this.searchImg.search(this.find);
    this.searchObj=search;
   

  }  

  view(link){
    console.log(link);
    this.route.navigate(['view'],{queryParams:{view:btoa(JSON.stringify(link))}});
   }
 

}
