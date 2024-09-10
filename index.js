// let meta = {
//    value: 'ler um livro por mês',
//    checked: true

// }

// let metas = [
//    meta, 
//    {
//       value: "Caminhar 20 minutos",
//       checked: false

//    }
// ]

// meta.value = "none of these above"
// console.log(metas[1].value)

const start = () => {
      while(true) {
         let opcao = "cadastrar"
         switch(opcao) {
            case "cadastrar":
               console.log("Vamos cadastrar")
               break
            case "listar":
               console.log("Vamos listar")
               break
            case "sair":
               return 
         }
      }
}

start()
