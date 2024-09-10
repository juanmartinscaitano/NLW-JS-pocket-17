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

const { select  } = require('@inquirer/prompts')

const start = async () => {
      while(true) {

         const options = await select({
            message: "Menu >",
            choices: [
               {
                  name: "cadastrar meta",
                  value: "cadastrar"
               },
               {
                  name: "Listar metas",
                  value: "listar"
               },
               {
                  name: "Sair",
                  value: "sair"
               }
            ]
         })

         switch(options) {
            case "cadastrar":
               console.log("Vamos cadastrar")
               break
            case "listar":
               console.log("Vamos listar")
               break
            case "sair":
               console.log("Até a próxima !")
               return 
         }
      }
}

start()
