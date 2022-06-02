import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import './Style.css';

const Detailbook = () => {
    document.title = "Detail Book";
    return(
        <div className='body'>
            <div>
                <img src={require('./image/Foto Profil.png')} alt="" className='FotoProfil' onClick={menuToggle}/>
                <img src={require('./image/Keranjang.png')} alt="" className='keranjang'/>
                <Link to="Afterlogin"><img src={require('./image/Frame.png')} alt="" className='frame'/></Link>
            </div>
            <div className='action'>
                <div className='menu'>
                    <ul>
                        <li><img src={require('./image/Profile.PNG')} alt=""/><Link to="Profile">Profile</Link></li>
                        <li><span className='line'></span></li>
                        <li><img src={require('./image/Log Out.PNG')} alt=""/><Link to="/">Log Out</Link></li>
                    </ul>
                </div>
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
                    <div className='klikaddcart' onClick={popup}></div>
                    <div className='kotakaddcart'></div>
                </div>
                <p className='addcartteks'>Add Cart</p>
                <img src={require('./image/Keranjang 2.png')} alt="" className="keranjang2"/>
            </div>
            <Link to='Incrementdetailbook'>
                <div className="popupbg">
                    <p className="popuptext">The product is successfully added to the cart</p>
                </div>
            </Link>
            <div className="closepopup"></div>
        </div>
    );
}

function menuToggle(){
    const toggleMenu = document.querySelector('.menu');
    toggleMenu.classList.toggle('active')
}
function popup(){
    const clickaddcart = document.querySelector(".klikaddcart");
    const bgpopup = document.querySelector(".popupbg");
    const popupclose = document.querySelector(".closepopup");
    clickaddcart.addEventListener("click", ()=>{
        bgpopup.classList.add("show");
    });
    popupclose.addEventListener("click", ()=>{
        bgpopup.classList.remove("show");
    });
}


export default Detailbook;