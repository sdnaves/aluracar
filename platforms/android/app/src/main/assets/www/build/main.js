webpackJsonp([5],{

/***/ 109:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_usuarios_service_usuarios_service__ = __webpack_require__(51);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginPage = /** @class */ (function () {
    function LoginPage(navCtrl, navParams, alertCtrl, usuariosService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.usuariosService = usuariosService;
        this.email = 'joao@alura.com.br';
        this.senha = 'alura123';
    }
    LoginPage.prototype.efetuaLogin = function () {
        var _this = this;
        console.log(this.email);
        console.log(this.senha);
        this.usuariosService.efetuaLogin(this.email, this.senha)
            .subscribe(function (usuario) {
            console.log(usuario);
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]);
        }, function () {
            _this.alertCtrl.create({
                title: 'Aviso',
                subTitle: 'Falha Login',
                buttons: [{ text: 'ok' }]
            }).present();
        });
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"C:\Users\silas.naves\Desktop\SDN\Pessoal\Ionic\aluracar\src\pages\login\login.html"*/'<ion-content scroll="false">\n\n  <div class="splash-bg"></div>\n\n  <div class="splash-info">\n\n    <div class="splash-logo"></div>\n\n    <div class="splash-intro">Aluracar</div>\n\n  </div>\n\n  <div padding>\n\n    <form (ngSubmit)="efetuaLogin()">\n\n      <ion-item>\n\n        <ion-label stacked>Email</ion-label>\n\n        <ion-input [(ngModel)]="email" name="email" type="text"></ion-input>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-label stacked>Senha</ion-label>\n\n        <ion-input [(ngModel)]="senha" name="senha" type="password"></ion-input>\n\n      </ion-item>\n\n      <button ion-button block type="submit" class="login">Entrar</button>\n\n    </form>\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\silas.naves\Desktop\SDN\Pessoal\Ionic\aluracar\src\pages\login\login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_usuarios_service_usuarios_service__["a" /* UsuariosServiceProvider */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 119:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 119;

/***/ }),

/***/ 162:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/cadastro/cadastro.module": [
		303,
		4
	],
	"../pages/escolha/escolha.module": [
		304,
		3
	],
	"../pages/lista-agendamentos/lista-agendamentos.module": [
		305,
		2
	],
	"../pages/login/login.module": [
		306,
		1
	],
	"../pages/perfil/perfil.module": [
		307,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 162;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 163:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CarrosServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__api_service_api_service__ = __webpack_require__(49);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CarrosServiceProvider = /** @class */ (function () {
    function CarrosServiceProvider(http, api) {
        this.http = http;
        this.api = api;
        this.url = this.api.url;
    }
    CarrosServiceProvider.prototype.lista = function () {
        return this.http.get(this.url + '/carro/listaTodos');
    };
    CarrosServiceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_2__api_service_api_service__["a" /* ApiServiceProvider */]])
    ], CarrosServiceProvider);
    return CarrosServiceProvider;
}());

//# sourceMappingURL=carros-service.js.map

/***/ }),

