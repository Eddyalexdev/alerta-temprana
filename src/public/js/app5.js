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
        let dom = document.getElementById('dom').value;
        let nit = document.getElementById('nit').value;
        let tel = document.getElementById('tel').value;
        let rl = document.getElementById('rl').value;

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
        let p21  = document.getElementById('p21').value;
        let p22  = document.getElementById('p22').value;
        let p23  = document.getElementById('p23').value;
        let p24  = document.getElementById('p24').value;
        let p25  = document.getElementById('p25').value;
        let p26  = document.getElementById('p26').value;
        let p27  = document.getElementById('p27').value;
        let p28  = document.getElementById('p28').value;
        let p29  = document.getElementById('p29').value;
        let p30  = document.getElementById('p30').value;
        let p31  = document.getElementById('p31').value;
        let p32  = document.getElementById('p32').value;
        let p33  = document.getElementById('p33').value;
        let p34  = document.getElementById('p34').value;
        let p35  = document.getElementById('p35').value;
        let p36  = document.getElementById('p36').value;
        let p37  = document.getElementById('p37').value;
        let p38  = document.getElementById('p38').value;
        let p39  = document.getElementById('p39').value;
        let p40  = document.getElementById('p40').value;
        let p41  = document.getElementById('p41').value;
        let p42  = document.getElementById('p42').value;
        let p43  = document.getElementById('p43').value;
        let p44  = document.getElementById('p44').value;
        let p45  = document.getElementById('p45').value;
        let p46  = document.getElementById('p46').value;
        let p47  = document.getElementById('p47').value;
        let p48  = document.getElementById('p48').value;
        let p49  = document.getElementById('p49').value;
        let p50  = document.getElementById('p50').value;
        let pp1  = document.getElementById('pp1').value;
        let pp2  = document.getElementById('pp2').value;
        let pp3  = document.getElementById('pp3').value;
        let pp4  = document.getElementById('pp4').value;
        let pp5  = document.getElementById('pp5').value;
        let pp6  = document.getElementById('pp6').value;
        let pp7  = document.getElementById('pp7').value;
        let pp8  = document.getElementById('pp8').value;
        let pp9  = document.getElementById('pp9').value;
        let pp10 = document.getElementById('pp10').value;
        let pp11 = document.getElementById('pp11').value;
        let pp12 = document.getElementById('pp12').value;
        let pp13 = document.getElementById('pp13').value;
        let pp14 = document.getElementById('pp14').value;
        let pp15 = document.getElementById('pp15').value;
        let pp16 = document.getElementById('pp16').value;
        let pp17 = document.getElementById('pp17').value;
        let pp18 = document.getElementById('pp18').value;
        let pp19 = document.getElementById('pp19').value;
        let pp20 = document.getElementById('pp20').value;
        let pp21 = document.getElementById('pp21').value;
        let pp22 = document.getElementById('pp22').value;
        let pp23 = document.getElementById('pp23').value;
        let pp24 = document.getElementById('pp24').value;
        let pp25 = document.getElementById('pp25').value;
        let pp26 = document.getElementById('pp26').value;
        let pp27 = document.getElementById('pp27').value;

        generatePDF(lugar,fecha,cop,dom,nit,tel,rl,p1,p2,p3,p4,p5,p6,p7,p8,p9,p10,p11,p12,p13,p14,p15,p16,p17,p18,p19,p20,p21,p22,p23,p24,p25,p26,p27,p28,p29,p30,p31,p32,p33,p34,p35,p36,p37,p38,p39,p40,p41,p42,p43,p44,p45,p46,p47,p48,p49,p50,pp1,pp2,pp3,pp4,pp5,pp6,pp7,pp8,pp9,pp10,pp11,pp12,pp13,pp14,pp15,pp16,pp17,pp18,pp19,pp20,pp21,pp22,pp23,pp24,pp25,pp26,pp27);
    })

});

