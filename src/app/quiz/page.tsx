'use client'

import React, { useState } from 'react';
import { questions } from '../../data/questions';
import { useRouter } from 'next/navigation';
import '../../styles/scss/quiz.scss';

const QuizPage = () => {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [answers, setAnswers] = useState<string[]>([]);
    const router = useRouter();

    const handleAnswer = (answer: string) => {
        setAnswers((prev) => [...prev, answer]);
        const nextQuestionIndex = currentQuestionIndex + 1;

        if (nextQuestionIndex < questions.length) {
            setCurrentQuestionIndex(nextQuestionIndex);
        } else {
            router.push(`/result?answers=${encodeURIComponent(JSON.stringify([...answers, answer]))}`);
        }
    };

    const currentQuestion = questions[currentQuestionIndex];

    return (
        <div className="quiz-container">
            <div className="question-container">
                <h2 className="question-text">{currentQuestion.text}</h2>
                {currentQuestion.options.map((option) => (
                    <button key={option} className="answer-button" onClick={() => handleAnswer(option)}>
                        {option}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default QuizPage;