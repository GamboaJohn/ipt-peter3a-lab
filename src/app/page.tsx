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
    <main className="bg-white">
    <code>{JSON.stringify(users, null, 2)}</code>
    </main>
  );

}
