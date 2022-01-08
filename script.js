var penumpang = ['adi', 'siska'];
var tambahPenumpang = function (namaPenumpang, penumpang) {
    //jika angkot kosong
    if (penumpang.length == 0) {
        //tambah penumpang menggunakan array push
        penumpang.push(namaPenumpang)
        return penumpang;
    }else{
        for (let i = 0; i < penumpang.length; i++) {
            if (penumpang == undefined) {
                penumpang[i] = namaPenumpang;
                return penumpang;
            }else if (penumpang[i] == namaPenumpang) {
                console.log(penumpang + " telah ada di dalam");
            }else if (penumpang.length - 1) {
                penumpang.push(namaPenumpang)
                return penumpang;
            }
            
        }







     /*   //menentukan kursi kosong
        for (var i = 0; i < penumpang.length; i++ ) {

            if (penumpang[i] == undefined ) {

                penumpang[i] = namaPenumpang;
                return penumpang;
            }else  if (penumpang[i] == namaPenumpang) {
                console.log("nama penumpang telah ada")
            }else if (penumpang.length - 1) {
                
                penumpang.push(namaPenumpang);

                return penumpang;

            }
        }*/
    }
}