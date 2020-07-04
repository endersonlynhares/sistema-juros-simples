let tipo;let txt1 = document.getElementById("txt1");let txt2 = document.getElementById("txt2");let txt3 = document.getElementById("txt3")
function verificarErro(){
    let txt1 = document.getElementById("txt1");let txt2 = document.getElementById("txt2");let txt3 = document.getElementById("txt3")

    if(txt1.value.length === 0 || txt2.value.length === 0 || txt3.value.length === 0){
        return true
    }
}
function aparecer(valor) {
    if (valor === "capital") {
            let res = document.getElementById('res'); var txt1 = document.getElementById('txt1'); var txt2 = document.getElementById('txt2'); var txt3 = document.getElementById('txt3'); txt1.focus()
            res.innerHTML = ''; txt1.value = ''; txt2.value = ''; txt3.value = '';
            document.getElementById("arti_res").style.display = "block";
            document.getElementById("p1").innerHTML = "Juros:"
            document.getElementById("p2").innerHTML = "Taxa:"
            document.getElementById("p3").innerHTML = "Tempo:"
            document.getElementById("txt1").placeholder = "Digite o valor do juros"
            document.getElementById("txt2").placeholder = "Digite o valor da taxa"
            document.getElementById("txt3").placeholder = "Digite o valor do tempo"
            tipo = "capital";
        }if (valor === "juros") {
            let res = document.getElementById('res'); var txt1 = document.getElementById('txt1'); var txt2 = document.getElementById('txt2'); var txt3 = document.getElementById('txt3'); txt1.focus()
            res.innerHTML = ''; txt1.value = ''; txt2.value = ''; txt3.value = ''; 
            document.getElementById("arti_res").style.display = "block";
            document.getElementById("p1").innerHTML = "Capital:"
            document.getElementById("p2").innerHTML = "Taxa:"
            document.getElementById("p3").innerHTML = "Tempo:"
            document.getElementById("txt1").placeholder = "Digite o valor do capital"
            document.getElementById("txt2").placeholder = "Digite o valor da taxa"
            document.getElementById("txt3").placeholder = "Digite o valor do tempo"
            tipo = "juros"
        }if (valor === "taxa") {
            let res = document.getElementById('res'); var txt1 = document.getElementById('txt1'); var txt2 = document.getElementById('txt2'); var txt3 = document.getElementById('txt3'); txt1.focus()
            res.innerHTML = ''; txt1.value = ''; txt2.value = ''; txt3.value = ''; 
            document.getElementById("arti_res").style.display = "block";
            document.getElementById("p1").innerHTML = "Capital:"
            document.getElementById("p2").innerHTML = "Juros:"
            document.getElementById("p3").innerHTML = "Tempo:"
            document.getElementById("txt1").placeholder = "Digite o valor do capital"
            document.getElementById("txt2").placeholder = "Digite o valor da juros"
            document.getElementById("txt3").placeholder = "Digite o valor do tempo"
            tipo = "taxa"
        }if (valor === "tempo") {
            let res = document.getElementById('res'); var txt1 = document.getElementById('txt1'); var txt2 = document.getElementById('txt2'); var txt3 = document.getElementById('txt3'); txt1.focus()
            res.innerHTML = ''; txt1.value = ''; txt2.value = ''; txt3.value = ""
            document.getElementById("arti_res").style.display = "block";
            document.getElementById("p1").innerHTML = "Juros:"
            document.getElementById("p2").innerHTML = "Capital:"
            document.getElementById("p3").innerHTML = "Taxa:"
            document.getElementById("txt1").placeholder = "Digite o valor do juros"
            document.getElementById("txt2").placeholder = "Digite o valor da capital"
            document.getElementById("txt3").placeholder = "Digite o valor do taxa"
            tipo = "tempo"
        }if (valor === "limpar") {
            let res = document.getElementById('res'); var txt1 = document.getElementById('txt1'); var txt2 = document.getElementById('txt2'); var txt3 = document.getElementById('txt3');
            res.innerHTML = ''; txt1.value = ''; txt2.value = ''; txt3.value = '';
            txt1.focus()
        }
    }
function descobrir() {
    let title = document.getElementById("tit")
    let subtitle = document.getElementById("sub")
    let btn1 = document.getElementById("btn1")
    let res = document.getElementById('res')
    let n1 = Number(document.getElementById("txt1").value); let n2 = Number(document.getElementById("txt2").value); let n3 = Number(document.getElementById("txt3").value)
    if(verificarErro()){
        title.className = "modal-title text-danger"
        btn1.className = "btn btn-danger"
        title.innerHTML = "[ERRO]"
        subtitle.innerHTML = "Alguns dos campos não foram preenchidos, por favor corrija-os!"
        $("#mod").modal("show")
    }else if(n1 <= 0 || n2 <= 0 || n3 <= 0){
        title.className = "modal-title text-danger"
        btn1.className = "btn btn-danger"
        title.innerHTML = "[ERRO]"
        subtitle.innerHTML = "O numero que você informou é igual a zero ou menor que zero!"
        $("#mod").modal("show")
    }else{
        if (tipo === "capital") {
            let capital = n1 / ((n2 / 100) * n3)
            res.innerText = `O capital é de R$${capital.toFixed(2)}`
        } else if (tipo === "juros") {
            let juros = (n1 * n2 * n3) /100
            res.innerText = `O juros é de R$${juros}`
        } else if (tipo === "taxa") {
            let taxa = (n2 * 100) / (n1*n3)
            res.innerText = `A taxa é de ${taxa}%`
        } else if (tipo === "tempo") {
            let tempo = n1 / ((n2 / 100) * n3); let p;
            if(tempo < 2){
                p = "mês"
            }else{
                p = "mêses"
            }
            res.innerText = `O tempo é de ${tempo} ${p}`
        }
    }
}