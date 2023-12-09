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
      <button className="top" onClick={() => setExtended(!extended)}>
        <h4>{question}</h4>
        <img src={extended ? minues : plus} alt="img" />
      </button>
      {extended && <p className="answer">{answer}</p>}
    </section>
  );
};

export default QuestionAnswer;
