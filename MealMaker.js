const menu = {
  _meal : '',
  _price : 0,
  set meal(mealToCheck){
    if(typeof mealToCheck === 'string'){
      return this._meal = mealToCheck;
    }
  },
  set price(priceToCheck){
    if(typeof priceToCheck === 'number'){
      return this._price = priceToCheck;
    }
  },
  get todaysSpecial (){
    if (this._meal && this._price){
      return `Today’s Special meal is ${this._meal} and the price is ${this._price} Naira`;
      }
      else {
        return "Meal or Price was not set correctly!";
      }
    }
};
menu.meal = 'Amala';
menu.price = 200
console.log(menu);
console.log(menu.todaysSpecial);
