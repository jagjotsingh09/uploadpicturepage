import React , { Component } from 'react'
import './App.css'
// import Profile from './Profile'
export class App extends Component {
  state={
    profileImg : 'https://cdn.iconscout.com/icon/free/png-256/account-avatar-profile-human-man-user-30448.png'
  }
  imageHandler = (e) => {
    const reader = new FileReader();
    reader.onload=() => {
      if(reader.readyState ===2)
      this.setState({profileImg: reader.result})
    }
    reader.readAsDataURL(e.target.files[0])
  }
  render() {
    const {profileImg} = this.state
    return (
      <div className="page">
        <div className="container">
          <h1 className="heading" >Upload a Profile Picture</h1>
            <div className="img-holder" key="profileImg" >
              <img src= {profileImg} alt="" id="img" className="img"/>
            </div>
            <p className="img-info">*Image Size should not exceed 3MB*</p>
            <input type="file" name="image-upload" id="input" accept="image/*" maxFileSize="1000000" onChange={this.imageHandler}/>
            <div className="label">
              <label htmlFor="input" className="image-upload">
              <p className="imgSelectBtn">Choose Your Photo </p>
              </label>
              <label className="deleteBtn" onClick={() =>
              profileImg(profileImg.filter((e) => e !== profileImg))
              }>
              <p className="imgDeleteBtn">Delete Image</p></label>
            </div>
        </div>
      </div>
    )
  }
}

export default App
