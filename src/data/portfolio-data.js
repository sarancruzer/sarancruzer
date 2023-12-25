// home main
import img_1 from '@assets/img/portfolio/portfolio-1.jpg';
import img_2 from '@assets/img/portfolio/portfolio-2.jpg';
import img_3 from '@assets/img/portfolio/portfolio-3.jpg';
// home lowyer
import case_1 from '@assets/img/case/case-1.jpg';
import case_2 from '@assets/img/case/case-2.jpg';

// home freelancer
// shapes 
import shape_freelancer_1 from '@assets/img/portfolio/2/shape/portfolio-shape-1.png';
import shape_freelancer_2 from '@assets/img/portfolio/2/shape/portfolio-shape-2.png';
import shape_freelancer_3 from '@assets/img/portfolio/2/shape/portfolio-shape-3.png';
import shape_freelancer_4 from '@assets/img/portfolio/2/shape/portfolio-shape-4.png';
// portfolio images
import portfolio_freelancer_1 from '@assets/img/portfolio/2/portfolio-1.jpg';
import portfolio_freelancer_2 from '@assets/img/portfolio/2/portfolio-2.jpg';
import portfolio_freelancer_3 from '@assets/img/portfolio/2/portfolio-3.jpg';
import portfolio_freelancer_4 from '@assets/img/portfolio/2/portfolio-4.jpg';
import portfolio_freelancer_5 from '@assets/img/portfolio/2/portfolio-5.jpg';
import portfolio_freelancer_6 from '@assets/img/portfolio/2/portfolio-6.png';
// home agency 
import agency_port_1 from '@assets/img/portfolio/5/portfolio-1.jpg';
import agency_port_2 from '@assets/img/portfolio/5/portfolio-2.jpg';
import agency_port_3 from '@assets/img/portfolio/5/portfolio-3.jpg';
import agency_port_4 from '@assets/img/portfolio/5/portfolio-4.jpg';
import agency_port_5 from '@assets/img/portfolio/5/portfolio-5.jpg';
import agency_port_6 from '@assets/img/portfolio/5/portfolio-6.jpg';

// home photographer
import photography_1 from '@assets/img/portfolio/3/portfolio-1.jpg';
import photography_2 from '@assets/img/portfolio/3/portfolio-2.jpg';
import photography_3 from '@assets/img/portfolio/3/portfolio-3.jpg';
import photography_4 from '@assets/img/portfolio/3/portfolio-4.jpg';
import photography_5 from '@assets/img/portfolio/3/portfolio-5.jpg';
import photography_6 from '@assets/img/portfolio/3/portfolio-6.jpg';
// home portfolio
import portfolio_img_1 from '@assets/img/portfolio/9/portfolio-1.jpg';
import portfolio_img_2 from '@assets/img/portfolio/9/portfolio-2.jpg';
import portfolio_img_3 from '@assets/img/portfolio/9/portfolio-3.jpg';
import portfolio_img_4 from '@assets/img/portfolio/9/portfolio-4.jpg';
import portfolio_img_5 from '@assets/img/portfolio/9/portfolio-5.jpg';
import portfolio_img_6 from '@assets/img/portfolio/9/portfolio-6.jpg';
// svg
import { FreelancerPortOne, FreelancerPortThree, FreelancerPortTwo } from '../svg';

