import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import './Style.css';

const Incrementdetailbook = () => {
    document.title = "Increment Detail Book";
    return(
        <div className='body'>
            <div>
                <img src={require('./image/Foto Profil.png')} alt="" className='FotoProfil'/>
                <img src={require('./image/Keranjang.png')} alt="" className='keranjang'/>
                <img src={require('./image/Background 1.png')} alt="" className='elipse'/>
                <img src={require('./image/1.png')} alt="" className='satu'/>
                <Link to="Incrementafterlogin"><img src={require('./image/Frame.png')} alt="" className='frame'/></Link>
            </div>
            <div>
                <div className='detailbookdiv'></div>
                <img src={require('./image/Book 4.jpg')} alt="" className="detailbookimage"/>
                <p className='judulbuku'>My Own Private Mr Cool</p>
                <p className='detailby'>By. Indah Hanaco</p>
                <p className='publicationdate'>Publication Date</p>
                <p className='tanggal'>August 2018</p>
                <p className='pagestitle'>Pages</p>
                <p className='pages'>264</p>
                <p className='isbn'>ISBN</p>
                <p className='isbnnumber'>9786020395227</p>
                <p className='prices'>Prices</p>
                <p className='harga'>Rp. 75.000</p>
            </div>
            <div>
                <p className='about'>About This Book</p>
                <p className='paragraf'>Bagi Heidy Theapila, latar belakang keluarga membuatnya tak mudah menemukan pasangan sejiwa. Tapi, ceritanya berbeda dengan Mirza. Heidy meyakini lelaki itu mencintainya dengan tulus. Namun, keyakinannya tumbang. Pertemuan mereka bukan cuma karena campur tangan Allah semata. Melainkan karena skenario rapi yang berkaitan dengan materi. Marah sekaligus patah hati, Heidy membatalkan rencana masa depannya dan memilih kabur ke Italia. Langkahnya mungkin tak dewasa, tapi Heidy butuh ruang untuk meninjau ulang semua rencana dalam hidupnya. Lalu, Allah memberinya kejutan. <br/><br/><br/>Dalam pelayaran menyusuri Venesia, Heidy bertemu raksasa bermata biru. Graeme MacLeod, pria yang mencuri napasnya di pertemuan pertama mereka. Meski ketertarikan di antara mereka begitu besar, Heidy tidak berniat menjalin asmara singkat. Graeme harus dilupakan. Ketika apa yang terjadi di Venesia tidak bisa tetap ditinggal di Venesia, Heidy mulai goyah. Apalagi Graeme ternyata lelaki gigih yang mengejarnya hingga ke Jakarta dan tak putus asa tatkala ditolak. Meski akhirnya satu per satu rahasia kelam lelaki itu terbuka, Heidy justru kian jatuh cinta. Pertanyaannya, apakah cinta memang benar-benar mampu menyatukan mereka?</p>
            </div>
            <div>
                <div>
                    <div className='klikaddcart'></div>
                    <div className='kotakaddcart'></div>
                </div>
                <p className='addcartteks'>Add Cart</p>
                <img src={require('./image/Keranjang 2.png')} alt="" className="keranjang2"/>
            </div>
        </div>
    );
}

export default Incrementdetailbook;