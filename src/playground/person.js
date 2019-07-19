export const isAdult = (age) => {
    if(age > 18) return true;
    return false;
}

export const canDrink = (age) => {
    if(age> 21) return true;
    return false;

}

const isAdult2 = (age) => age > 18;
const canDrink2 = (age) => age > 21;
const isSenior = (age) => age > 65;
//export default isSenior;  // setting up a default export!

export default (age) => age > 65;

export {
    isAdult2, canDrink2
};

