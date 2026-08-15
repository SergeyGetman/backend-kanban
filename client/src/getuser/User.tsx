import React from 'react'
import "./user.css"

const User = () => {
  return (
    <div className='userTable'>
       <button type="button" className="btn btn-primary">Primary</button>
              <table className='table table-bordered'>
                    <thead>
                      <tr>
                        <th scope='col'> SOL</th>
                        <th scope='col'> NAME</th>
                        <th scope='col'> Email</th>
                        <th scope='col'> Adress</th>
                        <th scope='col'> Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                        <tr>
                          <td>1</td>
                          <td>John</td>
                          <td>john@gmail.com</td>
                          <td>Canada</td>
                          <td>Update | Delete</td>
                        </tr>
                    </tbody>
              </table>
    </div>
  )
}

export default User
