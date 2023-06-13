/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]

  Once you've implemented the logic, test your code by running
  - `npm run test-expenditure-analysis`
*/

function calculateTotalSpentByCategory(transactions) {
  const finallist=[];
  for(let item of transactions){
    const category=item.category;
    const price=item.price;
    let isCategory=false;
    for(let itemCategory of finallist){
      if(itemCategory.category === category){
        itemCategory.totalSpent+=price;
        isCategory=true;
        break;
    }
  }

  if(!isCategory){
    finallist.push({category,totalSpent:price});
  }
}
return finallist;
}

module.exports = calculateTotalSpentByCategory;
