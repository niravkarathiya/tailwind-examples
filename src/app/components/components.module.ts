import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsRoutingModule } from './components-routing.module';
import { SpinAnimationComponent } from './spin-animation/spin-animation.component';
import { TransformComponent } from './transform/transform.component';


@NgModule({
  declarations: [
    SpinAnimationComponent,
    TransformComponent
  ],
  imports: [
    CommonModule,
    ComponentsRoutingModule
  ]
})
export class ComponentsModule { }
