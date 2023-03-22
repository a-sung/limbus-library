import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import ReactGA from 'react-ga';

const RouteChangeTracker = () => {
  const location = useLocation();
  const [initialized, setInitialized] = useState(false);
  const TRACKING_ID = process.env.REACT_APP_GOOGLE_ANALYTICS_TRACKING_ID;

  useEffect(() => {
    ReactGA.initialize(TRACKING_ID);
    setInitialized(true);
  }, []);

  useEffect(() => {
    if (initialized) {
      // ReactGA.send({ hitType: 'pageview', page: location.pathname });
      ReactGA.pageview(location.pathname + location.search);
      console.log('ga');
    }
  }, [initialized, location]);
};

export default RouteChangeTracker;
