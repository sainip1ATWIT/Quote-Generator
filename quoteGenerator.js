const quotes = [
    'The only thing that feels better than winning is winning when nobody that you could',
    'If your actions inspire others to dream more, learn more, do more and become more, you are a leader',
    'The only limit to our realization of tomorrow will be our doubts of today',
    'We may encounter many defeats but we must not be defeated',
    'If you want something you\'ve never had, you must be willing to do something you\'ve never done',
    'Everything happens for a reason',
    'Success is stumbling from failuer to failuer with no loss of enthusiasm',
    'The only way to do great work is to love what you do.',
    'If you wnat to live a happy life, tie it to a goal, not to people or things',
    'Don\t let yesterday take up to much of today',
    'I can accept failure, everyone fails at something. But I can\'t accept not trying',
    'A journey of a thousand miles begins with a single step',
    'Failing doesn\'t give you a reason to give up, as long as you believe',
    'Every one of us must do what\'s in their power! If we\'re going to die anyway, then it\'s better to die fighting than to do nothing',
    'To know what is right and choose to ignore it is the act of coward'
]

const generateQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);

    return quotes[randomIndex];
}

console.log(generateQuote());