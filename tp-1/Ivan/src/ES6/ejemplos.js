export default function ClaseEjemplo(){
  class  claseEjemplo {
    constructor() {
      console.log('Por aca paso el constructor con');
    }

    metodoSuma() {
      let elemento = 10;
      console.log('Sumando:'+ (1+1+elemento));
    }

    metodoResta(){
      let resta = ["10", "20"];
      console.log('Restemos:' + (resta[2] - resta[1]));
    }

    reset(){
      let data = {a: "100", b: "200", c: "0"};
      var resultado;
      console.log('Volvemos a cero' + (resultado = data[2] - data[1]));      
    }
  }

  let objetoCalculador = new claseEjemplo();

  objetoCalculador.metodoSuma();
  objetoCalculador.metodoResta();
  objetoCalculador.reset();
}
