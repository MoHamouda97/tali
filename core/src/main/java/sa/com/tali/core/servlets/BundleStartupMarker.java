package sa.com.tali.core.servlets;

import org.osgi.service.component.annotations.Component;

@Component(immediate = true)
public class BundleStartupMarker {
    public BundleStartupMarker() {
        System.out.println("Tali core bundle started!");
    }
}