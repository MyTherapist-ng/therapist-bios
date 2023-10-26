"use client"
import { ReactNode, createContext, useContext, useState } from "react";

interface User {
  id: number;
  name: string;
  email: string;
}

interface UserProviderProps {
  children: ReactNode;
}

const UserContext = createContext<any | undefined>(undefined);


export function useUser() {
  return useContext(UserContext);
}

export function UserProvider({ children }: UserProviderProps) {
  const [user, setUser] = useState<User | null>(null);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}
