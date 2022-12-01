import {Component, OnInit} from '@angular/core';
import {NameService} from "./name.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements  OnInit{
  title = 'crud';
  // @ts-ignore
  productForm: FormGroup;
  hover = 'nohover';
  clic = 'noclic';
  onchange(){
    this.hover =  'hover';
  }
  onpaschange(){
    this.hover =  'nohover';
  }
  onclic(){
    this.clic = 'clic';
  }
  onnoclic(){
    this.clic = 'noclic';
  }
  constructor(private nameService: NameService,
              private  formBuilder: FormBuilder,
              private Router: Router) {
  }

  /*
reponse = ""
onSend(name:string){
  const formData : FormData = new FormData()
  formData.append('name',name)
  this.nameService.onSendService(formData).subscribe
  (res=>{
    console.log(res);
    this.reponse = res
  },
   err=>{
    console.log(err);
   }
  )
}
*/
r1 = /bonjour/ig;
r2 = /comment allez vous/ig;
r3 = /je cherche a eleve mon chiffre d'affaire grace au digital/ig;
  ngOnInit(): void {
    this.getProductList();
    this.creatProduct();
    this.getreponse()
  }

  p: any = [];
  resp: any = [];

  getProductList() {
    this.nameService.loadProducts().subscribe(res => {
      this.p = res;
      console.log('res', res);
      console.log('push', this.p);
      return this.p;
    })
  }
  getreponse() {
    this.nameService.loadreponse().subscribe(resa => {
      this.resp = resa;
      console.log('res', resa);
      console.log('push', this.resp);
      return this.resp;
    })
  }

creatProduct(){
    this.productForm = this.formBuilder.group({
      'message': ['', Validators.compose([Validators.required, Validators.minLength(1),
      Validators.maxLength(500)])],
      'reponse': ['', Validators.compose([Validators.required, Validators.minLength(1),
        Validators.maxLength(10)])]
    });
}

creat(values: any, isUpdate:any){
 if (values.message.match(this.r1)){
  values.reponse = 1;
  console.log(values.reponse);
 }else if (values.message.match(this.r2)){
   values.reponse = 2;
   console.log(values.reponse);
 }else if (values.message.match(this.r3)){
  values.reponse = 3;
  console.log(values.reponse);
  }else
{
  values.reponse = 4;
}
  console.log(values.reponse);
  let formData = new FormData();
  formData.append('message', values.message);
  formData.append('reponse', values.reponse);
  if (isUpdate){
   // for update
    console.log('ca existe deja');
  } else {
    this.nameService.creat(formData).subscribe(res => {
      /* if(res.result === 'success') {
          this.router.navigate(['A']) }*/
      this.ngOnInit()
      console.log(res);
    },error => {console.log('erreur', error)});
  }
}


}
