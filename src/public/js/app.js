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
    const image = await loadImage("/images/formulario-2-2023.jpg");
    const signatureImage = signaturePad.toDataURL();

    const pdf = new jsPDF('landscape');

    pdf.addImage(image, 'PNG', 15, 8, 265, 188);
    pdf.addImage(signatureImage, 'PNG', 350, 705, 300, 60);

    pdf.setFontSize(12);

    pdf.setFontSize(8);
    pdf.text(lugar, 32, 44);
    pdf.text(fecha, 185, 44);
    pdf.text(cop, 52, 50);
    pdf.text(domicilio, 32, 56);
    pdf.text(nit, 255, 56);
    pdf.text(departamento, 52, 62);
    pdf.text(municipio, 185, 62);
    pdf.text(copcor, 97, 68)

    pdf.text(libroacta, 97, 80);
    pdf.text(numacta, 234, 80 );
    pdf.text(veinte, 267, 80 );

    // 1
    pdf.text(nompres, 41, 101);
    pdf.text(telpres, 97, 101 );
    pdf.text(corpres, 123, 101 );
    pdf.text(edpres, 185, 101 );
    pdf.text(escpres, 199, 101 );
    pdf.text(inpres, 233, 101 );
    pdf.text(finpres, 256, 101 );

    pdf.text(nomvis, 41, 106);
    pdf.text(telvis, 97, 106);
    pdf.text(corvis, 123, 106);
    pdf.text(edvis, 185, 106);
    pdf.text(escvis, 199, 106);
    pdf.text(invis, 233, 106);
    pdf.text(finvis, 256, 106);

    pdf.text(nomsec, 41, 111);
    pdf.text(telsec, 97, 111);
    pdf.text(corsec, 123, 111);
    pdf.text(edsec, 185, 111);
    pdf.text(escsec, 199, 111);
    pdf.text(insec, 233, 111);
    pdf.text(finsec, 256, 111);

    pdf.text(nomtes, 41, 116);
    pdf.text(teltes, 97, 116);
    pdf.text(cortes, 123, 116);
    pdf.text(edtes, 185, 116);
    pdf.text(esctes, 199, 116);
    pdf.text(intes, 233, 116);
    pdf.text(fintes, 256, 116);

    pdf.text(nomvoc, 41, 120);
    pdf.text(telvoc, 97, 120);
    pdf.text(corvoc, 123, 120);
    pdf.text(edvoc, 185, 120);
    pdf.text(escvoc, 199, 120);
    pdf.text(invoc, 233, 120);
    pdf.text(finvoc, 256, 120);
  
    pdf.text(nompres2, 41, 130);
    pdf.text(telpres2, 97, 130 );
    pdf.text(corpres2, 123, 130 );
    pdf.text(edpres2, 185, 130 );
    pdf.text(escpres2, 199, 130 );
    pdf.text(inpres2, 233, 130 );
    pdf.text(finpres2, 256, 130 );

    pdf.text(nomsec2, 41, 135);
    pdf.text(telsec2, 97, 135);
    pdf.text(corsec2, 123, 135);
    pdf.text(edsec2, 185, 135);
    pdf.text(escsec2, 199, 135);
    pdf.text(insec2, 233, 135);
    pdf.text(finsec2, 256, 135);

    pdf.text(nomvoc2, 41, 140);
    pdf.text(telvoc2, 97, 140);
    pdf.text(corvoc2, 123, 140);
    pdf.text(edvoc2, 185, 140);
    pdf.text(escvoc2, 199, 140);
    pdf.text(invoc2, 233, 140);
    pdf.text(finvoc2, 256, 140);

    pdf.setFillColor(0,0,0);
    pdf.save("INGECOP-5002");
    //window.print("INGECOP-5001.pdf");
}
