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
        let dire = document.getElementById('dire').value;
        let nit = document.getElementById('nit').value;
        let rl = document.getElementById('rl').value;
        let tel = document.getElementById('tel').value;
        let cor = document.getElementById('cor').value;
        let lb1 = document.getElementById('lb1').value;
        let nr1 = document.getElementById('nr1').value;
        let m1 = document.getElementById('m1').value;
        let p1 = document.getElementById('p1').value;
        let p2 = document.getElementById('p2').value;
        let p3 = document.getElementById('p3').value;
        let p4 = document.getElementById('p4').value;
        let p5 = document.getElementById('p5').value;
        let ot = document.getElementById('ot').value;
        let ot2 = document.getElementById('ot2').value;
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
        let ot3  = document.getElementById('ot3').value;
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
        let ot4  = document.getElementById('ot3').value;
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
        generatePDF(lugar,fecha,cop,dire,nit,rl,tel,cor,lb1,nr1,m1,p1,p2,p3,p4,p5,ot,ot2,p6,p7,p8,p9,p10,p11,p12,p13,p14,p15,p16,p17,p18,p19,p20,p21,p22,p23,p24,p25,ot3,p26,p27,p28,p29,p30,p31,p32,p33,p34,p35,ot4,p36,p37,p38,p39,p40,p41,p42,p43,p44,p45,p46,p47,p48,p49,p50,pp1,pp2,pp3,pp4,pp5,pp6,pp7,pp8,pp9,pp10,pp11,pp12,pp13,pp14,pp15,pp16,pp17,pp18,pp19,pp20);
    })

});

async function generatePDF(lugar,fecha,cop,dire,nit,rl,tel,cor,lb1,nr1,m1,p1,p2,p3,p4,p5,ot,ot2,p6,p7,p8,p9,p10,p11,p12,p13,p14,p15,p16,p17,p18,p19,p20,p21,p22,p23,p24,p25,ot3,p26,p27,p28,p29,p30,p31,p32,p33,p34,p35,ot4,p36,p37,p38,p39,p40,p41,p42,p43,p44,p45,p46,p47,p48,p49,p50,pp1,pp2,pp3,pp4,pp5,pp6,pp7,pp8,pp9,pp10,pp11,pp12,pp13,pp14,pp15,pp16,pp17,pp18,pp19,pp20){
    const image = await loadImage("/images/formulario-1-2023.jpg");
    const signatureImage = signaturePad.toDataURL();
    const pdf = new jsPDF('landscape');
    pdf.addImage(image, 'PNG', 18, 15, 255, 180);
    pdf.addImage(signatureImage, 'PNG', 179, 157, 100, 15);
    pdf.setFontSize(12);
    pdf.setFontSize(8);

    pdf.text(lugar, 48, 56);
    pdf.text(fecha, 83, 56);
    pdf.text(nit, 230, 56);

    pdf.text(cop, 97, 62);
    pdf.text(dire, 48, 68);
    pdf.text(rl, 54, 75);
    pdf.text(tel, 70, 83);
    pdf.text(cor, 214, 83);

    // Libro 1
    pdf.text(lb1, 23, 107);
    pdf.text(nr1, 92, 107);
    pdf.text(m1, 140, 107);
    pdf.text(p1, 153, 107);
    pdf.text(p2, 170, 107);
    pdf.text(p3, 186, 107);
    pdf.text(p4, 200, 107);
    pdf.text(p5, 214, 107);
    pdf.text(ot, 228, 107);
    pdf.text(p6, 242, 107);
    pdf.text(p7, 257, 107);

    // Libro 2
    pdf.text(p8, 23, 113);
    pdf.text(p9, 92, 113);
    pdf.text(p10, 140, 113);
    pdf.text(p11, 153, 113);
    pdf.text(p12, 170, 113);
    pdf.text(p13, 186, 113);
    pdf.text(p14, 200, 113);
    pdf.text(p15, 214, 113);
    pdf.text(ot2, 228, 113);
    pdf.text(p16, 242, 113);
    pdf.text(p17, 257, 113);

    // Libro 3
    pdf.text(p18, 23, 118);
    pdf.text(p19, 92, 118);
    pdf.text(p20, 140, 118);
    pdf.text(p21, 153, 118);
    pdf.text(p22, 170, 118);
    pdf.text(p23, 186, 118);
    pdf.text(p24, 200, 118);
    pdf.text(p25, 214, 118);
    pdf.text(ot3, 228, 118);
    pdf.text(p26, 242, 118);
    pdf.text(p27, 257, 118);

    // Libro 4
    pdf.text(p28, 23, 123);
    pdf.text(p29, 92, 123);
    pdf.text(p30, 140, 123);
    pdf.text(p31, 153, 123);
    pdf.text(p32, 170, 123);
    pdf.text(p33, 186, 123);
    pdf.text(p34, 200, 123);
    pdf.text(p35, 214, 123);
    pdf.text(ot4, 228, 123);
    pdf.text(p36, 242, 123);
    pdf.text(p37, 257, 123);

    // Forma 1
    pdf.text(p38, 23, 147);
    pdf.text(p39, 92, 147);
    pdf.text(p40, 140, 147);
    pdf.text(p41, 153, 147);
    pdf.text(p42, 170, 147);
    pdf.text(p43, 186, 147);
    pdf.text(p44, 200, 147);
    pdf.text(p45, 214, 147);
    pdf.text(p46, 228, 147);
    pdf.text(p47, 242, 147);
    pdf.text(p48, 257, 147);

    // Forma 2
    pdf.text(p49, 23, 152);
    pdf.text(p50, 92, 152);
    pdf.text(pp1, 140, 152);
    pdf.text(pp2, 153, 152);
    pdf.text(pp3, 170, 152);
    pdf.text(pp4, 186, 152);
    pdf.text(pp5, 200, 152);
    pdf.text(pp6, 214, 152);
    pdf.text(pp7, 228, 152);
    pdf.text(pp8, 242, 152);
    pdf.text(pp9, 257, 152);

    // Forma 3
    pdf.text(pp10, 23, 157);
    pdf.text(pp11, 92, 157);
    pdf.text(pp12, 140, 157);
    pdf.text(pp13, 153, 157);
    pdf.text(pp14, 170, 157);
    pdf.text(pp15, 186, 157);
    pdf.text(pp16, 200, 157);
    pdf.text(pp17, 214, 157);
    pdf.text(pp18, 228, 157);
    pdf.text(pp19, 242, 157);
    pdf.text(pp20, 257, 157);

    pdf.setFillColor(0,0,0);
    pdf.save("INGECOP-5001");
}