/***/ 209:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CadastroPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_agendamentos_service_agendamentos_service__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_agendamento_dao_agendamento_dao__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_vibration__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_date_picker__ = __webpack_require__(167);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var CadastroPage = /** @class */ (function () {
    function CadastroPage(navCtrl, navParams, alertCtrl, agendamentoService, vibration, datePicker, agendamentoDao) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.agendamentoService = agendamentoService;
        this.vibration = vibration;
        this.datePicker = datePicker;
        this.agendamentoDao = agendamentoDao;
        this.nome = "";
        this.endereco = "";
        this.email = "";
        this.data = new Date().toISOString();
        this.carro = this.navParams.get('carroSelecionado');
        this.precoTotal = this.navParams.get('precoTotal');
    }
    CadastroPage.prototype.selecionaData = function () {
        var _this = this;
        this.datePicker.show({
            date: new Date(),
            mode: 'date'
        }).then(function (data) { return _this.data = data.toISOString(); });
    };
    CadastroPage.prototype.agenda = function () {
        var _this = this;
        if (!this.nome || !this.endereco || !this.email) {
            this.vibration.vibrate(500);
            this.alertCtrl.create({
                title: "Aviso",
                subTitle: "Preenha todos os campos",
                buttons: [
                    { text: 'ok' }
                ]
            }).present();
            return;
        }
        var agendamento = {
            nomeCliente: this.nome,
            enderecoCliente: this.endereco,
            emailCliente: this.email,
            modeloCarro: this.carro.nome,
            precoTotal: this.precoTotal,
            data: this.data,
            confirmado: false,
            enviado: false
        };
        this.alerta = this.alertCtrl.create({
            title: "Aviso",
            buttons: [
                {
                    text: "ok",
                    handler: function () { _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */]); }
                }
            ]
        });
        var mensagem = "";
        this.agendamentoDao
            .isDuplicado(agendamento)
            .mergeMap(function (duplicado) {
            if (duplicado) {
                throw new Error('Agendamento Existente!');
            }
            return _this.agendamentoService.agenda(agendamento);
        })
            .mergeMap(function (valor) {
            var observable = _this.agendamentoDao.salva(agendamento);
            if (valor instanceof Error) {
                throw valor;
            }
            return observable;
        })
            .finally(function () {
            _this.alerta.setSubTitle(mensagem);
            _this.alerta.present();
        })
            .subscribe(function () { mensagem = "Agendado com Sucesso!"; }, function (erro) { mensagem = erro.message; });
    };
    CadastroPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-cadastro',template:/*ion-inline-start:"C:\Users\silas.naves\Desktop\SDN\Pessoal\Ionic\aluracar\src\pages\cadastro\cadastro.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>Cadastro</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <h2>{{ carro.nome }}</h2>\n\n  <p>R$ {{ precoTotal }}</p>\n\n\n\n  <form (ngSubmit)="agenda()" #formulario="ngForm">\n\n    <ion-item>\n\n      <ion-label stacked>Nome:</ion-label>\n\n      <ion-input [(ngModel)]="nome" name="nome"></ion-input>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n        <ion-label stacked>Endereço:</ion-label>\n\n        <ion-input [(ngModel)]="endereco" name="endereco"></ion-input>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n        <ion-label stacked>Email:</ion-label>\n\n        <ion-input [(ngModel)]="email" name="email"></ion-input>\n\n    </ion-item>\n\n\n\n    <ion-item (click)="selecionaData()">\n\n        <ion-label stacked>Data:</ion-label>\n\n        <ion-datetime disabled="true" [(ngModel)]="data" name="data" displayFormat="DD/MM/YY"></ion-datetime>\n\n    </ion-item>\n\n  </form>\n\n\n\n  <ion-fab right top edge>\n\n      <button ion-fab (click)="formulario.ngSubmit.emit()">\n\n        <ion-icon name="send"></ion-icon>\n\n      </button>\n\n  </ion-fab>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\silas.naves\Desktop\SDN\Pessoal\Ionic\aluracar\src\pages\cadastro\cadastro.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_agendamentos_service_agendamentos_service__["a" /* AgendamentosServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_vibration__["a" /* Vibration */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_date_picker__["a" /* DatePicker */],
            __WEBPACK_IMPORTED_MODULE_4__providers_agendamento_dao_agendamento_dao__["a" /* AgendamentoDaoProvider */]])
    ], CadastroPage);
    return CadastroPage;
}());

//# sourceMappingURL=cadastro.js.map

/***/ }),

