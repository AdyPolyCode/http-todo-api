const { CustomError } = require('./errors');
const Parser = require('./parser')

class UrlParser extends Parser {
    static create(){
        return new UrlParser()
    }

    /*
        ! only works with this api url
        ! not every parsing feature is available

        url:
        ! protocol -> http/s (wwww is not acceptable in this parser)
        ! domain -> can by any type name or numbers are valid | localhost
            ! port is only parsed if localhost is entered as domain name
            ! top domain -> is only parsed if the host is !localhost
        ! path -> /any/path but only specific length is valid
    */
    parse(url){
        super.parse(url)

        const regex = RegExp('^((http[s]?)(://))?(((\\w+)((\\.)(\\w{2,3})))?((localhost)((:)(\\d{4})))?)?(((\/)(\\w+)?)+)?$');
        const matches = url.match(regex);

        if (!matches) {
            throw new CustomError('Page not found', 404);
        }

        const options = {
            protocol: matches[2],
            baseDomain: matches[4],
            port: matches[14],
            topDomain: matches[9],
            path: null,
        };

        const validPath =  this.#pathResolver(matches[15])

        if(!validPath){
            throw new CustomError('Page not found', 404);
        }

        options.path = validPath

        return options
    }

    /*
        ! only accepts path related to this api
        ! everythin else is rejected

        path:
        ! (/todos/{number}) -> {path: todos, id: {number}}
        ! if path is longer than 3 after parsing it will not be valid
    */
    #pathResolver(path){
        const valid = path.split('/').join(' ').trim().split(' ')

        if(valid.length > 2){
            return
        }

        return Object.fromEntries(valid.map((value, index) => {
            if(index === 0){
                return ['path', value]
            }
        
            return ['id', Number(value)]
        }))
    }
}

module.exports = UrlParser.create();