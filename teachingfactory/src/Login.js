import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import './Style.css';

const Login = () => {
    document.title = "Login";
    return(
        <div className='bodyloginregister'>
            <Link to="/"><img src={require('./image/Frame.png')} alt="" className='backtolanding'/></Link>
            <div className='signin'>
                <p className='headerlogin'>Login</p>
                <form action='' method='POST'>
                    <input type={Text} name={'emaillogin'} placeholder={'Email'} className='emaillogin'></input>
                    <Link to=""><input type={'password'} name={'pwlogin'} placeholder={'Password'} className='pwlogin'></input></Link>
                    <Link to="Afterlogin"><input type={'submit'} name={'submitlogin'} value={'Login'} id='1' className='kotaklogin'></input></Link>
                    <p className='toregistertext'>Don't have an account ? Klik <Link to="Register" className='clickhere'><b>Here</b></Link></p>                    
                </form>
            </div>
        </div>
    );
}
export default Login;