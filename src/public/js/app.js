function loadImage(url) {
    return new Promise(resolve => {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', url, true);
        xhr.responseType = "blob";
        xhr.onload = function (e) {
            const reader = new FileReader();
            reader.onload = function(event) {
                const res = event.target.result;
                resolve(res);
            }
            const file = this.response;
            reader.readAsDataURL(file);
        }
        xhr.send();
    });
}

let signaturePad = null;

window.addEventListener('load', async () => {

    const canvas = document.querySelector("canvas");
    canvas.height = canvas.offsetHeight;
    canvas.width = canvas.offsetWidth;

    signaturePad = new SignaturePad(canvas, {});

    const form = document.querySelector('#form');
    form.addEventListener('submit', (e) => {
        e.preventDefault();

        let lugar = document.getElementById('lugar').value;
        let fecha = document.getElementById('fecha').value;
        let cop = document.getElementById('cop').value;
        let domicilio = document.getElementById('domicilio').value;
        let nit = document.getElementById('nit').value;
        let departamento = document.getElementById('departamento').value;
        let municipio = document.getElementById('municipio').value;
        let libroacta = document.getElementById("libroacta").value;
        let numacta = document.getElementById("numacta").value;
        let veinte = document.getElementById("veinte").value;
        let copcor = document.getElementById("copcor").value;
        let nompres = document.getElementById("nompres").value;
        let telpres = document.getElementById("telpres").value;
        let corpres = document.getElementById("corpres").value;
        let edpres = document.getElementById("edpres").value;
        let escpres = document.getElementById("escpres").value;
        let inpres = document.getElementById("inpres").value;
        let finpres = document.getElementById("finpres").value;
        let nomvis = document.getElementById("nomvis").value;
        let telvis = document.getElementById("telvis").value;
        let corvis = document.getElementById("corvis").value;
        let edvis = document.getElementById("edvis").value;
        let escvis = document.getElementById("escvis").value;
        let invis = document.getElementById("invis").value;
        let finvis = document.getElementById("finvis").value;

        let nomsec = document.getElementById("nomsec").value;
        let telsec = document.getElementById("telsec").value;
        let corsec = document.getElementById("corsec").value;
        let edsec = document.getElementById("edsec").value;
        let escsec = document.getElementById("escsec").value;
        let insec = document.getElementById("insec").value;
        let finsec = document.getElementById("finsec").value;

        let nomtes = document.getElementById("nomtes").value;
        let teltes = document.getElementById("teltes").value;
        let cortes = document.getElementById("cortes").value;
        let edtes = document.getElementById("edtes").value;
        let esctes = document.getElementById("esctes").value;
        let intes = document.getElementById("intes").value;
        let fintes = document.getElementById("fintes").value;

        let nomvoc = document.getElementById("nomvoc").value;
        let telvoc = document.getElementById("telvoc").value;
        let corvoc = document.getElementById("corvoc").value;
        let edvoc = document.getElementById("edvoc").value;
        let escvoc = document.getElementById("escvoc").value;
        let invoc = document.getElementById("invoc").value;
        let finvoc = document.getElementById("finvoc").value;


        generatePDF(lugar, fecha, cop, domicilio, nit, departamento, municipio, nompres, libroacta, numacta, veinte, copcor, telpres, corpres, edpres, escpres, inpres, finpres,
        nomvis, telvis, corvis, edvis, escvis, invis, finvis, nomsec, telsec, corsec, edsec, escsec, insec, finsec,
        nomtes, teltes, cortes, edtes, esctes, intes, fintes, nomvoc, telvoc, corvoc, edvoc, escvoc, invoc, finvoc );
    })

});

async function generatePDF(lugar, fecha, cop, domicilio, nit, departamento, municipio, nompres, libroacta, numacta, veinte, copcor, telpres, corpres, edpres, escpres, inpres, finpres,
    nomvis, telvis, corvis, edvis, escvis, invis, finvis, nomsec, telsec, corsec, edsec, escsec, insec, finsec, nomtes, teltes, cortes, edtes, esctes, intes, fintes,
    nomvoc, telvoc, corvoc, edvoc, escvoc, invoc, finvoc ){
    const image = await loadImage("/images/formulario.jpg");
    const signatureImage = signaturePad.toDataURL();

    const pdf = new jsPDF('p', 'pt', 'letter');

    pdf.addImage(image, 'PNG', 0, 0, 565, 792);
    pdf.addImage(signatureImage, 'PNG', 350, 705, 300, 60);

    pdf.setFontSize(12);

    

    pdf.setFontSize(8);
    pdf.text(lugar, 55, 160);
    pdf.text(fecha, 375, 160);
    pdf.text(cop, 125, 182);
    pdf.text(domicilio, 55, 205);
    pdf.text(nit, 483, 205);
    pdf.text(departamento, 125, 232);
    pdf.text(municipio, 375, 232);
    pdf.text(copcor, 195, 260 )
    pdf.text(libroacta, 185, 310);
    pdf.text(numacta, 455, 310 );
    pdf.text(veinte, 500, 310 );

    pdf.text(nompres, 70, 392);
    pdf.text(telpres, 190, 392 );
    pdf.text(corpres, 233, 392 );
    pdf.text(edpres, 335, 392 );
    pdf.text(escpres, 352, 392 );
    pdf.text(inpres, 400, 392 );
    pdf.text(finpres, 448, 392 );

    pdf.text(nomvis, 70, 410);
    pdf.text(telvis, 190, 410);
    pdf.text(corvis, 235, 410);
    pdf.text(edvis, 335, 410);
    pdf.text(escvis, 353, 410);
    pdf.text(invis, 403, 410);
    pdf.text(finvis, 448, 410);

    pdf.text(nomsec, 70, 430);
    pdf.text(telsec, 188, 430);
    pdf.text(corsec, 235, 430);
    pdf.text(edsec, 335, 430);
    pdf.text(escsec, 353, 430);
    pdf.text(insec, 403, 430);
    pdf.text(finsec, 448, 430);

    pdf.text(nomtes, 70, 450);
    pdf.text(teltes, 188, 450);
    pdf.text(cortes, 235, 450);
    pdf.text(edtes, 335, 450);
    pdf.text(esctes, 353, 450);
    pdf.text(intes, 403, 450);
    pdf.text(fintes, 448, 450);

    pdf.text(nomvoc, 70, 470);
    pdf.text(telvoc, 188, 470);
    pdf.text(corvoc, 235, 470);
    pdf.text(edvoc, 335, 470);
    pdf.text(escvoc, 353, 470);
    pdf.text(invoc, 403, 470);
    pdf.text(finvoc, 448, 470);
    pdf.setFillColor(0,0,0);
    pdf.save("INGECOP-5001");
    //window.print("INGECOP-5001.pdf");

}
