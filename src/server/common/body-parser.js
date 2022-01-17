const Parser = require('./parser')

class BodyParser extends Parser {
    static create(){
        return new BodyParser()
    }

    parse(request){
        super.parse(request)

        return new Promise((resolve, reject) => {
            request.setEncoding('utf8');
    
            let body = '';
    
            request
                .on('data', (chunk) => {
                    body += chunk;
                })
                .on('end', () => {
                    if(body){
                        body = JSON.parse(body);
                    }
    
                    resolve(body);
                });
        });
    }
}

module.exports = BodyParser.create();