import { Component } from 'react'
import UserProfile from '../userProfile'
import UserDetails from '../userdetails'
import { FaSearch } from "react-icons/fa"
import { GoDiffAdded } from "react-icons/go"
import { TbMinusVertical } from "react-icons/tb"
import { BsArrowDownUp } from "react-icons/bs"
import { IoMdArrowDropdown } from "react-icons/io"
import { ReactDialogBox } from 'react-js-dialog-box'
import 'react-js-dialog-box/dist/index.css'


import './index.css'

const initialUserDetailsList = [
    {
      uniqueNo: 1,
      imageUrl: 'https://assets.ccbp.in/frontend/react-js/esther-howard-img.png',
      name: 'Esther Howard',
      role: 'esther123@gmail.com',
      username:'ester123',
      phone:'+91998765676',
      dob:'jan-2-1998',
      city:'delhi',
      state:'Delhi',
      firstname:'Esther',
      lastname:'Howard',
      gender:"male",
      address:"142,Bay Area,Shahpura",
      landamrk:"Champion School",
    },
    {
      uniqueNo: 2,
      imageUrl: 'https://assets.ccbp.in/frontend/react-js/floyd-miles-img.png',
      name: 'Floyd Miles',
      role: 'miles123@gmail.com',
      username:'ester123',
      phone:'998765676',
      dob:'jan-3-1998',
      city:'Hyderbad',
      state:'Telangana',
      firstname:'Floyd',
      lastname:'miles',
      gender:"female",
      address:"142,Banjara Hills",
      landamrk:"Delhi Public School",
    },
    {
      uniqueNo: 3,
      imageUrl: 'https://assets.ccbp.in/frontend/react-js/jacob-jones-img.png',
      name: 'Jacob Jones',
      role: 'jones123@gmail.com',
      username:'ester123',
      phone:'998765676',
      dob:'jan-2-1998',
      city:'Nidadavole',
      state:'Andhra Pradesh',
      firstname:'Jacob',
      lastname:'Jones',
      gender:"female",
      address:"Ambedkar street",
      landamrk:"Delhi Public School",
    },
    {
      uniqueNo: 4,
      imageUrl: 'https://assets.ccbp.in/frontend/react-js/devon-lane-img.png',
      name: 'Devon Lane',
      role: 'lane123@gmail.com',
      username:'ester123',
      phone:'998765676',
      dob:'jan-2-1998',
      city:'Thikkavari Palli',
      state:'Andhra Pradesh',
      firstname:'Devon',
      lastname:'Lane',
      gender:"male",
      address:"142,Banjara Hills",
      landamrk:"Delhi Public School",
    },
  ]

export class Home extends Component {

  state = {
        usersDetailsList: initialUserDetailsList,
        isOpen:false,
        isSearchOn:true,
        showProfileOn:false,
        filterList:initialUserDetailsList,
        searchInput: '',
      }
  openBox = () => {
        this.setState({
          isOpen: true
        })
      }
    
  closeBox = () => {
        this.setState({
          isOpen: false
        })
      }
  
  searchOn = () =>{
      this.setState({
        isSearchOn: false
      })
  } 

  searchClose = () =>{
    this.setState({
      isSearchOn: true
    })
 
} 

showProfile = uniqueNo => {
  const {usersDetailsList} = this.state
  const filteredUsersData = usersDetailsList.filter(
    each => each.uniqueNo === uniqueNo
  )
  this.setState({
    filterList: filteredUsersData,
    showProfileOn:true,
  })
}

onChangeSearchInput = event => {
  this.setState({
    searchInput: event.target.value
  })
}

  render() {
    const {searchInput,usersDetailsList} = this.state
    const searchResults = usersDetailsList.filter(eachUser =>
      eachUser.name.includes(searchInput))
    const {filterList} = this.state
    const data = filterList

    
    return ( 
        <div className="page-body">

            <div className="sidebar"> 
              {this.state.isSearchOn ?   
                (<div className="top-section">
                <h1 className="heading-customer">Customers</h1>
                <div className="search-section">
                  <button className="search-button"><FaSearch onClick={this.searchOn} className="search-icon"/></button>
                  <TbMinusVertical className="horizontal-icon"/>
                  <div>
                  <GoDiffAdded onClick={this.openBox} className="add-button"/>
                  {this.state.isOpen && (
                    <>
                      <ReactDialogBox
                        closeBox={this.closeBox}
                        modalWidth='36%'
                        headerTextColor='#eb9b63'
                        headerHeight='10'
                        closeButtonColor='black'
                        bodyBackgroundColor='white'
                        bodyTextColor='black'
                        bodyHeight='600px'
                        headerText='Add User | Profile Details'
                        
                      >
                        <div className='dailog-box-container'>
                          
                          <div className='input-elements'>
                            <div className='profile-file'>
                            <label className='profile-name' for="myfile">Profile pic</label>
                            <input type="file" id="myfile" name="myfile"/>
                            </div>
                            <input className='inputs' type = "text" placeholder='Username*'/>
                            <input className='inputs' type = "text" placeholder='First Name*'/>
                            <input className='inputs' type = "text" placeholder='Last Name*'/>
                            <input className='inputs' type = "text" placeholder='Password*'/>
                            <input className='inputs' type = "text" placeholder='Confirm Password*'/>
                            <input className='inputs' type = "text" placeholder='Address Line!*'/>
                            <input className='inputs' type = "text" placeholder='Country*'/>
                            <input className='inputs' type = "text" placeholder='State*'/>
                            <input className='inputs' type = "text" placeholder='City*'/>
                            <input className='inputs' type = "text" placeholder='Zip Code*'/>
                          </div>
                          <div className='button-container'>
                                  <button className='button1'>&#10006; Cancel</button>
                                  <button className='button2'>&#x2714; Save</button>
                          </div>
                        </div>
                      </ReactDialogBox>
                    </>
                  )}

                 </div>
              </div>                    
             </div>) : (<div className="search-container">
                      <button className="search-by-button">SearchBy<IoMdArrowDropdown/></button>
                      <FaSearch  className="search-icon" />
                      <input onChange={this.onChangeSearchInput} value={searchInput} className="search-bar" type="search" placeholder="Search here"/> 
                      <button className="close-button" onClick={this.searchClose}>&#x2716;</button>
                  </div>)
                  
                  }
                  
                
                <hr className="hr-line"></hr>
                
                <div className="sort-section">                   
                    <p classname="sort"> <BsArrowDownUp/> Sort by <IoMdArrowDropdown/></p>
                </div>

                
        
                  <ul className="list-container">
                     {searchResults.map(eachUser => (
                        <UserProfile
                        userDetails={eachUser}
                        key={eachUser.uniqueNo}
                        showProfile={this.showProfile}
                        />
                     ))}
                  </ul>
                
            </div>


            <div className="content">

              {this.state.showProfileOn ? (data.map(eachUser => (
                    <UserDetails
                    userDetails={eachUser}
                    key={eachUser.uniqueNo}
                    />                  
                  ))):null}

              
                
                
            </div>
        </div>
    )
  }
}

export default Home