import '../src/styles.css'

class Tempo {

    private apikey:string
    private cidade
    private temperatura 
    private umidade
    private icone
    private tempo
    
    constructor(apikey:string){
        this.apikey = apikey;
        this.inicializar();
        this.cidade = document.querySelector(".cidade") as HTMLHeadingElement;
        this.temperatura = document.querySelector(".temp") as HTMLParagraphElement;
        this.umidade = document.querySelector(".umidade") as HTMLParagraphElement;
        this.tempo = document.querySelector(".weather") as HTMLParagraphElement;
        this.icone = document.querySelector(".icone") as HTMLImageElement;
    }

    protected async RecuperandoDadosAPI(cidade: string) {
        return new Promise(async (resolve, reject) => {
            try {
                const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${this.apikey}&lang=pt_br&units=metric`);
                const data = await response.json(); 
                resolve(this.displayData(data));
            } catch (error) {
                alert("Algo deu Errado. Consultar o console!!!!");
                console.log(error);
                reject(error); 
            }
        });
    }
    
    public buscar(){
        const inputCidade = document.querySelector(".input-cidade") as HTMLInputElement;
        const cidade:string = inputCidade!.value;
        this.RecuperandoDadosAPI(cidade);
    }

    public inicializar(){
        document.querySelector("#btn-search")?.addEventListener("click", ()=> this.buscar())
    }

     displayData(data:any){
        this.cidade.innerHTML = `${data.name}`
        this.temperatura.innerHTML = `${Math.floor(data.main.temp)}ºC`
        this.umidade.innerHTML = `Umidade ${data.main.humidity}%`
        this.icone.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`
        this.tempo.innerHTML= `${data.weather[0].description}`
       
    }
   

}

const apiKey = 'cebcd482eda57fa9a6714c1c2ba91885';
const tempo = new Tempo(apiKey)