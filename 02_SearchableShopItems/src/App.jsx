import { useState } from "react";
import "./App.css";

const PRODUCTS = [
  {
    category: "Leafy Vegetable",
    isOrganic: true,
    isAvailable: true,
    title: "Broccoli",
    price: 10,
  },
  {
    category: "Leafy Vegetable",
    isOrganic: true,
    isAvailable: true,
    title: "Organic Spinach",
    price: 30,
  },
  {
    category: "Leafy Vegetable",
    isOrganic: false,
    isAvailable: true,
    title: "Coriander leaves",
    price: 19,
  },
  {
    category: "Leafy Vegetable",
    isOrganic: false,
    isAvailable: true,
    title: "Spinach",
    price: 15,
  },
  {
    category: "Fruit",
    isOrganic: true,
    isAvailable: false,
    title: "Avocado",
    price: 23,
  },
  {
    category: "Fruit",
    isOrganic: false,
    isAvailable: true,
    title: "Apple",
    price: 19,
  },
  {
    category: "Fruit",
    isOrganic: false,
    isAvailable: false,
    title: "Watermelon",
    price: 19,
  },
  {
    category: "Fruit",
    isOrganic: false,
    isAvailable: true,
    title: "Dragon Fruit",
    price: 50,
  },
  {
    category: "Vegetable",
    isOrganic: true,
    isAvailable: true,
    title: "Pickel",
    price: 20,
  },
  {
    category: "Vegetable",
    isOrganic: true,
    isAvailable: true,
    title: "Egg plant",
    price: 25,
  },
  {
    category: "Vegetable",
    isOrganic: true,
    isAvailable: false,
    title: "Radish",
    price: 19,
  },
  {
    category: "Vegetable",
    isOrganic: true,
    isAvailable: true,
    title: "Cucumber",
    price: 19,
  },
  {
    category: "Vegetable",
    isOrganic: false,
    isAvailable: false,
    title: "Carrot",
    price: 20,
  },
  {
    category: "Vegetable",
    isOrganic: false,
    isAvailable: true,
    title: "Baby Corn",
    price: 36,
  },
];

function App() {
  return (
    <>
      <ProductPanelContainer />
    </>
  );
}

const ProductPanelContainer = () => {
  const [onlyOrganic, setOnlyOrganic] = useState(false);
  const [applyStockFilter, setStockFilter] = useState(false);
  const [filterText, setFilterText] = useState("");
  return (
    <div className="flex justify-center align-middle w-full">
      <div className="bg-blue-900 px-6 py-8 rounded-lg flex flex-col gap-5">
        <h1 className="text-4xl text-center font-semibold">
          🍉 React Fresh 🌿
        </h1>
        <SearchBar
          onlyOrganic={onlyOrganic}
          applyStockFilter={applyStockFilter}
          filterText={filterText}
          onFilterTextChange={setFilterText}
          onOrganicChange={setOnlyOrganic}
          onStockChange={setStockFilter}
        />
        <ProductTable
          products={PRODUCTS}
          onlyOrganic={onlyOrganic}
          filterText={filterText}
          applyStockFilter={applyStockFilter}
        />
      </div>
    </div>
  );
};

const SearchBar = ({
  onlyOrganic,
  applyStockFilter,
  onOrganicChange,
  onStockChange,
  filterText,
  onFilterTextChange,
}) => {
  const [filter, setFilter] = useState(false);

  //* this function handles the Filter button
  const applyFilter = (e) => {
    e.preventDefault(); //!--Prevent form submission
    if (filter) setFilter(false);
    else setFilter(true);
  };

  return (
    <form className="flex justify-between gap-2">
      <input
        type="search"
        value={filterText}
        onChange={(e) => onFilterTextChange(e.target.value)}
        id="searchitem"
        placeholder="Search.."
        className="outline-none w-full px-2 py-1 rounded-md"
      />

      <button
        onClick={applyFilter}
        className="bg-violet-800 px-2 py-1 rounded-lg flex justify-center items-center text-md"
      >
        <span className="material-symbols-outlined text-sm pr-1">
          filter_alt
        </span>
        <span>Filter</span>
      </button>

      {filter && (
        <Dropdown
          onlyOrganic={onlyOrganic}
          applyStockFilter={applyStockFilter}
          onOrganicChange={onOrganicChange}
          onStockChange={onStockChange}
        />
      )}
    </form>
  );
};

const Dropdown = ({
  onlyOrganic,
  applyStockFilter,
  onOrganicChange,
  onStockChange,
}) => {
  return (
    <div className="dropdown">
      <ul>
        <li>
          <input
            type="checkbox"
            name="toggleAvailability"
            checked={applyStockFilter}
            onChange={(e) => onStockChange(e.target.checked)}
            id="toggleAvailability"
            className="mr-3"
          />
          <label htmlFor="toggleAvailability">Show Products in Stock</label>
        </li>
        <li>
          <input
            type="checkbox"
            name="toggleOrganic"
            checked={onlyOrganic}
            onChange={(e) => onOrganicChange(e.target.checked)}
            id="toggleOrganic"
            className="mr-3"
          />
          <label htmlFor="toggleOrganic">Show only Organic</label>
        </li>
      </ul>
    </div>
  );
};

//^ -- This component handlels both 'ProductCategory' and 'ProductList' and renders them
const ProductTable = ({
  products,
  onlyOrganic,
  applyStockFilter,
  filterText,
}) => {
  const arrayOfProducts = [];
  let lastCategory = null;

  products.forEach((product) => {
    if (product.title.toLowerCase().indexOf(filterText.toLowerCase()) === -1)
      return;
    if (onlyOrganic && product.isOrganic === false) return;
    if (applyStockFilter && product.isAvailable === false) return;
    if (product.category !== lastCategory) {
      arrayOfProducts.push(
        <ProductCategory category={product.category} key={product.category} />
      );
    }
    arrayOfProducts.push(<ProductList product={product} key={product.title} />);
    lastCategory = product.category;
  });

  return (
    <table className="border-spacing-x-8 border-spacing-y-2 bg-violet-950 border-separate rounded-lg">
      <thead>
        <tr>
          <th className="border-slate-600 p-3 text-lg border-b-2">PRODUCTS</th>
          <th className="border-slate-600 p-3 text-lg border-b-2">PRICE</th>
          <th className=" border-slate-600 p-3 text-lg border-b-2">STOCK</th>
        </tr>
      </thead>
      <tbody>{arrayOfProducts}</tbody>
    </table>
  );
};

//^ -- This component categorises the list of products based on product category eg:("category":"leafy")
const ProductCategory = ({ category }) => {
  return (
    <tr>
      <th colSpan={3} className="text-lg text-blue-400 py-2">
        {`---- ${category} ----`}
      </th>
    </tr>
  );
};

//^ -- This component prints the product details on web page
const ProductList = ({ product }) => {
  const availability = product.isAvailable ? (
    <span className="text-green-400 font-medium">Available</span>
  ) : (
    <span className="text-red-600 font-medium">Out of Stock</span>
  );
  return (
    <tr>
      <td className="p-2">{product.title}</td>
      <td>{`$${product.price}`}</td>
      <td>{availability}</td>
    </tr>
  );
};

export default App;
