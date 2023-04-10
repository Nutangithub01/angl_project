import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { DataDirectiveComponent } from './data-directive/data-directive.component';
import { RoutingComponent } from './routing/routing.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { PipeComponent } from './pipe/pipe.component';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AnimationComponent } from './animation/animation.component';
import { ReactiveformComponent } from './reactiveform/reactiveform.component';
import { PrimaryComponent } from './routing/primary/primary.component';
import { SocialComponent } from './routing/social/social.component';
import { SqrtPipe } from './sqrt.pipe';
import { PostsComponent } from './posts/posts.component';
import { ApiService } from './api.service';
import { HttpClientModule } from '@angular/common/http';
import { SubjectComponent } from './subject/subject.component';
import { SendMessageComponent } from './subject/send-message/send-message.component';
import { ReceiveMessageComponent } from './subject/receive-message/receive-message.component';
import { SendDataComponent } from './subject/send-data/send-data.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './parent/child/child.component';

import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { environment } from 'src/environments/environment.prod';
import { AuthenticationComponent } from './authentication/authentication.component';
import { DatabaseComponent } from './database/database.component';
import { AuthService } from './authentication/auth.service';
import { FirebaseService } from './database/firebase.service';

@NgModule({
  declarations: [
    AppComponent,
    DataBindingComponent,
    DataDirectiveComponent,
    RoutingComponent,
    SidebarComponent,
    PipeComponent,
    AnimationComponent,
    ReactiveformComponent,
    PrimaryComponent,
    SocialComponent,
    SqrtPipe,
    PostsComponent,
    SubjectComponent,
    SendMessageComponent,
    ReceiveMessageComponent,
    SendDataComponent,
    ParentComponent,
    ChildComponent,
    AuthenticationComponent,
    DatabaseComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    AngularFireDatabaseModule
  ],
  providers: [
    ApiService,
    AuthService,
    FirebaseService
  ],
  bootstrap: [AppComponent]
  
})
export class AppModule { }
