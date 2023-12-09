import starLogo from "../assets/icon-star.svg";
import "../sass/Card.scss";
import QuestionAnswer from "./QuestionAnswer";

const Card = () => {
  return (
    <article className="card">
      <div className="logoContainer">
        <img src={starLogo} alt="starLogo" />
        <h1>FAQs</h1>
      </div>
      <QuestionAnswer
        answer="Frontend Mentor offers realistic coding challenges to help developers improve their 
        frontend coding skills with projects in HTML, CSS, and JavaScript. It's suitable for 
        all levels and ideal for portfolio building."
        question="What is Frontend Mentor, and how will it help me?"
      />
      <hr />
      <QuestionAnswer
        answer="Yes, Frontend Mentor offers both free and premium coding challenges, with the free 
  option providing access to a range of projects suitable for all skill levels."
        question="Is Frontend Mentor free?"
      />
      <hr />
      <QuestionAnswer
        answer="Yes, you can use projects completed on Frontend Mentor in your portfolio. It's an excellent
  way to showcase your skills to potential employers!"
        question="Can I use Frontend Mentor projects in my portfolio?"
      />
      <hr />
      <QuestionAnswer
        answer="The best place to get help is inside Frontend Mentor's Discord community. There's a help 
        channel where you can ask questions and seek support from other community members."
        question="How can I get help if I'm stuck on a Frontend Mentor challenge?"
      />
    </article>
  );
};

export default Card;
