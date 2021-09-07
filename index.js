function introduction (name = "Josh") {
return (`Hi, my name is ${name}.`);

}


function introductionWithLanguageOptional(name ="Josh", language ="Ember.js") {
  return (`Hi, my name is ${name} and I am learning to program in ${language}.`);

}

function introductionWithLanguageOptional(name, language = "JavaScript") {
    return (`Hi, my name is ${name} and I am learning to program in ${language}.`);
}

function introductionWithLanguage(name,language= "JavaScript") {
    return (`Hi, my name is ${name} and I am learning to program in ${language}.`); 

}