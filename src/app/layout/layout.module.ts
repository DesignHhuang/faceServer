import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { LayoutDefaultComponent } from './default/default.component';
import { HeaderComponent } from './default/header/header.component';
import { SidebarComponent } from './default/sidebar/sidebar.component';
import { HeaderSearchComponent } from './default/header/components/search.component';
import { HeaderNotifyComponent } from './default/header/components/notify.component';
import { HeaderTaskComponent } from './default/header/components/task.component';
import { HeaderIconComponent } from './default/header/components/icon.component';
import { HeaderFullScreenComponent } from './default/header/components/fullscreen.component';
import { HeaderI18nComponent } from './default/header/components/i18n.component';
import { HeaderStorageComponent } from './default/header/components/storage.component';
import { HeaderUserComponent } from './default/header/components/user.component';

const COMPONENTS = [
    LayoutDefaultComponent,
    HeaderComponent,
    SidebarComponent,
];

const HEADERCOMPONENTS = [
    HeaderSearchComponent,
    HeaderNotifyComponent,
    HeaderTaskComponent,
    HeaderIconComponent,
    HeaderFullScreenComponent,
    HeaderI18nComponent,
    HeaderStorageComponent,
    HeaderUserComponent,
];

@NgModule({
    imports: [
        SharedModule
    ],
    declarations: [LayoutDefaultComponent, HeaderComponent, SidebarComponent, ...HEADERCOMPONENTS],
    exports: [...COMPONENTS],
})
export class LayoutModule { }
