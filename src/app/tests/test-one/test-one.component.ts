import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-one',
  templateUrl: './test-one.component.html',
  styleUrls: ['./test-one.component.css']
})
export class TestOneComponent implements OnInit {
  showSecret = false;
  log = [];

  constructor() {}

  ngOnInit() {}

  onToggleDetails() {
    this.showSecret = !this.showSecret;
    this.log.push(new Date());
  }
}
