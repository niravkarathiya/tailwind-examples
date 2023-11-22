import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SpinAnimationComponent } from './spin-animation/spin-animation.component';
import { TransformComponent } from './transform/transform.component';

const routes: Routes = [
  { path: 'spin-animation', component: SpinAnimationComponent },
  { path: 'transform', component: TransformComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComponentsRoutingModule { }
