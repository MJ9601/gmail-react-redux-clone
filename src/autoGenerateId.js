const autoGenerateId = () => {
  const lowerCaseLetters = "qwertyuiopasdfghjklzxcvbnm";
  const upperCaseLetters = lowerCaseLetters.toUpperCase();
  const numbers = "1234567890";
  const elementString = lowerCaseLetters.concat(upperCaseLetters, numbers);
  let randomId = "";
  for (let index = 0; index < 20; index++) {
    randomId = randomId.concat(
      elementString[Math.floor(Math.random() * elementString.length)]
    );
  }
  // console.log(+randomId[0]);
  !isNaN(+randomId[0]) &&
    (randomId = randomId.replace(
      randomId[0],
      upperCaseLetters[Math.floor(Math.random() * upperCaseLetters.length)]
    ));

  return randomId;
};

export default autoGenerateId;
