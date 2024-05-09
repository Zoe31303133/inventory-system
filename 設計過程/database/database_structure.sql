-- varchar length should be times of 25


CREATE TABLE Resources (
    id varchar(25),
    primary key(id)    
);

CREATE TABLE Permission_levels (
    level tinyint,
    description varchar(100) NOT NULL, 
    primary key(level)  
);

CREATE TABLE Roles (
    id int(5)
    primary key(id)    
);

CREATE TABLE Role_permissions (
    role_id int(5)
    resource_id int(5)
    permission_level tinyint NOT NULL,
    primary key(role_id, resource_id)  
);

CREATE TABLE Users (
    id int(5)
    primary key(id)    
);

CREATE TABLE User_roles (
    user_id int(5)
    role_id int(5)
    primary key(user_id, role_id)    
);

CREATE TABLE Ingredients (
    id int(5)
    unit varchar(25),
    primary key(id, unit)  
);

CREATE TABLE Products (
    id int(5),
    primary key(id)
);

CREATE TABLE Product_ingredients (
    product_id int(5),
    ingredient_id varchar(25),
    quantity int(5) NOT NULL,

    primary key(product_id, ingredient_id)
);

CREATE TABLE Order(
    id int(5),
    date date NOT NULL,
    time time NOT NULL,
    state varchar(25)

    primary key(id)
);

CREATE TABLE Order_items(
    order_id int(5),
    product_id int(5),
    quantity int(5) NOT NULL,
    date date NOT NULL,
    time time NOT NULL,

    primary key(id, product_id)
);

CREATE TABLE Stock_products (
    product_id int(5),
    quantity int(5) NOT NULL,
    primary key(product_id)
);

CREATE TABLE Stock_ingredients (
    ingredient_id int(5)
    quantity int(5) NOT NULL,
    primary key(ingredient_id)
);

insert into resources values ('user'), ('role'),('product'),('stock_product'),('stock_ingredient'), ('order');

-- [level, description]
insert into Permission_levels values(1 , "create and delete"),(2 , "update"),(
3 , "commit"),(4 , "view");