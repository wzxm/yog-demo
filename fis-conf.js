var host = 'http://git.scm.ppmoney.com/';

fis.set('privateRepos', {
    'react': {
        'info': 'create a app',
        'config': {
            'type': 'github',
            'repos': 'hefangshi/yog2-react-redux-demo',
            'prompt': [{
                name: 'app_name',
                description: 'Enter your app name',
                type: 'string',
                required: true,
                'default': 'react'
            }],
            'roadmap': [{
                reg: '**',
                release: '/${app_name}/$&'
            }]
        }
    },
    'vueapp': {
        'info': 'create a app',
        'config': {
            'type': 'github',
            'repos': 'wzxm/yog2-vue2-template',
            'prompt': [{
                name: 'app_name',
                description: 'Enter your app name',
                type: 'string',
                required: true,
                'default': 'vue'
            }],
            'roadmap': [{
                reg: '**',
                release: '/${app_name}/$&'
            }]
        }
    },
    'wzapp': {
        'info': 'create a app',
        'config': {
            'type': 'github',
            'repos': 'wzxm/yog2-app-template',
            'prompt': [{
                name: 'app_name',
                description: 'Enter your app name',
                type: 'string',
                required: true,
                'default': 'home'
            }],
            'roadmap': [{
                reg: '**',
                release: '/${app_name}/$&'
            }]
        }
    },
    'ppapp': {
        'host': host,
        'info': 'create a app',
        'config': {
            'type': 'gitlab',
            'repos': 'yqf/PPyog2-app-template',
            'prompt': [{
                name: 'app_name',
                description: 'Enter your app name',
                type: 'string',
                required: true,
                'default': 'home'
            }],
            'roadmap': [{
                reg: '**',
                release: '/${app_name}/$&'
            }]
        }
    },
    'pppc': {
        'host': host,
        'info': 'create a app',
        'config': {
            'type': 'gitlab',
            'repos': 'yqf/PPyog2-pc-template',
            'prompt': [{
                name: 'app_name',
                description: 'Enter your app name',
                type: 'string',
                required: true,
                'default': 'home'
            }],
            'roadmap': [{
                reg: '**',
                release: '/${app_name}/$&'
            }]
        }
    },
    'ppproject': {
        'host': host,
        'info': 'create a base yog',
        'config': {
            'type': 'gitlab',
            'repos': 'yqf/PPyog2-framework-template',
            'prompt': [{
                name: 'project_name',
                description: 'Enter your project name',
                type: 'string',
                required: true,
                'default': 'yog'
            }],
            'roadmap': [{
                reg: '**',
                release: '/${project_name}/$&'
            }]
        }
    }
});