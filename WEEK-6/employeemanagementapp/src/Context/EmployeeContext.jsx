import { createContext } from "react";

export const EmployeeContext = createContext();

const employees = [
  {
    id: 101,
    name: "Elakiya",
    department: "IT",
    salary: 50000,
  },
  {
    id: 102,
    name: "Arun",
    department: "HR",
    salary: 45000,
  },
  {
    id: 103,
    name: "Priya",
    department: "Finance",
    salary: 60000,
  },
];

export function EmployeeProvider({ children }) {
  return (
    <EmployeeContext.Provider value={employees}>
      {children}
    </EmployeeContext.Provider>
  );
}