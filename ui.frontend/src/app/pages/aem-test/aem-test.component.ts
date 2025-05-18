import { Component } from '@angular/core';
import { MapTo } from "@adobe/aem-angular-editable-components";

@Component({
  selector: 'app-aem-test',
  imports: [],
  templateUrl: './aem-test.component.html',
  styleUrl: './aem-test.component.css',
  standalone: true
})
export class AemTestComponent {

}
MapTo("tali/components/helloworld")(AemTestComponent)
