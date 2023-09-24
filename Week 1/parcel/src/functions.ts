export const functions = {
    runDemos: () => {
      const multiply = (a: number, b: number = 1): number => {
        return a * b;
      };
  
      const groceryList = (
        importantGrocery: string,
        ...notImportantGroceries: string[]
      ): void => {
        console.log("Important Grocery:", importantGrocery);
        console.log("Not Important Groceries:", notImportantGroceries);
      };
  
      const result = multiply(5);
      console.log("Multiplication Result:", result);
  
      groceryList("courgette", "paprika", "wortel", "aardappel", "ajuin");
    },
  };  