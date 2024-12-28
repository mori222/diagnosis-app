export const calculateResult = (answers: string[]) => {
    const scores = {
        group1: 0,
        group2: 0,
        group3: 0,
        group4: 0,
    };

    for (let i = 0; i < answers.length; i++) {
        if (answers[i] === 'y') {
            if (i < 7) scores.group1++;
            else if (i < 14) scores.group2++;
            else if (i < 21) scores.group3++;
            else scores.group4++;
        }
    }

    const totalQuestions = [7, 7, 7, 7];
    const percentages = {
        group1: (scores.group1 / totalQuestions[0]) * 100,
        group2: (scores.group2 / totalQuestions[1]) * 100,
        group3: (scores.group3 / totalQuestions[2]) * 100,
        group4: (scores.group4 / totalQuestions[3]) * 100,
    };
    
    let personalType = '';
    personalType += percentages.group1 >= 50 ? 'E' : 'I';
    personalType += percentages.group2 >= 50 ? 'S' : 'N';
    personalType += percentages.group3 >= 50 ? 'T' : 'F';
    personalType += percentages.group4 >= 50 ? 'J' : 'P';

    let suggestedJobs = '';
    switch (personalType) {
        case 'ISTJ':
            suggestedJobs = '会計士、行政職、エンジニア、医療事務';
            break;
        case 'ISFJ':
            suggestedJobs = '看護師、介護士、教師、図書館司書';
            break;
        case 'INFJ':
            suggestedJobs = 'カウンセラー、研究者、作家、マーケティングプランナー';
            break;
        case 'INTJ':
            suggestedJobs = '経営コンサルタント、データサイエンティスト、エンジニア';
            break;
        case 'ISTP':
            suggestedJobs = 'メカニック、プログラマー、消防士、スポーツトレーナー';
            break;
        case 'ISFP':
            suggestedJobs = 'インテリアデザイナー、動物看護師、料理人';
            break;
        case 'INFP':
            suggestedJobs = '作家、心理カウンセラー、NGOスタッフ';
            break;
        case 'INTP':
            suggestedJobs = '研究者、データアナリスト、ソフトウェアエンジニア';
            break;
        case 'ESTP':
            suggestedJobs = '営業職、イベントプランナー、起業家';
            break;
        case 'ESFP':
            suggestedJobs = '接客業、俳優、旅行ガイド';
            break;
        case 'ENFP':
            suggestedJobs = '広告クリエイター、起業家、イベント企画';
            break;
        case 'ENTP':
            suggestedJobs = 'プロダクトマネージャー、マーケター、戦略コンサルタント';
            break;
        case 'ESTJ':
            suggestedJobs = 'マネージャー、警察官、行政職';
            break;
        case 'ESFJ':
            suggestedJobs = '看護師、教師、営業職';
            break;
        case 'ENFJ':
            suggestedJobs = '人事、コーチング、教育者';
            break;
        case 'ENTJ':
            suggestedJobs = '経営者、戦略コンサルタント、プロジェクトマネージャー';
            break;
        default:
            suggestedJobs = '該当する職業はありません。';
            break;
    }

    return { personalType, percentages, suggestedJobs };
};