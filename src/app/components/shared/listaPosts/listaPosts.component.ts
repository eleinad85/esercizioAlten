import { Component, OnInit, input } from '@angular/core';
import { map, switchMap } from 'rxjs';
import { Post } from '../../../../models/post.interface';
import { User } from '../../../../models/user.interface';
import { PostService } from '../../../../services/post.service';
import { UsersService } from '../../../../services/users.service';
import {
  MatDialog,
  MatDialogTitle,
  MatDialogContent,
} from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { ModaleComponent } from '../modale/modale.component';

@Component({
  selector: 'app-listaPosts',
  templateUrl: './listaPosts.component.html',
  styleUrls: ['./listaPosts.component.css'],
  standalone: true,
  imports: [MatDialogTitle, MatDialogContent, MatButtonModule],
})

export class ListaPostsComponent implements OnInit {


  tipo = input<string>('')
  posts: Post[] = []
  users: User[] = []

  constructor(public postsService: PostService, public usersService: UsersService,
    public dialog: MatDialog) { }

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

          let posts = result.posts
          let users = result.users


          for (let i = 0; i < posts.length; i++) {
            let postUserId = posts[i].userId;

            for (let j = 0; j < users.length; j++) {
              let id = users[j].id;
              if (postUserId === id)
                posts[i].user = users[j]
            }
          }

          this.posts = posts

        }
      )

  }


  openDialog(enterAnimationDuration: string,
    exitAnimationDuration: string,
    post: Post,
  ): void {

    if (this.tipo() === 'M')
      this.dialog.open(ModaleComponent, {
        data: { post },
        width: '800px',
        enterAnimationDuration,
        exitAnimationDuration,
      });

  }
}
