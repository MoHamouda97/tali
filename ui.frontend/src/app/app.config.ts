import { provideHttpClient, withFetch } from "@angular/common/http";
import { ApplicationConfig, importProvidersFrom } from "@angular/core";
import { provideZoneChangeDetection, isDevMode, Provider } from '@angular/core';
import { provideRouter, withComponentInputBinding, withRouterConfig } from "@angular/router";
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { routes } from "./app.routes";
import { AemModules } from "./core/aem-modules";
import { AemResolvers } from "./core/aem.resolvers";
import { Pages } from "./pages/pages";

export const appConfig: ApplicationConfig = {
    providers: [
        provideZoneChangeDetection({ eventCoalescing: true }),
        provideRouter(routes, withComponentInputBinding()),
        provideHttpClient(
            //withInterceptors([AuthInterceptor, SuccessInterceptor, ErrorInterceptor]),
            withFetch()
        ), 
        provideAnimationsAsync(),  
        provideRouter(
            routes,
            withRouterConfig({ onSameUrlNavigation: 'reload' })
        ) as unknown as Provider,   
        importProvidersFrom(...AemModules, ...AemResolvers, ...Pages),         
    ]
}