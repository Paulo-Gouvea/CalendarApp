import { Container } from "./styles";
import { useAssignment } from "../../hooks/assignment";
import { Assignemnt } from "../../interfaces";

import { Calendar as CustomCalendar, dateFnsLocalizer } from 'react-big-calendar';
import format from "date-fns/format";
import getDay from "date-fns/getDay";
import { ptBR } from "date-fns/locale";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";

import "react-big-calendar/lib/css/react-big-calendar.css";

const locales = {
    "pt-BR": ptBR
};
const localizer = dateFnsLocalizer({
    format,
    parse,
    startOfWeek,
    getDay,
    locales
});

const lang = {
    week: 'Semana',
    work_week: 'Semana de trabalho',
    day: 'Dia',
    month: 'Mês',
    previous: 'Mês Anterior',
    next: 'Próximo Mês',
    today: 'Hoje',
    agenda: 'Lista de Tarefas',
  
    showMore: (total: number) => `+${total} tarefas`,
}

interface CalendarProps {
    calendarOnClick: () => void;
}

export function Calendar({
    calendarOnClick
}: CalendarProps){
    const { assignments, setSelectedAssignment } = useAssignment();

    const handleCalendarEvent = (event: Assignemnt) => {
        setSelectedAssignment(event)

        calendarOnClick();
    }

    return (
        <Container>
            <CustomCalendar 
                localizer={localizer}
                events={assignments}
                culture={"pt-BR"}
                messages={lang}
                onSelectEvent={(event: Assignemnt) => handleCalendarEvent(event)}
            />
        </Container>
    );
}