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
    const image = await loadImage("/images/formulario3.jpg");
    const signatureImage = signaturePad.toDataURL();
    const pdf = new jsPDF('p', 'pt', 'letter');
    pdf.addImage(image, 'PNG', 0, 0, 625, 792);
    pdf.addImage(signatureImage, 'PNG', 350, 735, 300, 60);
    pdf.setFontSize(12);
    pdf.setFontSize(8);

    pdf.text(lugar, 125, 170);
    pdf.text(fecha, 195, 170);
    pdf.text(nit, 475, 170);

    pdf.text(cop, 175, 195);
    pdf.text(dom, 122, 220);
    pdf.text(rl, 175, 238);

    //
    pdf.text(tel, 170, 253);
    pdf.text(cor, 375, 253);

    // middle items
    pdf.text(fi, 320, 270);
    pdf.text(cd, 355, 270);
    pdf.text(em, 405, 270);
    pdf.text(us, 455, 270);

    pdf.text(sp, 500, 303);

    pdf.text(p1, 500, 360);
    pdf.text(p2, 500, 375);
    pdf.text(p3, 500, 390);
    pdf.text(p4, 500, 405);
    pdf.text(p5, 500, 420);
    pdf.text(p6, 500, 435);
    pdf.text(p7, 500, 450);
    pdf.text(p8, 500, 465);

    pdf.text(p9, 500, 480);
    pdf.text(p10, 500, 500);

    //
    pdf.text(p11, 500, 565);
    pdf.text(p12, 500, 580);
    pdf.text(p13, 500, 595);
    pdf.text(p14, 500, 610);
    pdf.text(p15, 500, 633);
    pdf.text(p16, 500, 652);
    pdf.text(p17, 500, 673);
    pdf.text(p18, 500, 693);

    pdf.setFillColor(0,0,0);
    pdf.save("INGECOP-5002");
    //window.print("INGECOP-5001.pdf");
}
