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

        let cop = document.getElementById('cop').value;
        let certi = document.getElementById('certi').value;
        let gm = document.getElementById('gm').value;
        let gh = document.getElementById('gh').value;
        let tg = document.getElementById('tg').value;
        let menor = document.getElementById("menor").value;
        let juv = document.getElementById("juv").value;
        let adul = document.getElementById("adul").value;
        let teredad = document.getElementById("teredad").value;
        let tedad = document.getElementById("tedad").value;
        let maya = document.getElementById("maya").value;
        let xinca = document.getElementById("xinca").value;
        let gari = document.getElementById("gari").value;
        let mesti = document.getElementById("mesti").value;
        let otro = document.getElementById("otro").value;
        let tetnico = document.getElementById("tetnico").value;

        let capresim = document.getElementById("capresim").value;
        let capresiv = document.getElementById("capresiv").value;
        let cavicepm = document.getElementById("cavicepm").value;
        let cavicepv = document.getElementById("cavicepv").value;
        let casecrem = document.getElementById("casecrem").value;
        let casecrev = document.getElementById("casecrev").value;
        let catesom = document.getElementById("catesom").value;
        let catesov = document.getElementById("catesov").value;
        let cavocalm = document.getElementById("cavocalm").value;
        let cavocalv = document.getElementById("cavocalv").value;
        let cavocallm = document.getElementById("cavocallm").value;
        let cavocallv = document.getElementById("cavocallv").value;
        let caotrom = document.getElementById("caotrom").value;
        let caotrov = document.getElementById("caotrov").value;

        let cvpresim = document.getElementById("cvpresim").value;
        let cvpresiv = document.getElementById("cvpresiv").value;
        let cvvicepm = document.getElementById("cvvicepm").value;
        let cvvicepv = document.getElementById("cvvicepv").value;
        let cvsecrem = document.getElementById("cvsecrem").value;
        let cvsecrev = document.getElementById("cvsecrev").value;
        let cvvocam = document.getElementById("cvvocam").value;
        let cvvocav = document.getElementById("cvvocav").value;
        let cvotrom = document.getElementById("cvotrom").value;
        let cvotrov = document.getElementById("cvotrov").value;

        let nom = document.getElementById("nom").value;


        generatePDF(cop, certi, gm, gh, tg, menor, juv, adul, teredad, tedad, maya, xinca, gari, mesti, otro, tetnico,
        capresim, capresiv, cavicepm, cavicepv, casecrem, casecrev, catesom, catesov, cavocalm, cavocalv, cavocallm, cavocallv, caotrom, caotrov,
        cvpresim, cvpresiv, cvvicepm, cvvicepv, cvsecrem, cvsecrev, cvvocam, cvvocav, cvotrom, cvotrov, nom);
    })

});

async function generatePDF(cop, certi, gm, gh, tg, menor, juv, adul, teredad, tedad, maya, xinca, gari, mesti, otro, tetnico,
    capresim, capresiv, cavicepm, cavicepv, casecrem, casecrev, catesom, catesov, cavocalm, cavocalv, cavocallm, cavocallv, caotrom, caotrov,
    cvpresim, cvpresiv, cvvicepm, cvvicepv, cvsecrem, cvsecrev, cvvocam, cvvocav, cvotrom, cvotrov, nom){
    const image = await loadImage("/images/formulario6.jpeg");
    const signatureImage = signaturePad.toDataURL();

    const pdf = new jsPDF('p', 'pt', 'letter');

    pdf.addImage(image, 'PNG', 0, 0, 625, 785);
    pdf.addImage(signatureImage, 'PNG', 350, 418, 300, 60);

    pdf.setFontSize(12);
    
    pdf.text(cop, 110, 140);
    pdf.text(certi, 214, 167);
    pdf.text(gm, 35, 345);
    pdf.text(gh, 70, 345);
    pdf.text(tg, 110, 345);
    pdf.text(menor, 150, 345);
    pdf.text(juv, 200, 345);
    pdf.text(adul, 252, 345);
    pdf.text(teredad, 308, 345);
    pdf.text(tedad, 353, 345);
    pdf.text(maya, 386, 345);
    pdf.text(xinca, 420, 345);
    pdf.text(gari, 457, 345);
    pdf.text(mesti, 500, 345);
    pdf.text(otro, 541, 345);
    pdf.text(tetnico, 568, 345);
    
    pdf.text(capresim, 110, 500);
    pdf.text(capresiv, 155, 500);
    pdf.text(cavicepm, 110, 526);
    pdf.text(cavicepv, 155, 526);
    pdf.text(casecrem, 110, 553);
    pdf.text(casecrev, 155, 553);
    pdf.text(catesom, 110, 580);
    pdf.text(catesov, 155, 580);
    pdf.text(cavocalm, 110, 608);
    pdf.text(cavocalv, 155, 608);
    pdf.text(cavocallm, 110, 635);
    pdf.text(cavocallv, 155, 635);
    pdf.text(caotrom, 110, 661);
    pdf.text(caotrov, 155, 661);

    pdf.text(cvpresim, 308, 500);
    pdf.text(cvpresiv, 351, 500);
    pdf.text(cvvicepm, 308, 526);
    pdf.text(cvvicepv, 351, 526);
    pdf.text(cvsecrem, 308, 553);
    pdf.text(cvsecrev, 351, 553);
    pdf.text(cvvocam, 308, 580);
    pdf.text(cvvocav, 351, 580);
    pdf.text(cvotrom, 308, 608);
    pdf.text(cvotrov, 351, 608);
    
    pdf.text(nom, 386, 475);

    pdf.setFontSize(8);
    
    pdf.setFillColor(0,0,0);
    pdf.save("INGECOP-5001");
    //window.print("INGECOP-5001.pdf");

}
