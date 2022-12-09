/********************************************************************************
 * Copyright (C) 2022  All rights reserved.
 * SPDX-License-Identifier: MIT
 ********************************************************************************/

import * as codearts from '@codearts/plugin';
import { initNlsConfig, localize } from '@cloudide/nls';

/**
 * Plugin activation entry point
 */
export function start(context: codearts.ExtensionContext) {

    /**
     *  Initialize language settings.
     */
    initNlsConfig(context.extensionPath);

    /**
     * Register a command for the plugin.
     */
    context.subscriptions.push(
        codearts.commands.registerCommand('plugin.sayHello', () => {
            codearts.window.showInformationMessage(localize('plugin.hello'));
        })
    );
    /**
     * Register a menu on the right top of title part.
     * 'CustomRightSideMenubar' is a custom menu id.
     */
    codearts.window.registerMenu('CustomRightSideMenubar', {
        command: {
            id: 'plugin.sayHello',
            title: 'login',
            icon: {
                id: 'account'
            }
        }
    })

    /**
	 * Register a submenu on the right top of title part.
	 * 'CustomRightSideMenubar' is a custom menu id.
	 * if 'customSubmenu' is not registered before, it will be registered automatically.
	 * Then you should register a menu command into 'customSubmenu', otherwise submenu 'customSubmenu' will be empty.
	 */
    codearts.window.registerMenu('CustomRightSideMenubar', {
        submenu: 'customSubmenu',
        title: 'Submenu'
    });

    codearts.window.registerMenu('customSubmenu', {
        command: {
            id: 'plugin.sayHello',
            title: 'login'
        }
    });

    /**
     * Also you can register a submenu or menu to other parts.
     * You can find existed MenuId in README.
     */
    codearts.window.registerMenu('MenubarFileMenu', {
        submenu: 'customSubmenu',
        title: 'Submenu'
    });

    /**
     * It's supported to unregister menus at runtime.
     * Just pass a menu id, but you can't remove ids registered by core.
     * You will find menu inside of 'Submenu' removed in 5 seconds after activating.
     */
    setTimeout(() => {
        codearts.window.unregisterMenu('customSubmenu');
    }, 5000);
}

/**
 * The method that is automatically called when the plugin is stopped. 
 * You can add your own clean-up actions to this method.
 */
export function stop(context: codearts.ExtensionContext) {

}
