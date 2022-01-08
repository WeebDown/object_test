var aku = {
 //properties
    nama : "Ayaka",
    asal : "bali",
    usia : 21,
//method
    perkenalan : function() {
        return "nama saya " + this.nama + " saya berasal dari " + this.asal + " saya berusia " + this.usia + " tahun";
    }
};

//cara akses method di console adalah namaObject.namaMethod();
//aku.perkenalan();


//latihan with pada objek
//tidak di rekomendasikan penggunaannya
let coba = {
    name : "Ayato",
    umur : 22,
    asal : ['inazuma', "yashiori", "kamisato klan"]
}
with(coba){
    console.log(name),
    console.log(umur),
    console.log(asal[2]),
    console.log(umur, asal[0]);
    console.log("my name is " + name + " i am from " + asal[2] + " present")
}




//testttsts
let name = {
    firstName : "wili",
    lastName : "chad",
    fullName : function () {
        return this.firstName + this.lastName; 
    }
}









// //function with default value
// function alamat(nama, alamat = "unknown") {
//     console.info("nama      : " + nama);
//     console.info("alamat    : " + alamat);
// }

// alamat("annonymous", "annonymous");
// alamat("ayaka");
// alamat("Raiden", "gianyar");