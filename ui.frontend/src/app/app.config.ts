import { provideHttpClient, withFetch } from "@angular/common/http";
import { ApplicationConfig, importProvidersFrom, provideExperimentalZonelessChangeDetection } from "@angular/core";
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { ModelManagerService } from "./components/model-manager.service";
import { APP_BASE_HREF } from "@angular/common";
import { AppRoutingModule } from "./app-routing.module";
import { AemModules } from "./core/aem-modules";
import { NavigationV1Component } from '@adobe/aem-core-components-angular-base/layout/navigation/v1';
import { AEMResponsiveGridComponent } from '@adobe/aem-angular-editable-components';
//import './components/import-components';
import './components/aem-components'

export const appConfig: ApplicationConfig = {
    providers: [
        provideExperimentalZonelessChangeDetection(),
        provideHttpClient(
            //withInterceptors([AuthInterceptor, SuccessInterceptor, ErrorInterceptor]),
            withFetch()
        ), 
        provideAnimationsAsync(),   
        importProvidersFrom(
            AEMResponsiveGridComponent,
            NavigationV1Component,
            ...AemModules,          
            AppRoutingModule, 
        ), 
        {
            provide: APP_BASE_HREF,
            useValue: '/'
        },
        ModelManagerService   
    ]
}