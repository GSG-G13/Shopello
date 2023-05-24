import searchProducts from '../../database/queries/products/searchProducts.js';

const getSearchProducts = async (req, res) => {
  try {
    const { product } = req.params;
    const products = await searchProducts(product);
    res.status(200).json({
      error: false,
      data: {
        products,
      },
    });
  } catch (error) {
    res.status(500).json({
      error: true,
      data: {
        message: 'Internal Server Error',
      },
    });
  }
};

export default getSearchProducts;
