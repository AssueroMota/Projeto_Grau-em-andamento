
function visualizar() {

    // pegando os id do formulario a preencher

    let name = document.getElementById("name");
    let nomecompleto = document.getElementById("nome_completo");
    let texto_name = name.value;
    nomecompleto.innerHTML = `${texto_name}`

    let estado = document.getElementById("estado");
    let estadocivil = document.getElementById("estadocivil");
    let texto_estado = estado.value;
    estadocivil.innerHTML = `${texto_estado},`

    let ensino = document.getElementById("ensino");
    let grauinstrucao = document.getElementById("grauinstrucao");
    let texto_instrucao = ensino.value;
    grauinstrucao.innerHTML = `${texto_instrucao}`


    let idade = document.getElementById("idade");
    let anosdevida = document.getElementById("anosdevida");
    let texto_anosdevida = idade.value;
    anosdevida.innerHTML = `${texto_anosdevida} Anos,`


    let link = document.getElementById("link");
    let linkdin = documento.getElementById("linkdin");
    let texto_linkdin = link.value;
    linkdin.innerHTML = `Linkedln: ${texto_linkdin}`



    let email = document.getElementById("email");
    let caixapostal = document.getElementById("caixapostal");
    let texto_email = email.value;
    caixapostal.innerHTML = `${texto_email}`



    let obj = document.getElementById("obj");
    let objetivo = document.getElementById("objetivo");
    let objetivao = obj.value;
    objetivo.innerHTML = `<p>Email: ${objetivao}</p>`


    let wtz = document.getElementById("numero");
    let Whatsapp = document.getElementById("what");
    let texto_tel = wtz.value;
    Whatsapp.innerHTML = `<p> Whatsapp: ${texto_tel} </p>`


   
    



    // pegando os id do curriculos

   












    // aplicando dentro do curriculo



}


