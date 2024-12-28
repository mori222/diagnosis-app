export const calculateResult = (answers: string[]) => {
    const score = answers.reduce((acc: number, answer: string) => {
        return acc + (answer === 'はい' ? 1 : 0);
    }, 0);

    if (score > answers.length / 2) {
        return '外向的な職種が向いています。';
    } else {
        return '内向的な職種が向いています。';
    }
};