const fs = require('fs').promises;
const path = require('path');
async function readdir(caminho){
    caminho = caminho || path.resolve(__dirname)
    //readdir é um método...
    const files = await fs.readdir(caminho)
    iterador(files, caminho);
};
async function iterador(files,caminho){
    for (let file of files){
        //juntando o caminho da pasta(caminho) com o arquivo que está dentro dessa pasta(files)
        const caminhoCompleto = path.resolve(caminho, file);      
        //stats => estatistica, cole dados.
        const stats = await fs.stat(caminhoCompleto);
        //entrando nas pastas
        if(stats.isDirectory()){
            console.log(file,'<- Pasta')
            readdir(caminhoCompleto);
            continue;
        }
        console.log(file,'<- Arquivo');
    }
}
readdir('C:/Projeto/theta-helling/Estudando/src');