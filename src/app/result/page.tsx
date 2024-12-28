'use client'

import React, { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { calculateResult } from '../../utils/calculateResult';
import '../../styles/css/result.css';

const ResultPage = () => {
    const searchParams = useSearchParams();
    const answers = searchParams.get('answers');

    if (!answers || typeof answers !== 'string') return <div>Loading...</div>;

    const parsedAnswers = JSON.parse(answers as string);
    const result = calculateResult(parsedAnswers);

    return (
        <div className="result-container">
            <div className="result-inner">
                <h1 className="result-title">あなたに向いている職種は...</h1>
                <p className="result-text">{result}</p>
            </div>
        </div>
    );
};

const WrappedResultPage = () => (
    <Suspense fallback={<div>Loading...</div>}>
        <ResultPage />
    </Suspense>
);

export default WrappedResultPage;
