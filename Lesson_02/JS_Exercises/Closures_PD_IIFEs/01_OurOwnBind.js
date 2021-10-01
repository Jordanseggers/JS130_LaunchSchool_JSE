function myBind(func, context) {
  let bound = func.apply(context);
  return bound;
}