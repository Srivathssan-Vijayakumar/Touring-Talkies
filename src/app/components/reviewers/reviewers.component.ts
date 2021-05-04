import { Component, OnInit } from '@angular/core';
import { reviewers }from'../../reviewer-info/index';
@Component({
  selector: 'app-reviewers',
  templateUrl: './reviewers.component.html',
  styleUrls: ['./reviewers.component.css']
})
export class ReviewersComponent implements OnInit {

  reviewersList = reviewers;
  constructor() { }

  ngOnInit(): void {
  }

}
