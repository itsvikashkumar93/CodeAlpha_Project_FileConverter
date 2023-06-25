var newImage, showImg;

function loadFile(event) {
    showImg = document.getElementById("showImg");

    showImg.src = URL.createObjectURL(event.target.files[0]);

    newImage = new Image();
    newImage.src = URL.createObjectURL(event.target.files[0]);

    showImg.onload = function () {
        URL.revokeObjectURL(showImg.src); // free memory
    };
};

// Download pdf
function pdfDown() {
    var doc = new jsPDF();
    var imgWidth = doc.internal.pageSize.getWidth();
    var imgHeight = showImg.height * imgWidth / showImg.width;
    doc.addImage(newImage, 'JPEG', 0, 0, imgWidth, imgHeight);
    doc.save('ImgToPDF.pdf'); // rename
}