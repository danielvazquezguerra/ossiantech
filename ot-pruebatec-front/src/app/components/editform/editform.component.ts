import { Component, OnInit } from '@angular/core';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { NgForm } from '@angular/forms';
import { PostService } from '../../services/post.service';
import { Router } from '@angular/router';

declare var $: any;

@Component({
  selector: 'app-editform',
  templateUrl: './editform.component.html',
  styleUrls: ['./editform.component.scss']
})


export class EditFormComponent implements OnInit {

  message: Array<any> = [];
  id: Number;
  title: String;
  description: String;
  url: String;
  category: String;
  data: Array<any> = []

  constructor(

    private postService: PostService, 
    private router: Router,
    private notification: NzNotificationService,
    
    ) {}

  ngOnInit(): void {
    // this.fillForm();
    this.getById();
  }

  getUrl() {
    const actual = window.location + '';
    const split = actual.split('/');
    const id = Number(split[split.length - 1]);
    this.id = id;
    return id;
  }
  fillForm() {
    this.getUrl();
    this.postService.getById(this.id).subscribe((res: any) => {

      res.forEach((element) => {
        this.title = element.title;
        this.description = element.description;
        this.url = element.url;
        this.category = element.category;
      });
    });
  }
  updatePost(updateForm: NgForm) {
    this.postService.updatePost(this.id, updateForm.value).subscribe(
      (res:HttpResponse<object>) => {
        this.notification.success(
          'Post ha sido modificado',
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
  getById() {
    this.getUrl();
    this.postService.getById(this.id).subscribe((post:any)=>{
      this.data = post;
      console.log(post);
    })
  }
};
