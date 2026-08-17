import React from 'react'
import "./user.css"

const User = () => {
  return (
    <div className='userTable'>
       <button type="button" className="btn btn-primary"> Add user
        <i className="fa-solid fa-user-plus"></i>
       </button>
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
                          <td className='actionsButtons'>
                            <button type="button" className="btn btn-info">
                                     <i className="fa-solid fa-pen-to-square"></i>
                            </button>
                     
                             <button type="button" className="btn btn-danger">   
                                <i className="fa-solid fa-trash" ></i>
                        
                                </button>
                        
                             </td>
                        </tr>
                    </tbody>
              </table>
    </div>
  )
}

export default User
