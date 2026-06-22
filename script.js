// --- 7 Rows x 4 Columns Dynamic Data Storage ---
const dataset = [
    { title: "Trending Apparel & Fashion", items: [
        { name: "Denim Jacket", price: 3999, img: "https://images.unsplash.com/photo-1576995853123-5a10305d93c0?q=80&w=400" },
        { name: "Summer Dress", price: 2499, img: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?q=80&w=400" },
        { name: "Leather Boots", price: 6999, img: "https://images.unsplash.com/photo-1520639888713-7851133b1ed0?q=80&w=400" },
        { name: "Wrist Watch", price: 9500, img: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=400" }
    ]},
    { title: "Electronics & Audio Gadgets", items: [
        { name: "Headphones", price: 14999, img: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=400" },
        { name: "Action Camera", price: 11499, img: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?q=80&w=400" },
        { name: "Bluetooth Speaker", price: 2999, img: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?q=80&w=400" },
        { name: "Smart Watch", price: 4999, img: "https://images.unsplash.com/photo-1434494878577-86c23bcb06b9?q=80&w=400" }
    ]},
    { title: "Home Decor & Furniture", items: [
        { name: "Office Chair", price: 12999, img: "https://images.unsplash.com/photo-1505797149-43b0069ec26b?q=80&w=400" },
        { name: "Ceramic Pots", price: 1999, img: "https://images.unsplash.com/photo-1485955900006-10f4d324d411?q=80&w=400" },
        { name: "Desk Lamp", price: 2450, img: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?q=80&w=400" },
        { name: "Sofa Chair", price: 18999, img: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=400" }
    ]},
    { title: "Beauty & Self-Care", items: [
        { name: "Essential Oils", price: 1599, img: "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?q=80&w=400" },
        { name: "Electric Toothbrush", price: 3499, img: "https://images.unsplash.com/photo-1607613009820-a29f7bb81c04?q=80&w=400" },
        { name: "Face Serum", price: 999, img: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?q=80&w=400" },
        { name: "Grooming Kit", price: 2799, img: "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?q=80&w=400" }
    ]},
    { title: "Fitness & Outdoors", items: [
        { name: "Yoga Mat", price: 1499, img: "https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?q=80&w=400" },
        { name: "Dumbbells", price: 19999, img: "https://images.unsplash.com/photo-1638536532686-d610adfc8e5c?q=80&w=400" },
        { name: "Camping Tent", price: 5499, img: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?q=80&w=400" },
        { name: "Steel Bottle", price: 1299, img: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?q=80&w=400" }
    ]},
    { title: "Books & Stationary", items: [
        { name: "Bullet Journal", price: 899, img: "https://images.unsplash.com/photo-1531346878377-a5be20888e57?q=80&w=400" },
        { name: "Fountain Pen", price: 1999, img: "https://images.unsplash.com/photo-1583485088034-697b5bc54ccd?q=80&w=400" },
        { name: "Acoustic Guitar", price: 7499, img: "https://images.unsplash.com/photo-1510915361894-db8b60106cb1?q=80&w=400" },
        { name: "Sci-Fi Novel", price: 499, img: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?q=80&w=400" }
    ]},
    { title: "Toys & Games", items: [
        { name: "STEM Robot Kit", price: 2999, img: "https://images.unsplash.com/photo-1531525645387-7f14be1bdbbd?q=80&w=400" },
        { name: "Wooden Chess", price: 1899, img: "https://images.unsplash.com/photo-1529699211952-734e80c4d42b?q=80&w=400" },
        { name: "4K Drone", price: 24999, img: "https://images.unsplash.com/photo-1508614589041-895b88991e3e?q=80&w=400" },
        { name: "Retro Console", price: 3499, img: "https://images.unsplash.com/photo-1551103782-8ab07afd45c1?q=80&w=400" }
    ]}
];

// --- Automatically Generate HTML Grid using Javascript ---
const mainContainer = document.getElementById('main-products-container');
dataset.forEach(row => {
    let rowHTML = `<div class="mb-4">
        <h4 class="fw-bold text-dark bg-white p-3 mb-0 shadow-sm border-bottom fs-5">${row.title}</h4>
        <div class="row row-cols-1 row-cols-sm-2 row-cols-lg-4 g-3 bg-white px-3 pb-3 shadow-sm rounded-bottom">`;
    
    row.items.forEach(item => {
        rowHTML += `<div class="col"><div class="card h-100 border p-2">
            <div class="product-img mb-2" style="background-image: url('${item.img}');" data-name="${item.name}" data-img-url="${item.img.replace('w=400','w=800')}"></div>
            <h6 class="fw-bold text-truncate m-0">${item.name}</h6>
            <p class="text-danger fw-bold my-1">₹${item.price.toLocaleString('en-IN')}</p>
            <button class="btn btn-warning rounded-pill btn-sm mt-auto add-to-cart-btn" data-name="${item.name}" data-price="${item.price}">Add to Cart</button>
        </div></div>`;
    });
    rowHTML += `</div></div>`;
    mainContainer.innerHTML += rowHTML;
});

// --- Dynamic Cart Engine ---
let cart = [];
const cartCountElement = document.getElementById('cart-count');
const cartItemsContainer = document.getElementById('cart-items-container');
const cartTotalPriceElement = document.getElementById('cart-total-price');

document.addEventListener('click', (e) => {
    if (e.target.classList.contains('add-to-cart-btn')) {
        const btn = e.target;
        const name = btn.getAttribute('data-name');
        const price = parseFloat(btn.getAttribute('data-price'));
        const existing = cart.find(i => i.name === name);
        if (existing) existing.quantity++; else cart.push({ name, price, quantity: 1 });
        
        updateCartUI();
        btn.textContent = "Added ✓"; btn.classList.replace('btn-warning', 'btn-success');
        setTimeout(() => { btn.textContent = "Add to Cart"; btn.classList.replace('btn-success', 'btn-warning'); }, 800);
    }
    if (e.target.classList.contains('product-img')) {
        document.getElementById('zoomTargetImg').src = e.target.getAttribute('data-img-url');
        new bootstrap.Modal(document.getElementById('zoomModal')).show();
    }
});

function updateCartUI() {
    cartCountElement.textContent = cart.reduce((t, i) => t + i.quantity, 0);
    cartItemsContainer.innerHTML = '';
    let total = 0;
    cart.forEach(i => {
        total += i.price * i.quantity;
        cartItemsContainer.innerHTML += `<div class="d-flex justify-content-between align-items-center py-2 border-bottom">
            <div><h6 class="mb-0 fw-bold">${i.name}</h6><small class="text-muted">Qty: ${i.quantity} × ₹${i.price}</small></div>
            <span class="fw-bold">₹${i.price * i.quantity}</span>
        </div>`;
    });
    if(!cart.length) cartItemsContainer.innerHTML = '<p class="text-muted text-center py-4 my-0">Your cart is empty.</p>';
    cartTotalPriceElement.textContent = total.toLocaleString('en-IN');
}

document.getElementById('clear-cart-btn').addEventListener('click', () => { cart = []; updateCartUI(); });
document.getElementById('checkout-btn').addEventListener('click', () => { if(cart.length) { alert("Order Completed!"); cart = []; updateCartUI(); bootstrap.Modal.getInstance(document.getElementById('cartModal')).hide(); } });
document.getElementById('back-to-top').addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

// --- Image Zoom Hover Physics ---
const zoomTargetImg = document.getElementById('zoomTargetImg');
document.querySelector('.zoom-img-container').addEventListener('mousemove', (e) => {
    const box = e.currentTarget.getBoundingClientRect();
    zoomTargetImg.style.transformOrigin = `${((e.clientX - box.left) / box.width) * 100}% ${((e.clientY - box.top) / box.height) * 100}%`;
});
document.querySelector('.zoom-img-container').addEventListener('mouseleave', () => zoomTargetImg.style.transformOrigin = 'center center');