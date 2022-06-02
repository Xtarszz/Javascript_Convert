import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import './Style.css';

const Afterlogin = () => {
    document.title = "After Login";
    return(
        <div className='body'>
            <div>
                <img src={require('./image/Foto Profil.png')} alt="" className='FotoProfil' onClick={menuToggle}/>
                <img src={require('./image/Keranjang.png')} alt="" className='keranjang'/>
                <img src={require('./image/Frame.png')} alt="" className='frame'/>
                <p className="p1">With us, you can shop online & help</p>
                <p className="p2">save your high street at the same time</p>
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
            <div className="frame1">
                <img src={require('./image/Book 1.jpg')} alt="" className="book1"/>
                <img src={require('./image/Book 2.jpg')} alt="" className="book2"/>
                <img src={require('./image/Book 3.jpg')} alt="" className="book3"/>
            </div>
            <div className="rectangle1">
                <p className="judul1">Sebuah Seni untuk Bersikap Bodo Amat</p>
                <p className="by1">By. Mark Manson</p>
                <p className="deskripsi1">"Selama beberapa tahun belakangan, Mark Manson—melalui blognya yang sangat populer tel ...</p>
                <p className="harga1">Rp. 49.000</p>
                <div className="borderadd1"></div>
                <p className="addcart1">Add to Cart</p>
            </div>
            <div className="rectangle2">
                <p className="judul2">Warm Heart</p>
                <p className="by2">By. Valerie Patkar</p>
                <p className="deskripsi2">Dua insan manusia harus terjebak dalam dilema cinta yang memaksa salah satu dari mereka pergi me ...</p>
                <p className="harga2">Rp. 59.000</p>
                <div className="borderadd2"></div>
                <p className="addcart2">Add to Cart</p>
            </div>
            <p className="list">List Book</p>
            <Link to="/Detailbook"><div className='klik'></div></Link>
            <div>
                <img src={require('./image/Book 4.jpg')} alt="" className="book4"/>
                <img src={require('./image/Book 5.jpg')} alt="" className="book5"/>
                <img src={require('./image/Book 6.jpg')} alt="" className="book6"/>
                <img src={require('./image/Book 7.jpg')} alt="" className="book7"/>
                <img src={require('./image/Book 8.jpg')} alt="" className="book8"/>
                <p className="judul4">My Own Private Mr. Cool</p>
                <p className="by4">By. Indah Hanaco</p>
                <p className="harga4">Rp. 75.000</p>
                <p className="judul5">Garis Waktu : Sebuah Perjalanan</p>
                <p className="by5">By. Fiersa Besari</p>
                <p className="harga5">Rp. 49.300</p>
                <p className="judul6">Home Cooking ala Xander's Kitche ...</p>
                <p className="by6">By. Junita</p>
                <p className="harga6">Rp. 168.000</p>
                <p className="judul7">Panduan Resmi Tes Cpns Cat 20 ...</p>
                <p className="by7">By. Raditya Panji Umbara</p>
                <p className="harga7">Rp. 184.000</p>
                <p className="judul8">Ayahku (Bukan) Pembohong</p>
                <p className="by8">By. Tere Liye</p>
                <p className="harga8">Rp. 130.000</p>
            </div>
        </div>
    );
}

function menuToggle(){
    const toggleMenu = document.querySelector('.menu');
    toggleMenu.classList.toggle('active')
}

export default Afterlogin;