import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { PostService } from '../../services/post.service';
import { NgForm } from '@angular/forms';
declare var $: any;



@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  data: Array<any> = [];
  dataId: Array<any> = [];
  id: Number;
  card: Object = {};
  message: Array<any>;

  constructor(private postService: PostService) { }

  ngOnInit(): void {

    this.saveData();
    
  }

  saveData() {
    this.postService.getData().subscribe((res: any) => {
      this.data = res.posts;
    
    });
  }
  deleteCard(id) {
    this.postService.deleteData(id).subscribe(() => {
      this.saveData();
    });
  }

}
