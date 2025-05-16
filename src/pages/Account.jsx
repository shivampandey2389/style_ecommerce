
import { accInfo } from '../../constant'
import { useAuthContext } from '../context/authContext'

const Account = () => {
  const {account} = useAuthContext();
  return (
    <section className='account-sec'>
      <div className="inner-sec-acc">
        <div className='acc-img'>
          <img src={account.photoURL} alt="" height="200px" width="200px" />
        </div>
        <div className='acc-info'>
          <h1>{account.displayName}</h1>
          <div className='acc-list-col'>
            {
              accInfo.map((item)=>(
              <div className='acc-list' key={item.id}>
              <i className={item.iconClass}></i>
                <div className='acc-name-other-info'>
                <h2>{item.name}</h2>
                <p>{item.otherInfo}</p>
              </div>
              </div>
              ))
            }

          </div>
        </div>
      </div>
    </section>
  )
}

export default Account