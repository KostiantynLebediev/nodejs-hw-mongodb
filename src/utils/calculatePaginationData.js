export const calculatePaginationData = (count, page, perPage) => {
  const totalPages = Math.ceil(count / perPage);
  const hasNextPage = Boolean(totalPages - page);
  const hasPreviousPage = page !== 1;

<<<<<<< HEAD
  return {
    page,
    perPage,
    totalItems: count,
    totalPages,
    hasNextPage,
    hasPreviousPage,
=======
    return {
      page,
      perPage,
      totalItems: count,
      totalPages,
      hasNextPage,
      hasPreviousPage,
    };

>>>>>>> b097a7bc73adc20cddf884fcce3d1ba8cd211cfc
  };
};
