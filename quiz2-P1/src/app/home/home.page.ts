import { Component } from '@angular/core';
import { ChucknorrisApiService } from '../chucknorris-api.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {

  randomJoke: any;
  listCategories: any= [];

  constructor(private apiservice: ChucknorrisApiService) {}

  ngOnInit(){
    this.apiservice.getRandomJoke().subscribe((data)=>{
      this.randomJoke = data;
      console.log(data);
    });

    this.apiservice.getCategories().subscribe((data)=>{
      this.listCategories = data;
      console.log(data);
    });
  }

}
