# Milestone-3

> Member: Jiafeng Li, Yongchang Cheng, Qiming Chen





## Database Design



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

| Column      | Data Type             | Description                   |
| ----------- | --------------------- | ----------------------------- |
| Vendor_id   | Int Primary Key       | The vendor id                 |
| Like_number | Varchar(255) Not Null | The number of like vendor has |



### View

| Column     | Data Type       | Description                         |
| ---------- | --------------- | ----------------------------------- |
| userId     | Int Primary Key | The user id associate with the view |
| numclicked | Int not null    | The number of view the page has     |



## Breakdown of the division of labor



**Jiafeng Li**: adding feature of **likes** (including front end html, css, js and backend adding routing, model, and service). Add **bcrypt** to encrypt the password and decrepit the password

**Yongchang Cheng**: adding feature of **views** (including front end html, css, js and backend adding routing, model, and service)

**Qiming Chen**: adding feature of **favorites**(including front end html, css, js and backend adding routing, model, and service). Database configuration



