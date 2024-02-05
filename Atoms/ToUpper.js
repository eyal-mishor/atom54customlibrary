export const atom = (log, resolve) => ({

  update({name}) { 
    return {upper: name?.toUpperCase?.()};
  }
});
