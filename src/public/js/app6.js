
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
        let cvsecrem = document.getElementById("cvsecrem").value;
        let cvsecrev = document.getElementById("cvsecrev").value;
        let cvvocam = document.getElementById("cvvocam").value;
        let cvvocav = document.getElementById("cvvocav").value;
        let cvotrom = document.getElementById("cvotrom").value;
        let cvotrov = document.getElementById("cvotrov").value;

        let nom = document.getElementById("nom").value;


        generatePDF(cop, certi, gm, gh, tg, menor, juv, adul, teredad, tedad, maya, xinca, gari, mesti, otro, tetnico,
        capresim, capresiv, cavicepm, cavicepv, casecrem, casecrev, catesom, catesov, cavocalm, cavocalv, cavocallm, cavocallv, caotrom, caotrov,
        cvpresim, cvpresiv, cvsecrem, cvsecrev, cvvocam, cvvocav, cvotrom, cvotrov, nom);
    })

});

async function generatePDF(cop, certi, gm, gh, tg, menor, juv, adul, teredad, tedad, maya, xinca, gari, mesti, otro, tetnico,
    capresim, capresiv, cavicepm, cavicepv, casecrem, casecrev, catesom, catesov, cavocalm, cavocalv, cavocallm, cavocallv, caotrom, caotrov,
    cvpresim, cvpresiv, cvsecrem, cvsecrev, cvvocam, cvvocav, cvotrom, cvotrov, nom){
    const image = await loadImage("images/formulario-6-2023.jpg");
    const signatureImage = signaturePad.toDataURL();

    const pdf = new jsPDF('landscape');

    pdf.addImage(image, 'PNG', 18, 15, 255, 180);
    pdf.addImage(signatureImage, 'PNG', 179, 117, 100, 15);

    pdf.setFontSize(12);
    
    pdf.text(cop, 54, 37);
    pdf.text(certi, 100, 43);

    pdf.text(gm, 20, 91);
    pdf.text(gh, 36, 91);
    pdf.text(tg, 53, 91);

    pdf.text(menor, 68, 91);
    pdf.text(juv, 93, 91);
    pdf.text(adul, 115, 91);
    pdf.text(teredad, 140, 91);
    pdf.text(tedad, 161, 91);

    pdf.text(maya, 176, 91);
    pdf.text(xinca, 192, 91);
    pdf.text(gari, 207, 91);
    pdf.text(mesti, 229, 91);
    pdf.text(otro, 247, 91);
    pdf.text(tetnico, 260, 91);
    
    pdf.text(capresim, 53, 133);
    pdf.text(capresiv, 68, 133);
    pdf.text(cavicepm, 53, 140);
    pdf.text(cavicepv, 68, 140);
    pdf.text(casecrem, 53, 147);
    pdf.text(casecrev, 68, 147);
    pdf.text(catesom, 53, 154);
    pdf.text(catesov, 68, 154);
    pdf.text(cavocalm, 53, 162);
    pdf.text(cavocalv, 68, 162);
    pdf.text(cavocallm, 53, 169);
    pdf.text(cavocallv, 68, 169);
    pdf.text(caotrom, 53, 176);
    pdf.text(caotrov, 68, 176);

    pdf.text(cvpresim, 140, 133);
    pdf.text(cvpresiv, 161, 133);
    pdf.text(cvsecrem, 140, 140);
    pdf.text(cvsecrev, 161, 140);
    pdf.text(cvvocam, 140, 147);
    pdf.text(cvvocav, 161, 147);
    pdf.text(cvotrom, 140, 154);
    pdf.text(cvotrov, 161, 154);
    
    pdf.text(nom, 179, 124);

    pdf.setFontSize(8);
    
    pdf.setFillColor(0,0,0);
    pdf.save("Certificación de Asociados Constituidos en la Cooperativa");
    //window.print("INGECOP-5001.pdf");

}
