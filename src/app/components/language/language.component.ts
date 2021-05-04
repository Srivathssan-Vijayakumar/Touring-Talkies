import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-language',
  templateUrl: './language.component.html',
  styleUrls: ['./language.component.css']
})
export class LanguageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {    
  }
  tamil :boolean = true;
  hindi :boolean = true;
  malayalam :boolean = true;
  english :boolean = true;

  toggleDisplaytamil() {
    this.tamil = !this.tamil;
    this.hindi=true;
    this.malayalam=true;
    this.english=true;
    }
    toggleDisplayhindi() {
      this.tamil = true;
      this.hindi= !this.hindi;
    this.malayalam=true;
    this.english=true;
    }
    toggleDisplaymalayalam() {
      this.malayalam = !this.malayalam;
      this.hindi=true;
    this.tamil=true;
    this.english=true;
      }
      toggleDisplayenglish() {
        this.tamil = true;
        this.hindi=true;
    this.malayalam=true;
    this.english= !this.english;
        }
    
  
  

    
}
