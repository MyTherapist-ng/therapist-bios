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


/**
 * Returns the user context, which is an object containing the user's id, name, and email.
 * The user context is managed by the UserProvider component and is used to share
 * the user data between components.
 *
 * @returns {User | undefined} The user context object, or undefined if the user is not logged in.
 * @example
 * import { useUser } from "@/app/context/userContext";
 *
 * function MyComponent() {
 *   const user = useUser();
 *   return (
 *     <div>
 *       {user ? (
 *         <p>Hello, {user.name}!</p>
 *       ) : (
 *         <p>You are not logged in.</p>
 *       )}
 *     </div>
 *   );
 * }
 */
export function useUser() {
  return useContext(UserContext);
}

/**
 * UserProvider is a context provider component that manages the state of the user.
 * It provides the user object and a function to update it to all its descendant components.
 *
 * @param {UserProviderProps} props - The props object containing children components.
 * @param {ReactNode} props.children - The components that will have access to the user context.
 */

export function UserProvider({ children }: UserProviderProps) {
  const [user, setUser] = useState<User | null>(null);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}
