import { NgModule } from '@angular/core';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AppLayoutModule } from './layout/app.layout.module';
import { BlRouteModule } from './bl/bl-route.module';
import { LoginRouteModule } from './login/login-route.module';
import { ApunteRouteModule } from './apunte/apunte-route.module';


@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        AppRoutingModule,
        AppLayoutModule,
        BlRouteModule,
        LoginRouteModule,
        ApunteRouteModule
    ],
    providers: [
        { provide: LocationStrategy, useClass: HashLocationStrategy },
        
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
