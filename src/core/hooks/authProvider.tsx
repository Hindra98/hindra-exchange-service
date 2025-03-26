// AuthProvider.tsx
import { createContext, useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

type AuthContextType = {
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
  verify2fa: (token: string) => Promise<void>;
  logout: () => void;
};

const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [requires2fa, setRequires2fa] = useState(false);
  const navigate = useNavigate();

  const login = async (email: string, password: string) => {
    const response = await fetch('/api/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    });
    
    const data = await response.json();
    
    if (data.requires_2fa) {
      setRequires2fa(true);
    } else {
      setUser(data.user);
      navigate('/dashboard');
    }
  };

  // ... autres méthodes

  return (
    <AuthContext.Provider value={{ user, login, verify2fa, logout }}>
      {children}
    </AuthContext.Provider>
  );
};