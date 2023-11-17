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
        let nit = document.getElementById('nit').value;
        let dom = document.getElementById('dom').value;
        let rl = document.getElementById('rl').value;
        let tel = document.getElementById('tel').value;
        let cor = document.getElementById('cor').value;
        let fi = document.getElementById('fi').value;
        let cd = document.getElementById('cd').value;
        let p1 = document.getElementById('p1').value;
        let p2 = document.getElementById('p2').value;
        let p3 = document.getElementById('p3').value;
        let p4 = document.getElementById('p4').value;
        let p5 = document.getElementById('p5').value;
        let p6 = document.getElementById('p6').value;
        let p7 = document.getElementById('p7').value;
        let p8 = document.getElementById('p8').value;
        let p9 = document.getElementById('p9').value;
        let p10 = document.getElementById('p10').value;
        let p11 = document.getElementById('p11').value;
        let p12 = document.getElementById('p12').value;
        let p13 = document.getElementById('p13').value;
        let p14 = document.getElementById('p14').value;
        let p15 = document.getElementById('p15').value;
        let p16 = document.getElementById('p16').value;
        let p17  = document.getElementById('p17').value;
        let p18  = document.getElementById('p18').value;
        let p19  = document.getElementById('p19').value;
        let p20  = document.getElementById('p20').value;

        let rlan = document.getElementById('rlan').value
        let gcn = document.getElementById('gcn').value

        generatePDF(rlan, gcn, lugar,fecha,cop,nit,dom,rl,tel,cor,fi,cd,p1,p2,p3,p4,p5,p6,p7,p8,p9,p10,p11,p12,p13,p14,p15,p16,p17,p18,p19,p20);
        
    })

});

async function generatePDF(rlan, gcn, lugar,fecha,cop,nit,dom,rl,tel,cor,fi,cd,p1,p2,p3,p4,p5,p6,p7,p8,p9,p10,p11,p12,p13,p14,p15,p16,p17,p18,p19,p20){
    const image = await loadImage("images/formulario-4-2023.jpg");
    const signatureImage = signaturePad.toDataURL();

    const pdf = new jsPDF('p', 'pt', 'letter');

    pdf.addImage(image, 'PNG', 45, 53, 525, 682); //w / h
    pdf.addImage(signatureImage, 'PNG', 250, 685, 300, 60);

    pdf.setFontSize(12);

    pdf.setFontSize(8);
    pdf.text(lugar, 100, 188);
    pdf.text(fecha, 190, 188);

    pdf.text(cop, 235, 205);

    pdf.text(dom, 100, 223);
    pdf.text(nit, 145, 238);
    pdf.text(rl, 122, 255);

    //
    pdf.text(tel, 145, 273);
    pdf.text(cor, 365, 273);

    // middle items
    pdf.text(fi, 406, 290);
    pdf.text(cd, 468, 290);

    //
    pdf.text(p1, 200, 305);
    pdf.text(p2, 200, 320);
    pdf.text(p3, 200, 333);

    //
    pdf.text(p4, 200, 364);
    pdf.text(p5, 200, 378);

    //
    pdf.text(rlan, 100, 407)
    pdf.text(gcn, 100, 482)

    //
    pdf.text(p6, 100, 568);
    pdf.text(p7, 100, 585);
    pdf.text(p9, 133, 603);
    pdf.text(p8, 100, 620);
    pdf.text(p10, 133, 636);
    pdf.text(p11, 374, 636);

    pdf.text(p12, 155, 653);
    pdf.text(p14, 390, 653);
    pdf.text(p15, 496, 653);

    pdf.text(p13, 133, 672);
    pdf.text(p16, 373, 672);
    pdf.text(p17, 470, 672);

    pdf.text(p18, 210, 690);
    pdf.text(p19, 283, 690);
    pdf.text(p20, 355, 690);

    pdf.setFillColor(0,0,0);
    pdf.save("INGECOP-5004");
    //window.print("INGECOP-5001.pdf");

}
