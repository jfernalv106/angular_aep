import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';


import { AppLayoutComponent } from "./layout/app.layout.component";

@NgModule({
    imports: [
        RouterModule.forRoot([
            {
                path: '', component: AppLayoutComponent,
                children: [
                   
                    { path: 'bl', loadChildren: () => import('./bl/bl.module').then(m => m.BlModule) },
                    { path: 'apunte', loadChildren: () => import('./apunte/apunte.module').then(m => m.ApunteModule) },
                  
                ]
            },
            { path: 'auth', loadChildren: () => import('./login/login.module').then(m => m.LoginModule) },
         
            // { path: 'notfound', component: NotfoundComponent },
          
        ], { scrollPositionRestoration: 'enabled', anchorScrolling: 'enabled', onSameUrlNavigation: 'reload' })
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
