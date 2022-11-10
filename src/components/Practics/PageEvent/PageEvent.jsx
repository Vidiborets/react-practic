import { PageTitle } from './PageTitle/PageTitle';
import { EventBoard } from './EventBoard/EventBoard';
import events from 'data/upcomingevents.json';
import { Container } from 'components/App/App.styled';
export const PageEvent = () => {
  return (
    <Container>
      <PageTitle title="24th Core Worlds Coalition Conference" />
      <EventBoard events={events} />
    </Container>
  );
};
