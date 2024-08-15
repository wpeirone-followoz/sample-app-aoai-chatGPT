import React from 'react';

import styles from './Questions.module.css'

import Question from './Question';

const Questions = (props: object) => {
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

  return (
    <div className={styles.questions}>      
      {textList.map((item) =>{
        return <Question key={item.id} text={item.text}></Question>
      })}
    </div>
  );
};

export default Questions;



