export const hey = (message) => {
  const trimmedMessage = message.trim();

  if (isSayingNothing(trimmedMessage)) {
    return 'Fine. Be that way!';
  }
  
  if (isYelling(trimmedMessage) && hasLetter(trimmedMessage)) {
    return isAsking(trimmedMessage) 
             ? 'Calm down, I know what I\'m doing!' 
             : 'Whoa, chill out!';
  }
  
  if (isAsking(trimmedMessage)) {
    return 'Sure.';
  }

  return 'Whatever.';
};

const isAsking = message => message[message.length - 1] === '?';
const isYelling = message => message === message.toUpperCase();
const hasLetter = message => message.match(/[a-zA-z]+/) != null;
const isSayingNothing = message => message === '';