import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import './Style.css';

const Profile = () => {
    document.title = "Profile";
    return(
        <div className='body'>
            <div>
                <img src={require('./image/Foto Profil.png')} alt="" className='FotoProfil' onClick={menuToggle}/>
                <Link to="Afterlogin"><img src={require('./image/Frame.png')} alt="" className='frame'/></Link>
            </div>
            <p className='profilheader'>Profile</p>
            <div className='bgprofil'>
                <img src={require('./image/Email.png')} alt="" className='emailimage'/>
                <img src={require('./image/Gender.png')} alt="" className='genderimage'/>
                <img src={require('./image/Telpon.png')} alt="" className='telponimage'/>
                <img src={require('./image/Map.png')} alt="" className='mapimage'/>
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
                <p className='emailaddress'>egigans@gmail.com</p>
                <p className='emailtext'>Email</p>
                <p className='gender'>Male</p>
                <p className='gendertext'>Gender</p>
                <p className='phonenumber'>0812-8623-8911</p>
                <p className='phonetext'>Mobile phone</p>
                <p className='address'>Perumahan Permata Bintaro Residence C-3</p>
                <p className='addresstext'>Address</p>
            </div>
            <div>
                <p className='tekseditprofile'>Edit Profile</p>
                <img src={require('./image/Profil Image.png')} alt="" className='profilimage'/>
                <div className='bgeditprofil'></div>
            </div>
            <div>
                <p className='mybooktext'>My Books</p>
                <img src={require('./image/Book 4.jpg')} alt="" className='collectionbookimage1'/>
                <p className='collectionbooktitle1'>My Own Private Mr. Cool</p>
                <p className='collectionbookby1'>By. Indah Hanaco</p>
                <div className='downloadbackground1'></div>
                <p className='downloadtext1'>Download</p>
                <img src={require('./image/Book 1.jpg')} alt="" className='collectionbookimage2'/>
                <p className='collectionbooktitle2'>Sebuah Seni untuk bersikap Bodo A...</p>
                <p className='collectionbookby2'>By. Mark Manson</p>
                <div className='downloadbackground2'></div>
                <p className='downloadtext2'>Download</p>
            </div>
        </div>
    );
}

function menuToggle(){
    const toggleMenu = document.querySelector('.menu');
    toggleMenu.classList.toggle('active')
}

export default Profile;