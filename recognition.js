//Tạo hàm bất đồng bộ
const start = async function(){
    //Tải Trained model
    await faceapi.nets.ssdMobilenetv1.loadFromUri('http://localost:8080');

    //Lấy ảnh
    const inputMLT = document.getElementById('mltImg');
    //Lay kich thuoc anh
    const displaySizeMLT = {width: inputMLT.width, heigh: inputMLT.heigh};
    displaySizeMLT.heigh = 346;
    console.log(displaySizeMLT)
    //Lay khung ve
    const mltCanvas = document.getElementById('mltCanvas');
    //Thay kich thuoc khung ve anh phu hop
    faceapi.matchDimensions(mltCanvas, displaySizeMLT);
    
    mltCanvas.getContext("2d").drawImage(inputMLT, 0, 0);
    //Nhan dang guong mat
    const recognitionFace = await faceapi.detectAllFaces(inputMLT);
    //Ve khung nhan dang guong mat
    faceapi.draw.drawDetections(mltCanvas, recognitionFace);
}

start();