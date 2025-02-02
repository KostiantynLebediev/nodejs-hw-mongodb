import { SORT_ORDER } from "../contacts/index.js";

const parseSortOrder = (sortOrder) => {
  const isKnownOrder = SORT_ORDER.includes(sortOrder);

  if (isKnownOrder) {
    return sortOrder;
  }

  return SORT_ORDER.ASC;
};

const parseSortBy = (sortBy, sortByList) => {
  if (sortByList.includes(sortBy)) {
    return sortBy;
  }

  return "_id";
};

export const parseSortParams = (query, sortByList) => {
  const { sortOrder, sortBy } = query;

  const parsedSortOrder = parseSortOrder(sortOrder);
  const parsedSortBy = parseSortBy(sortBy, sortByList);

  return {
    sortOrder: parsedSortOrder,
    sortBy: parsedSortBy,
  };
};
