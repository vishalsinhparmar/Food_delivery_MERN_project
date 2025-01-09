import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { showUserList } from './Apibaseurl';

export default function OrderList() {
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);

  const fetchUsers = async () => {
    try {
      const res = await showUserList();
      if (res.success === true) {
        setUsers(res.data);
      }
    } catch (err) {
      console.error('Error fetching users:', err.response);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div className="py-8 px-6 bg-gray-100 min-h-screen">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-800">Order List</h1>
        <p className="text-gray-600">Details about the order list</p>
      </div>

      <div className="overflow-x-auto shadow-lg rounded-lg bg-white">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-gray-200 text-gray-800 uppercase text-sm font-medium">
              <th className="px-6 py-4">User</th>
              <th className="px-6 py-4">Username</th>
              <th className="px-6 py-4">Email</th>
              <th className="px-6 py-4">Verified</th>
              <th className="px-6 py-4">User ID</th>
            </tr>
          </thead>
          <tbody>
            {users?.map((user) => (
              <tr
                key={user._id}
                className="hover:bg-gray-100 border-b transition duration-200"
              >
                <td className="px-6 py-4">
                  <img
                    src={user.filepath}
                    alt={user.username}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                </td>
                <td className="px-6 py-4 text-gray-700">{user.username}</td>
                <td className="px-6 py-4 text-gray-700">{user.email}</td>
                <td className="px-6 py-4">
                  {user.isVerified ? (
                    <span className="text-green-600 font-medium">Verified</span>
                  ) : (
                    <span className="text-red-500 font-medium">Not Verified</span>
                  )}
                </td>
                <td
                  onClick={() => navigate(`/admin/Product-detail/${user._id}`)}
                  className="px-6 py-4 text-blue-600 cursor-pointer underline hover:text-blue-800"
                >
                  {user._id}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
