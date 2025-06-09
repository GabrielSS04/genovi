import { createContext, useContext, useState } from "react";

export type Ovelha = {
  nome: string;
  raca: string;
  sexo: string;
  dataNascimento: string;
  criador: string;
  statusReprodutivo: string;
};

type OvelhaContextType = {
  ovelhas: Ovelha[];
  adicionarOvelha: (nova: Ovelha) => void;
};

const OvelhaContext = createContext<OvelhaContextType | null>(null);

export function OvelhaProvider({ children }: { children: React.ReactNode }) {
  const [ovelhas, setOvelhas] = useState<Ovelha[]>([]);

  const adicionarOvelha = (nova: Ovelha) => {
    setOvelhas(prev => [...prev, nova]);
  };

  return (
    <OvelhaContext.Provider value={{ ovelhas, adicionarOvelha }}>
      {children}
    </OvelhaContext.Provider>
  );
}

export function useOvelhas() {
  const context = useContext(OvelhaContext);
  if (!context) throw new Error("useOvelhas deve ser usado dentro de OvelhaProvider");
  return context;
}
