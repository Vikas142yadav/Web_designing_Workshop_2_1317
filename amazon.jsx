export default function AmazonHomePage() {
  const products = [
    {
      id: 1,
      title: "Wireless Headphones",
      price: "₹2,999",
      image:
        "https://images.unsplash.com/photo-1518444065439-e933c06ce9cd?q=80&w=800&auto=format&fit=crop",
    },
    {
      id: 2,
      title: "Smart Watch",
      price: "₹4,499",
      image:
        "https://images.unsplash.com/photo-1546868871-7041f2a55e12?q=80&w=800&auto=format&fit=crop",
    },
    {
      id: 3,
      title: "Laptop",
      price: "₹54,999",
      image:
        "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?q=80&w=800&auto=format&fit=crop",
    },
    {
      id: 4,
      title: "Gaming Mouse",
      price: "₹1,299",
      image:
        "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?q=80&w=800&auto=format&fit=crop",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 font-sans">
      {/* Navbar */}
      <nav className="bg-black text-white px-6 py-4 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <h1 className="text-3xl font-bold text-yellow-400">amazon</h1>
          <span className="text-sm mt-2">.in</span>
        </div>

        <div className="flex w-full md:w-1/2">
          <input
            type="text"
            placeholder="Search Amazon"
            className="w-full px-4 py-2 rounded-l-lg text-black outline-none"
          />
          <button className="bg-yellow-400 text-black px-5 rounded-r-lg font-semibold hover:bg-yellow-300">
            Search
          </button>
        </div>

        <div className="flex gap-6 text-sm">
          <div>
            <p>Hello, Sign in</p>
            <h2 className="font-bold">Account & Lists</h2>
          </div>
          <div>
            <p>Returns</p>
            <h2 className="font-bold">& Orders</h2>
          </div>
          <div>
            <h2 className="font-bold text-lg">🛒 Cart</h2>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        className="h-[350px] bg-cover bg-center flex items-center justify-center text-white"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1200&auto=format&fit=crop')",
        }}
      >
        <div className="bg-black/60 p-8 rounded-2xl text-center">
          <h1 className="text-4xl font-bold mb-4">Welcome to Amazon Clone</h1>
          <p className="text-lg">Shop Electronics, Fashion, Accessories & More</p>
          <button className="mt-5 bg-yellow-400 text-black px-6 py-3 rounded-xl font-semibold hover:bg-yellow-300 transition">
            Shop Now
          </button>
        </div>
      </section>

      {/* Categories */}
      <section className="p-6 grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          "Electronics",
          "Fashion",
          "Home",
          "Gaming",
        ].map((category, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-md p-6 text-center hover:scale-105 transition"
          >
            <h2 className="text-xl font-bold">{category}</h2>
          </div>
        ))}
      </section>

      {/* Product Section */}
      <section className="p-6">
        <h1 className="text-3xl font-bold mb-6">Best Sellers</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition"
            >
              <img
                src={product.image}
                alt={product.title}
                className="h-52 w-full object-cover"
              />

              <div className="p-4">
                <h2 className="text-lg font-semibold">{product.title}</h2>
                <p className="text-xl text-green-600 font-bold mt-2">
                  {product.price}
                </p>

                <button className="mt-4 w-full bg-yellow-400 py-2 rounded-lg font-semibold hover:bg-yellow-300">
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white mt-10 py-6 text-center">
        <h2 className="text-xl font-bold">Amazon Clone Project</h2>
        <p className="mt-2 text-sm">
          Made using React and JavaScript
        </p>
      </footer>
    </div>
  );
}
