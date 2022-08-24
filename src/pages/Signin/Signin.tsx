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
        console.log(result);
        
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


      <h1>Acesse sua conta</h1>

      <span>
        Authenticação social agiliza o processo de Login <br />
        em qualquer aplicação!
      </span>

      <button type="button" className="button" onClick={handleGoogleSignin}>
        <GoogleLogo />
        Entrar com o google
      </button>
    </div>
  )
}