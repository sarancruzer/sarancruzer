import speaker_1 from '@assets/img/event/event-speaker-1.jpg';
import speaker_2 from '@assets/img/event/event-speaker-2.jpg';
import speaker_3 from '@assets/img/event/event-speaker-3.jpg';
import speaker_4 from '@assets/img/event/event-speaker-4.jpg';
import speaker_5 from '@assets/img/event/event-speaker-5.jpg';
import speaker_6 from '@assets/img/event/event-speaker-6.jpg';
import speaker_7 from '@assets/img/event/event-speaker-7.jpg';
import speaker_8 from '@assets/img/event/event-speaker-8.jpg';
import speaker_9 from '@assets/img/event/event-speaker-9.jpg';
import speaker_10 from '@assets/img/event/event-speaker-10.jpg';
// politician event
import polity_event_1 from '@assets/img/event/10/event-1.jpg';
import polity_event_2 from '@assets/img/event/10/event-2.jpg';
import polity_event_3 from '@assets/img/event/10/event-3.jpg';

const event_data = [
  // home events 
  {
    id:1,
    title:'UX Design Conference',
    speakers:[speaker_1,speaker_2],
    date:'October 16, 2022',
    delay:'.3s',
    home:true,
  },
  {
    id:2,
    title:'Business Development',
    speakers:[speaker_3,speaker_4],
    date:'March 10, 2022',
    delay:'.5s',
    home:true,
  },
  {
    id:3,
    title:'Networking and Data Science',
    speakers:[speaker_5,speaker_6],
    date:'April 12, 2022',
    delay:'.7s',
    home:true,
  },
  {
    id:4,
    title:'Digital Marketing',
    speakers:[speaker_7,speaker_8],
    date:'January 15, 2022',
    delay:'.9s',
    home:true,
  },
  {
    id:5,
    title:'Webinar for Developers',
    speakers:[speaker_9,speaker_10],
    date:'May 16, 2022',
    delay:'1.2s',
    home:true,
  },
  // home politician
  {
    id:6,
    img:polity_event_1,
    event_thumb_title:'Neal	Houston',
    event_thumb_subtitle:'City mayor',
    tag:'Conference',
    date:'July 17, 2022',
    title:'Cultural Festival & Concert',
    location:'42 nostrand ave, brooklyn. NY',
    home_politician:true,
  },
  {
    id:7,
    img:polity_event_2,
    event_thumb_title:'Neal	Houston',
    event_thumb_subtitle:'City mayor',
    tag:'Tourist Guide',
    date:'July 18, 2022',
    title:'Rising stars obscure heirs reality',
    location:'45 nostrand ave, brooklyn. NY',
    home_politician:true,
  },
  {
    id:8,
    img:polity_event_3,
    event_thumb_title:'Neal	Houston',
    event_thumb_subtitle:'City mayor',
    tag:'Celebration',
    date:'July 20, 2022',
    title:'BUILD architecture Awards',
    location:'48 nostrand ave, brooklyn. NY',
    home_politician:true,
  },
]

export default event_data;