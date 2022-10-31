// recibe el store, next se llama cuando el middleware terrmina su trabajo y manda el action al reducer.
// action es la información de lo que esta pasando
export const logger = (store) => (next) => (action) => {
  console.log(action);
  next(action);
};

// Crear un pokemon custom
/*
export const featuring = (store) => (next) => (actionInfo) => {
  const featured = [{ name: "Eddie custom" }, ...actionInfo.action.payload];
  const updatedActionInfo = {
    ...actionInfo,
    action: { ...actionInfo.action, payload: featured },
  };
  next(updatedActionInfo);
};
*/
