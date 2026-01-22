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
    new Product(2,"Samsung Galaxy S23 Ultra",28000000,15,"Điện thoại",true),
    new Product(3,"Macbook Pro M2",45000000,5,"Laptop",false),
    new Product(4,"Dell XPS 13",35000000,8,"Laptop",true),
    new Product(5,"Sony WH-1000XM4",8000000,20,"Tai nghe",true),
    new Product(6,"Bose QuietComfort 45",9000000,12,"Tai nghe",false)
];
console.log(Products);
// Câu 3: Tạo mảng mới chỉ chứa: name, price của mỗi sản phẩm.
let NewsProduct = Products.map((e=>({name:e.name,price:e.price})));
console.log(NewsProduct);
