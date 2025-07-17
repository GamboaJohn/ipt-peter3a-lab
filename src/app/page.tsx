"use client";
import Link from "next/link"; 
import { use, useEffect, useState } from "react";

interface User {
  id: number;
  name: string | null;
  email: string  | null;
  address: string | null;
  createdAt: string | null;
  updatedAt: string | null;
}

export default function HomePage() {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    async function fetchUsers() {
      try {
        const response = await fetch("/api/users");
        if (!response.ok) {
          throw new Error("Failed to fetch users");
        }
        const data = await response.json() as User[]; 
        setUsers(data);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    }
    void fetchUsers();
  }, []);


  return (
 <main className="bg-white p-6">
    <div className="overflow-x-auto">
      <table className="min-w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            <th className="border border-gray-300 px-4 py-2 text-center font-semibold ">ID</th>
            <th className="border border-gray-300 px-4 py-2 text-center font-semibold">Name</th>
            <th className="border border-gray-300 px-4 py-2 text-center font-semibold">Email</th>
            <th className="border border-gray-300 px-4 py-2 text-center font-semibold">Address</th>
            <th className="border border-gray-300 px-4 py-2 text-center font-semibold">createdAt</th>
            <th className="border border-gray-300 px-4 py-2 text-center font-semibold">updatedAt</th>
          </tr>
        </thead>
        <tbody>
          {users?.map((user, index) => (
            <tr key={user.id || index + 1} className="hover:bg-gray-50">
              <td className="border border-gray-300 px-4 py-2">{user.id ? (index + 1) : (index + 1)}</td>
              <td className="border border-gray-300 px-4 py-2">{user.name}</td>
              <td className="border border-gray-300 px-4 py-2">{user.email}</td>
              <td className="border border-gray-300 px-4 py-2">{user.address}</td>
              <td className="border border-gray-300 px-4 py-2">{user.createdAt}</td>
              <td className="border border-gray-300 px-4 py-2">{user.updatedAt}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </main>
  );

}
