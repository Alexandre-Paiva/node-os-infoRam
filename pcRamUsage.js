//Node OS :fornece métodos e propriedades de utilitários relacionados ao sistema operacional.
const os = require('node:os');
    setInterval(() => {
     const {arch, platform , totalmem, freemem} = os;
     const tRam = totalmem() / 1024 / 1024; 
     const fRam = freemem() / 1024 / 1024;
     const usage = (fRam / tRam) * 100;

        const stats = {
            OS: platform(),
            Arch: arch(),
            TotalRam: `${parseInt(tRam)} MB` ,
            FreeRam:`${parseInt(fRam)} MB `,
            Usage: `${usage.toFixed(2)} % `,
        };
        // Realizar a limpeza da tela para evitar poluição visaul.
        console.clear();
        // Imprimir as informação em tabelas.
        console.table(stats);
        // Exportar 
        exports.stats = stats;

 }, 2000);
   


