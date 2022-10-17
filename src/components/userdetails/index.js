import { CgProfile } from "react-icons/cg"
import { MdEmail } from "react-icons/md"
import { HiPhone } from "react-icons/hi"
import { TiEdit } from "react-icons/ti"
import { RiDeleteBinLine } from "react-icons/ri"
import './index.css'



const UserDetails = props => {
  const {userDetails} = props
  const {imageUrl, name, role, username, phone, firstname, lastname, gender,dob, city,state,address,landamrk} = userDetails
  
  
  return (
    
        <div>
            <div className='main-container'>
            <img className='profile-picture' src={imageUrl} alt="profile-pic"/>
            <div className='sub-container'>
                <h2 className='name'>{name}</h2>
                <div className='details-container'>
                    <p className='details'><CgProfile/> {username}</p>
                    <p className='details'><MdEmail/> {role}</p>
                    <p className='details'> <HiPhone/> {phone}</p>
                </div>
                <div>
                    <button className="button-edit"><TiEdit/> Edit</button>
                    <button className="button-delete"><RiDeleteBinLine/> Delete Customer </button>
                </div>
            </div>
            </div>
            <hr className="line"/>
            <div className="personal-container">
                <h1 className="personal-header">Personal Details</h1>
                <div className="sub-details-container">
                    <div className="sub-details">
                        <p>First Name</p>
                        <p className="detail">{firstname}</p>
                    </div>
                    <div className="sub-details">
                        <p>last Name</p>
                        <p className="detail">{lastname}</p>
                    </div>
                    <div className="sub-details">
                        <p>Gender</p>
                        <p className="detail">{gender}</p>
                    </div>
                    <div className="sub-details">
                        <p>Date of Birth</p>
                        <p className="detail">{dob}</p>
                    </div>
                </div>
            </div>
            <div className="address-container">
            <h1 className="personal-header">Address</h1>
            <div className="sub">
                    <p>Address Line</p>
                    <p>{address}</p>
                </div>
                
                <div className="sub2">
                    <p>Landmark</p>
                    <p>{landamrk}</p>
                </div>
                <div className="sub">
                    <p>City</p>
                    <p>{city}</p>
                </div>
                <div className="sub2">
                    <p>State</p>
                    <p>{state}</p>
                </div>
            </div>
        </div>
    
  )
}
export default UserDetails