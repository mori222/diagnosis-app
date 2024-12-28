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
    const { percentages, suggestedJobs } = calculateResult(parsedAnswers);

    return (
        <div className="result-container">
            <div className="result-inner">
                <h2 className="result_title">あなたに向いている職種は...</h2>
                <p className="result_text">{suggestedJobs}</p>
                <ul>
                    <li>
                        <div className={percentages.group1 >= 50 ? 'left color_blue' : 'left'}>
                            <p className="font-en">{Math.round(percentages.group1)}<span className="percent">%</span></p>
                            <p>外向型</p>
                        </div>
                        <div className="bar">   
                            <div 
                            className={percentages.group1 <= 50 ? 'result_bar right_align' : 'result_bar'} 
                            style={{ width: `${percentages.group1 > 50 ? Math.round(percentages.group1) : 100 - Math.round(percentages.group1)}%` }}
                            ></div>
                        </div>  
                        <div className={percentages.group1 <= 50 ? 'right color_blue' : 'right'}>
                            <p className="font-en">{100 - Math.round(percentages.group1)}<span className="percent">%</span></p>
                            <p>内向型</p>
                        </div>
                    </li>
                    <li>
                        <div className={percentages.group2 >= 50 ? 'left color_green' : 'left'}>
                            <p className="font-en">{Math.round(percentages.group2)}<span className="percent">%</span></p>
                            <p>感覚型</p>
                        </div>
                        <div className="bar">
                            <div 
                            className={percentages.group2 <= 50 ? 'result_bar right_align' : 'result_bar'} 
                            style={{ width: `${percentages.group2 > 50 ? Math.round(percentages.group2) : 100 - Math.round(percentages.group2)}%` }}
                            ></div>
                        </div>
                        <div className={percentages.group2 <= 50 ? 'right color_green' : 'right'}>
                            <p className="font-en">{100 - Math.round(percentages.group2)}<span className="percent">%</span></p>
                            <p>直観型</p>
                        </div>
                    </li>
                    <li>
                        <div className={percentages.group3 >= 50 ? 'left color_yellow' : 'left'}>
                            <p className="font-en">{Math.round(percentages.group3)}<span className="percent">%</span></p>
                            <p>思考型</p>
                        </div>
                        <div className="bar">
                            <div 
                            className={percentages.group3 <= 50 ? 'result_bar right_align' : 'result_bar'} 
                            style={{ width: `${percentages.group3 > 50 ? Math.round(percentages.group3) : 100 - Math.round(percentages.group3)}%` }}
                            ></div>
                        </div>
                        <div className={percentages.group3 <= 50 ? 'right color_yellow' : 'right'}>
                            <p className="font-en">{100 - Math.round(percentages.group3)}<span className="percent">%</span></p>
                            <p>感情型</p>
                        </div>
                    </li>
                    <li>
                        <div className={percentages.group4 >= 50 ? 'left color_red' : 'left'}>
                            <p className="font-en">{Math.round(percentages.group4)}<span className="percent">%</span></p>
                            <p>判断型</p>
                        </div>
                        <div className="bar">
                            <div 
                            className={percentages.group4 <= 50 ? 'result_bar right_align' : 'result_bar'} 
                            style={{ width: `${percentages.group4 > 50 ? Math.round(percentages.group4) : 100 - Math.round(percentages.group4)}%` }}
                            ></div>
                        </div>
                        <div className={percentages.group4 <= 50 ? 'right color_red' : 'right'}>
                            <p className="font-en">{100 - Math.round(percentages.group4)}<span className="percent">%</span></p>
                            <p>知覚型</p>
                        </div>
                    </li>
                </ul>
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
