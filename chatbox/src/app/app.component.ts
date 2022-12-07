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


  ngOnInit(): void {
    this.getProductList();
    this.creatProduct();
    this.getreponse();
  }

  p: any = [];
  resp: any = [];

  getProductList() {
    this.nameService.loadProducts().subscribe(res => {
      this.p = res;
      return this.p;
    })
  }
  getreponse() {
    this.nameService.loadreponse().subscribe(resa => {
      this.resp = resa;
      return this.resp;
    })
  }

  re: any = []
  affiche(p:any){
    for (let i of this.resp){
      if (i.id_reponse == p){
        this.re = i
        return this.re
      }
    }
  }

  creatProduct(){
    this.productForm = this.formBuilder.group({
      'message': ['', Validators.compose([Validators.required, Validators.minLength(1),
        Validators.maxLength(500)])],
      'reponse': ['', Validators.compose([Validators.required, Validators.minLength(1),
        Validators.maxLength(10)])]
    });
  }
  r1 = /bonjour/ig;
  r2 = /Marketing/ig;
  r3 = /probleme/ig;
  r5 = /Non/ig;
  r7 = /oui/ig;
  r9 = /Strategi/ig;
  r10 = /Visibilite/ig;
  r11 = /Credibilite/ig;
  r12 = /tous/ig;
  r13 = /Vente/ig;
  r14 = /^[1]/ig;
  r15 = /Salut/ig;
  res1 = /Avez vous les outils necessaires comme un site web , une application ou un reseau social/ig;
  res2 = /Quelle difficulte rencontree vous parmi celles ci/ig;
  res3 = /Nous vous proposons de creer vos outils/ig
  creat(values: any, isUpdate:any){

    // @ts-ignore
   let message = document.querySelector('#message');
    // @ts-ignore
   let content = message.firstElementChild.textContent
    if (values.message.match(this.r1) || values.message.match(this.r15)){
      values.reponse = 1;
    }
    else if (values.message.match(this.r14) || values.message.match(this.r2)){
      values.reponse = 5;
    }
    else
      // @ts-ignore
    if (values.message.match(this.r7) && content.match(this.res1)){
      values.reponse = 6;
      }
    else
      // @ts-ignore
    if (values.message.match(this.r7) && content.match(this.res3)){
      values.reponse = 9;
    }
    else
        // @ts-ignore
      if ( content.match(this.res2) && (values.message.match(this.r9) || values.message.match(this.r10)
          || values.message.match(this.r11) || values.message.match(this.r12)
          || values.message.match(this.r13))){
          values.reponse = 7;
      }
    else
        // @ts-ignore
        if (values.message.match(this.r5) && content.match(this.res1)) {
              values.reponse = 8;
            }

    else {
            values.reponse = 2;
      }


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
        let texte_env = document.querySelector('.saisissez')
        // @ts-ignore
        texte_env.value = ''
        let overflow = document.querySelector('#overflow');
        // @ts-ignore
        let matelement:any;
        let compte = 0;
        this.getProductList()
        const interval = setInterval(
          ()=>{
            // @ts-ignore
            let child = overflow.firstElementChild;
            // @ts-ignore
            let mat = child.lastElementChild;
            // @ts-ignore
            let mat1 = mat.firstElementChild;
            // @ts-ignore
            let mat2 = mat.lastElementChild;
            // @ts-ignore
            mat1.classList.add('d-none')
            // @ts-ignore
            mat2.classList.remove('d-none')
            compte++;
            if (compte == 20){
              // @ts-ignore
              mat2.classList.add('d-none')
              // @ts-ignore
              mat1.classList.remove('d-none')
              clearInterval(interval)
            }
          },100
        )
      },error => {console.log('erreur', error)});
    }
  }

}
