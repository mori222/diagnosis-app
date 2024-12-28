'use client'

import React, { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { calculateResult } from '../../utils/calculateResult';
import '../../styles/scss/result.scss';

const ResultPage = () => {
    const searchParams = useSearchParams();
    const answers = searchParams.get('answers');

    if (!answers || typeof answers !== 'string') return <div>Loading...</div>;

    const parsedAnswers = JSON.parse(answers as string);
    const result = calculateResult(parsedAnswers);

    return (
        <div className="result-container">
            <h1 className="result-title">あなたに向いている職種は...</h1>
            <p className="result-text">{result}</p>
            <button className="retry-button" onClick={() => window.location.href = '/quiz'}>
                もう一度クイズを受ける
            </button>
        </div>
    );
};

const WrappedResultPage = () => (
    <Suspense fallback={<div>Loading...</div>}>
        <ResultPage />
    </Suspense>
);

export default WrappedResultPage;
