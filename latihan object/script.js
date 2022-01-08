//membuat latihan onject
function Taxi(sopir, tujuan, penumpang, upah) {
    this.sopir = sopir,
    this.tujuan = tujuan,
    this.penumpang = penumpang,
    this.upah = upah,

    this.penumpangNaik = function(nama) {
        this.penumpang.push(nama)
        return this.penumpang;
    }
    this.penumpangTurun = function(nama, biaya) {
        if (this.penumpang.length === 0) {
            console.log("taxi kosong!")
            return false;
        }
        
        //menghitung penumpang
        for (var i = 0; i < this.penumpang.length; i++) {
            //jika nama penumpang ada di dalam arr pemumpang
           if (this.penumpang[i] == nama){
               //ubah menjadi undefined/ turun
            this.penumpang[i] = undefined;
            this.upah += biaya;
            return this.penumpang;
           }

           if (this.penumpang[i] - 1) {
               this.penumpang[i].push(nama)
               return this. penumpang;
           }
        }



    }
}

var taxi1 = new Taxi('dika', ['jakara', 'bogor'],[]);