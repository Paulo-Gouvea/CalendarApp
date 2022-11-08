import { useState } from "react";
import { Container, Content } from "./styles";

import { ModalButton } from "../../Buttons/ModalButton";

import { useAssignment } from "../../../hooks/assignment";
import { useToggleFormModal } from "../../../hooks/toggleFormModal";

import { Assignemnt } from "../../../interfaces"
interface FormModalProps {
    isOpen: boolean;
    closeOnClick: () => void;
}

export function FormModal({
    isOpen,
    closeOnClick
}: FormModalProps){
    if(isOpen) {
        const [title, setTitle] = useState<string>('');
        const [description, setDescription] = useState<string>('')
        const [start, setStart] = useState<string>('')
        const [end, setEnd] = useState<string>('')

        const { addAssignment } = useAssignment()
        const { setIsFormModalOpen } = useToggleFormModal()

        const handleCreateAssignment = () => {
            let assignment = {} as Assignemnt;

            if(title === ''|| description === '' || start === '' || end === '') return;

            assignment = {
                title,
                description,
                start: new Date(start),
                end: new Date(end)
            }

            addAssignment.mutate(assignment)

            setTitle('');
            setDescription('')
            setStart('')
            setEnd('')

            setIsFormModalOpen(oldState => !oldState);
        }

        return (
        <Container>
            <Content>
                <header>
                    <p>
                        CRIAÇÃO DE TAREFA
                    </p>

                    <div
                        onClick={closeOnClick}
                    >
                        <p>
                            X
                        </p>
                    </div>
                </header>

                <section>
                    <input 
                        type="text" 
                        placeholder="Digite o titulo da tarefa"
                        value={title}
                        onChange={event => setTitle(event.target.value)}
                    />

                    <input 
                        type="text" 
                        placeholder="Digite a descrição da tarefa"
                        value={description}
                        onChange={event => setDescription(event.target.value)}
                    />

                    <div>
                        <p>Selecione quando a tarefa irá iniciar:</p>
                        <input 
                            type="datetime-local" 
                            value={start}
                            onChange={event => setStart(event.target.value)}
                        />
                    </div>

                    <div>
                        <p>Selecione quando a tarefa irá terminar:</p>
                        <input 
                            type="datetime-local" 
                            value={end}
                            onChange={event => setEnd(event.target.value)}
                        />
                    </div>
                </section>

                <footer>
                    <ModalButton 
                        onClick={handleCreateAssignment}
                        title={'CRIAR TAREFA'}
                        buttonColor={'#00c04b'}
                    />
                </footer>
            </Content>
        </Container>
    )
    } else {
        return null;
    }
}