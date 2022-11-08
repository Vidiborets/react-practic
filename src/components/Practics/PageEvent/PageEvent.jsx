import PageTitle from './PageTitle/PageTitle';
import EventBoard from './EventBoard/EventBoard';
import events from 'data/upcoming-events.json';
export default function PageEvent() {
  return (
    <>
      <PageTitle title="24th Core Worlds Coalition Conference" />
      <EventBoard events={events} />
    </>
  );
}
