import { useState } from 'react';
import { GoogleLogo } from 'phosphor-react'
import { GoogleAuthProvider, signInWithPopup, User } from 'firebase/auth';
import { auth } from '../../services/firebase'
import './styles.scss'



export function Signin() {

  const [user, setUser] = useState<User>({} as User);

  function handleGoogleSignin() {
    const provider = new GoogleAuthProvider();

    signInWithPopup(auth, provider)
      .then((result) => {        
        setUser(result.user)
      })
      .catch((error) => {
        console.log(error)
      })
  }



  return (
    <div className="container" >

      <div className='user'>
        {user.photoURL && <img src={user.photoURL} alt='perfil-foto'/>}
        <strong>{user.displayName}</strong>
        <small>{user.email}</small>
      </div>


      { !user.emailVerified && <h2>Acesso via google</h2> }

      <button type="button" className="button" onClick={handleGoogleSignin}>
        <GoogleLogo />
        Login with google
      </button>
    </div>
  )
}