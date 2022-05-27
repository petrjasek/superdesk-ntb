import {startApp} from 'superdesk-core/scripts/index';
import './ntb/styles.css';

const planningConfiguration = {
    assignmentsTopBarWidget: true,
};

setTimeout(() => {
    startApp(
        [
            {
                id: 'auto-tagging-widget',
                load: () => import('./ntb/extensions/auto-tagging-widget'),
            },
            {
                id: 'planning-extension',
                load: () => import('superdesk-planning/client/planning-extension'),
                configuration: planningConfiguration,
            },
        ],
        {},
    );
});

export default angular.module('ntb', [])
    .run(['$templateCache', ($templateCache) => {
        // replace core login template with custom
        $templateCache.put(
            'scripts/core/auth/login-modal.html',
            require('./ntb/views/login-modal.html'),
        );
    }]);
