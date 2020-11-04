import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { PostComponent } from './post/post.component';



@NgModule({
  declarations: [
    HeaderComponent,
    PostComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports:[
    HeaderComponent,
    PostComponent
  ]
})
export class ComponentsModule { }