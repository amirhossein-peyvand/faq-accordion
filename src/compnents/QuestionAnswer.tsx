import { useState } from "react";
import minues from "../assets/icon-minus.svg";
import plus from "../assets/icon-plus.svg";
import "../sass/QuestionAnswer.scss";

interface Props {
  answer: string;
  question: string;
}

const QuestionAnswer = ({ answer, question }: Props) => {
  const [extended, setExtended] = useState(false);

  return (
    <section className="qa">
      <div className="top">
        <h4>{question}</h4>
        <img
          src={extended ? minues : plus}
          alt="img"
          onClick={() => setExtended(!extended)}
        />
      </div>
      <p className="answer">{answer}</p>
    </section>
  );
};

export default QuestionAnswer;
