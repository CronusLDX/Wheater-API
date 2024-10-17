"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
require("../src/styles.css");
class Tempo {
    constructor(apikey) {
        this.apikey = apikey;
        this.inicializar();
        this.cidade = document.querySelector(".cidade");
        this.temperatura = document.querySelector(".temp");
        this.umidade = document.querySelector(".umidade");
        this.tempo = document.querySelector(".weather");
        this.icone = document.querySelector(".icone");
    }
    RecuperandoDadosAPI(cidade) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
                try {
                    const response = yield fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${this.apikey}&lang=pt_br&units=metric`);
                    const data = yield response.json();
                    resolve(this.displayData(data));
                }
                catch (error) {
                    alert("Algo deu Errado. Consultar o console!!!!");
                    console.log(error);
                    reject(error);
                }
            }));
        });
    }
    buscar() {
        const inputCidade = document.querySelector(".input-cidade");
        const cidade = inputCidade.value;
        this.RecuperandoDadosAPI(cidade);
    }
    inicializar() {
        var _a;
        (_a = document.querySelector("#btn-search")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", () => this.buscar());
    }
    displayData(data) {
        this.cidade.innerHTML = `${data.name}`;
        this.temperatura.innerHTML = `${Math.floor(data.main.temp)}ºC`;
        this.umidade.innerHTML = `${data.main.humidity}%`;
        this.icone.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
        this.tempo.innerHTML = `${data.weather[0].description}`;
    }
}
const apiKey = 'cebcd482eda57fa9a6714c1c2ba91885';
const tempo = new Tempo(apiKey);
