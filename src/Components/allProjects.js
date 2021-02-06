import Ventilator from "../img/ventilator.png";
import eggclassification from "../img/Egg-Classification.png";
import mobilerobot from "../img/mobilerobot.png";
const projects = [
  {
    id: 1,
    category: ["Python", "OpenCV"],
    link1: "https://www.youtube.com/watch?v=anRibpEwmmg",
    link2: "https://github.com/tontosirikul/Ventilator-Counting-OpenCV",
    icon1: "G",
    icon2: "Y",
    image: Ventilator,
    title: "Ventilator Counting OpenCV",
    detail:
      "Implemented the knowledge from Computer Vision module by create Ventilator Counting project",
  },
  {
    id: 2,
    category: ["Python", "Pytorch", "AI/Deep learning", "fast.ai"],
    link1: "https://www.youtube.com/watch?v=6xNEK4WI_I8",
    link2:
      "https://github.com/tontosirikul/Fried-egg-and-Omelette-Images-Classification",
    icon1: "G",
    icon2: "Y",
    image: eggclassification,
    title: "Fried egg and Omelette Images Classification",
    detail:
      "Fast.ai is an intuitive approach to deep learning, which allow me the construct CNN within 4 lines of code.",
  },
  {
    id: 3,
    category: ["Javascript", "Front-end", "ROS"],
    link1: "https://youtu.be/6Rm00ucj0-4",
    link2: "https://github.com/Kasidit0052/MobileRobot_ROS",
    icon1: "G",
    icon2: "Y",
    image: mobilerobot,
    title: "Mobile Robot Admin Webapp",
    detail:
      "Every robots need interface to control, does it better to use webapp instead of use the command line.",
  },
];

export default projects;
