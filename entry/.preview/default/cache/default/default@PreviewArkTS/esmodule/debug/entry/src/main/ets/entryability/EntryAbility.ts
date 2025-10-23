import type AbilityConstant from "@ohos:app.ability.AbilityConstant";
import UIAbility from "@ohos:app.ability.UIAbility";
import type { Configuration as Configuration } from "@ohos:app.ability.Configuration";
import type Want from "@ohos:app.ability.Want";
import hilog from "@ohos:hilog";
import type window from "@ohos:window";
import type { BusinessError as BusinessError } from "@ohos:base";
import webview from "@ohos:web.webview";
export const webController = new webview.WebviewController();
export default class EntryAbility extends UIAbility {
    onCreate(want: Want, launchParam: AbilityConstant.LaunchParam): void {
        AppStorage.setOrCreate('systemLanguage', this.context.config.language);
        hilog.info(0x0000, 'testTag', '%{public}s', 'Ability onCreate');
    }
    onDestroy(): void {
        hilog.info(0x0000, 'testTag', '%{public}s', 'Ability onDestroy');
    }
    onWindowStageCreate(windowStage: window.WindowStage): void {
        // Main window is created, set main page for this ability
        hilog.info(0x0000, 'testTag', '%{public}s', 'Ability onWindowStageCreate');
        windowStage.getMainWindow().then((windowObj) => {
            windowObj.setWindowSystemBarProperties({
                statusBarContentColor: '#000000'
            });
        }).catch((error: BusinessError<void>) => {
            hilog.error(0x0000, 'testTag', 'Execution failed, code = %{public}d, message = %{public}s', error.code, error.message);
        });
        windowStage.loadContent('pages/Index', (err) => {
            if (err.code) {
                hilog.error(0x0000, 'testTag', 'Failed to load the content. Cause: %{public}s', JSON.stringify(err) ?? '');
                return;
            }
            hilog.info(0x0000, 'testTag', 'Succeeded in loading the content.');
        });
    }
    onWindowStageDestroy(): void {
        // Main window is destroyed, release UI related resources
        hilog.info(0x0000, 'testTag', '%{public}s', 'Ability onWindowStageDestroy');
    }
    onForeground(): void {
        // Ability has brought to foreground
        hilog.info(0x0000, 'testTag', '%{public}s', 'Ability onForeground');
    }
    onBackground(): void {
        // Ability has back to background
        hilog.info(0x0000, 'testTag', '%{public}s', 'Ability onBackground');
    }
    onConfigurationUpdate(newConfig: Configuration): void {
        if (AppStorage.get('systemLanguage') !== newConfig.language) {
            AppStorage.setOrCreate('systemLanguage', newConfig.language);
        }
        if (!newConfig.language) {
            return;
        }
        try {
            if (/zh/.test(newConfig.language)) {
                webController.loadUrl({ "id": 0, "type": 30000, params: ['index.html'], "bundleName": "com.huawei.multiweb", "moduleName": "entry" });
            }
            else {
                webController.loadUrl({ "id": 0, "type": 30000, params: ['index.html'], "bundleName": "com.huawei.multiweb", "moduleName": "entry" });
            }
        }
        catch (error) {
            hilog.error(0x0000, 'testTag', 'Execution failed, code = %{public}d, message = %{public}s', error.code, error.message);
        }
    }
}
