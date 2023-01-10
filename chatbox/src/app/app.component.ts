import {Component, OnInit} from '@angular/core';
import {NameService} from "./name.service";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements  OnInit{
  title = 'crud';
  hover = 'nohover';
  clic = 'noclic';

  last = new Date();
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
  constructor(private nameService: NameService) {
  }


  ngOnInit(): void {
    this.getProductList();
    this.getreponse();
    this.load();
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
  r16 = /[^ ]/;
  res1 = /Avez vous les outils necessaires comme un site web , une application ou un reseau social/ig;
  res2 = /Quelle difficulte rencontree vous parmi celles ci/ig;
  res3 = /Nous vous proposons de creer vos outils/ig;

  creat(form: NgForm){
    if (form.value.message.match(this.r1) || form.value.message.match(this.r15) || form.value.message.match(this.r16)){
      form.value.reponse = 1;
    }
    else {
      // @ts-ignore
      let message = document.querySelector('#message');
      // @ts-ignore
      let content = message.firstElementChild.textContent

      if (form.value.message.match(this.r14) || form.value.message.match(this.r2)){
        form.value.reponse = 5;
      }
      else
        // @ts-ignore
      if (form.value.message.match(this.r7) && content.match(this.res1)){
        form.value.reponse = 6;
      }
      else
        // @ts-ignore
      if (form.value.message.match(this.r7) && content.match(this.res3)){
        form.value.reponse = 9;
      }
      else
        // @ts-ignore
      if ( content.match(this.res2) && (values.message.match(this.r9) || form.value.message.match(this.r10)
        || form.value.message.match(this.r11) || form.value.message.match(this.r12)
        || form.value.message.match(this.r13))){
        form.value.reponse = 7;
      }
      else
        // @ts-ignore
      if (form.value.message.match(this.r5) && content.match(this.res1)) {
        form.value.reponse = 8;
      }

      else {
        form.value.reponse = 2;
      }
    }
    let formData = new FormData();
    formData.append('message', form.value.message);
    formData.append('reponse', form.value.reponse);
      this.nameService.creat(formData).subscribe(res => {},error => {console.log('erreur', error)});
    form.reset();

    let compte = 0;
    this.getProductList()
    const interval = setInterval(
      ()=>{
        // @ts-ignore
        let mat = document.getElementById('message');
        // @ts-ignore
        let mat1 = mat.firstElementChild
        // @ts-ignore
        let mat2 = mat.lastElementChild
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
  }
  search(rw: any){
    let i = ""
    if (rw == 1){
      i = 'd-flex'
      return  i;
    }
    else {
      i = 'd-none'
      return i;
    }
  }
  listen() {
    let label = document.getElementById('label');
    let div = document.querySelector('.row1-div2-c')
    // @ts-ignore
    div.classList.add('click')
    let input = document.querySelector('.saisissez')
    // @ts-ignore
    if (input.value == "") {
      let c = 0;
      const set = setInterval(
        () => {
          // @ts-ignore
          input.classList.add('erreur')
          c++;
          if (c == 10) {
            clearInterval(set)
            // @ts-ignore
            input.classList.remove('erreur')
            // @ts-ignore
            div.classList.remove('click')
          }
        }, 100
      )
    }
  }

  load(){
    let overflow = document.getElementById('overflow')
    // @ts-ignore
    child = overflow.lastElementChild
    // @ts-ignore
    chil = child.lastElementChild
    // @ts-ignore
    chil.classList.add('bg-dark')
  }
}
