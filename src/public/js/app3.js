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
        let em = document.getElementById('em').value;
        let us = document.getElementById('us').value;
        let sp = document.getElementById('sp').value;
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

        generatePDF(lugar,fecha,cop,nit,dom,rl,tel,cor,fi,cd,em,us,sp,p1,p2,p3,p4,p5,p6,p7,p8,p9,p10,p11,p12,p13,p14,p15,p16,p17,p18);
    })

});

async function generatePDF(lugar,fecha,cop,nit,dom,rl,tel,cor,fi,cd,em,us,sp,p1,p2,p3,p4,p5,p6,p7,p8,p9,p10,p11,p12,p13,p14,p15,p16,p17,p18){
    const image = await loadImage("/images/formulario-3-2023.jpg");
    const signatureImage = signaturePad.toDataURL();
    const pdf = new jsPDF('p', 'pt', 'letter');
    pdf.addImage(image, 'PNG', 45, 53, 525, 652);
    pdf.addImage(signatureImage, 'PNG', 300, 790, 300, 60);
    pdf.setFontSize(12);
    pdf.setFontSize(8);

    pdf.text(lugar, 110, 170);
    pdf.text(fecha, 185, 170);
    pdf.text(nit, 455, 170);

    pdf.text(cop, 155, 186);
    pdf.text(dom, 103, 221);
    pdf.text(rl, 160, 238);

    //
    pdf.text(tel, 160, 255);
    pdf.text(cor, 373, 255);

    // middle items
    pdf.text(fi, 320, 272);
    pdf.text(cd, 355, 272);
    pdf.text(em, 405, 272);
    pdf.text(us, 455, 272);

    pdf.text(sp, 510, 303);

    pdf.text(p1, 510, 340);
    pdf.text(p2, 510, 353);
    pdf.text(p3, 510, 366);
    pdf.text(p4, 510, 382);
    pdf.text(p5, 510, 397);
    pdf.text(p6, 510, 412);
    pdf.text(p7, 510, 427);
    pdf.text(p8, 510, 442);
    pdf.text(p9, 510, 455);
    pdf.text(p10, 510, 469);

    //
    pdf.text(p11, 509, 531);
    pdf.text(p12, 509, 545);
    pdf.text(p13, 509, 560);
    pdf.text(p14, 509, 577);
    pdf.text(p15, 509, 596);
    pdf.text(p16, 509, 619);
    pdf.text(p17, 509, 636);
    pdf.text(p18, 509, 660);

    pdf.setFillColor(0,0,0);
    pdf.save("INGECOP-5003");
    //window.print("INGECOP-5001.pdf");
}
