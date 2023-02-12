import React from 'react'
import "./userinfo.scss"
const UserInfo = () => {
  return (
    <div className='userinfo'>
        <div className="top_info">
           <h2>Information</h2>
         
        </div>
        <div className="bottom_info">
            <div className="bottom_info__left">
                <img src="https://images.pexels.com/photos/1308881/pexels-photo-1308881.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" className="image" />

            </div>
            <div className="bottom_info__right">
              <div className="bottom_info__right-title">
                Lisa Chennaju
              </div>
              <div className="bottom_info__right-items">
              <div className="detailItem">
                  <span className="itemKey">Email:</span>
                  <span className="itemValue">janedoe@gmail.com</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Phone:</span>
                  <span className="itemValue">+1 2345 67 89</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Address:</span>
                  <span className="itemValue">
                    Elton St. 234 Garden Yd. NewYork
                  </span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Country:</span>
                  <span className="itemValue">USA</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Email:</span>
                  <span className="itemValue">janedoe@gmail.com</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Phone:</span>
                  <span className="itemValue">+1 2345 67 89</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Address:</span>
                  <span className="itemValue">
                    Elton St. 234 Garden Yd. NewYork
                  </span>
                </div>
              </div>
            </div>
        </div>
        <button className='userinfo__button'>Edit</button>

    </div>
  )
}

export default UserInfo