const ListFood = [
    {
      id: 1,
      name: "Gà Rán",
      price: 1,
      desc: "Gà rán là thức ăn nhanh phổ biến được giới trẻ ưa chuộng và đang trở thành lựa chọn hàng đầu của nhiều người khi đến với nhữngcửa hàng fastfood không chỉ vì tiện lợi mà còn có những lợi íchkhông ngờ.",
      image: "src/image/blog/img2.jpg",
      category: 1,
    },
    {
      id: 2,
      name: "Hamburger",
      price: 1,
      desc: "Hamburger chính là một thức ăn nhanh phổ biến ở Mỹ và các quốc gia, dù rằng Hamburger bắt nguồn từ thủ phủ Hamburg (Đức).",
      image: "src/image/blog/img3.jpg",
      category: 4,
    },
    {
      id: 3,
      name: "Khoai tây chiên",
      price: 2,
      desc: "Là thức ăn nhanh phổ biến ở tất cả các quốc gia từ thành thị đến nông thôn, đây là món khoái khẩu của nhiều người không phân biệt lứa tuổi.",
      image: "src/image/blog/img4.jpg",
      category: 3,
    },
    {
      id: 4,
      name: "Pizza",
      price: 2,
      desc: "Là loại bánh dẹt, tròn được chế biến từ nước, bột mỳ và nấm men, sau khi đã được ủ ít nhất 24 tiếng đồng hồ và nhào nặn thành loại bánh có hình dạng tròn và dẹt, và được cho vào lò nướng chín.",
      image: "src/image/blog/img5.jpg",
      category: 4,
    },
    {
      id: 5,
      name: "Pasta",
      price: 2,
      desc: "Pasta là một loại thực phẩm truyền thống của nước Ý, đã có từ năm 1154 và trở thành thức ăn nhanh phổ biến trên khắp thế giới. Pasta có hơn 310 loại với 1300 tên gọi, hương vị và hình dạng khác nhau.",
      image: "src/image/blog/img6.jpg",
      category: 5,
    },
    {
      id: 6,
      name: "Xúc xích",
      price: 1,
      desc: "Thức ăn nhanh phổ biến xúc xích là một loại thực phẩm chế biến từ thịt. Đây cũng là một trong những món ăn lâu đời nhất mà con người đã tạo ra trong quá trình bảo quản và lưu trữ thực phẩm bằng phương pháp hong khói, phơi khô, ủ muối hoặc hấp chín.",
      image: "src/image/blog/img7.jpg",
      category: 1,
    },
  ];

  const BlogCategory = [
    {
      id: 1,
      name: "Fries",
    },
    {
      id: 2,
      name: "Desserts",
    },
    {
      id: 3,
      name: "Fried food",
    },
    {
      id: 4,
      name: "Cakes",
    },
    {
      id: 5,
      name: "Noodles",
    },
  ];



  function ListBlog(data){
    const ListBlogDiv = document.querySelector('.food-c')
    ListBlogDiv.innerHTML = ""
    for(let item of data){
        ListBlogDiv.innerHTML += `
        <div class="food-t">
        <div class="img">
        <a href=""><img src="${item.image}" alt="" /></a>
        </div>  
        <div class="title">
        <h3><a href=""style="color: #F54748;">${item.name}</a></h3>
          <p>${item.desc}</p>
        </div>
      </div>
        `         
    }
  }
ListBlog(ListFood);


  function ListCategoryMenu(){
    const CateList = document.querySelector('#cate-list')
    for(let item of BlogCategory){
        CateList.innerHTML += `
            <li><a href="./Blog.html?cateId=${item.id}">${item.name}</a></li>
        `
    }
  }
  ListCategoryMenu();

  
  function ReRenderBlog(){
    const CateId = new URLSearchParams(window.location.search).get('cateId')
    const ProductByC = ListFood.filter(function(item){
        return item.category == CateId
    })   
    if(CateId){
      ListBlog(ProductByC)
    }else{
      ListBlog(ListFood)
    }
  }
  ReRenderBlog();