import { createContext, ReactNode, useContext, useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { AssignmentContextData, Assignemnt } from "../interfaces"
interface AssignmentProviderProps {
   children: ReactNode;
}
 
export const AssignmentContext = createContext({} as AssignmentContextData);
 
function AssignmentProvider({ children }: AssignmentProviderProps){
  const [assignments, setAssignments] = useState<Assignemnt[]>([]);
  
  const { status, error, data } = useQuery({
    queryKey: [],
    queryFn: () =>
      fetch('http://localhost:3000/assignment/')
      .then(res => res.json())
      .then(data => data as Assignemnt[])
  })

  console.log(data);

   useEffect(() => {
    if (status === 'success'){
      setAssignments(data)
    }
   }, [status, data])

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