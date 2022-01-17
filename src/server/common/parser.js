module.exports = class Parser {
    #validateThis(parserArg){
        if(!parserArg){
            throw new Error('Arg is required')
        }
    }
    
    parse(arg){
        this.#validateThis(arg)
    }
}