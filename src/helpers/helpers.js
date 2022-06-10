 
 
export function checkAnswers(id,users,authedUser)
{
  const currentUser = users[authedUser]
  const currentUserAnswers = currentUser.answers
  const findQuestion = currentUserAnswers[id]
 
  let yourAnswer = ''
 
  switch (findQuestion) {
      case 'optionOne':
          yourAnswer = 1;
          break;
      case 'optionTwo':
          yourAnswer = 2;
          break;
      default:
          yourAnswer = 0
          break;
  }
 
  return yourAnswer
 
}
 
export function scoreTotal(users){
 
  let scores = [];
 
  for(let i in users){
    let user = users[i];
    let questionsAnswered = Object.keys(user.answers).length;
    let createdQuestions = user.questions.length;
    let totalScore = questionsAnswered + createdQuestions;
 
    scores.push({
      name: user.name,
      avatar: user.avatarURL,
      answered: questionsAnswered,
      created: createdQuestions,
      score: totalScore
    })
  }
  
  scores.sort((a,b) => (a.score > b.score) ? -1 : 1)    
  return scores;
}
 

export function formatQuestion (question, users) {
 
  const { id, author, timestamp, optionOne, optionTwo } = question
 
  let user = users[author]
  let authorName = user.name
  let authorAvatar = user['avatarURL']
  let optionOneText = optionOne.text
  let optionTwoText = optionTwo.text
  let optionOneCount = optionOne.votes.length
  let optionTwoCount = optionTwo.votes.length
  let totalCount = optionOneCount + optionTwoCount
 
 
  return {
    id,
    timestamp,
    author: authorName,
    avatar: authorAvatar,
    oneText: optionOneText,
    twoText: optionTwoText,
    oneCount: optionOneCount,
    twoCount: optionTwoCount,
    totalCount: totalCount
  }
}