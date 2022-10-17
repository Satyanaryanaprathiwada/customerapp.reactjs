import './index.css'

const UserProfile = props => {
  const {userDetails,showProfile} = props
  const {imageUrl, name, role,uniqueNo} = userDetails
  const showUserProfile = () => {
    showProfile(uniqueNo)
  }
  
  return (
    <li onClick={showUserProfile} className="user-card-container">
      <img src={imageUrl} className="profile-pic" alt="profile-pic" />
      <div className="user-details-container">
        <h1 className="user-name"> {name} </h1>
        <p className="user-designation"> {role} </p>
      </div>
    </li>
  )
}
export default UserProfile
