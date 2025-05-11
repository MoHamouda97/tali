package sa.com.tali.core.servlets;

import org.osgi.framework.BundleActivator;
import org.osgi.framework.BundleContext;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class TaliCoreActivator implements BundleActivator {

    private static final Logger log = LoggerFactory.getLogger(TaliCoreActivator.class);

    @Override
    public void start(BundleContext context) throws Exception {
        log.info("Tali Core Bundle Started!");
        // Add any initialization logic here, like registering OSGi services
    }

    @Override
    public void stop(BundleContext context) throws Exception {
        log.info("Tali Core Bundle Stopped!");
        // Add any cleanup logic here, like unregistering services
    }
}