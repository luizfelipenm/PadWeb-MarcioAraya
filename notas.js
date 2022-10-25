    // nome é uma variável
    let n1 = parseFloat(prompt("nota1?"));
    let n2 = parseFloat(prompt("nota2?"));

    let media = (n1 + n2) / 2;
    let situacao = "";
    if (media>=6) {
         situacao = 'Aprovado';
         cor = 'blue';
    } else  {
        if (media >= 2 && media < 6 ) {
             situacao = "Exame Final";
             cor = 'orange';
        } else {
             situacao = 'Reprovado';
             cor = 'red';
        }
    }
    document.getElementById("nota1").innerHTML = n1;
    document.getElementById("nota2").innerHTML = n2;
    document.getElementById("media").innerHTML = media;
    document.getElementById("situacao").innerHTML = situacao;
    document.getElementById("situacao").style.color = cor; // muda a cor da fonte
