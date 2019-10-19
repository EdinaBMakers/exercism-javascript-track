export const hey = (message) => {
  const trimmedMessage = message.trim();
  const lastChar = trimmedMessage[trimmedMessage.length - 1];

  if (trimmedMessage === '') {
    return 'Fine. Be that way!';
  }
  
  if (trimmedMessage === trimmedMessage.toUpperCase() 
      && trimmedMessage.match(/[a-zA-z]+/) != null) {
    return lastChar === '?' 
             ? 'Calm down, I know what I\'m doing!' 
             : 'Whoa, chill out!';
  }
  
  if (lastChar === '?') {
    return 'Sure.';
  }

  return 'Whatever.';
};
