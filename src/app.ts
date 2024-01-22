import http from 'http'
import * as fs from "fs";
const port = 8080;
const server = http.createServer((req,res)=>{
    console.log(req.url)
    // res.write("hello world")
    // res.end()

    // res.writeHead(200, {'Content-Type':'text/html'});
    // res.write('<h1>hola mundo</h1>')
    // res.end()



    if(req.url ==='/'){
        const htmlFile = fs.readFileSync('./public/index.html','utf-8');
        res.writeHead(200, {'Content-Type':'text/html'});
        res.end(htmlFile)
        return
    }
    if(req.url?.endsWith('.ts')){
        res.writeHead(200,{'Content-Type':'application/typescript'})
    } else if (req.url?.endsWith('.css')){
        res.writeHead(200,{'Content-Type':'text/css'})
    }
    const responseContent = fs.readFileSync(`./public${req.url}`,'utf-8')
    res.end(responseContent)
})
server.listen(port,()=>{
    console.log('Server running on port: ' + port)
})