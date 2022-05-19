const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

const storyText = "It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day."

const insertX = ["Willy the Goblin","Big Daddy","Father Christmas"];

const insertY = ["the soup kitchen", "Disneyland", "the White House"];
const insertZ = ["spontaneously combusted", "melted into a puddle on the sidewalk", "turned into a slug and crawled away"];

randomize.addEventListener('click', result);
function result() {
  let newStory = storyText;
  const xItem = randomValueFromArray(insertX);
  const yItem = randomValueFromArray(insertY);
  const zItem = randomValueFromArray(insertZ);

  newStory = newStory.replace(":insertx:", xItem);
  newStory = newStory.replace(":inserty:", yItem);
  newStory = newStory.replace(":insertz:", zItem);
  if(customName.value !== '') {
    const name = customName.value;
    newStory = newStory.replace("Bob", name);
  }
  if(document.getElementById("uk").checked) {
    const weight = `${Math.round(300 * 0.0714286)} stone`;
    const temperature = `${Math.round(((94 - 32) * 5) / 9)} centigrade`;
    newStory = newStory.replace("94 fahrenheit", temperature);
    newStory = newStory.replace("300 pounds", weight);
  }
  story.textContent = newStory;
  story.style.visibility = 'visible';
}



//5.	Within the second if block, we are checking to see if the uk radio button has been checked. If yes, we would like to convert the weight and temperature values within the story from pounds and Fahrenheit into stones and centigrade. What you would like to do is as below:
// i.	Search the formulae for changing pounds to stone(`${Math.round(300 * 0.0714286)} stone`;), and Fahrenheit to centigrade(`${Math.round(((94 - 32) * 5) / 9)} centigrade`;). 
// ii.	Within the line that defines the weight variable, replace 300 (three hundred) with a calculation that converts 300 (three hundred)  pounds into stones. Concatenate ' stone' onto the tip of the output of the overall Math.round() call.
// iii.	Within the line that defines the temperature variable, replace ninety four (94) with a calculation that converts ninety four (94) Fahrenheit into centigrade. Concatenate ' centigrade' onto the tip of the output of the overall Math.round() call.
// iv.	Just below the 2 variable definitions, add 2 additional string replacement lines that replace 'ninety four (94) fahrenheit' with the contents of the temperature variable, and 'three hundred (300) pounds' with the contents of the weight variable.
// 6.	Finally, within the second-to-last line of the function, create the textContent property of the story variable (which references the paragraph) equal to newStory.
