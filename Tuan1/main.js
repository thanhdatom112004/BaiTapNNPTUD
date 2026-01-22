// Câu 1 : Khai báo constructor function Product 
function Product(id,name, price,quantity,category,isVailable){   
    this.id = id;
    this.name = name;
    this.price = price;
    this.quantity = quantity;
    this.category = category;
    this.isVailable = isVailable;
}
// Câu 2 : Tạo mảng Products gồm 6 sản phẩm với các thông tin khác nhau
let Products = [
    new Product(1,"Iphone 14 Pro Max",30000000,10,"Điện thoại",true),      
    new Product(2,"Samsung Galaxy S23 Ultra",28000000,0,"Điện thoại",true),
    new Product(3,"Macbook Pro M2",45000000,5,"Laptop",false),
    new Product(4,"Dell XPS 13",35000000,8,"Laptop",true),
    new Product(5,"Sony WH-1000XM4",20000000,20,"Tai nghe",true),
    new Product(6,"Bose QuietComfort 45",9000000,0,"Tai nghe",false)
];
console.log(Products);
// Câu 3: Tạo mảng mới chỉ chứa: name, price của mỗi sản phẩm.
let NewsProduct = Products.map((e=>({name:e.name,price:e.price})));
console.log(NewsProduct);

//Câu 4: Lọc ra các sản phẩm còn hàng trong kho (quantity > 0)

let ProductsInStock = Products.filter(e=>e.quantity > 0);
if(ProductsInStock)
console.log(ProductsInStock);

//Câu 5: Kiểm tra xem có ít nhất một sản phẩm có giá trên 30.000.000 hay không
let hasExpensiveProduct = Products.some(e=>e.price > 30000000);
if(hasExpensiveProduct)
    console.log("Có ít nhất một sản phẩm có giá trên 30.000.000");
else
    console.log("Không có ít nhất một sản phẩm có giá trên 30.000.000");

//Câu 6: Kiểm tra xem tất cả sản phẩm thuộc danh mục "Tai nghe" có đang được bán(isAvailable = true) hay không
let allHeadphonesAvailable = Products.filter(e=>e.category === "Tai nghe").every(e=>e.isVailable === true);
if(allHeadphonesAvailable)
    console.log("Tất cả sản phẩm thuộc danh mục 'Tai nghe' đều đang được bán");
else
    console.log("Không phải tất cả sản phẩm thuộc danh mục 'Tai nghe' đều đang được bán");
//Câu 7: Tính tổng giá trị kho hàng Giá trị kho = price × quantity
let SumInventoryValue = Products.reduce((total,e)=>total+(e.price * e.quantity),0);
console.log(SumInventoryValue);


// Câu 8: Dùng for...of duyệt mảng products và in ra:
// Tên sản phẩm
// Danh mục
// Trạng thái
console.log("-----------------------------------");
for (const e of Products) {
    console.log("Tên sản phẩm: " + e.name);
    console.log("Danh mục: " + e.category);
    console.log("Trạng thái: " + (e.isVailable ? "Còn hàng" : "Hết hàng"));
}
// Câu 9: Dùng for...in để:
// In ra tên thuộc tính
// In ra giá trị tương ứng
console.log("-----------------------------------");
for (const key in Products[0]) {
    if (!Object.hasOwn(Products[0], key)) continue;
    const element = Products[0][key];
    console.log("Tên thuộc tính: " + key);
    console.log("Giá trị tương ứng: " + element);           
}
//Câu 10: Lấy danh sách tên các sản phẩm đang bán và còn hàng.
let availableProducts = Products.filter(e => e.isVailable && e.quantity > 0);
let productNames = availableProducts.map(e => e.name);
console.log("Danh sách tên các sản phẩm đang bán và còn hàng:");
console.log(productNames);