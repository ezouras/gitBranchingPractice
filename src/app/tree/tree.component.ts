import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tree',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.css']
})
export class TreeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    console.log("hi, im a message from br1 tree comonent - I was duplicaed from an old file")
  }


}