/***/ 210:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EscolhaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cadastro_cadastro__ = __webpack_require__(209);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EscolhaPage = /** @class */ (function () {
    function EscolhaPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.carro = this.navParams.get('carroSelecionado');
        this._precoTotal = this.carro.preco;
        this.acessorios = [
            { nome: 'Freio ABS', preco: 800 },
            { nome: 'Ar-Condicionado', preco: 1000 },
            { nome: 'MP3 Player', preco: 500 }
        ];
    }
    EscolhaPage.prototype.atualizaTotal = function (ativado, acessorio) {
        ativado ? this._precoTotal += acessorio.preco : this._precoTotal -= acessorio.preco;
    };
    EscolhaPage.prototype.avancaCadastro = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__cadastro_cadastro__["a" /* CadastroPage */].name, {
            carroSelecionado: this.carro,
            precoTotal: this._precoTotal
        });
    };
    Object.defineProperty(EscolhaPage.prototype, "precoTotal", {
        get: function () {
            return this._precoTotal;
        },
        enumerable: true,
        configurable: true
    });
    EscolhaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-escolha',template:/*ion-inline-start:"C:\Users\silas.naves\Desktop\SDN\Pessoal\Ionic\aluracar\src\pages\escolha\escolha.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>Escolha</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n  <ion-slides pager="true">\n\n    <ion-slide *ngFor="let foto of carro.fotos">\n\n      <img src="{{foto}}" />\n\n    </ion-slide>\n\n  </ion-slides>\n\n\n\n  <ion-item-group>\n\n    <ion-item-divider color="light">\n\n      <ion-icon name="car"></ion-icon>\n\n      VEÍCULO\n\n    </ion-item-divider>\n\n    <ion-item>{{carro.nome}}</ion-item>\n\n    <ion-item>R$ {{carro.preco}}</ion-item>\n\n  </ion-item-group>\n\n\n\n  <ion-item-group>\n\n    <ion-item-divider color="light">\n\n      <ion-icon name="options"></ion-icon>\n\n      ACESSÓRIOS\n\n    </ion-item-divider>\n\n    <ion-item *ngFor="let acessorio of acessorios">\n\n      <ion-label>\n\n        <h2>{{ acessorio.nome }}</h2>\n\n        <h4>R$ {{ acessorio.preco }}</h4>\n\n      </ion-label>\n\n      <ion-toggle #toggle color="secondary"\n\n        (ionChange)="atualizaTotal(toggle.checked, acessorio)"></ion-toggle>\n\n    </ion-item>\n\n  </ion-item-group>\n\n\n\n  <ion-item-divider color="light">\n\n    <span item-right>TOTAL: R$ {{ precoTotal }}</span>\n\n  </ion-item-divider>\n\n\n\n  <ion-fab right top edge>\n\n    <button ion-fab (click)="avancaCadastro()">\n\n      <ion-icon name="arrow-dropright"></ion-icon>\n\n    </button>\n\n  </ion-fab>\n\n  \n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\silas.naves\Desktop\SDN\Pessoal\Ionic\aluracar\src\pages\escolha\escolha.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], EscolhaPage);
    return EscolhaPage;
}());

//# sourceMappingURL=escolha.js.map

/***/ }),

/***/ 211:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListaAgendamentosPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_agendamento_dao_agendamento_dao__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_agendamentos_service_agendamentos_service__ = __webpack_require__(83);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ListaAgendamentosPage = /** @class */ (function () {
    function ListaAgendamentosPage(navCtrl, navParams, alertCtrl, agendamentoService, agendamentoDao) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.agendamentoService = agendamentoService;
        this.agendamentoDao = agendamentoDao;
        this.agendamentos = [];
    }
    ListaAgendamentosPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.agendamentoDao.listaTodos()
            .subscribe(function (agendamentos) {
            _this.agendamentos = agendamentos;
        });
    };
    ListaAgendamentosPage.prototype.reenvia = function (agendamento) {
        var _this = this;
        this.alerta = this.alertCtrl.create({
            title: "Aviso",
            buttons: [{ text: "ok" }]
        });
        var mensagem = "";
        this.agendamentoService.agenda(agendamento)
            .mergeMap(function (valor) {
            var observable = _this.agendamentoDao.salva(agendamento);
            if (valor instanceof Error) {
                throw valor;
            }
            return observable;
        })
            .finally(function () {
            _this.alerta.setSubTitle(mensagem);
            _this.alerta.present();
        })
            .subscribe(function () { mensagem = "Agendamento reenviado com Sucesso!"; }, function (erro) { mensagem = erro.message; });
    };
    ListaAgendamentosPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-lista-agendamentos',template:/*ion-inline-start:"C:\Users\silas.naves\Desktop\SDN\Pessoal\Ionic\aluracar\src\pages\lista-agendamentos\lista-agendamentos.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>Agendamentos</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <ion-list>\n\n    <ion-item [class.falha]="!agendamento.enviado" *ngFor="let agendamento of agendamentos">\n\n      {{ agendamento.nomeCliente }} - {{ agendamento.modeloCarro }}\n\n      <button item-end ion-button icon-only clear\n\n          *ngIf="!agendamento.enviado"\n\n          (click)="reenvia(agendamento)">\n\n        <ion-icon name="refresh"></ion-icon>\n\n      </button>\n\n    </ion-item>\n\n  </ion-list>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\silas.naves\Desktop\SDN\Pessoal\Ionic\aluracar\src\pages\lista-agendamentos\lista-agendamentos.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_agendamentos_service_agendamentos_service__["a" /* AgendamentosServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_2__providers_agendamento_dao_agendamento_dao__["a" /* AgendamentoDaoProvider */]])
    ], ListaAgendamentosPage);
    return ListaAgendamentosPage;
}());

