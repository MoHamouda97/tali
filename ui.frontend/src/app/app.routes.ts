import { AemPageDataResolver } from "@adobe/aem-angular-editable-components";
import { Routes, UrlMatchResult, UrlSegment } from "@angular/router";
import { PageComponent } from "./components/page/page.component";


export function AemPageMatcher(url: UrlSegment[]): UrlMatchResult {
    if (url.length) {
      return {
        consumed: url,
        posParams: {
          path: url[url.length - 1]
        }
      };
    }
}

export const routes: Routes = [
  {
    matcher: AemPageMatcher,
    component: PageComponent,
    resolve: {
      path: AemPageDataResolver
    }
  }    
]