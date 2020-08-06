import { Component, OnInit } from '@angular/core';
import { PostService } from '../../services/post.service';

@Component({
  selector: 'app-cardboot',
  templateUrl: './cardboot.component.html',
  styleUrls: ['./cardboot.component.scss']
})
export class CardbootComponent implements OnInit {

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
