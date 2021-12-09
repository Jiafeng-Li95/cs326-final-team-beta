# Team-beta



# Yardology



# Fall 2021



> Heroku link: *https://yardology.herokuapp.com/*



# Overview

Our application is intended for people who have a passion for growing plants in their backyard during their free time. This is where people can post information about their backyard products on their vendor page. Others who register can browse a variety of organic products from different vendors. User can also save their interested product from vendor add to their favorite list for later reference when they come in to the vendor actual backyard. Additionally, user can update their infomation as need. Vendor themselves, can add product, update product, and delete product. Each vendor page also come with basic statistical data such as number of view, and likes.



# Team Member

| Avatars | Name | GitHub |
| ------------- | ------------- | ------------- |
| <img src="https://avatars.githubusercontent.com/u/70599965?v=4" width="120" height="120" /> | Jiafeng Li        | [Jiafeng-Li95](https://github.com/Jiafeng-Li95) |
| <img src="https://avatars.githubusercontent.com/u/78445070?v=4" width="120" height="120" /> | Yongchang Cheng | [Yongchang Cheng](https://github.com/yongchangcheng) |
| <img src="https://avatars.githubusercontent.com/u/49624964?v=4" width="120" height="120" /> | Qiming Chen | [Qiming-C](https://github.com/Qiming-C) |



# User Interface

**Login page**: This the entry of our application which user needs to enter their  username and password. 

![image-20211208202506326](https://tva1.sinaimg.cn/large/008i3skNgy1gx7bmu9fpdj31ic0s3mz8.jpg)



**Signup page**: User will prompt to enter following infomation in order to create their account. Password will be encrypted in server side

![image-20211208203309374](https://tva1.sinaimg.cn/large/008i3skNgy1gx7bv8djxaj31ic0s3q50.jpg)



**Home page**: Home page of list of vendor as well as menu bar at the top, the search bar in between. This page is protected by login user, if user is not login in, it will redirect to index page

![image-20211208203512245](https://tva1.sinaimg.cn/large/008i3skNgy1gx7bxcividj31ic0s3n04.jpg)



**Search Bar**: This search bar will move the searched result into user's view. 

![image-20211208203524439](https://tva1.sinaimg.cn/large/008i3skNgy1gx7bxjv0hqj31ic0s3jun.jpg)



**Favorite**: a list of user saved item will be displayed in this popup window if user click the favorite button in the menu bar. This is being cascading, meaning if the owner of this item is being removed, will reflect the change on this list also.

![image-20211208201548551](https://tva1.sinaimg.cn/large/008i3skNgy1gx7bd652vej31ic0s376v.jpg)



**Account info**: User can edit their account, also the check condition is implemented, if current login user tries to change other user info, it will not change.

![image-20211208201614291](https://tva1.sinaimg.cn/large/008i3skNgy1gx7bdm39pgj31ic0s3q5u.jpg)



**Help**: a popup window displays all the developer in case if user needs further assistance.

![image-20211208201639395](https://tva1.sinaimg.cn/large/008i3skNgy1gx7be1mg9pj31ic0s3tbo.jpg)



**Sign out prompt**: the sign out popup window, if user chooses to sign out, it will go back to index page

![image-20211208201651677](https://tva1.sinaimg.cn/large/008i3skNgy1gx7be9kheej31ic0s376x.jpg)



**Vendor Page**: a vendor page with infomation details, and associate menu bar options. There are two badge icon on the right to show the statistical infomation. User can click the like button, and see how many users are liking this vendor. Whenever someone visit the vendor page, the number of view will increase. The list of product is showing on the middle with appropriate infomation. Use can save the item, but the **delete button** is only executable by the owner of this product.

![image-20211208201737026](https://tva1.sinaimg.cn/large/008i3skNgy1gx7bf1ttp9j31ic0s3tbe.jpg)



**Add product**:  a popup window for owner to add product, if other user tries to create a product for other owner, server will reject the request. 

![image-20211208201751383](https://tva1.sinaimg.cn/large/008i3skNgy1gx7bfagh7tj31ic0s3tb1.jpg)



# APIs



#### Auth: 

| Endpoint     | Method | Body                  | Description                                                  |
| ------------ | ------ | --------------------- | ------------------------------------------------------------ |
| /auth/login  | POST   | Username and password | Check password in db, then compare the validity. If true, redirect to home page |
| /auth/signup | POST   | Username, password    | Encrypted the password to db, Return true redirect to login, fail display error message |

```json
{
	"username": "someone",
	"password": "password",
  "name":"funnyYarName",
  "description":"fresh flesh, green vegetable",
  "location":"BOSTON"
  "phonenumber":85-222-222
}

```



#### Vendor:

| Endpoint         | Method | Body                       | Description                                                  |
| :--------------- | ------ | -------------------------- | :----------------------------------------------------------- |
| /vendor/all      | GET    | Empty                      | Return a list of vendors from list                           |
| /vendor/:id      | GET    | Empty                      | Return a specified vendor by the query param                 |
| /vendor/:id      | DELETE | EMPTY                      | Delete a specified vendor by the query param                 |
| /vendor/         | PUT    | Vendor detail              | Update a vendor detail by vendor itself, need to verify by JWT payload |
| /vendor/like     | POST   | Vendor id and like number  | Create the number of like for given vendor id                |
| /vendor/like/:id | GET    | Empty                      | Return the like number by vendor id from url params          |
| /vendor/like     | PUT    | vendor id and like number  | Update the number of like for given vendor id                |
| /vendor/view/:id | GET    | Empty                      | Return the number of view by vendor id from url params       |
| /vendor/view     | POST   | Vendor id and click number | Create new view record for given vendor id                   |
| /vendor/view     | PUT    | Vendor id and click number | Update the number of view of given vendor id                 |

```json
//for create/update view record
{
  "userid":123,
  "numclicked":0,
}

//for create/update like record
{
  "userid":123,
  "like_number":0
}
```





#### Product:

| Endpoint               | Method | Body                             | Description                                      |
| ---------------------- | ------ | -------------------------------- | ------------------------------------------------ |
| /product/all/:vendorId | Get    | Empty                            | Return the list of product by the vendorId       |
| /product/:productId    | Get    | Empty                            | Return a **single** product detail by product id |
| /product/              | Post   | Product detail json body         | Create a product to specified vendor             |
| /product/              | Put    | Product updated detail json body | Update a product                                 |
| /product/:productId    | DELETE | Empty                            | Delete a product by product id                   |

```json
{
  "productId":1222,  //prodcut Id is required only when update
  "name":"apple",
  "description":"chjsdfhdjskfhs",
  "userId":1  //THE ONWER id of this product
}

```



#### Favorites:

| Endpoint                   | Method | Body                  | Description                                                 |
| -------------------------- | ------ | --------------------- | ----------------------------------------------------------- |
| /favorite/all/:savedUserId | Get    | Empty                 | Return the list of saved product by the vendorId            |
| /favorite/                 | POST   | productId and user id | Add item to the saved list of given user id to the database |

```json
{
  "productId":1222,
  "savedUserId":1
}
```



# Database

### UserInfo

| Column      | Data Type                    | Description                                |
| ----------- | ---------------------------- | ------------------------------------------ |
| Id          | Serial Primary Key           | Unique auto increment user Id              |
| Username    | varchar(255) Not NULL UNIQUE | Username as login credential               |
| Password    | varchar(255) Not NULL        | Encrypted password                         |
| name        | Varchar(255)                 | Vendor page(yard) name or                  |
| Description | Varchar(255)                 | Description of vendor's yard               |
| Location    | Varchar(255)                 | Location of vendor                         |
| PhoneNumber | Varchar(255)                 | Phone number of vendor                     |
| IsVendor    | boolean                      | Indicate whether the user is vendor or not |



### Product

| Column      | Data Type             | Description                |
| ----------- | --------------------- | -------------------------- |
| id          | Serial Primary Key    | The id of product          |
| Name        | Varchar(255) Not Null | The name of product        |
| Description | Varchar(255) Not Null | The description of product |
| userid      | Int Not Null          | The product owner id       |



### Favorite

| Column      | Data Type                                                    | Description                    |
| ----------- | ------------------------------------------------------------ | ------------------------------ |
| id          | Serial Primary Key                                           | The id of favorited product    |
| savedUserId | Int Not Null                                                 | The user who saves the product |
| productId   | Int Not Null FOREIGN KEY (productId) REFERENCES product(id) ON DELETE CASCADE ON UPDATE CASCADE | The product id                 |



### Like

| Column      | Data Type       | Description                   |
| ----------- | --------------- | ----------------------------- |
| Vendor_id   | Int Primary Key | The vendor id                 |
| Like_number | Int Not Null    | The number of like vendor has |



### View

| Column     | Data Type       | Description                         |
| ---------- | --------------- | ----------------------------------- |
| userId     | Int Primary Key | The user id associate with the view |
| numclicked | Int not null    | The number of view the page has     |



# URL Routes/Mappings

| Routes                    |                                                              |
| ------------------------- | ------------------------------------------------------------ |
| /                         | Login/signup page                                            |
| /home/home.html?userId=xx | Home page                                                    |
| /page/page.html?userId=xx | Vendor page                                                  |
| /auth/                    | Authorization router for manipulating the user info as well as encryption |
| /product/                 | Product router for manipulating the data of product          |
| /vendor/                  | Vendor router for manipulating the data of vendor            |
| /vendor/view              | View router for manipulating the data of view                |
| /vendor/like              | Like router for manipulating the data of like                |
| /favorite/                | Favorite router for manipulating the data of favorite item   |



# Authentication/Authorization

We use `bcrpyt` to encrypted and decrypted the password. When user sign up for their account. Their password will be encrypted and store in the database. When user login, the request they send will have username and password. We will compare the password they send with our encrypted password with help of `bcrypt` to verify the password.If the user is authenticated, we will redirect them to home page, else it will display error message.

Since our pages are host as static page, user can directly type /home/home.html to access the page.  To prevent this situation, We have verification checking when home.html or page.html load, we will check if user is login or not by checking the cookie in the local storage. If user is not login, we will redirect them to the login page. 

For authorization, to prevent user directly access our endpoint such as /product/:id to delete or update product which is not belong to them. We add **middleware** as interceptor to check if request user has the permission to the requested product. If this request is not valid, the middleware will not forward the request and send the error status code to client.



# Division of Labor:

**Qiming Chen**: 

1. Home-page with corresponding CSS and javascript.
2. Server side routing of home endpoint favorite endpoint
3. Home model and services
4. Favorite model and services
5. Database configuration
6. Docker configuration
7. Project architecture set up 

**Jiafeng Li**: 

1. Login-signup page with corresponding CSS and javascript
2. Server side routing of auth endpoint and like endpoint
3. Auth model and services
4. Like model and services
5. Middleware
6. Authentication/Authorization

**Yongchang Cheng**:

1. Vendor-page with corresponding CSS and javascript
2. Server side routing of vendor endpoint and view endpoint
3. Vendor model and service
4. View model and service
5. Code review checking



# Conclusion

We learned a lot of useful knowledge and experience from the mock-ups to the development of the project. We learned the importance of user experience and we made sure that the workflow was intuitive and consistent in our user interface so that users know how to use the application much faster. We also tried to implement the code according to our proposed n-tier architecture. Following the n-tier architecture was quite difficult at first, as we had to make sure that each layer did its own work. Nevertheless, we had better scalability and it was easier to upgrade and change the separate layers when we had more features coming up. This gives us the advantage that we don't run into code conflicts while developing. The docker image makes it easy to start a local database without the hassle of working on a different OS. Although it had a learning curve, we are quite happy when the docker container was up running. One thing our team wished we had known before starting the project was to have one person write all the css style code so that each page would have the same user interface style. Because in the beginning, three of us had different user interface styles in terms of colors, elements, etc. So we managed to unify our interface elements and make our user interface design more consistent. Overall, it was a valuable and rewarding experience, and we believe that is an inaccessible part of our journey to become better engineers.


