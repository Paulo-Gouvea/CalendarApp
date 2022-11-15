import { createContext, ReactNode, useContext, useState, useEffect } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { AssignmentContextData, Assignemnt } from "../interfaces"
import axios from "axios";
interface AssignmentProviderProps {
   children: ReactNode;
}
 
export const AssignmentContext = createContext({} as AssignmentContextData);
 
function AssignmentProvider({ children }: AssignmentProviderProps){
  const [assignments, setAssignments] = useState<Assignemnt[]>([]);
  const [selectedAssignment, setSelectedAssignment] = useState<Assignemnt>({} as Assignemnt);

  const queryClient = useQueryClient();
  
  const { status, data } = useQuery({
    queryKey: ['assignments', assignments],
    queryFn: () =>
      fetch('http://localhost:3000/assignment/')
      .then(res => res.json())
      .then(data => data as Assignemnt[])
  })

  const addAssignment = useMutation((assignment: Assignemnt) =>
      axios.post('http://localhost:3000/assignment/', assignment), 
      {
        onSuccess: () => {
          queryClient.invalidateQueries(['assignments'])
        }
      }
  )

  const deleteAssignment = useMutation(() =>
      axios.delete(`http://localhost:3000/assignment/${selectedAssignment.id}`),
      {
        onSuccess: () => {
          queryClient.invalidateQueries(['assignments'])
        }
      }
  )

  const updateAssignment = useMutation((assignment: Assignemnt) =>
      axios.put(`http://localhost:3000/assignment/${selectedAssignment.id}`, assignment),
      {
        onSuccess: () => {
          queryClient.invalidateQueries(['assignments'])
        }
      }
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