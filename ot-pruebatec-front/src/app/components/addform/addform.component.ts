import { Component, OnInit } from '@angular/core';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { NgForm } from '@angular/forms';
import { PostService } from '../../services/post.service';
import { Router } from '@angular/router';
import { FileItem } from '../../models/fileimg';
import { MainComponent } from '../main/main.component';
// import { CardbootComponent } from '../cardboot/cardboot.component';


declare var $: any;

@Component({
  selector: 'app-addform',
  templateUrl: './addform.component.html',
  styleUrls: ['./addform.component.scss']
})


export class AddformComponent implements OnInit {

  message: Array<any> = [];
  files: FileItem[] = [];
  data: any;

  constructor(

    private postService: PostService, 
    private router: Router,
    private notification: NzNotificationService,
    private main: MainComponent,
    // private cardboot: CardbootComponent,
    
    ) {}

  ngOnInit(): void {}

  addPost(addPost:NgForm, imageInput) {

    const postFormData = new FormData();
    postFormData.set('url', imageInput.files[0]);
    postFormData.set('title', addPost.value.title);
    postFormData.set('category', addPost.value.category);
    postFormData.set('description', addPost.value.description);
    
    this.postService.addPost(postFormData).subscribe(
     
      (res:HttpResponse<object>) => {
        // this.cardboot.getData();
        this.main.getData();
        this.notification.success(
          'Nuevo post ha sido creado',
          res['message']
          );
      },
      (error: HttpErrorResponse) => {
        this.notification.error(
          'Algo no va',
          error['error']
          );
      }
    
    );

  }
  
}