import webview from '@ohos.web.webview';
import { hilog } from '@kit.PerformanceAnalysisKit';

@Entry
@Component
struct IndexPage {
  @StorageLink('targetUrl') targetUrl: string = 'https://www.baidu.com/';// 替换为你的目标网址
  controller: webview.WebviewController = new webview.WebviewController();

  build() {
    Column() {
      Web({
        src: this.targetUrl,
        controller: this.controller
      })
        .width('100%')
        .height('100%')
        .domStorageAccess(true)
    }
    .width('100%')
    .height('100%')
  }

  aboutToAppear(): void {
    getContext(this).eventHub.on('get-current-url', (callback: (url: string) => void) => {
      hilog.info(1, 'sTag', '%{public}s', 'Got source targetUrl: ' + this.controller.getUrl());
      callback(this.controller.getUrl());
    })

    hilog.info(1, 'sTag', '%{public}s', 'aboutToAppear targetUrl: ' + this.targetUrl);
  }

  onBackPress(): boolean | void {
    this.controller.backward();
    return true;
  }

}