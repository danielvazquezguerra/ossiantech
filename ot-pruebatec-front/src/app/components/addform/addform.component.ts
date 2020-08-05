import { Component, OnInit } from '@angular/core';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { NgForm } from '@angular/forms';
import { PostService } from '../../services/post.service';
import { Router } from '@angular/router';
import { UploadFileComponent } from './upload.component'; 
declare var $: any;

@Component({
  selector: 'app-addform',
  templateUrl: './addform.component.html',
  styleUrls: ['./addform.component.scss']
})


export class AddformComponent implements OnInit {

  message: Array<any> = [];

  constructor(

    private postService: PostService, 
    private router: Router,
    private notification: NzNotificationService,
    
    ) {}

  ngOnInit(): void {}

  addPost(addForm:NgForm) {

    console.log(addForm);

    // this.postService.addData(addForm.value).subscribe(
    //   (res: HttpResponse<object>) => {
    //     this.notification.success(
    //       'Nuevo post ha sido creado',
    //       res['message']
    //       );
    //   },
    //   (error: HttpErrorResponse) => {
    //     this.notification.error(
    //       'Algo no va',
    //       error['error']
    //       );
    //   }
    // );
  }
}