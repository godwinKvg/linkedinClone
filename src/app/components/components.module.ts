import { PipeModule } from './../pipes/pipe.module';
import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { PostComponent } from './post/post.component';
import { ProfileComponent } from './profile/profile.component';



@NgModule({
  declarations: [
    HeaderComponent,
    PostComponent,
    ProfileComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    PipeModule
  ],
  exports: [
    HeaderComponent,
    PostComponent
  ]
})
export class ComponentsModule { }
