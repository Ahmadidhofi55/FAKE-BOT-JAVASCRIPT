const pertayaan = document.getElementById("pertanyaan");
const jawaban = document.getElementById("jawaban");
const loaders = document.getElementById("loaders");
const container = document.getElementsByClassName("container");

let init = 0;

const bot1 = (data) => {
    return [
        "Perkenalkan nama saya ornotbot. siapa nama kamu?",
        `halo ${data?.nama}, berapa usia kamu?`,
        `ohhh ${data?.usia}, hobby kamu apa ya?`,
        `wowww kita sama aku juga hobby ${data?.hobby}, btw punya pacar nggak?`,
        `ohhh ${data?.pacar}, ya udah kalau gitu udahan yah?`,
    ]
}
// array 0
//memasukkan array 0 keadalam pertanyaan
pertayaan.innerHTML = bot1()[0];

let userdata = []

function botstart(){
     if (jawaban.value.length < 1) return Swal.fire({
         icon: 'error',
         title: 'Oops...',
         text: 'Silahkan isi jawaban dulu!',
     })
    init++
    if(init == 1){
        botdelay({nama : jawaban.value })
        //pertayaan.innerHTML = "berapa usia kamu?";
    }else if (init === 2){
       botdelay({usia: jawaban.value})
    }else if(init === 3){
     botdelay({hobby: jawaban.value})
    }else if(init ===4){
     botdelay({pacar: jawaban.value})
    }else if(init ===5){
        finis()
    }
    else{
        botend()
    }
}

function botdelay(jawabanuser){
    console.log({
        user: userdata
    })
     loaders.style.display = "block"
     container[0].style.filter = "blur(8px)"
    setTimeout(() => {
        pertayaan.innerHTML = bot1(jawabanuser)[init]
         loaders.style.display = "none"
         container[0].style.filter = "none"
    }, [1000])
       userdata.push(jawaban.value)
    jawaban.value = ""
}

function finis(){
   pertayaan.innerHTML = `Terima kasih telah mampir ke sini ya 😃 ${userdata[0]} kali kali nanti main  ${userdata[2]} bareng ya`
   jawaban.value = "siap terimakasih juga!"
}

function botend(){
     alert(
         `Terimakasih ${userdata[0]} sudah berkunjung, anda akan diarahkan ke halaman utama.`
     )
     window.location.reload()
}