import { getAllSponsors, getEvents, getOrganizers, getSpeakers } from '@/controllers';
import { Footer, GradientBackground, Header } from '@/components';

import { Hero, InfoSection, Meetups, Speakers, Sponsor, Staff, Upcoming } from '@/app/_components';

export const revalidate = 86400; // 24 hours

const Home = async () => {
  const sponsorsData = getAllSponsors();
  const organizersData = getOrganizers();
  const eventsData = getEvents(4);
  const speakersData = getSpeakers();

  const [sponsors, organizers, events, speakers] = await Promise.all([sponsorsData, organizersData, eventsData, speakersData]);

  return (
    <section>
      <GradientBackground />
      <Header />
      <Hero />
      <Sponsor sponsors={sponsors} />
      <Upcoming events={events} />
      <div className="container px-4 md:px-0 mx-auto flex flex-col lg:flex-row lg:items-center mt-20 gap-8">
        <Meetups events={events} />
        <InfoSection />
      </div>
      <Staff organizers={organizers} />
      <Speakers speakers={speakers} />
      <Footer />
    </section>
  );
};

export default Home;
