import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsRoutingModule } from './components-routing.module';
import { SpinAnimationComponent } from './spin-animation/spin-animation.component';
import { TransformComponent } from './transform/transform.component';
import { GridComponent } from './grid/grid.component';
import { AspectRatioComponent } from './aspect-ratio/aspect-ratio.component';


@NgModule({
  declarations: [
    SpinAnimationComponent,
    TransformComponent,
    GridComponent,
    AspectRatioComponent
  ],
  imports: [
    CommonModule,
    ComponentsRoutingModule
  ]
})
export class ComponentsModule { }
