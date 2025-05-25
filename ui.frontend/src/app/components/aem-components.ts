import { MapTo } from '@adobe/aem-angular-editable-components';
import { NavigationV1Component } from '@adobe/aem-core-components-angular-base/layout/navigation/v1';
import { AEMResponsiveGridComponent } from '@adobe/aem-angular-editable-components';

MapTo('wcm/foundation/components/responsivegrid')(AEMResponsiveGridComponent);
MapTo('tali/components/navigation')(NavigationV1Component);
