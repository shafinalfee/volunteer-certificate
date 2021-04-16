const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')
const nameInput = document.getElementById('name')
const insInput = document.getElementById('ins')
const downloadBtn = document.getElementById('download-btn')

 


const image = new Image()
image.src = 'volunteer-01.jpg'
image.onload = function(){
      drawImage()

}

function drawImage(){
    ctx.drawImage(image, 0, 2,canvas.width,canvas.height)
    ctx.strokeStyle = "blue";
    ctx.moveTo(655, 260);
    ctx.lineTo(655, 260);
    ctx.stroke();
    
    ctx.font = "30px Adorable"
    ctx.fillStyle='#FFFFFF'
    ctx.textAlign = "center"; 
    ctx.fillText(nameInput.value, 655, 260)
    ctx.moveTo(410, 330);
    ctx.lineTo(410, 330);
    ctx.stroke();
    ctx.font = "22px Adorable"
    ctx.fillText(insInput.value, 410, 325)
    
}
nameInput.addEventListener('input',function(){
    drawImage()
})
insInput.addEventListener('input',function(){
    drawImage()
})
 


downloadBtn.addEventListener('click', function(){
   downloadBtn.href = canvas.toDataURL()
   downloadBtn.download = true
})
