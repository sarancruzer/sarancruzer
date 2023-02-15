// bg images lawyer
import bg_law_1 from '@assets/img/services/4/services-1.jpg';
import bg_law_2 from '@assets/img/services/4/services-2.jpg';
import bg_law_3 from '@assets/img/services/4/services-3.jpg';
import bg_law_4 from '@assets/img/services/4/services-4.jpg';
import bg_law_5 from '@assets/img/services/4/services-5.jpg';
import bg_law_6 from '@assets/img/services/4/services-6.jpg';
// agency service image
import agn_ser_1 from '@assets/img/services/5/services-1.png';
import agn_ser_2 from '@assets/img/services/5/services-2.png';
import agn_ser_3 from '@assets/img/services/5/services-3.png';
// svg icons
import { CreativeFeatureIconFour, CreativeFeatureIconOne, CreativeFeatureIconThree, CreativeFeatureIconTwo, SerIconLawFive, SerIconLawFour, SerIconLawOne, SerIconLawSix, SerIconLawThree, SerIconLawTwo, ServiceIconFour, ServiceIconOne, ServiceIconThree, ServiceIconTwo, StartUpServiceFive, StartUpServiceFour, StartUpServiceOne, StartUpServiceSix, StartUpServiceThree, StartUpServiceTwo } from "../svg";

const service_data = [
  // home services data 
  {
    id:1,
    icon:<ServiceIconOne/>,
    title:'UX/UI Design',
    subtitle:'Hic nesciunt galisum aut dolorem aperiam eum soluta quod ea cupiditate.',
    home:true,
  },
  {
    id:2,
    icon:<ServiceIconTwo/>,
    title:'Development',
    subtitle:'Hic nesciunt galisum aut dolorem aperiam eum soluta quod ea cupiditate.',
    home:true,
  },
  {
    id:3,
    icon:<ServiceIconThree/>,
    title:'Construction',
    subtitle:'Hic nesciunt galisum aut dolorem aperiam eum soluta quod ea cupiditate.',
    home:true,
  },
  {
    id:4,
    icon:<ServiceIconFour/>,
    title:'Appointments',
    subtitle:'Hic nesciunt galisum aut dolorem aperiam eum soluta quod ea cupiditate.',
    home:true,
  },
  // home lawyer service data 
  {
    id:5,
    delay:'.3s',
    bg:bg_law_1,
    icon:<SerIconLawOne/>,
    title:'This is war, and in war the only crime is to lose',
    subtitle:'Quis autem iure qui voluptate velit ess quam molestiae was.',
    home_lawyer:true,
  },
  {
    id:6,
    delay:'.5s',
    bg:bg_law_2,
    icon:<SerIconLawTwo/>,
    title:'Is your business ready for Integration',
    subtitle:'Quis autem iure qui voluptate velit ess quam molestiae was.',
    home_lawyer:true,
  },
  {
    id:7,
    delay:'.7s',
    bg:bg_law_3,
    icon:<SerIconLawThree/>,
    title:'Do injured workers have to be treated',
    subtitle:'Quis autem iure qui voluptate velit ess quam molestiae was.',
    home_lawyer:true,
  },
  {
    id:8,
    delay:'.9s',
    bg:bg_law_4,
    icon:<SerIconLawFour/>,
    title:'Nobis occaecati nobis Repudiamus andaeum.',
    subtitle:'Quis autem iure qui voluptate velit ess quam molestiae was.',
    home_lawyer:true,
  },
  {
    id:9,
    delay:'1.1s',
    bg:bg_law_5,
    icon:<SerIconLawFive/>,
    title:'How Is equity determined in a divorce',
    subtitle:'Quis autem iure qui voluptate velit ess quam molestiae was.',
    home_lawyer:true,
  },
  {
    id:10,
    delay:'1.3s',
    bg:bg_law_6,
    icon:<SerIconLawSix/>,
    title:'Amet massa vel dolor deleni recusand',
    subtitle:'Quis autem iure qui voluptate velit ess quam molestiae was.',
    home_lawyer:true,
  },
  // home agency service
  {
    id:11,
    delay:'.3s',
    img:agn_ser_1,
    title:'Strategy & Research.',
    subtitle:'Our design services starts and ends best in class experience.',
    home_agency:true,
  },
  {
    id:12,
    delay:'.5s',
    img:agn_ser_2,
    title:'UI/UX Analysis',
    subtitle:'Our design services starts and ends best in class experience.',
    home_agency:true,
  },
  {
    id:13,
    delay:'.7s',
    img:agn_ser_3,
    title:'Search Optimization',
    subtitle:'Our design services starts and ends best in class experience.',
    home_agency:true,
  },

  // home startup service
  {
    id:14,
    delay:'.3s',
    icon:<StartUpServiceOne/>,
    title:'Beautiful Pages',
    subtitle:'Understand the business model of your product. Know your customers, value propositions.',
    home_startup:true,
  },
  {
    id:15,
    delay:'.5s',
    icon:<StartUpServiceTwo/>,
    title:'Easy Invoicing',
    subtitle:'Understand the business model of your product. Know your customers, value propositions.',
    home_startup:true,
  },
  {
    id:16,
    delay:'.7s',
    icon:<StartUpServiceThree/>,
    title:'CMS & Style Guide',
    subtitle:'Understand the business model of your product. Know your customers, value propositions.',
    home_startup:true,
  },
  {
    id:17,
    delay:'.9s',
    icon:<StartUpServiceFour/>,
    title:'Manage Expenses',
    subtitle:'Understand the business model of your product. Know your customers, value propositions.',
    home_startup:true,
  },
  {
    id:18,
    delay:'1.1s',
    icon:<StartUpServiceFive/>,
    title:'Powerful Blog',
    subtitle:'Understand the business model of your product. Know your customers, value propositions.',
    home_startup:true,
  },
  {
    id:19,
    delay:'1.3s',
    icon:<StartUpServiceSix/>,
    title:'Expert Support',
    subtitle:'Understand the business model of your product. Know your customers, value propositions.',
    home_startup:true,
  },
  // home creative
  {
    id:20,
    delay:'.3s',
    icon:<CreativeFeatureIconOne/>,
    title:'Collect Website Leads With Embedded',
    subtitle:'Lorem Ipsum is that it more less normal distribution.',
    color:'',
    home_creative:true,
  },
  {
    id:21,
    delay:'.5s',
    icon:<CreativeFeatureIconTwo/>,
    title:'Product Design Event Development',
    subtitle:'Lorem Ipsum is that it more less normal distribution.',
    color:'has-green',
    home_creative:true,
  },
  {
    id:22,
    delay:'.7s',
    icon:<CreativeFeatureIconThree/>,
    title:'Website Leads Hire in Fixed Contracting',
    subtitle:'Lorem Ipsum is that it more less normal distribution.',
    color:'has-pink',
    home_creative:true,
  },
  {
    id:23,
    delay:'.9s',
    icon:<CreativeFeatureIconFour/>,
    title:'General are Consulting Process Embedded',
    subtitle:'Lorem Ipsum is that it more less normal distribution.',
    color:'has-purple',
    home_creative:true,
  },
]

export default service_data;