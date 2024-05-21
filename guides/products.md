# Products section

The **Products** section is designed to manage all aspects of product information within the system. This section includes several subcategories to ensure comprehensive management and organization of products. The subcategories are:

- [**Products:**](#products) Manage individual products, including their details and specifications.
- [**Categories:**](#categories) Organize products into categories for easier navigation and management.
- [**Families:**](#families) Group related products into families to better manage variations and common attributes.
- [**Brands:**](#brands) Manage the brands associated with your products, including brand-specific information.
- [**Containers:**](#containers) Define and manage the types of containers used for packaging and storing products.
- [**Manufacturers:**](#manufacturers) Manage information about the manufacturers who produce your products.

This section provides administrators with the tools needed to efficiently organize, manage, and maintain detailed information about the products offered by the system, ensuring smooth operations and ease of access for users.

## Manufacturers

### Raw Manufacturer

| Fields        |  Type  |              Description |
| ------------- | :----: | -----------------------: |
| `_id`         |   ID   |        Unique identifier |
| `name`        | string |        Manufacturer name |
| `description` | string | Manufacturer description |
| `country`     | string |      text of the country |
| `date`        |  Date  |         Date of creation |

The **Manufacturers** section allows administrators to manage information about the manufacturers who produce the products. This section provides the following functionalities:

- **Create Manufacturer:** Click on the **Add Manufacturer** button to add a new manufacturer. A popup will appear where you can fill in the necessary details such as the manufacturer's name, description and country

> Note:
> You can also create a manufacturer from postman.
>
> Postman Data:
>| Fields         |                               Type |
>| -------------- | ---------------------------------: |
>| `Collection`   |             Products/Manufacturers |
>| `Request name` |                Manufacturer create |
>| `Route`        | /api/products/manufacturers/create |
>| `Type`         |                               POST |
>| `Body`         |                         Raw (json) |
>
>Body
>
>```json
>{
>  "name": "{manufacturer's name}",
>  "description": "{manufacturer's description}",
>  "country": "{manufacturer's country = US}"
>}
>```
>
> Response: manufacturer's Id

- **Delete Manufacturer:** Each manufacturer card includes a **Remove** button. Click on this button to remove the manufacturer from the system. A confirmation popup will ensure that you want to proceed with the deletion.

- **View Manufacturer Details:** Each manufacturer card includes a button to view specific details. Clicking this button opens a detailed view displaying comprehensive information about the manufacturer. In this page, you have the options to update the manufacturer's details and update the manufacturer's image.

- **Update Manufacturer:** Within the details view, click the **Update Manufacturer** button to edit the manufacturer's details.
  
- **Add or Update Image:** Within the details view, if an image already exists, you can hover over it to reveal options for updating the image. If no image exists, click the **Update Image** button to add a new image.

> Note:
> You can also update a manufacturer image from postman.
>
> **Postman Data**
>| Fields         |                                         Type |
>| -------------- | -------------------------------------------: |
>| `Collection`   |                       Products/Manufacturers |
>| `Request name` |                    Manufacturer image upload |
>| `Route`        | /api/products/manufacturers/:id/image/upload |
>| `Type`         |                                         POST |
>| `Body`         |                                    Form Data |
>
>1. Go to the Params section of your request.
>2. Add a path variable called id and set its value to the manufacturer's ID.
>3. Go to the Body section.
>4. Select form-data.
>5. Add a key called image.
>6. Set the value of image to the file you want to upload.
>
>This allows you to include a path variable for the manufacturer's ID and upload an image file in your >request.
>
>Response:
>
>```json
>{
>  "oki": "doki"
>}
> ```

This section ensures that administrators can efficiently manage manufacturer information, keeping it up-to-date and easily accessible.

## Brands

### Raw Brand

| Fields         |  Type  |       Description |
| -------------- | :----: | ----------------: |
| `_id`          |   ID   | Unique identifier |
| `name`         | string |        Brand name |
| `description`  | string | Brand description |
| `manufacturer` |   ID   | Manufacturer's Id |
| `date`         |  Date  |  Date of creation |

The **Brands** section allows administrators to manage information about the brands that produce the products. This section provides the following functionalities:

- **Create Brand:** Click on the **Add Brand** button to add a new brand. A popup will appear where you can fill in the necessary details such as the brand's name, description and manufacturer

> Note:
> You can also create a brand from postman.
>
> Postman Data:
>| Fields         |                                    |
>| -------------- | ---------------------------------: |
>| `Collection`   |                    Products/Brands |
>| `Request name` |                       Brand create |
>| `Route`        |        /api/products/brands/create |
>| `Type`         |                               POST |
>| `Body`         |                         Raw (json) |
>
>Body
>
>```json
>{
>  "name": "{brand name}",
>  "description": "{brand description}",
>  "manufacturer": "{manufacturer id}"
>}
>```
>
> Response: manufacturer's Id

- **Delete Brand:** Each brand card includes a **Remove** button. Click on this button to remove the brand from the system. A confirmation popup will ensure that you want to proceed with the deletion.

- **View Brand Details:** Each brand card includes a button to view specific details. Clicking this button opens a detailed view displaying comprehensive information about the brand. In this page, you have the options to update the brand's details and update the brand's image.

- **Update Brand:** Within the details view, click the **Update Brand** button to edit the brand's details.
  
- **Add or Update Image:** Within the details view, if an image already exists, you can hover over it to reveal options for updating the image. If no image exists, click the **Update Image** button to add a new image.

> Note:
> You can also update a brand image from postman.
>
> **Postman Data**
>| Fields         |                                              |
>| -------------- | -------------------------------------------: |
>| `Collection`   |                              Products/Brands |
>| `Request name` |                           Brand image upload |
>| `Route`        |        /api/products/brands/:id/image/upload |
>| `Type`         |                                         POST |
>| `Body`         |                                    Form Data |
>
>1. Go to the Params section of your request.
>2. Add a path variable called id and set its value to the brand's ID.
>3. Go to the Body section.
>4. Select form-data.
>5. Add a key called image.
>6. Set the value of image to the file you want to upload.
>
>This allows you to include a path variable for the brand's ID and upload an image file in your >request.
>
>Response:
>
>```json
>{
>  "oki": "doki"
>}
> ```

This section ensures that administrators can efficiently manage brand information, keeping it up-to-date and easily accessible.

## Categories

### Raw Category

| Fields        |  Type  |                              Description |
| ------------- | :----: | ---------------------------------------: |
| `_id`         |   ID   |                        Unique identifier |
| `name`        | string |                            Category name |
| `description` | string |                     Category description |
| `color`       | string | text of the color ('Hex representation') |
| `date`        |  Date  |                         Date of creation |

The **Categories** section allows administrators to manage information about the categories used in the system. This section provides the following functionalities:

- **Create Category:** Click on the **Add Category** button to add a new category. A popup will appear where you can fill in the necessary details such as the category's name, description and color.

> Note:
> You can also create a category from postman.
>
> Postman Data:
>| Fields         |                               Type |
>| -------------- | ---------------------------------: |
>| `Collection`   |                     Products/Types |
>| `Request name` |                        Type create |
>| `Route`        |         /api/products/types/create |
>| `Type`         |                               POST |
>| `Body`         |                         Raw (json) |
>
>Body
>
>```json
>{
>  "name": "{category name}",
>  "description": "{category description}",
>  "color": "{category color}"
>}
>```
>

- **Delete Category:** Each category card includes a **Remove** button. Click on this button to remove the category from the system. A confirmation popup will ensure that you want to proceed with the deletion.

- **View Category Details:** Each category card includes a button to view specific details. Clicking this button opens a detailed view displaying comprehensive information about the category. In this page, you have the options to update the category's details and update the category's image.

- **Update Category:** Within the details view, click the **Update Category** button to edit the category's details.
  
- **Add or Update Image:** Within the details view, if an image already exists, you can hover over it to reveal options for updating the image. If no image exists, click the **Update Image** button to add a new image.

> Note:
> You can also update a category image from postman.
>
> **Postman Data**
>| Fields         |                                         Type |
>| -------------- | -------------------------------------------: |
>| `Collection`   |                               Products/Types |
>| `Request name` |                            Type image upload |
>| `Route`        |         /api/products/types/:id/image/upload |
>| `Type`         |                                         POST |
>| `Body`         |                                    Form Data |
>
>1. Go to the Params section of your request.
>2. Add a path variable called id and set its value to the category's ID.
>3. Go to the Body section.
>4. Select form-data.
>5. Add a key called image.
>6. Set the value of image to the file you want to upload.
>
>This allows you to include a path variable for the category's ID and upload an image file in your >request.
>
>Response:
>
>```json
>{
>  "oki": "doki"
>}
> ```

This section ensures that administrators can efficiently manage category information, keeping it up-to-date and easily accessible.

## Families

### Raw Family

| Fields        |  Type  |                              Description |
| ------------- | :----: | ---------------------------------------: |
| `_id`         |   ID   |                        Unique identifier |
| `name`        | string |                              Family name |
| `category`    |   ID   |                              Category ID |
| `description` | string |                       family description |
| `color`       | string | text of the color ('Hex representation') |
| `date`        |  Date  |                         Date of creation |

The **Families** section allows administrators to manage information about the families used in the system. This section provides the following functionalities:

- **Create Family:** Click on the **Add Family** button to add a new family. A popup will appear where you can fill in the necessary details such as the family name, description, category and color.

> Note:
> You can also create a family from postman.
>
> Postman Data:
>| Fields         |                               Type |
>| -------------- | ---------------------------------: |
>| `Collection`   |                  Products/Families |
>| `Request name` |                        Family create |
>| `Route`        |         /api/products/families/create |
>| `Type`         |                               POST |
>| `Body`         |                         Raw (json) |
>
>Body
>
>```json
>{
> "category": "{category Id}",
> "name": "{family name}",
> "description": "{family descripction}",
> "color": "0x{in hex format}"
>}
>```
>

- **Delete Family:** Each family card includes a **Remove** button. Click on this button to remove the family from the system. A confirmation popup will ensure that you want to proceed with the deletion.

- **View Family Details:** Each family card includes a button to view specific details. Clicking this button opens a detailed view displaying comprehensive information about the family. In this page, you have the options to update the family's details and update the family's image.

- **Update Family:** Within the details view, click the **Update family** button to edit the family's details.
  
- **Add or Update Image:** Within the details view, if an image already exists, you can hover over it to reveal options for updating the image. If no image exists, click the **Update Image** button to add a new image.

> Note:
> You can also update a family image from postman.
>
> **Postman Data**
>| Fields         |                                         Type |
>| -------------- | -------------------------------------------: |
>| `Collection`   |                            Products/Families |
>| `Request name` |                          Family image upload |
>| `Route`        |      /api/products/families/:id/image/upload |
>| `Type`         |                                         POST |
>| `Body`         |                                    Form Data |
>
>1. Go to the Params section of your request.
>2. Add a path variable called id and set its value to the family's ID.
>3. Go to the Body section.
>4. Select form-data.
>5. Add a key called image.
>6. Set the value of image to the file you want to upload.
>
>This allows you to include a path variable for the family's ID and upload an image file in your >request.
>
>Response:
>
>```json
>{
>  "oki": "doki"
>}
> ```

This section ensures that administrators can efficiently manage category information, keeping it up-to-date and easily accessible.

## Containers

### Raw Container

| Fields        |  Type  |           Description |
| ------------- | :----: | --------------------: |
| `_id`         |   ID   |     Unique identifier |
| `name`        | string |        Container name |
| `description` | string | Container description |
| `date`        |  Date  |      Date of creation |

The **Containers** section allows administrators to manage information about the containers used in the system. This section provides the following functionalities:

- **Create Container:** Click on the **Add Container** button to add a new container. A popup will appear where you can fill in the necessary details such as the name and description.

> Note:
> You can also create a container from postman.
>
> Postman Data:
>| Fields         |                               Type |
>| -------------- | ---------------------------------: |
>| `Collection`   |                Products/Containers |
>| `Request name` |                    Container create |
>| `Route`        |    /api/products/containers/create |
>| `Type`         |                               POST |
>| `Body`         |                         Raw (json) |
>
>Body
>
>```json
>{
> "name": "{container name}",
> "description": "{container descripction}",
>}
>```
>

- **Delete Container:** Each container card includes a **Remove** button. Click on this button to remove the container from the system. A confirmation popup will ensure that you want to proceed with the deletion.

- **View Container Details:** Each container card includes a button to view specific details. Clicking this button opens a detailed view displaying comprehensive information about the container. In this page, you have the option to update the container's details.

- **Update Container:** Within the details view, click the **Update Container** button to edit the container's details.

This section ensures that administrators can efficiently manage containers information, keeping it up-to-date and easily accessible.

## Products

### Raw Product

| Fields        |  Type  |         Description |
| ------------- | :----: | ------------------: |
| `_id`         |   ID   |   Unique identifier |
| `name`        | string |        Product name |
| `description` | string | Product description |
| `brand`       |   ID   |            Brand ID |
| `category`    |   ID   |         Category ID |
| `container`   |   ID   |        Container ID |
| `family`      |   ID   |           Family ID |
| `sku`         | string |  Dillo internar SKU |
| `date`        |  Date  |    Date of creation |

The **Products** section allows administrators to manage information about the products used in the system. This section provides the following functionalities:

- **Create Product:** Click on the **Add Product** button to add a new product. A popup will appear where you can fill in the necessary details such as the product name, description, category, container and family.

> Note:
> You can also create a product from postman.
>
> Postman Data:
>| Fields         |                               Type |
>| -------------- | ---------------------------------: |
>| `Collection`   |                  Products/Products |
>| `Request name` |                     Product create |
>| `Route`        |               /api/products/create |
>| `Type`         |                               POST |
>| `Body`         |                         Raw (json) |
>
>Body
>
>```json
>{
> "sku": "{search product SKU}",
> "name": "{products'name}",
> "description": "{product's description}",
> "brand": "{brand Id}",
> "category": "{category Id}",
> "container": "{container Id}",
> "family": "{family id}"
>}
>
>```
>

- **Delete Product:** Each product card includes a **Remove** button. Click on this button to remove the product from the system. A confirmation popup will ensure that you want to proceed with the deletion.

- **View Product Details:** Each product card includes a button to view specific details. Clicking this button opens a detailed view displaying comprehensive information about the product. In this page, you have the options to update the product's details and update the product's image.

- **Update Product:** Within the details view, click the **Update Product** button to edit the product's details.
  
- **Add or Update Image:** Within the details view, if an image already exists, you can hover over it to reveal options for updating the image. If no image exists, click the **Update Image** button to add a new image.

> Note:
> You can also update a product image from postman.
>
> **Postman Data**
>| Fields         |                                         Type |
>| -------------- | -------------------------------------------: |
>| `Collection`   |                            Products/Products |
>| `Request name` |                         Product image upload |
>| `Route`        |               /api/products/:id/image/upload |
>| `Type`         |                                         POST |
>| `Body`         |                                    Form Data |
>
>1. Go to the Params section of your request.
>2. Add a path variable called id and set its value to the family's ID.
>3. Go to the Body section.
>4. Select form-data.
>5. Add a key called image.
>6. Set the value of image to the file you want to upload.
>
>This allows you to include a path variable for the product's ID and upload an image file in your >request.
>
>Response:
>
>```json
>{
>  "oki": "doki"
>}
> ```

This section ensures that administrators can efficiently manage product information, keeping it up-to-date and easily accessible.
