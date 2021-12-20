function learn(hoursAvailable = 0, hoursPerCourse = []) {

  const handlerResult = {
    restHours: hoursAvailable,
    pairSelected: [],
    options: {}
  };
  hoursPerCourse.forEach((primaryValue, primaryIndex) => {
    const restHoursPerCourse = hoursPerCourse.slice(primaryIndex + 1);
    restHoursPerCourse.forEach((secondaryValue, secondaryIndex) => {
      if (primaryValue + secondaryValue <= hoursAvailable) {
        handlerResult.options[`option${primaryIndex}-${secondaryIndex}`] = {
          first: primaryValue,
          second: secondaryValue
        };
      }
    });
  });

  const options = Object.values(handlerResult.options);
  if (!options.length) return null;
  options.forEach(option => {
    const restHoursComputed = hoursAvailable - (option.first + option.second);
    if (restHoursComputed < handlerResult.restHours) {
      handlerResult.restHours = restHoursComputed;
      handlerResult.pairSelected = option;
    }
  });

  const { first, second } = handlerResult.pairSelected;
  return [
    hoursPerCourse.indexOf(first),
    hoursPerCourse.indexOf(second, hoursPerCourse.indexOf(first) + 1)
  ];

}
