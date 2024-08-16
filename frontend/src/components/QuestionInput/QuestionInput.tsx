import { useState, useEffect, useRef } from 'react'
import { Stack, TextField } from '@fluentui/react'
import { SendRegular } from '@fluentui/react-icons'

import Send from '../../assets/Send.svg'

import styles from './QuestionInput.module.css'

interface Props {
  onSend: (question: string, id?: string) => void
  disabled: boolean
  placeholder?: string
  clearOnSend?: boolean
  conversationId?: string
  questionText: string
}

export const QuestionInput = ({ onSend, disabled, placeholder, clearOnSend, conversationId, questionText }: Props) => {
  const [question, setQuestion] = useState<string>('')
  const isQuestionUpdated = useRef(false);

  const sendQuestion = () => {
    if (disabled || !question.trim()) {
      return
    }

    if (conversationId) {
      onSend(question, conversationId)
    } else {
      onSend(question)
    }

    if (clearOnSend) {
      setQuestion('')
    }
  }

  useEffect(() => {
    setQuestion(questionText);
    isQuestionUpdated.current= true;
  }, [questionText]);

  useEffect(() => {
    if(isQuestionUpdated.current) {
      sendQuestion();
    }
    isQuestionUpdated.current= false;
  }, [isQuestionUpdated.current]);


  const onEnterPress = (ev: React.KeyboardEvent<Element>) => {
    if (ev.key === 'Enter' && !ev.shiftKey && !(ev.nativeEvent?.isComposing === true)) {
      ev.preventDefault()
      sendQuestion()
    }
  }

  const onQuestionChange = (_ev: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>, newValue?: string) => {
    setQuestion(newValue || '')
  }

  const sendQuestionDisabled = disabled || !question.trim()

  return (
    <Stack horizontal className={styles.questionInputContainer}>
      <TextField
        className={styles.questionInputTextArea}
        styles={
          {fieldGroup: {background: "transparent"}}
        }
        placeholder={placeholder}
        multiline
        resizable={false}
        borderless
        value={question}
        onChange={onQuestionChange}
        onKeyDown={onEnterPress}
      />
      <div
        className={styles.questionInputSendButtonContainer}
        role="button"
        tabIndex={0}
        aria-label="Ask question button"
        onClick={sendQuestion}
        onKeyDown={e => (e.key === 'Enter' || e.key === ' ' ? sendQuestion() : null)}>
        {sendQuestionDisabled ? (
          <SendRegular className={styles.questionInputSendButtonDisabled} />
        ) : (
          <img src={Send} className={styles.questionInputSendButton} alt="Send Button" />
        )}
      </div>
      <div className={styles.questionInputBottomBorder} />
    </Stack>
  )
}
