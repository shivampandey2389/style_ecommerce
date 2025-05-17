import { accInfo } from '../../constant';
import { useAuthContext } from '../context/authContext';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase/firebase';

const Account = () => {
  const { account, logout } = useAuthContext();

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        logout();
        console.log("User signed out successfully.");
      })
      .catch((error) => {
        console.error("Error signing out:", error);
      });
  };

  return (
    <section className="account-sec">
      <div className="inner-sec-acc">
        <div className="acc-img">
          {account?.photoURL ? (
            <img src={account.photoURL} alt="profile" height="200px" width="200px" />
          ) : (
            <p>No profile image available</p>
          )}
        </div>

        <div className="acc-info">
          <h1>{account?.displayName || "Guest"}</h1>
          <div className="acc-list-col">
            {accInfo.map((item) => (
              <div 
                className="acc-list" 
                key={item.id} 
                onClick={item.name === "Log out" ? handleSignOut : undefined}
              >
                <i className={item.iconClass}></i>
                <div className="acc-name-other-info">
                  <h2>{item.name}</h2>
                  <p>{item.otherInfo}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Account;