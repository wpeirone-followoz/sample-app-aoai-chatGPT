import styles from './Question.module.css'
type QuestionProps = {
  text: string
}

const Question = (props: QuestionProps) => {
  return (
    <div className={styles.question}>
      <p>{props.text}</p>
    </div>
  );
};

export default Question;



