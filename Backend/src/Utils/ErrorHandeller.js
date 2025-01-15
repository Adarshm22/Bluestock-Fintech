export const ErrorHandeller = (err, req, res, next) => {
  const status = err.status || 400;
  const message = err.message || "backend Error";

  return res.status(400).json({ status, message });
};