//# sourceMappingURL=lista-agendamentos.js.map

/***/ }),

/***/ 212:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PerfilPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_usuarios_service_usuarios_service__ = __webpack_require__(51);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PerfilPage = /** @class */ (function () {
    function PerfilPage(navCtrl, navParams, usuariosService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.usuariosService = usuariosService;
    }
    Object.defineProperty(PerfilPage.prototype, "usuarioLogado", {
        get: function () {
            return this.usuariosService.getUsuarioLogado();
        },
        enumerable: true,
        configurable: true
    });
    PerfilPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-perfil',template:/*ion-inline-start:"C:\Users\silas.naves\Desktop\SDN\Pessoal\Ionic\aluracar\src\pages\perfil\perfil.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>Perfil</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n  <ion-item no-lines>\n\n    <div class="avatar-wrapper">\n\n      <ion-avatar>\n\n        <img src="assets/imgs/avatar-padrao.jpg">\n\n        </ion-avatar>\n\n      <button class="btn-tirar-foto" ion-button icon-only round>\n\n        <ion-icon name="camera"></ion-icon>\n\n      </button>\n\n    </div>\n\n  </ion-item>\n\n  <ion-card>\n\n    <ion-item>\n\n      <ion-icon name="contact" item-left></ion-icon>\n\n      {{ usuarioLogado.nome }}\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-icon name="calendar" item-left></ion-icon>\n\n      <p>{{ usuarioLogado.dataNascimento }}</p>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-icon name="at" item-left></ion-icon>\n\n      <p>{{ usuarioLogado.email }}</p>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-icon name="call" item-left></ion-icon>\n\n      <p>{{ usuarioLogado.telefone }}</p>\n\n    </ion-item>\n\n  </ion-card>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\silas.naves\Desktop\SDN\Pessoal\Ionic\aluracar\src\pages\perfil\perfil.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_usuarios_service_usuarios_service__["a" /* UsuariosServiceProvider */]])
    ], PerfilPage);
    return PerfilPage;
}());

//# sourceMappingURL=perfil.js.map

/***/ }),

