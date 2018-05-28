export const requiredFields = (values, requiredFields) => {
  const requiredMsg = '(required)';
  return requiredFields.reduce((acc, field) => {
    if (!values[field] || !values[field].trim()) {
      acc[field] = requiredMsg;
    }
    return acc;
  }, {});
};