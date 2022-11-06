import { createContext, ReactNode, useContext } from "react";

interface AssignmentContextData {
   assignments: {
      title: string;
      start: Date;
      end: Date;
  }[]
}
 
interface AssignmentProviderProps {
   children: ReactNode;
}
 
export const AssignmentContext = createContext({} as AssignmentContextData);
 
function AssignmentProvider({ children }: AssignmentProviderProps){
   const date = new Date();
   const assignments = [
      {
          title: 'ssssss',
          start: new Date('2022-11-03 15:00:00'),
          end: new Date('2022-11-04 15:00:00'),
      },
      {
          title: 'Alimentar',
          start: date,
          end: date,
      },
      {
          title: 'Estudar',
          start: date,
          end: date,
      },
      {
          title: 'Estudar',
          start: date,
          end: date,
      },
      {
          title: 'Estudar',
          start: date,
          end: date,
      },
    ]

   return (
       <AssignmentContext.Provider value={{
         assignments,
       }} >
           {children}
       </AssignmentContext.Provider>
   )
}
 
function useAssignment(){
   const context = useContext(AssignmentContext);
 
   return context;
}
 
export { AssignmentProvider, useAssignment };