/***/ 213:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(234);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 234:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(289);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_common_http__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_carros_service_carros_service__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_agendamentos_service_agendamentos_service__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_agendamento_dao_agendamento_dao__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_storage__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_rxjs_add_operator_finally__ = __webpack_require__(290);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_rxjs_add_operator_finally___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_rxjs_add_operator_finally__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_rxjs_add_operator_do__ = __webpack_require__(293);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_rxjs_add_operator_do___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_rxjs_add_operator_do__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_rxjs_add_operator_mergeMap__ = __webpack_require__(296);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_rxjs_add_operator_mergeMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_rxjs_add_operator_mergeMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_rxjs_add_operator_catch__ = __webpack_require__(298);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_rxjs_add_observable_fromPromise__ = __webpack_require__(301);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_rxjs_add_observable_fromPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_16_rxjs_add_observable_fromPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_rxjs_add_observable_of__ = __webpack_require__(302);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_rxjs_add_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_17_rxjs_add_observable_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_login_login__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__providers_usuarios_service_usuarios_service__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__providers_api_service_api_service__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__ionic_native_vibration__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__ionic_native_date_picker__ = __webpack_require__(167);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_login_login__["a" /* LoginPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/cadastro/cadastro.module#CadastroPageModule', name: 'CadastroPage', segment: 'cadastro', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/escolha/escolha.module#EscolhaPageModule', name: 'EscolhaPage', segment: 'escolha', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/lista-agendamentos/lista-agendamentos.module#ListaAgendamentosPageModule', name: 'ListaAgendamentosPage', segment: 'lista-agendamentos', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/perfil/perfil.module#PerfilPageModule', name: 'PerfilPage', segment: 'perfil', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_11__ionic_storage__["a" /* IonicStorageModule */].forRoot({
                    name: 'aluracar',
                    storeName: 'agendamentos',
                    driverOrder: ['indexeddb']
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_login_login__["a" /* LoginPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_8__providers_carros_service_carros_service__["a" /* CarrosServiceProvider */],
                __WEBPACK_IMPORTED_MODULE_9__providers_agendamentos_service_agendamentos_service__["a" /* AgendamentosServiceProvider */],
                __WEBPACK_IMPORTED_MODULE_10__providers_agendamento_dao_agendamento_dao__["a" /* AgendamentoDaoProvider */],
                __WEBPACK_IMPORTED_MODULE_19__providers_usuarios_service_usuarios_service__["a" /* UsuariosServiceProvider */],
                __WEBPACK_IMPORTED_MODULE_20__providers_api_service_api_service__["a" /* ApiServiceProvider */],
                __WEBPACK_IMPORTED_MODULE_21__ionic_native_vibration__["a" /* Vibration */],
                __WEBPACK_IMPORTED_MODULE_22__ionic_native_date_picker__["a" /* DatePicker */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 289:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_lista_agendamentos_lista_agendamentos__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_login_login__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_perfil_perfil__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_usuarios_service_usuarios_service__ = __webpack_require__(51);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen, usuariosService) {
        this.usuariosService = usuariosService;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages_login_login__["a" /* LoginPage */];
        this.paginas = [
            { titulo: "Agendamentos", componente: __WEBPACK_IMPORTED_MODULE_4__pages_lista_agendamentos_lista_agendamentos__["a" /* ListaAgendamentosPage */].name, icone: 'calendar' },
            { titulo: "Perfil", componente: __WEBPACK_IMPORTED_MODULE_6__pages_perfil_perfil__["a" /* PerfilPage */].name, icone: 'person' }
        ];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp.prototype.irParaPagina = function (componente) {
        this.nav.push(componente);
    };
    Object.defineProperty(MyApp.prototype, "usuarioLogado", {
        get: function () {
            return this.usuariosService.getUsuarioLogado();
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'myapp',template:/*ion-inline-start:"C:\Users\silas.naves\Desktop\SDN\Pessoal\Ionic\aluracar\src\app\app.html"*/'<ion-split-pane>\n\n    <ion-menu [content]="conteudo" *ngIf="usuarioLogado">\n\n        <ion-content>\n\n            <ion-item id="cabecalho-menu" class="cabecalho-menu">\n\n                <div>\n\n                    <ion-avatar item-start>\n\n                        <img src="assets/imgs/avatar-padrao.jpg">\n\n                    </ion-avatar>\n\n                </div>\n\n                <h2>{{ usuarioLogado.nome }}</h2>\n\n                <p>{{ usuarioLogado.email }}</p>\n\n            </ion-item>\n\n            <ion-list>\n\n                <button ion-item menuClose *ngFor="let pagina of paginas"\n\n                    (click)="irParaPagina(pagina.componente)">\n\n                    <ion-icon [name]="pagina.icone" item-left></ion-icon>\n\n                    {{ pagina.titulo }}\n\n                </button>\n\n            </ion-list>\n\n        </ion-content>\n\n    </ion-menu>\n\n    <ion-nav [root]="rootPage" main #conteudo swipeBackEnabled="false"></ion-nav>            \n\n</ion-split-pane>\n\n'/*ion-inline-end:"C:\Users\silas.naves\Desktop\SDN\Pessoal\Ionic\aluracar\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_7__providers_usuarios_service_usuarios_service__["a" /* UsuariosServiceProvider */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 49:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApiServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ApiServiceProvider = /** @class */ (function () {
    function ApiServiceProvider(http) {
        this.http = http;
        this._url = 'http://localhost:7001/api';
    }
    Object.defineProperty(ApiServiceProvider.prototype, "url", {
        get: function () {
            return this._url;
        },
        enumerable: true,
        configurable: true
    });
    ApiServiceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], ApiServiceProvider);
    return ApiServiceProvider;
}());

//# sourceMappingURL=api-service.js.map

/***/ }),

/***/ 51:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsuariosServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__api_service_api_service__ = __webpack_require__(49);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UsuariosServiceProvider = /** @class */ (function () {
    function UsuariosServiceProvider(http, api) {
        this.http = http;
        this.api = api;
        this.url = this.api.url;
    }
    UsuariosServiceProvider.prototype.efetuaLogin = function (email, senha) {
        var _this = this;
        return this.http.post(this.url + '/login', { email: email, senha: senha })
            .do(function (usuario) { return _this.usuarioLogado = usuario; });
    };
    UsuariosServiceProvider.prototype.getUsuarioLogado = function () {
        return this.usuarioLogado;
    };
    UsuariosServiceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_2__api_service_api_service__["a" /* ApiServiceProvider */]])
    ], UsuariosServiceProvider);
    return UsuariosServiceProvider;
}());

