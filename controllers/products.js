// get products all
const getProductAll = async (res, req) => {
  try {
    res.status(200).json({ success: true, data: "get all Products" });
  } catch (error) {
    res.status(404).json({ success: false, data: [] });
  }
};

// post add new product
const addNewProduct = async (res, req) => {
  try {
    res.status(200).json({ success: true, data: "add new product" });
  } catch (error) {
    res.status(404).json({ success: false, data: [] });
  }
};

// get one products
const getOneProduct = async (res, req) => {
  try {
    res.status(200).json({ success: true, data: "get one product" });
  } catch (error) {
    res.status(404).json({ success: false, data: [] });
  }
};

// update one product
const putOneProduct = async (res, req) => {
  try {
    res.status(200).json({ success: true, data: "update one product" });
  } catch (error) {
    res.status(404).json({ success: false, data: [] });
  }
};

// delete one product
const deleteOneProduct = async (res, req) => {
  try {
    res.status(200).json({ success: true, data: "delete one product" });
  } catch (error) {
    res.status(404).json({ success: false, data: [] });
  }
};

module.exports = {
  getProductAll,
  getOneProduct,
  addNewProduct,
  putOneProduct,
  deleteOneProduct,
};
