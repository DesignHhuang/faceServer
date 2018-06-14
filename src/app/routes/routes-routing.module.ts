import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TestComponent } from './test/test.component';
import { HeroesComponent } from './heroes/heroes.component';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { LayoutDefaultComponent } from '../layout/default/default.component';

const routes: Routes = [
    {
        path: '',
        component: LayoutDefaultComponent,
        children: [
            { path: '', redirectTo: 'test', pathMatch: 'full' },
            { path: 'test', component: TestComponent },
            { path: 'heroes', component: HeroesComponent },
        ],
    },
    /* { path: 'test', component: TestComponent },
    { path: 'heroes', component: HeroesComponent } */
];

@NgModule({
    imports: [RouterModule.forRoot(routes), NgZorroAntdModule],
    exports: [RouterModule],
})
export class RouteRoutingModule { }
