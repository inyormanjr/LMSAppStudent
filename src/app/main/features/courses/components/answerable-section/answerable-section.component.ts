import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-answerable-section',
  templateUrl: './answerable-section.component.html',
  styleUrls: ['./answerable-section.component.css'],
})
export class AnswerableSectionComponent implements OnInit{
  @Input() output: string = '';
  formattedOutput?: string;

  constructor() { this.formattedOutput = this.output.replace(
    '[q-blank]',
    '<textarea type="text"></textarea>'
  );
      
  }

  ngOnInit() {

  }
}
