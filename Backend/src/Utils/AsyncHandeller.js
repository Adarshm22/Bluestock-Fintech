export const AsyncHandeller = (functionToBeExecuted) => {
  return (req, res, next) => {
    Promise.resolve(functionToBeExecuted(req, res, next))
    .catch((err) => {
      return next(err);
    });
  };
};
