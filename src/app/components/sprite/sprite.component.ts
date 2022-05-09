import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-sprite',
  templateUrl: './sprite.component.html',
  styleUrls: ['./sprite.component.scss']
})
export class SpriteComponent implements OnInit {
  @Input() sprite: any

  constructor() { }

  ngOnInit(): void {
  }
}
