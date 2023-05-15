import {Component, OnInit} from '@angular/core';
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Chatbox';
  hover = 'nohover';
  clic = 'noclic';

  messages = [
    {message: "Hello!", class: "texte-du-chat-blue"},
    {message: "How are you?", class: "texte-du-chat-blue"},
    {message: "Please What is your name?", class: "texte-du-chat-blue"},
    {message: "Hey! Fine thank you", class: "texte-du-chat-gris"},
    {message: "I am Mbiamou Richy", class: "texte-du-chat-gris"},
    {message: "I am frontend developper and web integrator. I created beautifull and usefull website for you.", class: "texte-du-chat-gris"},
    {message: "Okay!", class: "texte-du-chat-blue"},
    {message: "How can i help you?", class: "texte-du-chat-gris"}
  ]

  onchange() {
    this.hover = 'hover';
  }
  onpaschange() {
    this.hover = 'nohover';
  }
  onclic() {
    this.clic = 'clic';
  }
  onnoclic() {
    this.clic = 'noclic';
  }

  scroll() {
    let overflow = document.getElementById("overflow") as HTMLDivElement
    let block = document.querySelector(".block-message") as HTMLDivElement
    let input = document.querySelector(".saisissez") as HTMLDivElement
    let y =  block.offsetHeight as number
    let count = overflow.scrollTop
    let set = setInterval(() =>{
      count++
      overflow.scrollTo(0, count)
      if(count == y){
        clearInterval(set)
      }
    }, 1)
    input.focus()
  }
  creat(form: NgForm) {
    const message = {message: form.value.message, class: "texte-du-chat-blue"}
    this.messages.push(message)
    const blagues = [{message: "Ahhhhh!!", class: "texte-du-chat-gris"},
      {message: "C'est une fausse chatbox!!", class: "texte-du-chat-gris"}]
    blagues.forEach(blague =>{
     let set = setInterval(() =>{
       this.messages.push(blague)
       clearInterval(set)
      }, 1000)
      }
    )

    form.reset()
    this.scroll()
  }

  listen() {
    let div = document.querySelector('.row1-div2-c') as HTMLElement
    div.classList.add('click')
    let input = document.querySelector('.saisissez') as HTMLInputElement;
    if (input.value == "") {
      let c = 0;
      const set = setInterval(
        () => {
          input.classList.add('erreur')
          c++;
          if (c == 10) {
            clearInterval(set)
            input.classList.remove('erreur')
            div.classList.remove('click')
          }
        }, 100
      )
    }
  }
}
