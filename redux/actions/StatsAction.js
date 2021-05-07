import { STATS } from "../NameAction";

export const loadImageStats = (id) => {
  return {
    type: STATS.LOAD,
    id,
  };
};

export const setImageStats = (id, downloads) => {
  return {
    type: STATS.LOAD_SUCCESS,
    id,
    downloads,
  };
};

export const setImageStatsError = (id) => {
  return {
    type: STATS.LOAD_FAIL,
    id,
  };
};
