export function ProductThree() {
    const products = [
      {
        imageUrl: "src/assets/prdct-img-1.jpg",
        title: "Nike Airmax v1",
        description: "Description for Product 1",
        tags: ["#Sneakers", "#Nike", "#Airmax"],
        colors: ["red", "purple", "orange"],
        sizes: ["1 KG", "2 KG", "3 KG"]
      },
      {
        imageUrl: "src/assets/prdct-img-2.jpg",
        title: "Nike Airmax v1",
        description: "Description for Product 1",
        tags: ["#Sneakers", "#Nike", "#Airmax"],
        colors: ["red", "purple", "orange"],
        sizes: ["1 KG", "2 KG", "3 KG"]
      },
      {
        imageUrl: "src/assets/prdct-img-3.jpg",
        title: "Nike Airmax v1",
        description: "Description for Product 1",
        tags: ["#Sneakers", "#Nike", "#Airmax"],
        colors: ["red", "purple", "orange"],
        sizes: ["1 KG", "2 KG", "3 KG"]
      },
      {
        imageUrl: "src/assets/prct-img-4.jpg",
        title: "Nike Airmax v1",
        description: "Description for Product 1",
        tags: ["#Sneakers", "#Nike", "#Airmax"],
        colors: ["red", "purple", "orange"],
        sizes: ["1 KG", "2 KG", "3 KG"]
      },
      {
        imageUrl: "src/assets/prdct-img-5.jpg",
        title: "Nike Airmax v1",
        description: "Description for Product 1",
        tags: ["#Sneakers", "#Nike", "#Airmax"],
        colors: ["red", "purple", "orange"],
        sizes: ["1 KG", "2 KG", "3 KG"]
      },
      {
        imageUrl: "src/assets/prdct-img-6.jpg",
        title: "Nike Airmax v1",
        description: "Description for Product 1",
        tags: ["#Sneakers", "#Nike", "#Airmax"],
        colors: ["red", "purple", "orange"],
        sizes: ["1 KG", "2 KG", "3 KG"]
      },
      {
        imageUrl: "src/assets/prdct-img-7.jpg",
        title: "Nike Airmax v1",
        description: "Description for Product 1",
        tags: ["#Sneakers", "#Nike", "#Airmax"],
        colors: ["red", "purple", "orange"],
        sizes: ["1 KG", "2 KG", "3 KG"]
      },
      {
        imageUrl: "src/assets/prdct-img-8.jpg",
        title: "Nike Airmax v1",
        description: "Description for Product 1",
        tags: ["#Sneakers", "#Nike", "#Airmax"],
        colors: ["red", "purple", "orange"],
        sizes: ["1 KG", "2 KG", "3 KG"]
      },
      // ... more product objects
      {
        imageUrl: "src/assets/prdct-img-9.jpg",
        title: "Nike Airmax v9",
        description: "Description for Product 9",
        tags: ["#Sneakers", "#Nike", "#Revolution"],
        colors: ["blue", "green", "yellow"],
        sizes: ["1 KG", "3 KG", "5 KG"]
      }
      // Add more products as needed
    ];
  
    return (
      <div className="mx-auto grid w-full max-w-7xl items-center space-y-4 px-2 py-10 md:grid-cols-2 md:gap-6 md:space-y-0 lg:grid-cols-4">
        {products.map((product, i) => (
          <div key={i} className="rounded-md border">
            <img
              src={product.imageUrl}
              alt={`Product ${i + 1}`}
              className="aspect-[16/9] w-full rounded-md md:aspect-auto md:h-[300px] lg:h-[200px]"
            />
            <div className="p-4">
              <h1 className="inline-flex items-center text-lg font-semibold">{product.title}</h1>
              <p className="mt-3 text-sm text-gray-600">{product.description}</p>
              <div className="mt-4">
                {product.tags.map((tag, tagIndex) => (
                  <span key={tagIndex} className="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="mt-3 flex items-center space-x-2">
                <span className="block text-sm font-semibold">Colors : </span>
                {product.colors.map((color, colorIndex) => (
                  <span key={colorIndex} className={`block h-4 w-4 rounded-full border-2 border-gray-300 bg-${color}-400`}></span>
                ))}
              </div>
              <div className="mt-5 flex items-center space-x-2">
                <span className="block text-sm font-semibold">Quantity : </span>
                {product.sizes.map((size, sizeIndex) => (
                  <span key={sizeIndex} className="block cursor-pointer rounded-md border border-gray-300 p-1 px-2 text-xs font-medium">
                    {size}
                  </span>
                ))}
              </div>
              <button
                type="button"
                className="mt-4 w-full rounded-sm bg-black px-2 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    );
  }
  