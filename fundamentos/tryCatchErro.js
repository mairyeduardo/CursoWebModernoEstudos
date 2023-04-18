function tratarErroElancar(erro){
    throw new Error('Ops, ocorreu um erro...')
    // throw 10 
    // throw true 
    // throw 'mensagem'
    // throw {
    // nome: erro.name,
    // msg: erro.message,
    // date: new Date 
    // }
    }
    
    function imprimirNomeCAPS(obj) {
            try {
                //console.log(obj.name.toUpperCase() + "!!!")
                console.log(obj.nome.toUpperCase() + "!!!")
            } catch (e) {
                tratarErroELancar(e)
            } finally {
                console.log('Adeus')
            }
    }
    
    const obj = { name: 'Roberto' }
    imprimirNomeCAPS(obj)
    
    