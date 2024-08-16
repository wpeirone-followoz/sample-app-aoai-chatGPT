import styles from './Question.module.css'
type QuestionProps = {
  text: string;
  onClick: (text: string) => void;
}

const Question = (props: QuestionProps) => {
  return (
    <div className={styles.question} onClick={() => props.onClick(props.text)}>
      <p>{props.text}</p>
    </div>
  );
};

export default Question;



