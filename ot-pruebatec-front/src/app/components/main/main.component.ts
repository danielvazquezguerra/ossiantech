import { Component, OnInit } from '@angular/core';
import { PostService } from '../../services/post.service';

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

    this.getData();
    
  }

  getData() {
    this.postService.getData().subscribe((res: any) => {
      this.data = res.posts;
      console.log(res.posts);
    
    });
  }
  deletePost(id) {
    this.postService.deletePost(id).subscribe(() => {
      this.getData();
    });
  }

}
