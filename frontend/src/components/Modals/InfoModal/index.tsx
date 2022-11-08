import { useState } from "react";
import { format } from "date-fns";
import { Container, Content } from "./styles";

import { useAssignment } from "../../../hooks/assignment";
import { useToggleInfoModal } from "../../../hooks/toggleInfoModal";

import { ModalButton } from "../../Buttons/ModalButton";
import { Assignemnt } from "../../../interfaces";

interface InfoModalProps {
    isOpen: boolean;
    closeOnClick: () => void;
}

export function InfoModal({
    isOpen,
    closeOnClick
}: InfoModalProps){
    if(isOpen) {
        const [activateUpdate, setActivateUpdate] = useState(false)
        const [title, setTitle] = useState<string>('');
        const [description, setDescription] = useState<string>('')
        const [start, setStart] = useState<string>('')
        const [end, setEnd] = useState<string>('')

        const { selectedAssignment, deleteAssignment, updateAssignment } = useAssignment();
        const { setIsInfoModalOpen } = useToggleInfoModal();

        const handleDeleteAssignment = () => {
            deleteAssignment.mutate();

            setIsInfoModalOpen((oldState) => !oldState)
        }

        const handleActivateUpdate = () => {
            setActivateUpdate((oldState) => !oldState)
        }

        const handleUpdateAssignment = () => {
            let assignment = {} as Assignemnt;

            if(title === ''|| description === '' || start === '' || end === '') return;

            assignment = {
                title,
                description,
                start: new Date(start),
                end: new Date(end)
            }

            updateAssignment.mutate(assignment)

            setTitle('');
            setDescription('')
            setStart('')
            setEnd('')

            setIsInfoModalOpen(oldState => !oldState);
        }

        return (
        <Container>
            <Content>
                <header>
                    <p>
                        CONFIGURAÇÕES DE TAREFA
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
                    <div className="entity-container">
                        <div>
                            <p>TÍTULO</p>
                            <p>{selectedAssignment.title}</p>
                        </div>

                        {
                            activateUpdate &&
                            <input 
                                type="text"
                                placeholder="Digite o novo título" 
                                value={title}
                                onChange={event => setTitle(event.target.value)}
                            />
                        }
                    </div>

                    <div className="entity-container">
                        <div>
                            <p>DESCRIÇÃO</p>
                            <p>{selectedAssignment.description}</p>
                        </div>

                        {
                            activateUpdate &&
                            <input 
                                type="text"
                                placeholder="Digite a nova descrição" 
                                value={description}
                                onChange={event => setDescription(event.target.value)}
                            />
                        }
                    </div>

                    <div className="entity-container">
                        <div>
                            <p>INÍCIO DA TAREFA</p>
                            <p>{`${format(new Date(selectedAssignment.start), 'dd/MM/yyyy')} - ${format(new Date(selectedAssignment.start), 'HH:mm:ss')}`}</p>
                        </div>

                        {
                            activateUpdate &&
                            <div>
                                <p>Selecione quando a tarefa irá começar:</p>
                                <input 
                                    type="datetime-local" 
                                    value={start}
                                    onChange={event => setStart(event.target.value)}
                                />
                            </div>
                        }
                    </div>

                    <div className="entity-container">
                        <div>
                            <p>FINAL DA TAREFA</p>
                            <p>{`${format(new Date(selectedAssignment.end), 'dd/MM/yyyy')} - ${format(new Date(selectedAssignment.end), 'HH:mm:ss')}`}</p>
                        </div>

                        {
                            activateUpdate &&
                            <div>
                                <p>Selecione quando a tarefa irá terminar:</p>
                                <input 
                                    type="datetime-local" 
                                    value={end}
                                    onChange={event => setEnd(event.target.value)}
                                />
                            </div>
                        }
                    </div>
                </section>

                <footer>
                    <ModalButton 
                        onClick={handleDeleteAssignment}
                        title={'APAGAR TAREFA'}
                        buttonColor={'#ed3419'}
                    />

                    {
                        activateUpdate ?
                        <ModalButton 
                            onClick={handleUpdateAssignment}
                            title={'CONFIRMAR'}
                            buttonColor={'#e69b00'}
                        />
                        :
                        <ModalButton 
                            onClick={handleActivateUpdate}
                            title={'ATUALIZAR TAREFA'}
                            buttonColor={'#0066ff'}
                        />
                    }
                </footer>
            </Content>
        </Container>
    )
    } else {
        return null;
    }
}