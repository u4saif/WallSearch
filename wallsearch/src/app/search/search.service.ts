import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class  SearchService {
  constructor() {  }

  async search(find){
    
    let ImagesObj=[];
     let ImagesApi="https://api.unsplash.com/search/photos?page=1&query="+find+"&client_id=mdmhKmQVl5apvvD1Gm0YvLedYnRXpra4Xtsx7vGOyCc";
    console.log(ImagesApi);
    await fetch(ImagesApi)
    .then(function(response){
      let data=response.json();
      return data;
    })
    .then(function(data)
       {    
        // console.log(data.results);
         ImagesObj.push(data); 
         console.log(ImagesObj);
          
                        
                        
      } );return ImagesObj;


  
    } 
}
