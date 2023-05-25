import { getCategoriesQuery } from '../../database/queries/index.js';
import customError from '../../utils/helper/customError.js';

const getCategories = (req, res) => {
  getCategoriesQuery()
    .then((result) => res.json(result?.map((item) => item.category)))
    // eslint-disable-next-line no-console
    .catch(() => res.send(customError(500, 'Internal Server Error')));
};

export default getCategories;