const portfolio_data = [
  // home portfolio data
  {
    id:1,
    bg:img_1,
    tag:'Business Consulting',
    title:'12 best blogs to follow about food design',
    text:'Inventore modi rem molestias maxime non labore voluptatem rerum quos at magni veniam ut beatae consectetur sit itaque similique aut.',
    delay:'.3s',
    home:true,
  },
  {
    id:2,
    bg:img_2,
    tag:'Lost Saints',
    title:'Purpose-driven employers succeed',
    text:'Inventore modi rem molestias maxime non labore voluptatem rerum quos at magni veniam ut beatae consectetur sit itaque similique aut.',
    delay:'.5s',
    home:true,
  },
  {
    id:3,
    bg:img_3,
    tag:'UI wireframe',
    title:'The 4 most effective incentives',
    text:'Inventore modi rem molestias maxime non labore voluptatem rerum quos at magni veniam ut beatae consectetur sit itaque similique aut.',
    delay:'.7s',
    home:true,
  },

  // home lawyer cases
  {
    id:4,
    bg:case_1,
    price:'247.00',
    title:'Personal Injury Claims and Gun What You Need to Know',
    text:'If you are looking for a random city or town name to spark a location for a book, game, or a script millions.',
    delay:'.3s',
    home_lower:true,
  },
  {
    id:5,
    bg:case_2,
    price:'176.00',
    title:'Do Injured Workers Have to Be Treated the Same?',
    text:'If you are looking for a random city or town name to spark a location for a book, game, or a script millions.',
    delay:'.5s',
    home_lower:true,
  },

  // home freelancer portfolio
  {
    id:6,
    shapes:[{id:1,shape:shape_freelancer_1}],
    icon:<FreelancerPortOne/>,
    tags:['User Research','UX Design'],
    title:<>sarancruzer website for <br /> Unique start-up brands.</>,
    image:[
      {id:1,img:portfolio_freelancer_1},
      {id:2,img:portfolio_freelancer_2},
    ],
    bg_color:'green',
    home_freelancer:true,
  },
  {
    id:7,
    shapes:[{id:2,shape:shape_freelancer_2},{id:3,shape:shape_freelancer_3}],
    icon:<FreelancerPortTwo/>,
    tags:['User Research','UX Design'],
    title:<>Re-design for the app <br /> Made easy.</>,
    image:[
      {id:3,img:portfolio_freelancer_3},
      {id:4,img:portfolio_freelancer_4},
      {id:5,img:portfolio_freelancer_5},
    ],
    bg_color:'purple',
    diff:true,
    home_freelancer:true,
  },
  {
    id:8,
    shapes:[{id:4,shape:shape_freelancer_4}],
    icon:<FreelancerPortThree/>,
    tags:['User Research','UX Design'],
    title:'A collaboration tool for brainstorming ideas',
    image:[
      {id:6,img:portfolio_freelancer_6},
    ],
    bg_color:'pink',
    home_freelancer:true,
  },

  // home agency portfolio
  {
    id:9,
    img:agency_port_1,
    tag:'Sports',
    title:'Stadium Sports Cards',
    delay:'.3s',
    home_agency:true,
  },
  {
    id:10,
    img:agency_port_2,
    tag:'Branding & Digital Platforms',
    title:'Aliens do 3D Automobile',
    delay:'.5s',
    home_agency:true,
  },
  {
    id:11,
    img:agency_port_3,
    tag:'Branding & Identity',
    title:'Gallery Portfolio',
    delay:'.7s',
    home_agency:true,
  },
  {
    id:12,
    img:agency_port_4,
    tag:'Custom Print',
    title:'Artboard Studio',
    delay:'.9s',
    home_agency:true,
  },
  {
    id:13,
    img:agency_port_5,
    tag:'Custom Print',
    title:'Artboard Studio',
    delay:'.9s',
    home_agency:true,
  },
  {
    id:14,
    img:agency_port_6,
    tag:'Branding & Identity',
    title:'Gallery Portfolio',
    delay:'.9s',
    home_agency:true,
  },

  // home photography
  {
    id:15,
    img:photography_1,
    tag:'Fashion',
    title:'The Power of Personality',
    camera:'Canon EOS 2D',
    city:'New York',
    date:'Oct 24, 2022',
    home_photographer:true,
  },
  {
    id:16,
    img:photography_2,
    tag:'Nature',
    title:'Pacific Northwest',
    camera:'Canon EOS 2D',
    city:'New York',
    date:'Jan 20, 2022',
    home_photographer:true,
  },
  {
    id:17,
    img:photography_3,
    tag:'Campaign Event',
    title:'Apple TV Campaign',
    camera:'Canon EOS 2D',
    city:'New York',
    date:'Feb 15, 2022',
    home_photographer:true,
  },
  {
    id:18,
    img:photography_4,
    tag:'photography',
    title:'Pacific Northwest',
    camera:'Canon EOS 2D',
    city:'New York',
    date:'May 15, 2022',
    home_photographer:true,
  },
  {
    id:19,
    img:photography_5,
    tag:'Fashion',
    title:'Trending Fashion',
    camera:'Canon EOS 2D',
    city:'New York',
    date:'July 15, 2022',
    home_photographer:true,
  },
  {
    id:20,
    img:photography_6,
    tag:'photography',
    title:'Pacific Northwest',
    camera:'Canon EOS 2D',
    city:'New York',
    date:'April 15, 2022',
    home_photographer:true,
  },
  // home portfolio
  {
    id:21,
    img:portfolio_img_1,
    tag:'BRANDING',
    title:'We build great things',
    home_portfolio:true,
  },
  {
    id:22,
    img:portfolio_img_2,
    tag:'BRANDING',
    title:'We build great things',
    home_portfolio:true,
  },
  {
    id:23,
    img:portfolio_img_3,
    tag:'BRANDING',
    title:'We build great things',
    home_portfolio:true,
  },
  {
    id:24,
    img:portfolio_img_4,
    tag:'BRANDING',
    title:'We build great things',
    home_portfolio:true,
  },
  {
    id:25,
    img:portfolio_img_5,
    tag:'BRANDING',
    title:'We build great things',
    home_portfolio:true,
  },
  {
    id:26,
    img:portfolio_img_6,
    tag:'BRANDING',
    title:'We build great things',
    home_portfolio:true,
  },
]

export default portfolio_data;