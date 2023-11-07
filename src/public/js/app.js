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

        let nompres2 = document.getElementById("nompres2").value;
        let telpres2 = document.getElementById("telpres2").value;
        let corpres2 = document.getElementById("corpres2").value;
        let edpres2 = document.getElementById("edpres2").value;
        let escpres2 = document.getElementById("escpres2").value;
        let inpres2 = document.getElementById("inpres2").value;
        let finpres2 = document.getElementById("finpres2").value;

        let nomsec2 = document.getElementById("nomsec2").value;
        let telsec2 = document.getElementById("telsec2").value;
        let corsec2 = document.getElementById("corsec2").value;
        let edsec2 = document.getElementById("edsec2").value;
        let escsec2 = document.getElementById("escsec2").value;
        let insec2 = document.getElementById("insec2").value;
        let finsec2 = document.getElementById("finsec2").value;

        let nomvoc2 = document.getElementById("nomvoc2").value;
        let telvoc2 = document.getElementById("telvoc2").value;
        let corvoc2 = document.getElementById("corvoc2").value;
        let edvoc2 = document.getElementById("edvoc2").value;
        let escvoc2 = document.getElementById("escvoc2").value;
        let invoc2 = document.getElementById("invoc2").value;
        let finvoc2 = document.getElementById("finvoc2").value;

        generatePDF(nomvoc2, telvoc2, corvoc2, edvoc2, escvoc2, invoc2, finvoc2, nomsec2, telsec2, corsec2, edsec2, escsec2, insec2, finsec2, nompres2, telpres2, corpres2, edpres2, escpres2, inpres2, finpres2,lugar, fecha, cop, domicilio, nit, departamento, municipio, nompres, libroacta, numacta, veinte, copcor, telpres, corpres, edpres, escpres, inpres, finpres,
        nomvis, telvis, corvis, edvis, escvis, invis, finvis, nomsec, telsec, corsec, edsec, escsec, insec, finsec,
        nomtes, teltes, cortes, edtes, esctes, intes, fintes, nomvoc, telvoc, corvoc, edvoc, escvoc, invoc, finvoc);
    })

});

async function generatePDF(nomvoc2, telvoc2, corvoc2, edvoc2, escvoc2, invoc2, finvoc2, nomsec2, telsec2, corsec2, edsec2, escsec2, insec2, finsec2, nompres2, telpres2, corpres2, edpres2, escpres2, inpres2, finpres2,lugar, fecha, cop, domicilio, nit, departamento, municipio, nompres, libroacta, numacta, veinte, copcor, telpres, corpres, edpres, escpres, inpres, finpres,
        nomvis, telvis, corvis, edvis, escvis, invis, finvis, nomsec, telsec, corsec, edsec, escsec, insec, finsec,
        nomtes, teltes, cortes, edtes, esctes, intes, fintes, nomvoc, telvoc, corvoc, edvoc, escvoc, invoc, finvoc){
    const image = await loadImage("/images/formulario-new2.jpg");
    const signatureImage = signaturePad.toDataURL();

    const pdf = new jsPDF('p', 'pt', 'letter');

    pdf.addImage(image, 'PNG', 0, 0, 625, 792);
    pdf.addImage(signatureImage, 'PNG', 350, 705, 300, 60);

    pdf.setFontSize(12);

    pdf.setFontSize(8);
    pdf.text(lugar, 65, 160);
    pdf.text(fecha, 395, 160);
    pdf.text(cop, 135, 182);
    pdf.text(domicilio, 65, 205);
    pdf.text(nit, 538, 205);
    pdf.text(departamento, 135, 232);
    pdf.text(municipio, 395, 232);
    pdf.text(copcor, 205, 260 )
    pdf.text(libroacta, 210, 310);
    pdf.text(numacta, 500, 310 );
    pdf.text(veinte, 550, 310 );

    pdf.text(nompres, 80, 392);
    pdf.text(telpres, 205, 392 );
    pdf.text(corpres, 280, 392 );
    pdf.text(edpres, 355, 392 );
    pdf.text(escpres, 400, 392 );
    pdf.text(inpres, 450, 392 );
    pdf.text(finpres, 500, 392 );

    pdf.text(nomvis, 80, 410);
    pdf.text(telvis, 205, 410);
    pdf.text(corvis, 280, 410);
    pdf.text(edvis, 355, 410);
    pdf.text(escvis, 400, 410);
    pdf.text(invis, 450, 410);
    pdf.text(finvis, 500, 410);

    pdf.text(nomsec, 80, 430);
    pdf.text(telsec, 205, 430);
    pdf.text(corsec, 280, 430);
    pdf.text(edsec, 355, 430);
    pdf.text(escsec, 400, 430);
    pdf.text(insec, 450, 430);
    pdf.text(finsec, 500, 430);

    pdf.text(nomtes, 80, 450);
    pdf.text(teltes, 205, 450);
    pdf.text(cortes, 280, 450);
    pdf.text(edtes, 355, 450);
    pdf.text(esctes, 400, 450);
    pdf.text(intes, 450, 450);
    pdf.text(fintes, 500, 450);

    pdf.text(nomvoc, 80, 470);
    pdf.text(telvoc, 205, 470);
    pdf.text(corvoc, 280, 470);
    pdf.text(edvoc, 355, 470);
    pdf.text(escvoc, 400, 470);
    pdf.text(invoc, 450, 470);
    pdf.text(finvoc, 500, 470);
  
    pdf.text(nompres2, 80, 505);
    pdf.text(telpres2, 205, 505 );
    pdf.text(corpres2, 280, 505 );
    pdf.text(edpres2, 355, 505 );
    pdf.text(escpres2, 400, 505 );
    pdf.text(inpres2, 450, 505 );
    pdf.text(finpres2, 500, 505 );

    pdf.text(nomsec2, 80, 525);
    pdf.text(telsec2, 205, 525);
    pdf.text(corsec2, 280, 525);
    pdf.text(edsec2, 355, 525);
    pdf.text(escsec2, 400, 525);
    pdf.text(insec2, 450, 525);
    pdf.text(finsec2, 500, 525);

    pdf.text(nomvoc2, 80, 545);
    pdf.text(telvoc2, 205, 545);
    pdf.text(corvoc2, 280, 545);
    pdf.text(edvoc2, 355, 545);
    pdf.text(escvoc2, 400, 545);
    pdf.text(invoc2, 450, 545);
    pdf.text(finvoc2, 500, 545);

    pdf.setFillColor(0,0,0);
    pdf.save("INGECOP-5002");
    //window.print("INGECOP-5001.pdf");
}
