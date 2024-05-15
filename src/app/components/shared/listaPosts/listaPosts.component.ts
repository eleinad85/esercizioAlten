import { NgFor, NgIf } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit, input, ViewChild, BootstrapOptions } from '@angular/core';
import { forkJoin, map, switchMap } from 'rxjs';
import { Post } from '../../../../models/post.interface';
import { User } from '../../../../models/user.interface';
import { PostService } from '../../../../services/post.service';
import { UsersService } from '../../../../services/users.service';

@Component({
  selector: 'app-listaPosts',
  templateUrl: './listaPosts.component.html',
  styleUrls: ['./listaPosts.component.css'],
  standalone: true,
  imports: [NgFor, NgIf],
})

export class ListaPostsComponent implements OnInit {

  @ViewChild('modalInfoVc') modalInfoVc: any;
  tipo = input<string>('')
  posts: Post[] = []
  users: User[] = []

  constructor(public postsService: PostService, public usersService: UsersService) { }

  ngOnInit() {
    this.postsService.getPosts()
      .pipe(
        switchMap(
          posts => this.usersService.getUsers()
            .pipe(
              map(users => ({
                posts, users
              }))
            )
        )
      )
      .subscribe(
        result => {
          for (let i = 0; i < result.posts.length; i++) {
            let postUserId = result.posts[i].userId;

            for (let j = 0; j < result.users.length; j++) {
              let id = result.users[j].id;
              if (postUserId == id)
                result.posts[i].user = result.users[j]

            }
          }
          this.posts = result.posts

        }
      )

  }

}
