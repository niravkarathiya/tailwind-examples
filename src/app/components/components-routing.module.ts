import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SpinAnimationComponent } from './spin-animation/spin-animation.component';
import { TransformComponent } from './transform/transform.component';
import { GridComponent } from './grid/grid.component';
import { AspectRatioComponent } from './aspect-ratio/aspect-ratio.component';

const routes: Routes = [
  { path: 'font', component: SpinAnimationComponent },
  { path: 'transform', component: TransformComponent },
  { path: 'grid', component: GridComponent },
  { path: 'aspect-ratio', component: AspectRatioComponent },
  { path: '', component: AspectRatioComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComponentsRoutingModule { }
