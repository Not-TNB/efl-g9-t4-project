AOS.init({ duration: 800 });

var changi = document.getElementById('changi')
var gardens = document.getElementById('gardens')
var orchard = document.getElementById('orchard')
var mbs = document.getElementById('mbs')
var img = document.getElementById('image')

function adjust() {
    img.innerHTML = ''
    img.style.height = '80vh'
    img.style.aspectRatio = '1.414 / 1'
    img.style.padding = '0'
    img.style.margin = 'auto auto 2em auto'
}

function changiClick() {
    img.style.backgroundImage = "url('ChangiDesc.png')"
    adjust()
}

function gardensClick() {
    img.style.backgroundImage = "url('GardensDesc.png')"
    adjust()
}

function orchardClick() {
    img.style.backgroundImage = "url('OrchardDesc.png')"
    adjust()
}

function mbsClick() {
    img.style.backgroundImage = "url('MBSDesc.png')"
    adjust()
}