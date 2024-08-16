import React from 'react';

import styles from './Questions.module.css'

import Question from './Question';

type QuestionsProps = {
  onItemClick: (text: string) => void;
}

const Questions = (props: QuestionsProps) => {
  const textList= [
    {
      id: '01',
      text: 'How do I create and post a journal entry?'
    },
    {
      id: '02',
      text: 'What are batches in Dynamics GP, and how do I use them?'
    },
    {
      id: '03',
      text: 'How do I create a purchase order?'
    },
    {
      id: '04',
      text: 'How do I set up customers and vendors in Dynamics GP?'
    },
    {
      id: '05',
      text: 'How do I maintain currency rates? '
    },
    {
      id: '06',
      text: 'Why don’t I see all of my companies in Dynamics GP?'
    }
  ];

  const handleClick = (text: string) => {
    props.onItemClick(text);
  };

  return (
    <div className={styles.questions}>      
      {textList.map((item) =>{
        return <Question key={item.id} text={item.text} onClick={handleClick}></Question>
      })}
    </div>
  );
};

export default Questions;



