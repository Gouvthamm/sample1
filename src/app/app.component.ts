import { Component } from '@angular/core';
import{ HttpClient} from '@angular/common/http'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularapp1';
  results=''
  constructor(private http:HttpClient){}
  ngOnInit():void{
    // this.http.get('https://swapi.co/api/people/?search=ab').toPromise()
    // .then((data:any)=>{
    //   this.results=data.results;
    //   console.log(this.results)

    // this.http.get('https://api.github.com/users/abdullah').subscribe(data=>{
    //   console.log(data)
    // })
    // this.http.get<User1>('https://api.github.com/users/abdulla ').subscribe(data=>{
    //   console.log("user login:"+data.login)
    //   console.log("Bio:"+data.bio)
    //   console.log("company:"+data.company)
    // },
    // err=>{
    //   console.log("err occured")
    // });
      this.http.post('http://jsonplaceholder.typicode.com/posts',
    {
        title:'foo',
        body:'bar',
        userId:1
      })
      .subscribe(
        res=>{
          console.log(res)
        },
        err=>{
          console.log("err occired")
        }
      )

  }

}
