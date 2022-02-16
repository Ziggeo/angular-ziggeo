(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('angular-ziggeo', ['exports', '@angular/core'], factory) :
    (global = global || self, factory(global['angular-ziggeo'] = {}, global.ng.core));
}(this, (function (exports, core) { 'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */
    /* global Reflect, Promise */

    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };

    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var __assign = function() {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };

    function __rest(s, e) {
        var t = {};
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
            t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                    t[p[i]] = s[p[i]];
            }
        return t;
    }

    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); }
    }

    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
        function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }

    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f) throw new TypeError("Generator is already executing.");
            while (_) try {
                if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
                if (y = 0, t) op = [op[0] & 2, t.value];
                switch (op[0]) {
                    case 0: case 1: t = op; break;
                    case 4: _.label++; return { value: op[1], done: false };
                    case 5: _.label++; y = op[1]; op = [0]; continue;
                    case 7: op = _.ops.pop(); _.trys.pop(); continue;
                    default:
                        if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                        if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                        if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                        if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                        if (t[2]) _.ops.pop();
                        _.trys.pop(); continue;
                }
                op = body.call(thisArg, _);
            } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
            if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
        }
    }

    function __exportStar(m, exports) {
        for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }

    function __values(o) {
        var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
        if (m) return m.call(o);
        if (o && typeof o.length === "number") return {
            next: function () {
                if (o && i >= o.length) o = void 0;
                return { value: o && o[i++], done: !o };
            }
        };
        throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }

    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m) return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
        }
        catch (error) { e = { error: error }; }
        finally {
            try {
                if (r && !r.done && (m = i["return"])) m.call(i);
            }
            finally { if (e) throw e.error; }
        }
        return ar;
    }

    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }

    function __spreadArrays() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                r[k] = a[j];
        return r;
    };

    function __await(v) {
        return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []), i, q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
        function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
        function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
        function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
        function fulfill(value) { resume("next", value); }
        function reject(value) { resume("throw", value); }
        function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
    }

    function __asyncDelegator(o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
        function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
    }

    function __asyncValues(o) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
        function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
        function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
    }

    function __makeTemplateObject(cooked, raw) {
        if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
        return cooked;
    };

    function __importStar(mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
        result.default = mod;
        return result;
    }

    function __importDefault(mod) {
        return (mod && mod.__esModule) ? mod : { default: mod };
    }

    function __classPrivateFieldGet(receiver, privateMap) {
        if (!privateMap.has(receiver)) {
            throw new TypeError("attempted to get private field on non-instance");
        }
        return privateMap.get(receiver);
    }

    function __classPrivateFieldSet(receiver, privateMap, value) {
        if (!privateMap.has(receiver)) {
            throw new TypeError("attempted to set private field on non-instance");
        }
        privateMap.set(receiver, value);
        return value;
    }

    var ZiggeoPlayerConfig = /** @class */ (function () {
        function ZiggeoPlayerConfig() {
            this.debug = false;
        }
        ZiggeoPlayerConfig.ɵprov = core["ɵɵdefineInjectable"]({ factory: function ZiggeoPlayerConfig_Factory() { return new ZiggeoPlayerConfig(); }, token: ZiggeoPlayerConfig, providedIn: "root" });
        ZiggeoPlayerConfig = __decorate([
            core.Injectable({ providedIn: 'root' })
        ], ZiggeoPlayerConfig);
        return ZiggeoPlayerConfig;
    }());

    var ZiggeoPlayerDirective = /** @class */ (function () {
        function ZiggeoPlayerDirective(element, renderer, ngZone, config) {
            this.element = element;
            this.renderer = renderer;
            this.ngZone = ngZone;
            this.config = config;
            this._application = null;
            this._appOptions = {};
            this._app_options = {};
            this._element = this.element.nativeElement;
        }
        ZiggeoPlayerDirective.prototype.ngDoCheck = function () {
            var e_1, _a;
            var _this = this;
            var apiKey = "" + this.apiKey;
            var options = this.options;
            if (apiKey && !this._application) {
                if (options) {
                    try {
                        for (var _b = __values(Object.entries(this.config)), _c = _b.next(); !_c.done; _c = _b.next()) {
                            var _d = __read(_c.value, 2), key = _d[0], value = _d[1];
                            if (options[key] !== undefined && typeof options[key] === typeof value) {
                                this._appOptions[key] = options[key];
                            }
                        }
                    }
                    catch (e_1_1) { e_1 = { error: e_1_1 }; }
                    finally {
                        try {
                            if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                        }
                        finally { if (e_1) throw e_1.error; }
                    }
                    if (options.l10n) {
                        ZiggeoApi.V2.Locale.setLocale(options.l10n);
                    }
                }
                this.ngZone.runOutsideAngular(function () {
                    _this._application = ZiggeoApi.V2.Application.instanceByToken(apiKey, _this._app_options);
                });
            }
        };
        ZiggeoPlayerDirective.prototype.ngAfterViewInit = function () {
            var _this = this;
            if (this._application) {
                this.ngZone.runOutsideAngular(function () {
                    // Prevent during every change detection run ngDoCheck method
                    _this.playerInstance = new ZiggeoApi.V2.Player({
                        element: _this._element,
                        attrs: _this.options
                    }, _this);
                    if (typeof _this.playerInstance.activate === 'function') {
                        _this.playerInstance.activate();
                    }
                    else {
                        console.warn('Issue with launching player with Angular');
                    }
                });
            }
        };
        ZiggeoPlayerDirective.prototype.ngOnDestroy = function () {
            if (this.playerInstance && typeof this.playerInstance.destroy === 'function') {
                this.playerInstance.destroy();
            }
        };
        ZiggeoPlayerDirective.ctorParameters = function () { return [
            { type: core.ElementRef },
            { type: core.Renderer2 },
            { type: core.NgZone },
            { type: ZiggeoPlayerConfig }
        ]; };
        __decorate([
            core.Input()
        ], ZiggeoPlayerDirective.prototype, "apiKey", void 0);
        __decorate([
            core.Input()
        ], ZiggeoPlayerDirective.prototype, "options", void 0);
        __decorate([
            core.Output()
        ], ZiggeoPlayerDirective.prototype, "playerInstance", void 0);
        ZiggeoPlayerDirective = __decorate([
            core.Directive({
                selector: 'ziggeoplayer, ziggeo-player[apiKey], ziggeo-player[options]'
            })
        ], ZiggeoPlayerDirective);
        return ZiggeoPlayerDirective;
    }());

    /**
     * ZiggeoPlayer
     */
    var ZiggeoPlayerComponent = /** @class */ (function () {
        function ZiggeoPlayerComponent(player) {
            this.player = player;
        }
        ZiggeoPlayerComponent.ctorParameters = function () { return [
            { type: ZiggeoPlayerDirective }
        ]; };
        ZiggeoPlayerComponent.ɵprov = core["ɵɵdefineInjectable"]({ factory: function ZiggeoPlayerComponent_Factory() { return new ZiggeoPlayerComponent(core["ɵɵinject"](ZiggeoPlayerDirective)); }, token: ZiggeoPlayerComponent, providedIn: "root" });
        ZiggeoPlayerComponent = __decorate([
            core.Injectable({ providedIn: 'root' }),
            core.Component({
                selector: 'ziggeo-player',
                template: "<div></div>"
            })
        ], ZiggeoPlayerComponent);
        return ZiggeoPlayerComponent;
    }());

    var ZiggeoPlayerModule = /** @class */ (function () {
        function ZiggeoPlayerModule() {
        }
        ZiggeoPlayerModule = __decorate([
            core.NgModule({
                declarations: [
                    ZiggeoPlayerComponent,
                    ZiggeoPlayerDirective
                ],
                exports: [
                    ZiggeoPlayerComponent,
                    ZiggeoPlayerDirective
                ],
                providers: []
            })
        ], ZiggeoPlayerModule);
        return ZiggeoPlayerModule;
    }());

    var ZiggeoRecorderConfig = /** @class */ (function () {
        function ZiggeoRecorderConfig() {
            this.webrtc_streaming = false;
            this.webrtc_streaming_if_necessary = false;
            this.webrtc_on_mobile = false;
            this.debug = false;
        }
        ZiggeoRecorderConfig.ɵprov = core["ɵɵdefineInjectable"]({ factory: function ZiggeoRecorderConfig_Factory() { return new ZiggeoRecorderConfig(); }, token: ZiggeoRecorderConfig, providedIn: "root" });
        ZiggeoRecorderConfig = __decorate([
            core.Injectable({ providedIn: 'root' })
        ], ZiggeoRecorderConfig);
        return ZiggeoRecorderConfig;
    }());

    var ZiggeoRecorderDirective = /** @class */ (function () {
        function ZiggeoRecorderDirective(element, renderer, ngZone, config) {
            this.element = element;
            this.renderer = renderer;
            this.ngZone = ngZone;
            this.config = config;
            this._application = null;
            this._appOptions = {};
            this.config = config;
            this._element = this.element.nativeElement;
        }
        ZiggeoRecorderDirective.prototype.ngDoCheck = function () {
            var e_1, _a;
            var _this = this;
            var apiKey = "" + this.apiKey;
            var options = this.options;
            if (apiKey && !this._application) {
                if (options) {
                    if (options.allowscreen) {
                        console.warn('Deprecated will be removed. Reason: Chrome supports screen recorder w/o plugins.');
                        this._appOptions = {
                            chrome_extension_id: options.chrome_extension_id || 'meoefjkcilgjlkibnjjlfdgphacbeglk',
                            chrome_extension_install_link: options
                                .chrome_extension_install_link || 'https://chrome.google.com/webstore/detail/meoefjkcilgjlkibnjjlfdgphacbeglk',
                            opera_extension_id: options.opera_extension_id || 'dnnolmnenehhgplebjhbcmfdbaabkepm',
                            opera_extension_install_link: options
                                .opera_extension_install_link || 'https://addons.opera.com/en/extensions/details/3d46d4c36fefe97e76622c54b2eb6ea1d5406767'
                        };
                    }
                    try {
                        for (var _b = __values(Object.entries(this.config)), _c = _b.next(); !_c.done; _c = _b.next()) {
                            var _d = __read(_c.value, 2), key = _d[0], value = _d[1];
                            if (options[key] !== undefined && typeof options[key] === typeof value) {
                                this._appOptions[key] = options[key];
                            }
                            else if (typeof this.config[key] !== 'undefined') {
                                // Set default values
                                this._appOptions[key] = this.config[key];
                            }
                        }
                    }
                    catch (e_1_1) { e_1 = { error: e_1_1 }; }
                    finally {
                        try {
                            if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                        }
                        finally { if (e_1) throw e_1.error; }
                    }
                    if (options.l10n) {
                        ZiggeoApi.V2.Locale.setLocale(options.l10n);
                    }
                }
                this.ngZone.runOutsideAngular(function () {
                    _this._application = ZiggeoApi.V2.Application.instanceByToken(apiKey, _this._appOptions);
                });
            }
        };
        ZiggeoRecorderDirective.prototype.ngAfterViewInit = function () {
            var _this = this;
            if (this._application) {
                this.ngZone.runOutsideAngular(function () {
                    // Prevent during every change detection run ngDoCheck method
                    _this.recorderInstance = new ZiggeoApi.V2.Recorder({
                        element: _this._element,
                        attrs: _this.options
                    }, _this);
                    if (typeof _this.recorderInstance.activate === 'function') {
                        _this.recorderInstance.activate();
                    }
                    else {
                        console.warn('Issue with launching recorder with Angular');
                    }
                });
            }
        };
        ZiggeoRecorderDirective.prototype.ngOnDestroy = function () {
            if (this.recorderInstance && typeof this.recorderInstance.destroy === 'function') {
                this.recorderInstance.destroy();
            }
        };
        ZiggeoRecorderDirective.ctorParameters = function () { return [
            { type: core.ElementRef },
            { type: core.Renderer2 },
            { type: core.NgZone },
            { type: ZiggeoRecorderConfig }
        ]; };
        __decorate([
            core.Input()
        ], ZiggeoRecorderDirective.prototype, "apiKey", void 0);
        __decorate([
            core.Input()
        ], ZiggeoRecorderDirective.prototype, "options", void 0);
        __decorate([
            core.Output()
        ], ZiggeoRecorderDirective.prototype, "recorderInstance", void 0);
        ZiggeoRecorderDirective = __decorate([
            core.Directive({
                exportAs: 'ziggeorecorder',
                selector: 'ziggeorecorder, ziggeo-recorder[apiKey], ziggeo-recorder[options]'
            })
        ], ZiggeoRecorderDirective);
        return ZiggeoRecorderDirective;
    }());

    /**
     * ZiggeoRecorder
     */
    var ZiggeoRecorderComponent = /** @class */ (function () {
        function ZiggeoRecorderComponent(recorder) {
            this.recorder = recorder;
        }
        ZiggeoRecorderComponent.ctorParameters = function () { return [
            { type: ZiggeoRecorderDirective }
        ]; };
        ZiggeoRecorderComponent.ɵprov = core["ɵɵdefineInjectable"]({ factory: function ZiggeoRecorderComponent_Factory() { return new ZiggeoRecorderComponent(core["ɵɵinject"](ZiggeoRecorderDirective)); }, token: ZiggeoRecorderComponent, providedIn: "root" });
        ZiggeoRecorderComponent = __decorate([
            core.Injectable({ providedIn: 'root' }),
            core.Component({
                selector: 'ziggeo-recorder',
                template: "<div #ziggeorecorder ></div>"
            })
        ], ZiggeoRecorderComponent);
        return ZiggeoRecorderComponent;
    }());

    var ZiggeoRecorderModule = /** @class */ (function () {
        function ZiggeoRecorderModule() {
        }
        ZiggeoRecorderModule = __decorate([
            core.NgModule({
                declarations: [
                    ZiggeoRecorderComponent,
                    ZiggeoRecorderDirective
                ],
                exports: [
                    ZiggeoRecorderComponent,
                    ZiggeoRecorderDirective
                ],
                providers: []
            })
        ], ZiggeoRecorderModule);
        return ZiggeoRecorderModule;
    }());

    var ZiggeoAudioPlayerConfig = /** @class */ (function () {
        function ZiggeoAudioPlayerConfig() {
            this.debug = false;
        }
        ZiggeoAudioPlayerConfig.ɵprov = core["ɵɵdefineInjectable"]({ factory: function ZiggeoAudioPlayerConfig_Factory() { return new ZiggeoAudioPlayerConfig(); }, token: ZiggeoAudioPlayerConfig, providedIn: "root" });
        ZiggeoAudioPlayerConfig = __decorate([
            core.Injectable({ providedIn: 'root' })
        ], ZiggeoAudioPlayerConfig);
        return ZiggeoAudioPlayerConfig;
    }());

    var ZiggeoAudioPlayerDirective = /** @class */ (function () {
        function ZiggeoAudioPlayerDirective(element, renderer, ngZone, config) {
            this.element = element;
            this.renderer = renderer;
            this.ngZone = ngZone;
            this.config = config;
            this._application = null;
            this._appOptions = {};
            this._app_options = {};
            this._element = this.element.nativeElement;
        }
        ZiggeoAudioPlayerDirective.prototype.ngDoCheck = function () {
            var e_1, _a;
            var _this = this;
            var apiKey = "" + this.apiKey;
            var options = this.options;
            if (apiKey && !this._application) {
                if (options) {
                    try {
                        for (var _b = __values(Object.entries(this.config)), _c = _b.next(); !_c.done; _c = _b.next()) {
                            var _d = __read(_c.value, 2), key = _d[0], value = _d[1];
                            if (options[key] !== undefined && typeof options[key] === typeof value) {
                                this._appOptions[key] = options[key];
                            }
                        }
                    }
                    catch (e_1_1) { e_1 = { error: e_1_1 }; }
                    finally {
                        try {
                            if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                        }
                        finally { if (e_1) throw e_1.error; }
                    }
                    if (options.l10n) {
                        ZiggeoApi.V2.Locale.setLocale(options.l10n);
                    }
                }
                this.ngZone.runOutsideAngular(function () {
                    _this._application = ZiggeoApi.V2.Application.instanceByToken(apiKey, _this._app_options);
                });
            }
        };
        ZiggeoAudioPlayerDirective.prototype.ngAfterViewInit = function () {
            var _this = this;
            if (this._application) {
                this.ngZone.runOutsideAngular(function () {
                    // Prevent during every change detection run ngDoCheck method
                    _this.audioPlayerInstance = new ZiggeoApi.V2.AudioPlayer({
                        element: _this._element,
                        attrs: _this.options
                    }, _this);
                    if (typeof _this.audioPlayerInstance.activate === 'function') {
                        _this.audioPlayerInstance.activate();
                    }
                    else {
                        console.warn('Issue with launching audio player with Angular');
                    }
                });
            }
        };
        ZiggeoAudioPlayerDirective.prototype.ngOnDestroy = function () {
            if (this.audioPlayerInstance && typeof this.audioPlayerInstance.destroy === 'function') {
                this.audioPlayerInstance.destroy();
            }
        };
        ZiggeoAudioPlayerDirective.ctorParameters = function () { return [
            { type: core.ElementRef },
            { type: core.Renderer2 },
            { type: core.NgZone },
            { type: ZiggeoAudioPlayerConfig }
        ]; };
        __decorate([
            core.Input()
        ], ZiggeoAudioPlayerDirective.prototype, "apiKey", void 0);
        __decorate([
            core.Input()
        ], ZiggeoAudioPlayerDirective.prototype, "options", void 0);
        __decorate([
            core.Output()
        ], ZiggeoAudioPlayerDirective.prototype, "audioPlayerInstance", void 0);
        ZiggeoAudioPlayerDirective = __decorate([
            core.Directive({
                selector: 'ziggeoaudioplayer, ziggeo-audio-player[apiKey], ziggeo-audio-player[options]'
            })
        ], ZiggeoAudioPlayerDirective);
        return ZiggeoAudioPlayerDirective;
    }());

    /**
     * ZiggeoAudioPlayer
     */
    var ZiggeoAudioPlayerComponent = /** @class */ (function () {
        function ZiggeoAudioPlayerComponent(audioPlayer) {
            this.audioPlayer = audioPlayer;
        }
        ZiggeoAudioPlayerComponent.ctorParameters = function () { return [
            { type: ZiggeoAudioPlayerDirective }
        ]; };
        ZiggeoAudioPlayerComponent.ɵprov = core["ɵɵdefineInjectable"]({ factory: function ZiggeoAudioPlayerComponent_Factory() { return new ZiggeoAudioPlayerComponent(core["ɵɵinject"](ZiggeoAudioPlayerDirective)); }, token: ZiggeoAudioPlayerComponent, providedIn: "root" });
        ZiggeoAudioPlayerComponent = __decorate([
            core.Injectable({ providedIn: 'root' }),
            core.Component({
                selector: 'ziggeo-audio-player',
                // TODO: check the same in player why #selector is missing
                template: "<div #ziggeoaudioplayer></div>"
            })
        ], ZiggeoAudioPlayerComponent);
        return ZiggeoAudioPlayerComponent;
    }());

    var ZiggeoAudioPlayerModule = /** @class */ (function () {
        function ZiggeoAudioPlayerModule() {
        }
        ZiggeoAudioPlayerModule = __decorate([
            core.NgModule({
                declarations: [
                    ZiggeoAudioPlayerComponent,
                    ZiggeoAudioPlayerDirective
                ],
                exports: [
                    ZiggeoAudioPlayerComponent,
                    ZiggeoAudioPlayerDirective
                ],
                providers: []
            })
        ], ZiggeoAudioPlayerModule);
        return ZiggeoAudioPlayerModule;
    }());

    var ZiggeoAudioRecorderConfig = /** @class */ (function () {
        function ZiggeoAudioRecorderConfig() {
            this.webrtc_streaming = false;
            this.webrtc_streaming_if_necessary = false;
            this.webrtc_on_mobile = false;
            this.debug = false;
        }
        ZiggeoAudioRecorderConfig.ɵprov = core["ɵɵdefineInjectable"]({ factory: function ZiggeoAudioRecorderConfig_Factory() { return new ZiggeoAudioRecorderConfig(); }, token: ZiggeoAudioRecorderConfig, providedIn: "root" });
        ZiggeoAudioRecorderConfig = __decorate([
            core.Injectable({ providedIn: 'root' })
        ], ZiggeoAudioRecorderConfig);
        return ZiggeoAudioRecorderConfig;
    }());

    var ZiggeoAudioRecorderDirective = /** @class */ (function () {
        function ZiggeoAudioRecorderDirective(element, renderer, ngZone, config) {
            this.element = element;
            this.renderer = renderer;
            this.ngZone = ngZone;
            this.config = config;
            this._application = null;
            this._appOptions = {};
            this.config = config;
            this._element = this.element.nativeElement;
        }
        ZiggeoAudioRecorderDirective.prototype.ngDoCheck = function () {
            var e_1, _a;
            var _this = this;
            var apiKey = "" + this.apiKey;
            var options = this.options;
            if (apiKey && !this._application) {
                if (options) {
                    try {
                        for (var _b = __values(Object.entries(this.config)), _c = _b.next(); !_c.done; _c = _b.next()) {
                            var _d = __read(_c.value, 2), key = _d[0], value = _d[1];
                            if (options[key] !== undefined && typeof options[key] === typeof value) {
                                this._appOptions[key] = options[key];
                            }
                            else if (typeof this.config[key] !== 'undefined') {
                                // Set default values
                                this._appOptions[key] = this.config[key];
                            }
                        }
                    }
                    catch (e_1_1) { e_1 = { error: e_1_1 }; }
                    finally {
                        try {
                            if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                        }
                        finally { if (e_1) throw e_1.error; }
                    }
                    if (options.l10n) {
                        ZiggeoApi.V2.Locale.setLocale(options.l10n);
                    }
                }
                this.ngZone.runOutsideAngular(function () {
                    _this._application = ZiggeoApi.V2.Application.instanceByToken(apiKey, _this._appOptions);
                });
            }
        };
        ZiggeoAudioRecorderDirective.prototype.ngAfterViewInit = function () {
            var _this = this;
            if (this._application) {
                this.ngZone.runOutsideAngular(function () {
                    // Prevent during every change detection run ngDoCheck method
                    _this.audioRecorderInstance = new ZiggeoApi.V2.AudioRecorder({
                        element: _this._element,
                        attrs: _this.options
                    }, _this);
                    if (typeof _this.audioRecorderInstance.activate === 'function') {
                        _this.audioRecorderInstance.activate();
                    }
                    else {
                        console.warn('Issue with launching audio recorder with Angular');
                    }
                });
            }
        };
        ZiggeoAudioRecorderDirective.prototype.ngOnDestroy = function () {
            if (this.audioRecorderInstance && typeof this.audioRecorderInstance.destroy === 'function') {
                this.audioRecorderInstance.destroy();
            }
        };
        ZiggeoAudioRecorderDirective.ctorParameters = function () { return [
            { type: core.ElementRef },
            { type: core.Renderer2 },
            { type: core.NgZone },
            { type: ZiggeoAudioRecorderConfig }
        ]; };
        __decorate([
            core.Input()
        ], ZiggeoAudioRecorderDirective.prototype, "apiKey", void 0);
        __decorate([
            core.Input()
        ], ZiggeoAudioRecorderDirective.prototype, "options", void 0);
        __decorate([
            core.Output()
        ], ZiggeoAudioRecorderDirective.prototype, "audioRecorderInstance", void 0);
        ZiggeoAudioRecorderDirective = __decorate([
            core.Directive({
                exportAs: 'ziggeoaudiorecorder',
                selector: 'ziggeoaudiorecorder, ziggeo-audio-recorder[apiKey], ziggeo-audio-recorder[options]'
            })
        ], ZiggeoAudioRecorderDirective);
        return ZiggeoAudioRecorderDirective;
    }());

    /**
     * ZiggeoRecorder
     */
    var ZiggeoAudioRecorderComponent = /** @class */ (function () {
        function ZiggeoAudioRecorderComponent(audioRecorder) {
            this.audioRecorder = audioRecorder;
        }
        ZiggeoAudioRecorderComponent.ctorParameters = function () { return [
            { type: ZiggeoAudioRecorderDirective }
        ]; };
        ZiggeoAudioRecorderComponent.ɵprov = core["ɵɵdefineInjectable"]({ factory: function ZiggeoAudioRecorderComponent_Factory() { return new ZiggeoAudioRecorderComponent(core["ɵɵinject"](ZiggeoAudioRecorderDirective)); }, token: ZiggeoAudioRecorderComponent, providedIn: "root" });
        ZiggeoAudioRecorderComponent = __decorate([
            core.Injectable({ providedIn: 'root' }),
            core.Component({
                selector: 'ziggeo-audio-recorder',
                template: "<div #ziggeoaudiorecorder ></div>"
            })
        ], ZiggeoAudioRecorderComponent);
        return ZiggeoAudioRecorderComponent;
    }());

    var ZiggeoAudioRecorderModule = /** @class */ (function () {
        function ZiggeoAudioRecorderModule() {
        }
        ZiggeoAudioRecorderModule = __decorate([
            core.NgModule({
                declarations: [
                    ZiggeoAudioRecorderComponent,
                    ZiggeoAudioRecorderDirective
                ],
                exports: [
                    ZiggeoAudioRecorderComponent,
                    ZiggeoAudioRecorderDirective
                ],
                providers: []
            })
        ], ZiggeoAudioRecorderModule);
        return ZiggeoAudioRecorderModule;
    }());

    var ZIGGEO_MODULES = [
        ZiggeoPlayerModule,
        ZiggeoRecorderModule,
        ZiggeoAudioPlayerModule,
        ZiggeoAudioRecorderModule,
    ];
    var ZiggeoModule = /** @class */ (function () {
        function ZiggeoModule() {
        }
        ZiggeoModule = __decorate([
            core.NgModule({ imports: ZIGGEO_MODULES, exports: ZIGGEO_MODULES })
        ], ZiggeoModule);
        return ZiggeoModule;
    }());

    exports.ZiggeoAudioPlayerComponent = ZiggeoAudioPlayerComponent;
    exports.ZiggeoAudioPlayerDirective = ZiggeoAudioPlayerDirective;
    exports.ZiggeoAudioPlayerModule = ZiggeoAudioPlayerModule;
    exports.ZiggeoAudioRecorderComponent = ZiggeoAudioRecorderComponent;
    exports.ZiggeoAudioRecorderDirective = ZiggeoAudioRecorderDirective;
    exports.ZiggeoAudioRecorderModule = ZiggeoAudioRecorderModule;
    exports.ZiggeoModule = ZiggeoModule;
    exports.ZiggeoPlayerComponent = ZiggeoPlayerComponent;
    exports.ZiggeoPlayerDirective = ZiggeoPlayerDirective;
    exports.ZiggeoPlayerModule = ZiggeoPlayerModule;
    exports.ZiggeoRecorderComponent = ZiggeoRecorderComponent;
    exports.ZiggeoRecorderDirective = ZiggeoRecorderDirective;
    exports.ZiggeoRecorderModule = ZiggeoRecorderModule;
    exports.ɵa = ZiggeoPlayerConfig;
    exports.ɵb = ZiggeoRecorderConfig;
    exports.ɵc = ZiggeoAudioPlayerConfig;
    exports.ɵd = ZiggeoAudioRecorderConfig;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=angular-ziggeo.umd.js.map
