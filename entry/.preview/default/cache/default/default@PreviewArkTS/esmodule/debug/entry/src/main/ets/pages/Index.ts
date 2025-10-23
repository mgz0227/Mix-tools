if (!("finalizeConstruction" in ViewPU.prototype)) {
    Reflect.set(ViewPU.prototype, "finalizeConstruction", () => { });
}
interface Index_Params {
    language?: string;
}
import { webController } from "@normalized:N&&&entry/src/main/ets/entryability/EntryAbility&";
class Index extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1, paramsLambda = undefined, extraInfo) {
        super(parent, __localStorage, elmtId, extraInfo);
        if (typeof paramsLambda === "function") {
            this.paramsGenerator_ = paramsLambda;
        }
        this.__language = this.createStorageProp('systemLanguage', '', "language");
        this.setInitiallyProvidedValue(params);
        this.finalizeConstruction();
    }
    setInitiallyProvidedValue(params: Index_Params) {
    }
    updateStateVars(params: Index_Params) {
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
        this.__language.purgeDependencyOnElmtId(rmElmtId);
    }
    aboutToBeDeleted() {
        this.__language.aboutToBeDeleted();
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    private __language: ObservedPropertyAbstractPU<string>;
    get language() {
        return this.__language.get();
    }
    set language(newValue: string) {
        this.__language.set(newValue);
    }
    initialRender() {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.debugLine("entry/src/main/ets/pages/Index.ets(24:5)", "entry");
            Column.width('100%');
            Column.height('100%');
            Column.backgroundColor('#F1F3F5');
            Column.expandSafeArea([SafeAreaType.SYSTEM]);
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Web.create({
                src: { "id": 0, "type": 30000, params: ['index.html'], "bundleName": "com.huawei.multiweb", "moduleName": "entry" },
                controller: webController
            });
            Web.debugLine("entry/src/main/ets/pages/Index.ets(25:7)", "entry");
            Web.expandSafeArea([SafeAreaType.SYSTEM]);
            Web.zoomAccess(false);
        }, Web);
        Column.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
    static getEntryName(): string {
        return "Index";
    }
}
registerNamedRoute(() => new Index(undefined, {}), "", { bundleName: "com.huawei.multiweb", moduleName: "entry", pagePath: "pages/Index", pageFullPath: "entry/src/main/ets/pages/Index", integratedHsp: "false", moduleType: "followWithHap" });
