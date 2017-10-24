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
      console.log('Volvemos a cero' );      
    }
  }

  let objetoCalculador = new claseEjemplo();

  objetoCalculador.metodoSuma();
  objetoCalculador.metodoResta();
  objetoCalculador.reset();
}
