// import '../css/app.css';

import { createInertiaApp } from '@inertiajs/react';
import { IonApp, setupIonicReact } from '@ionic/react';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { initializeTheme } from './hooks/use-appearance';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/display.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/padding.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';

/**
 * Ionic Dark Mode
 * -----------------------------------------------------
 * For more info, please refer to:
 * https://ionicframework.com/docs/theming/dark-mode
 */

/* @import '@ionic/react/css/palettes/dark.always.css'; */
/* @import '@ionic/react/css/palettes/dark.class.css'; */
import '@ionic/react/css/palettes/dark.system.css';

/* Theme variables */
import '../css/theme-variables.css';

/**
 * Ionic components https://ionicframework.com/docs/components
 * Ionic css utils https://ionicframework.com/docs/layout/css-utilities
 */

const appName = import.meta.env.VITE_APP_NAME || 'Laravel';

setupIonicReact({
    mode: 'ios',
    backButtonDefaultHref: '/',
    backButtonText: ''
});

createInertiaApp({
    title: (title) => (title ? `${title} - ${appName}` : appName),
    resolve: (name) =>
        resolvePageComponent(
            `./pages/${name}.tsx`,
            import.meta.glob('./pages/**/*.tsx'),
        ),
    setup({ el, App, props }) {
        const root = createRoot(el);

        root.render(
            <StrictMode>
                <IonApp>
                    <App {...props} />
                </IonApp>
            </StrictMode>,
        );
    },
    progress: {
        color: '#4B5563',
    },
});

// This will set light / dark mode on load...
initializeTheme();
