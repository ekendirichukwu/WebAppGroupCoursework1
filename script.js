let schools =[

    {
        "id": 1,
        "title": "Psychology",
        "location":"Liverpool",
        "price": 150,
        "image": "image/psychology.jpg",
        "availableInventory": 5
       
      }, 
    ]
    var webstore = new Vue({
      el: '#app',
      data: {
          showProduct: true,
          cart: [],
          schools: schools,
      },
      methods: {
          
          addToCart(school) {
              this.cart.push(school)
              school.availableInventory -= 1
              console.log(this.cart)
          },
          
         
          canAddToCart: function(school) {
              return school.availableInventory > this.cartCount(school.id);
          },
          cartCount: function(id) {
              let count = 0;
              for(let i = 0; i < this.cart.length; i++)
              {
                  if(this.cart[i] === id)
                  {
                      count++;
                  }
              }
              return count;
              // return this.cart.length || '';
          },
          showCheckout() {
              this.showProduct = this.showProduct ? false : true;
          },
          checkOut() {
              let show = this.cart
              return show
          },
    
          filterLessons: function () {
              let lessons = this.schools
              return lessons
          }
    
      },
      computed: {
          cartItemCount: function () {
              return this.cart.length
          },
      }
    });