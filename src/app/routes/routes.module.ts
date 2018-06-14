import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { RouteRoutingModule } from './routes-routing.module';
import { TestComponent } from './test/test.component';
import { HeroesComponent } from './heroes/heroes.component';

@NgModule({
    imports: [RouteRoutingModule, SharedModule],
    declarations: [TestComponent, HeroesComponent],
})
export class RoutesModule { }