//# sourceMappingURL=usuarios-service.js.map

/***/ }),

/***/ 83:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AgendamentosServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_observable_of__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_observable_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__api_service_api_service__ = __webpack_require__(49);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AgendamentosServiceProvider = /** @class */ (function () {
    function AgendamentosServiceProvider(http, api) {
        this.http = http;
        this.api = api;
        this.url = this.api.url;
    }
    AgendamentosServiceProvider.prototype.agenda = function (agendamento) {
        return this.http
            .post(this.url + "/agendamento/agenda", agendamento)
            .do(function () { return agendamento.enviado = true; })
            .catch(function (erro) { return Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_observable_of__["of"])(new Error("Falha ao Agendar!")); });
    };
    AgendamentosServiceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_3__api_service_api_service__["a" /* ApiServiceProvider */]])
    ], AgendamentosServiceProvider);
    return AgendamentosServiceProvider;
}());

//# sourceMappingURL=agendamentos-service.js.map

/***/ }),

/***/ 85:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_carros_service_carros_service__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__escolha_escolha__ = __webpack_require__(210);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, loadCtrl, alertCtrl, carrosServ) {
        this.navCtrl = navCtrl;
        this.loadCtrl = loadCtrl;
        this.alertCtrl = alertCtrl;
        this.carrosServ = carrosServ;
    }
    HomePage.prototype.ionViewDidLoad = function () {
        var _this = this;
        var loading = this.loadCtrl.create({
            content: 'Carregando Carros...'
        });
        loading.present();
        this.carrosServ.lista().subscribe(function (carros) {
            _this.carros = carros;
            loading.dismiss();
        }, function (erro) {
            console.log(erro);
            loading.dismiss();
            _this.alertCtrl.create({
                title: 'Falha na Conexão',
                subTitle: 'Não foi possivel carregar a lista de carros!',
                buttons: [
                    { text: 'ok' }
                ]
            }).present();
        });
    };
    HomePage.prototype.selecionaCarro = function (carro) {
        console.log(carro);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__escolha_escolha__["a" /* EscolhaPage */].name, {
            carroSelecionado: carro
        });
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Users\silas.naves\Desktop\SDN\Pessoal\Ionic\aluracar\src\pages\home\home.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>Home</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <ion-list>\n\n    <ion-item *ngFor="let carro of carros" (click)="selecionaCarro(carro)">\n\n      <h2>{{carro.nome}}</h2>\n\n      <p>R$ {{carro.preco}}</p>\n\n    </ion-item>\n\n  </ion-list>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\silas.naves\Desktop\SDN\Pessoal\Ionic\aluracar\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_carros_service_carros_service__["a" /* CarrosServiceProvider */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 86:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AgendamentoDaoProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(164);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AgendamentoDaoProvider = /** @class */ (function () {
    function AgendamentoDaoProvider(storage) {
        this.storage = storage;
    }
    AgendamentoDaoProvider.prototype.geraChave = function (agendamento) {
        return agendamento.emailCliente + agendamento.data.substr(0, 10);
    };
    AgendamentoDaoProvider.prototype.salva = function (agendamento) {
        var chave = this.geraChave(agendamento);
        var promise = this.storage.set(chave, agendamento);
        return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].fromPromise(promise);
    };
    AgendamentoDaoProvider.prototype.isDuplicado = function (agendamento) {
        var chave = this.geraChave(agendamento);
        var promise = this.storage
            .get(chave)
            .then(function (dado) { return dado ? true : false; });
        return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].fromPromise(promise);
    };
    AgendamentoDaoProvider.prototype.listaTodos = function () {
        var agendamentos = [];
        var promise = this.storage
            .forEach(function (agendamento) {
            agendamentos.push(agendamento);
        })
            .then(function () { return agendamentos; });
        return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].fromPromise(promise);
    };
    AgendamentoDaoProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */]])
    ], AgendamentoDaoProvider);
    return AgendamentoDaoProvider;
}());

//# sourceMappingURL=agendamento-dao.js.map

/***/ })

},[213]);
//# sourceMappingURL=main.js.map