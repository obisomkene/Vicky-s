// nav
// shownav
// closenavbtn
// navbtntoggle

$(document).ready(function(){

 const products = [
   {
     id: 1,
     name: "Samsung Galaxy S1",
     Image: "Asset/image/product/samsung s3.jpg",
     description: "Made in Vietnam",
     category: "Samsung",
     price: "30,000",
     quantity: 5000,
     ratings: 3.5,
   },
   {
     id: 2,
     name: "Samsung Galaxy S2",
     Image: "Asset/image/product/samsung s2.jpg",
     description: "Made in Vietnam",
     category: "Samsung",
     price: "30,000",
     quantity: 5000,
     ratings: 2.5,
   },
   {
     id: 3,
     name: "Samsung Galaxy S3",
     Image: "Asset/image/product/s3.jpg",
     description: "Made in Vietnam",
     category: "Samsung",
     price: "40,000",
     quantity: 5000,
     ratings: 3.5,
   },
   {
     id: 4,
     name: "Samsung Galaxy S4",
     Image: "Asset/image/product/s4.jpg",
     description: "Made in Vietnam",
     category: "Samsung",
     price: "50,000",
     quantity: 5000,
     ratings: 2.5,
   },
   {
     id: 1,
     name: "Samsung Galaxy S5",
     Image: "Asset/image/product/s5.jpg",
     description: "Made in Vietnam",
     category: "Samsung",
     price: "45,000",
     quantity: 5000,
     ratings: 3.5,
   },
   {
     id: 1,
     name: "Samsung Galaxy S6",
     Image: "Asset/image/product/s6.jpg",
     description: "Made in Vietnam",
     category: "Samsung",
     price: "60,000",
     quantity: 5000,
     ratings: 1.5,
   },
   {
     id: 1,
     name: "Samsung Galaxy S7",
     Image: "Asset/image/product/s7.jpg",
     description: "Made in Vietnam",
     category: "Samsung",
     price: "70,000",
     quantity: 5000,
     ratings: 3.5,
   },
   {
     id: 1,
     name: "Samsung Galaxy S8",
     Image: "Asset/image/product/s8.jpg",
     description: "Made in Vietnam",
     category: "Samsung",
     price: "130,000",
     quantity: 5000,
     ratings: 3.5,
   },
   {
     id: 1,
     name: "Samsung Galaxy S9",
     Image: "Asset/image/product/s9.jpg",
     description: "Made in Vietnam",
     category: "Samsung",
     price: "150,000",
     quantity: 5000,
     ratings: 4,
   },
   {
     id: 1,
     name: "Samsung Galaxy S10",
     Image: "Asset/image/product/s10.jpg",
     description: "Made in Vietnam",
     category: "Samsung",
     price: "300,000",
     quantity: 5000,
     ratings: 5,
   },
   {
     id: 1,
     name: "Samsung Galaxy S20",
     Image: "Asset/image/product/s20.jpg",
     description: "Made in Vietnam",
     category: "Samsung",
     price: "1,000,000",
     quantity: 5000,
     ratings: 5,
   },
   {
     id: 1,
     name: "Samsung Galaxy S21",
     Image: "Asset/image/product/s21.jpg",
     description: "Made in Vietnam",
     category: "Samsung",
     price: "1,200,000",
     quantity: 5000,
     ratings: 5,
   },
   {
     id: 1,
     name: "Samsung Galaxy S22",
     Image: "Asset/image/product/s22.jpg",
     description: "Made in Vietnam",
     category: "Samsung",
     price: "1,500,000",
     quantity: 5000,
     ratings: 5,
   },
   {
     id: 1,
     name: "Samsung Galaxy S23",
     Image: "Asset/image/product/s23.jpg",
     description: "Made in Vietnam",
     category: "Samsung",
     price: "1,700,000",
     quantity: 5000,
     ratings: 5,
   },
   {
     id: 1,
     name: "Samsung Galaxy S24",
     Image: "Asset/image/product/s24.jpg",
     description: "Made in Vietnam",
     category: "Samsung",
     price: "2,000,000",
     quantity: 5000,
     ratings: 5,
   },
   {
     id: 1,
     name: "Samsung Galaxy S24 Ultra",
     Image: "Asset/image/product/s24 ultra.jpg",
     description: "Made in Vietnam",
     category: "Samsung",
     price: "30,000",
     quantity: 5000,
     ratings: 5,
   },
 ];const newproducts = [
   {
     id: 1,
     name: "Iphone 1",
     Image: "Asset/image/product/iphone1.jpg",
     description: "Made in Vietnam",
     category: "Iphone",
     price: "30,000",
     quantity: 5000,
     ratings: 3.5,
   },
   {
     id: 2,
     name: "Iphone 2",
     Image: "Asset/image/product/iphone2.jpg",
     description: "Made in Vietnam",
     category: "Iphone",
     price: "30,000",
     quantity: 5000,
     ratings: 2.5,
   },
   {
     id: 3,
     name: "Iphone 3",
     Image: "Asset/image/product/iphone3.jpg",
     description: "Made in Vietnam",
     category: "Iphone",
     price: "40,000",
     quantity: 5000,
     ratings: 3.5,
   },
   {
     id: 4,
     name: "Iphone 4",
     Image: "Asset/image/product/iphone4.jpg",
     description: "Made in Vietnam",
     category: "Iphone",
     price: "50,000",
     quantity: 5000,
     ratings: 2.5,
   },
   {
     id: 1,
     name: "Iphone 5",
     Image: "Asset/image/product/iphone5.jpg",
     description: "Made in Vietnam",
     category: "Iphone",
     price: "45,000",
     quantity: 5000,
     ratings: 3.5,
   },
   {
     id: 1,
     name: "Iphone 6",
     Image: "Asset/image/product/iphone6.jpg",
     description: "Made in Vietnam",
     category: "Iphone",
     price: "60,000",
     quantity: 5000,
     ratings: 1.5,
   },
   {
     id: 1,
     name: "Iphone 7",
     Image: "Asset/image/product/iphone7.jpg",
     description: "Made in Vietnam",
     category: "Iphone",
     price: "70,000",
     quantity: 5000,
     ratings: 3.5,
   },
   {
     id: 1,
     name: "Iphone 8",
     Image: "Asset/image/product/iphone8.jpg",
     description: "Made in Vietnam",
     category: "Iphone",
     price: "130,000",
     quantity: 5000,
     ratings: 3.5,
   },
   {
     id: 1,
     name: "Iphone X",
     Image: "Asset/image/product/iphonex.jpg",
     description: "Made in Vietnam",
     category: "Iphone",
     price: "150,000",
     quantity: 5000,
     ratings: 4,
   },
 ];







    $(".closenavbtn").on("click", function () {
      $("nav").removeClass("shownav");
    })

    $(".navbtntoggle").on("click",function(){
        $("nav").toggleClass("shownav")
    })
    const featuredproductcardcontainer = $(".featuredproductcardcontainer");
    const newproductcardcontainer = $(".newproductcardcontainer");
    const myproducts = products.map(function(item,index,array){
      return `<!-- produc card -->
             <article class="productcard">
                <img src="${item.Image}" alt="product image" class="productimg">
                <h4 class="productcategory">${item.category}</h4>
                <h4 class="productcategory">${item.name}</h4>
                <p class="rating">${addRating(item.ratings)}
                  </p>
<div class="pricecart">
    <p>&#8358; ${item.price}</p>
    <button class="addcart">
        <i class="fas fa-shopping-cart"></i>
    </button>
</div>
                
                
             </article>
            <!-- end of produc card -->
      `;
    })
     const nnewproducts = newproducts.map(function (item, index, array) {
       return `<!-- produc card -->
             <article class="productcard">
                <img src="${item.Image}" alt="product image" class="productimg">
                <h4 class="productcategory">${item.category}</h4>
                <h4 class="productcategory">${item.name}</h4>
                <p class="rating">${addRating(item.ratings)}
                  </p>
<div class="pricecart">
    <p>&#8358; ${item.price}</p>
    <button class="addcart">
        <i class="fas fa-shopping-cart"></i>
    </button>
</div>
                
                
             </article>
            <!-- end of produc card -->
      `;
     });
    featuredproductcardcontainer.html(myproducts.join(''))
    newproductcardcontainer.html(nnewproducts.join(""));
    function addRating (ratings){
      switch(ratings){
        case 0:
          return `  <i class="far fa-star"></i>
            <i class="far fa-star"></i>
              <i class="far fa-star"></i>
                <i class="far fa-star"></i>
                  <i class="far fa-star"></i>
          `;
          case 0.5:
             return `
                    <i class="fas fa-star-half"></i>
                    <i class="far fa-star"></i>
                       <i class="far fa-star"></i>
                          <i class="far fa-star"></i>
                             <i class="far fa-star"></i>
          `
            case 1:
               return `<i class="fas fa-star"></i>
                       <i class="far fa-star"></i>
                          <i class="far fa-star"></i>
                             <i class="far fa-star"></i>
                                <i class="far fa-star"></i>
          `
              case 1.5:
                 return `<i class="fas fa-star"></i>
                    <i class="fas fa-star-half"></i>
                    <i class="far fa-star"></i>
                       <i class="far fa-star"></i>
                          <i class="far fa-star"></i>
          `
                case 2:
                   return `<i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                       <i class="far fa-star"></i>
                          <i class="far fa-star"></i>
                             <i class="far fa-star"></i>
          `
                  case 2.5:
                     return `<i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    
                    <i class="fas fa-star-half"></i>
                    <i class="far fa-star"></i>
                       <i class="far fa-star"></i>
          `
                    case 3:
                       return `<i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                   
                    <i class="far fa-star"></i>
                       <i class="far fa-star"></i>
          `
                      case 3.5:
                         return `<i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star-half"></i>
                    <i class="far fa-star"></i>
          `
                        case 4:
                           return `<i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    
                    <i class="far fa-star"></i>
          `
                          case 4.5:
                             return `<i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star-half"></i>
                    
          `
                            case 5:
                               return `<i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
           
          `
          default:
             return `<i class="far fa-star"></i>
            <i class="far fa-star"></i>
              <i class="far fa-star"></i>
                <i class="far fa-star"></i>
                  <i class="far fa-star"></i>
          `
          break;
      }
    }
  })