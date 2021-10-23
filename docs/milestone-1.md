# Team-beta

> Member: Qiming Chen, Jiafeng Li, Yongchang Cheng



## Part0: Data Interactions



### Innovative Idea

The idea of this software is to give people who use their free time to grow plants in their backyard at home a place to have a place to show their results and deliver their value. They can put their products on their "backyard home page". They can choose whether to trade or exchange, or even donate. Other users can use this platform to buy organic and local produce.

### Important Components

1. User yard produce page: a html page display user's yard produce page with list of produces (exclusively for backyard owner).

2. Login credential for role-based authentication : login credential distinguish the buyer and seller.
3. Home page : a list of all yard produce page.
4. Shopping Cart: this is exclusively for buyer, if user login as backyard owner, there will no shopping cart in their app pages

### Data types:

1. A list of all yard produce pages
2. A class of holding produce page details
3. A shopping cart or shopping list 
4. A class of holding produce details
5. User details
6. Item details



Users will be prompted to enter their username and password to grant permissions, and once logged in successfully, will be taken directly to the home page, displaying a list of vendors and a menu bar to log out and view account details. There is also the ability to search for vendors.

The vendor list is clickable, which will direct the user to the designated vendor's backyard product page where a list of products and contact information will be displayed.

## Part 1: Wireframes

### Login Page

![image-20211023115006556](https://tva1.sinaimg.cn/large/008i3skNgy1gvpoidwv09j60ry0kw0tc02.jpg)

### Sign Up

![image-20211023115017377](https://tva1.sinaimg.cn/large/008i3skNgy1gvpoil1bhzj60se0o6q3n02.jpg)

### Home Page

![image-20211020214835851](https://tva1.sinaimg.cn/large/008i3skNgy1gvmoy7qq1pj60xu0u0q5k02.jpg)

### Vendor Page

![image-20211020214854170](https://tva1.sinaimg.cn/large/008i3skNgy1gvmoyiispvj60xv0u0dhe02.jpg)





## HTML 

**Login/Sign out  Page:**

![image-20211023112254601](https://tva1.sinaimg.cn/large/008i3skNgy1gvpnq8x2eqj61pp0u0tfc02.jpg)

![image-20211023114413703](https://tva1.sinaimg.cn/large/008i3skNgy1gvpoccy612j61oy0u0n3o02.jpg)

**Vendor Page:**

![image-20211023114910685](https://tva1.sinaimg.cn/large/008i3skNgy1gvpohflepoj61qj0u0wgz02.jpg)

**Home Page:**

![image-20211023112225036](https://tva1.sinaimg.cn/large/008i3skNgy1gvpnpng2vnj61px0u0djl02.jpg)





## DIVISION OF LABOR

Login-SignUp Page: Jiafeng Li

Vendor- Page: Yongchang Cheng

Home-Page: Qiming Chen

ALL CSS files are separately written power by `Boostrap`.

All of buttons are clickable with pop up window
