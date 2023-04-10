import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnimationComponent } from './animation/animation.component';
import { AuthenticationComponent } from './authentication/authentication.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { DataDirectiveComponent } from './data-directive/data-directive.component';
import { DatabaseComponent } from './database/database.component';
import { ParentComponent } from './parent/parent.component';
import { PipeComponent } from './pipe/pipe.component';
import { PostsComponent } from './posts/posts.component';
import { ReactiveformComponent } from './reactiveform/reactiveform.component';
import { PrimaryComponent } from './routing/primary/primary.component';
import { RoutingComponent } from './routing/routing.component';
import { SocialComponent } from './routing/social/social.component';
import { SubjectComponent } from './subject/subject.component';

const routes: Routes = [
  { path: "data-binding", component: DataBindingComponent},
  { path: "directive", component: DataDirectiveComponent},
  { path: "", redirectTo: "data-binding", pathMatch: "full"},
  { path: "routing", component: RoutingComponent, children: [
    {path: "primary", component: PrimaryComponent},
    {path: "social", component: SocialComponent},
    {path: "social/:id", component: SocialComponent},
    {path: "", redirectTo: "primary", pathMatch: "full"}
  ]},
  { path: "pipe", component: PipeComponent},
  { path: "animation", component: AnimationComponent},
  { path: "reactiveform", component: ReactiveformComponent},
  { path: "http", component: PostsComponent},
  { path: "subject", component: SubjectComponent},
  { path: "parent", component: ParentComponent},
  { path: "auth", component: AuthenticationComponent},
  { path: "database", component: DatabaseComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
