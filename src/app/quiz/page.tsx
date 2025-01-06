'use client'

import React, { useState } from 'react';
import { questions } from '../../data/questions';
import { useRouter } from 'next/navigation';
import '../../styles/css/quiz.css';

const QuizPage = () => {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [answers, setAnswers] = useState<string[]>([]);
    const router = useRouter();

    const handleAnswer = (answer: string) => {
        setAnswers((prev: string[]) => [...prev, answer]);
        const nextQuestionIndex = currentQuestionIndex + 1;

        if (nextQuestionIndex < questions.length) {
            setCurrentQuestionIndex(nextQuestionIndex);
        } else {
            const abbreviatedAnswers = answers.map((answer: string) => (answer === 'はい' ? 'y' : 'n'));
            router.push(`../result?answers=${JSON.stringify(abbreviatedAnswers)}`);
        }
    };

    const currentQuestion = questions[currentQuestionIndex];

    return (
        <div className="content_wrap">  
            <div className="quiz_container">
                <div className="number_wrap font-en">
                    <span className="current_number">{currentQuestionIndex + 1}</span>
                    <span className="slash">/</span>
                    <span className="all_number">{questions.length}</span>
            </div>
            <h2 className="question_text">{currentQuestion.text}</h2>
            <div className="answer_button_wrap">
                {currentQuestion.options.map((option) => (
                    <button key={option} className="answer_button" onClick={() => handleAnswer(option)}>
                        {option}
                    </button>
                    ))}
                </div>
            </div>
        </div>  
    );
};

export default QuizPage;