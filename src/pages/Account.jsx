
import { accInfo } from '../../constant'
import { useAuthContext } from '../context/authContext'
import { signOut } from 'firebase/auth';
import { auth } from '../firebase/firebase';
const Account = () => {
  const {account,logout} = useAuthContext();
  const handleSignOut = () =>{
    signOut(auth).then(()=>{
      logout();
    }).catch((error)=>{
      console.log(error)
    })
  }
  return (
    <section className='account-sec'>
      <div className="inner-sec-acc">
        <div className='acc-img'>
          <img src={account.photoURL} alt="profile" height="200px" width="200px" />
        </div>
        <div className='acc-info'>
          <h1>{account.displayName}</h1>
          <div className='acc-list-col'>
            {
              accInfo.map((item)=>{
                if(item.name === "Log out"){
                  return(
                  <div className='acc-list' key={item.id} onClick={handleSignOut}>
                    <i className={item.iconClass}></i>
                    <div className='acc-name-other-info'>
                    <h2>{item.name}</h2>
                    <p>{item.otherInfo}</p>
                  </div>
                  </div>
                  )
                }
                return(
                  <div className='acc-list' key={item.id}>
                  <i className={item.iconClass}></i>
                    <div className='acc-name-other-info'>
                    <h2>{item.name}</h2>
                    <p>{item.otherInfo}</p>
                  </div>
                  </div>
                )
              })
            }

          </div>
        </div>
      </div>
    </section>
  )
}

export default Account