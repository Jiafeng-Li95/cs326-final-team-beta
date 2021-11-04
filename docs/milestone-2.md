# CS326-TEAM-BETA milestone-2

> Member: Yongchang Cheng, Jiafeng Li, Qiming Chen
>
> Hosted link: https://yardology.herokuapp.com/

## PART 0 API PLANNING

> Assume Server is running on localhost:3000

#### Login/Sign Up: 

| Endpoint (protected/ public) | Method | Body                         | Description                                                  |
| ---------------------------- | ------ | ---------------------------- | ------------------------------------------------------------ |
| Localhost:3000/auth/login    | POST   | Username and password        | If the username and password exists, server will return an access token, which require to be carry around for protected endpoint |
| Localhost:3000/auth/signup   | POST   | Username, password, and role | Return true redirect to login, fail display error message    |

```json
{
	"username": "someone",
	"password": "password",
	"isVendor": true,
  "name":"funnyYarName",
  "description":"fresh flesh, green vegetable",
  "location":"BOSTON"
  "phonenumber":85-222-222
}


Actual DBMS table or NON-SQL table
{
  "userId":1,  
  "username":"someone",
  "password":"password",
  "isVendor":true,
  "name":"funnyYarName",     //NULLABLE
  "description":"fresh flesh, green vegetable", //NULLABLE
  "location":"BOSTON"           //NULLABLE
  "createdAt":XX-XX-2021         //NULLABLE
}
```

#### Vendor:

| Endpoint                                   | Method | Body          | Description                                                  |
| :----------------------------------------- | ------ | ------------- | :----------------------------------------------------------- |
| Localhost:3000/vendor/all                  | GET    | Empty         | Return a list of vendors from list                           |
| Localhost:3000/vendor/:id                  | GET    | Empty         | Return a specified vendor by the query param                 |
| (**ADMIN only** )Localhost:3000/vendor/:id | DELETE | EMPTY         | Delete a specified vendor by the query param                 |
| Localhost:3000/vendor/                     | PUT    | Vendor detail | Update a vendor detail by vendor itself, need to verify by JWT payload |



#### Product:

| Endpoint                             | Method | Body                             | Description                                                  |
| ------------------------------------ | ------ | -------------------------------- | ------------------------------------------------------------ |
| Localhost:3000/product/all/:vendorId | Get    | Empty                            | Return the list of product by the vendorId                   |
| Localhost:3000/product/:id           | Get    | Empty                            | Return a **single** product detail by product id             |
| Localhost:3000/product/              | Post   | Product detail json body         | Create a product to specified vendor                         |
| Localhost:3000/product/              | Put    | Product updated detail json body | Update a product to specified vendor verify the credential by JWT |
| Localhost:3000/product/:id           | DELETE | Empty                            | Delete a product by product id, need to verify the credential by JWT |

```json
{
  "productId":1222,  //prodcut Id is required only when update
  "name":"apple",
  "description":"chjsdfhdjskfhs",
  "userId":1  //THE ONWER id of this product
}

Actual DMBS
{
  "prodcutId": xx // auto increment
  "name":"apple",
  "description":"dfsdfsd"
  "userId":1
}
```

## PART 1 DUMMY SERVER

TO RESPOND ALL REQUEST WE SPECIFIED FOR PART 0



## PART 2 FRONT-END IMPLEMENTATION 

#### Login Page:

- Able to login in which send **POST request** to the Server
- Able to sign up in which send **Post request** to the Server

#### Home Page:

- Fetch list of vendors from DB in which send **GET request** to the Server
- Click on the specified vendor, redirect to vendor page 

#### Vendor Page:

- Fetch list of items that vendor has from DB in which send **Get request** 
  - Localhost:3000/vendor/items
- Can edit the detail of specified item then update to DB
  - Localhost:3000/vendor/item/:id  **PUT**
- Can delete a specified item
  - Localhost:3000/vendor/item/:id **DELETE**

### Screenshot

![image-20211103210917448](https://tva1.sinaimg.cn/large/008i3skNgy1gw2uhrdqgmj316x0u040a.jpg)

The welcome page is the login page where the user could signup a new account or log in with their existing account.

<img src="https://tva1.sinaimg.cn/large/008i3skNgy1gw2wf52ryyj313u0oatai.jpg" alt="image-20211103221606318" style="zoom:50%;" />

![image-20211103211422445](https://tva1.sinaimg.cn/large/008i3skNgy1gw2umx0hcwj316m0u0jvx.jpg)

Once user login, the list of vendors will display in the home page which it all fetch from the server. The menu bar "Account" will have pop up window allow user to **edit(put request)** their profile.

<img src="https://tva1.sinaimg.cn/large/008i3skNgy1gw2uny7o64j30rm0s0myr.jpg" alt="image-20211103211522720" style="zoom:25%;" />





![image-20211103221241465](https://tva1.sinaimg.cn/large/008i3skNgy1gw2wbkzzh4j318g0u0jts.jpg)

When user click `go to vendor page`, it will redirect to the vendor page where the vendor profile and their posting product will display at page. User can also go back to home page at top of menu bar and also able to sign out. Each posting product could be **deleted** by the vendor itself. Vendor themselves can **add** product to their page.

![image-20211103232157029](https://tva1.sinaimg.cn/large/008i3skNgy1gw2ybmuic1j30ri0imjrx.jpg)

## Contribution

------

Home page javascript and server routing: Qiming Chen

Login page javascript and server routing: Jiafeng Li

Vendor page javascript and server routing: Yongchang Cheng

## Basic Architecture of our application 

![image-20211029225046607](https://tva1.sinaimg.cn/large/008i3skNgy1gvx5bq7hqnj30ib05lt8r.jpg)

