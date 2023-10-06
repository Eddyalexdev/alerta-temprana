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
    const image = await loadImage("images/formulario5.jpg");
    const signatureImage = signaturePad.toDataURL();

    const pdf = new jsPDF('p', 'pt', 'letter');

    pdf.addImage(image, 'PNG', 0, 0, 565, 792);
    pdf.addImage(signatureImage, 'PNG', 350, 705, 300, 60);

    pdf.setFontSize(12);

    

    pdf.setFontSize(8);
    pdf.text(lugar, 55, 230);
    pdf.text(fecha, 120, 230);

    pdf.text(cop, 175, 195);
    pdf.text(dom, 122, 220);
    pdf.text(nit, 122, 220);

    pdf.text(tel, 175, 238);
    pdf.text(rl, 175, 238);

    pdf.text(p1, 335, 400);
    pdf.text(p2, 365, 400);
    pdf.text(p3, 395, 400);
    pdf.text(p4, 425, 400);
    pdf.text(p5, 455, 400);
    pdf.text(p6, 515, 400);
    pdf.text(p7, 545, 400);
    pdf.text(p8, 100, 420);
    pdf.text(p9, 230, 420);
    pdf.text(p10, 305, 420);
    pdf.text(p11, 335, 420);
    pdf.text(p12, 365, 420);
    pdf.text(p13, 395, 420);
    pdf.text(p14, 425, 420);
    pdf.text(p15, 455, 420);
    pdf.text(p16, 515, 420);
    pdf.text(p17, 545, 420);
    pdf.text(p18, 100, 440);
    pdf.text(p19, 230, 440);
    pdf.text(p20, 305, 440);
    pdf.text(p21, 335, 440);
    pdf.text(p22, 365, 440);
    pdf.text(p23, 395, 440);
    pdf.text(p24, 425, 440);
    pdf.text(p25, 455, 440);
    pdf.text(p26, 515, 440);
    pdf.text(p27, 545, 440);
    pdf.text(p28, 100, 460);
    pdf.text(p29, 230, 460);
    pdf.text(p30, 305, 460);
    pdf.text(p31, 335, 460);
    pdf.text(p32, 365, 460);
    pdf.text(p33, 395, 460);
    pdf.text(p34, 425, 460);
    pdf.text(p35, 455, 460);
    pdf.text(p36, 515, 460);
    pdf.text(p37, 545, 460);
    pdf.text(p38, 100, 545);
    pdf.text(p39, 230, 545);
    pdf.text(p40, 305, 545);
    pdf.text(p41, 335, 545);
    pdf.text(p42, 365, 545);
    pdf.text(p43, 395, 545);
    pdf.text(p44, 425, 545);
    pdf.text(p45, 455, 545);
    pdf.text(p46, 485, 545);
    pdf.text(p47, 515, 545);
    pdf.text(p48, 545, 545);
    pdf.text(p49, 100, 565);
    pdf.text(p50, 230, 565);
    pdf.text(pp1, 305, 565);
    pdf.text(pp2, 335, 565);
    pdf.text(pp3, 365, 565);
    pdf.text(pp4, 395, 565);
    pdf.text(pp5, 425, 565);
    pdf.text(pp6, 455, 565);
    pdf.text(pp7, 485, 565);
    pdf.text(pp8, 515, 565);
    pdf.text(pp9, 545, 565);
    // Forma 3
    pdf.text(pp10, 100, 585);
    pdf.text(pp11, 230, 585);
    pdf.text(pp12, 305, 585);
    pdf.text(pp13, 335, 585);
    pdf.text(pp14, 365, 585);
    pdf.text(pp15, 395, 585);
    pdf.text(pp16, 425, 585);
    pdf.text(pp17, 455, 585);
    pdf.text(pp18, 485, 585);
    pdf.text(pp19, 515, 585);
    pdf.text(pp20, 545, 585);
    pdf.text(pp21, 545, 585);
    pdf.text(pp22, 545, 585);
    pdf.text(pp23, 545, 585);
    pdf.text(pp24, 545, 585);
    pdf.text(pp25, 545, 585);
    pdf.text(pp26, 545, 585);
    pdf.text(pp27, 545, 585);

    pdf.setFillColor(0,0,0);
    pdf.save("INGECOP-5002");
    //window.print("INGECOP-5001.pdf");
}
