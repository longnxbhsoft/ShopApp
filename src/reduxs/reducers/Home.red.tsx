/* eslint-disable @typescript-eslint/no-unused-vars */
const initialState = {};

const filter_records = (mainArray: any[], childArray: any[]) => {
  return mainArray.filter((mainElement: {id: any}) => {
    if (childArray.length > 0) {
      let isReturnable = true;
      childArray.forEach((childElement: {id: any}) => {
        if (Number(mainElement.id) === Number(childElement.id)) {
          isReturnable = false;
        }
      });
      return isReturnable;
    } else {
      return mainElement;
    }
  });
};

const reducers = () => {};

export default reducers;
