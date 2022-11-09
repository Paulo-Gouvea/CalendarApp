import { createContext, ReactNode, useContext, useState, useEffect } from "react";
import { useQuery, useMutation } from "@tanstack/react-query";
import { AssignmentContextData, Assignemnt } from "../interfaces"
import axios from "axios";
interface AssignmentProviderProps {
   children: ReactNode;
}
 
export const AssignmentContext = createContext({} as AssignmentContextData);
 
function AssignmentProvider({ children }: AssignmentProviderProps){
  const [assignments, setAssignments] = useState<Assignemnt[]>([]);
  const [selectedAssignment, setSelectedAssignment] = useState<Assignemnt>({} as Assignemnt);
  
  const { status, data } = useQuery({
    queryKey: [],
    queryFn: () =>
      fetch('http://localhost:3000/assignment/')
      .then(res => res.json())
      .then(data => data as Assignemnt[])
  })

  const addAssignment = useMutation((assignment: Assignemnt) =>
      axios.post('http://localhost:3000/assignment/', assignment)
  )

  const deleteAssignment = useMutation(() =>
      axios.delete(`http://localhost:3000/assignment/${selectedAssignment.id}`)
  )

  const updateAssignment = useMutation((assignment: Assignemnt) =>
      axios.put(`http://localhost:3000/assignment/${selectedAssignment.id}`, assignment)
  )

   useEffect(() => {
    if (status === 'success'){
      setAssignments(data)
    }
   }, [status, data, assignments])

   return (
       <AssignmentContext.Provider value={{
         assignments,
         selectedAssignment,
         setSelectedAssignment,
         addAssignment,
         deleteAssignment,
         updateAssignment
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