async function generatePDF(lugar,fecha,cop,dom,nit,tel,rl,p1,p2,p3,p4,p5,p6,p7,p8,p9,p10,p11,p12,p13,p14,p15,p16,p17,p18,p19,p20,p21,p22,p23,p24,p25,p26,p27,p28,p29,p30,p31,p32,p33,p34,p35,p36,p37,p38,p39,p40,p41,p42,p43,p44,p45,p46,p47,p48,p49,p50,pp1,pp2,pp3,pp4,pp5,pp6,pp7,pp8,pp9,pp10,pp11,pp12,pp13,pp14,pp15,pp16,pp17,pp18,pp19,pp20,pp21,pp22,pp23,pp24,pp25,pp26,pp27){
    const image = await loadImage("images/formulario5-2023.jpg");
    const signatureImage = signaturePad.toDataURL();

    const pdf = new jsPDF('p', 'pt', 'letter');

    pdf.addImage(image, 'PNG', 45, 53, 525, 682); //w / h
    pdf.addImage(signatureImage, 'PNG', 102, 585, 300, 60);

    pdf.setFontSize(12);

    pdf.setFontSize(8);
    pdf.text(lugar, 122, 163);
    pdf.text(fecha, 205, 163);

    pdf.text(cop, 205, 181);
    pdf.text(dom, 115, 200);

    pdf.text(nit, 115, 219);
    pdf.text(tel, 363, 219);

    // Libro 1
    pdf.text(rl, 48, 314);
    pdf.text(p1, 212, 314);
    pdf.text(p2, 415, 314);
    pdf.text(p3, 447, 314);
    pdf.text(p4, 490, 314);

    // Libro 2
    pdf.text(p5, 48, 328);
    pdf.text(p6, 212, 328);
    pdf.text(p7, 415, 328);
    pdf.text(p8, 447, 328);
    pdf.text(p9, 490, 328);

    // Libro 3
    pdf.text(p10, 48, 340);
    pdf.text(p11, 212, 340);
    pdf.text(p12, 415, 340);
    pdf.text(p13, 447, 340);
    pdf.text(p14, 490, 340);

    // Libro 4
    pdf.text(p15, 48, 355);
    pdf.text(p16, 212, 355);
    pdf.text(p17, 415, 355);
    pdf.text(p18, 447, 355);
    pdf.text(p19, 490, 355);

    // Libro 5
    pdf.text(p20, 48, 370);
    pdf.text(p21, 212, 370);
    pdf.text(p22, 415, 370);
    pdf.text(p23, 447, 370);
    pdf.text(p24, 490, 370);
    
    // Libro 6
    pdf.text(p25, 48, 385);
    pdf.text(p26, 212, 385);
    pdf.text(p27, 415, 385);
    pdf.text(p28, 447, 385);
    pdf.text(p29, 490, 385);

    //libro 7
    pdf.text(p30, 48, 398);
    pdf.text(p31, 212, 398);
    pdf.text(p32, 415, 398);
    pdf.text(p33, 447, 398);
    pdf.text(p34, 490, 398);

    // Comentario
    pdf.text(p35, 129, 425);
    pdf.text(p36, 214, 425);
    pdf.text(p37, 234, 425);

    // Forma 1
    pdf.text(p38, 48, 473);
    pdf.text(p39, 212, 473);
    pdf.text(p42, 256, 473);
    pdf.text(p40, 415, 473);
    pdf.text(p41, 448, 473);
    pdf.text(p43, 490, 473);

    // Forma 2
    pdf.text(p44, 48, 488);
    pdf.text(p45, 212, 488);
    pdf.text(p48, 256, 488);
    pdf.text(p46, 415, 488);
    pdf.text(p47, 448, 488);
    pdf.text(p49, 490, 488);

    // Forma 3 
    pdf.text(p50, 48, 503);
    pdf.text(pp1, 212, 503);
    pdf.text(pp4, 256, 503);
    pdf.text(pp2, 415, 503);
    pdf.text(pp3, 448, 503);
    pdf.text(pp5, 490, 503);

    // Forma 4
    pdf.text(pp6, 48, 517);
    pdf.text(pp7, 212, 517);
    pdf.text(pp10, 256, 517);
    pdf.text(pp8, 415, 517);
    pdf.text(pp9, 448, 517);
    pdf.text(pp11, 490, 517);

    // Forma 5
    pdf.text(pp12, 48, 531);
    pdf.text(pp13, 212, 531);
    pdf.text(pp16, 256, 531);
    pdf.text(pp14, 415, 531);
    pdf.text(pp15, 448, 531);
    pdf.text(pp17, 490, 531);

    // Forma 6
    pdf.text(pp18, 48, 545);
    pdf.text(pp19, 212, 545);
    pdf.text(pp22, 256, 545);
    pdf.text(pp20, 415, 545);
    pdf.text(pp21, 448, 545);
    pdf.text(pp23, 490, 545);

    // Nombre del Repositorio
    pdf.text(pp24, 111, 575);
    pdf.text(pp26, 199, 575);
    pdf.text(pp25, 294, 575);
    pdf.text(pp27, 212, 594);

    pdf.setFillColor(0,0,0);
    pdf.save("INGECOP-5005");
    //window.print("INGECOP-5001.pdf");
}
