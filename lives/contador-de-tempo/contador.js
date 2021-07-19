const btnStart = document.getElementById("btnStart");
btnStart.addEventListener("click", () => {

   /* OBS: Falta fazer a funcionalidade do botão PARAR e também limpar a div e o imput ao clicar novamente no INICIAR */

   const lblCount = document.getElementById("timer");
   // Tempo, em segundos, que queremos.
   let valueSec = document.querySelector(".valorUser").value;

   const secpass = () => {
      let min = Math.floor(valueSec/60);
      let segundosRestantes = valueSec % 60;

      if (segundosRestantes < 10) {
         segundosRestantes = "0" + segundosRestantes;
      }

      if (min < 10) {
         min = "0" + min;
      }

      // Vai gerar o formato de ??:??
      lblCount.innerHTML = min + ":" + segundosRestantes

      // Condição final
      if (valueSec > 0) {
         valueSec -= 1;
      }
      else {
         lblCount.innerHTML = "Acabou!";
      }
   };
   const countDown = setInterval(() => secpass(), 1000);
});
