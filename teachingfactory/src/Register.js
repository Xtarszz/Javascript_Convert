import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import './Style.css';

const Register = () => {
    document.title = "Register";
    return(
        <div className='bodyloginregister'>
            <Link to="/"><img src={require('./image/Frame.png')} alt="" className='backtolanding'/></Link>
            <div className='signup'>
                <p className='headerlogin'>Register</p>
                <form action='' method='POST'>
                    <input type={Text} name={'emailregister'} placeholder={'Email'} className='emaillogin'></input>
                    <input type={'password'} name={'pwregister'} placeholder={'Password'} className='pwlogin'></input>
                    <input type={Text} name={'registername'} placeholder={'Full Name'} className='registername'></input>
                    <Link to="Afterlogin"><input type={'submit'} name={'submitregister'} value={'Register'} id='2' className='kotakregister'></input></Link>
                    <p className='tologintext'>Already have an account ? Klik <Link to="Login" className='clickhere'><b>Here</b></Link></p>                    
                </form>
            </div>
        </div>
    );
}
export default Register;