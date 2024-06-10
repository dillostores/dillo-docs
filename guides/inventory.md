# Inventory section

The **Inventory** section is designed to manage all aspects of inventory information within the system. This section includes several subcategories to ensure comprehensive management and organization of inventory. The subcategories are:

- [**Products:**](#products) Manage individual products, including their details and specifications.
- [**Prices:**](#prices) Manage pricing information.
- [**Suppliers:**](#suppliers) Manage information about the suppliers who provide the products.
- [**Packs:**](#packs) Define and manage packs or bundles of products to optimize storage and distribution.
- [**Details:**](#details) Manage specific inventory details, such as life, shelf life and storage
  
## Products

### Raw Inventory Product

| Fields    |  Type  |                         Description |
| --------- | :----: | ----------------------------------: |
| `_id`     |   ID   |                   Unique identifier |
| `product` |   ID   |   Unique identifier for the product |
| `store`   |   ID   |     Unique identifier for the store |
| `cycle`   |   ID   |     Unique identifier for the cycle |
| `price`   |   ID   |     Unique identifier for the price |
| `last`    | number |       Last recorded inventory count |
| `added`   | number |  Number of items added to inventory |
| `stock`   | number |    Current stock levels of products |
| `sold`    | number | Number of items sold from inventory |
| `damaged` | number |             Number of items damaged |
| `lost`    | number |                Number of items lost |
  
The **Products** section allows administrators to manage information about the inventory products used in the system. This section provides the following functionalities:

- **Create Product:** Click on the **Add Product** button to add a new inventory product. A popup will appear where you can fill in the necessary details such as the product, store and cycle.

> Note:
> You can also create a product from postman.
>
> Postman Data:
>| Fields         |                               Type |
>| -------------- | ---------------------------------: |
>| `Collection`   |                 Inventory/Products |
>| `Request name` |                     Product create |
>| `Route`        |     /api/inventory/products/create |
>| `Type`         |                               POST |
>| `Body`         |                         Raw (json) |
>
>Body
>
>```json
>{
> "product": "{Product ID}",
> "store": "{Store ID}",
> "cycle": "{Cycle ID}",
> "price": "{Price ID}",
> "last": {Quantity of products previously (num)},
> "added": {Quantity of products added (num)},
> "stock": {Quantity of products in stock (num)},
> "sold": {Quantity of products sold (num)},
> "damaged": {Quantity of products damaged (num)},
> "lost": {Quantity of products lost (num)}
>}
>
>```
>

- **Delete Product:** Each product entry includes a **Remove** icon. Click on this icon to remove the product from the system. A confirmation popup will ensure that you want to proceed with the deletion.

- **Update Product:** Each product entry includes a **Update** icon, click the icon to edit the product's details.

This section ensures that administrators can efficiently manage inventory products information, keeping it up-to-date and easily accessible.

## Prices

### Raw Inventory Price

| Fields     |  Type  |                        Description |
| ---------- | :----: | ---------------------------------: |
| `_id_`     |   ID   |                  Unique identifier |
| `product`  |   ID   |  Unique identifier for the product |
| `type`     | number |                    Type of product |
| `store`    |   ID   |    Unique identifier for the store |
| `cycle`    |   ID   |    Unique identifier for the cycle |
| `currency` |   ID   | Unique identifier for the currency |
| `cost`     | number |                Cost of the product |
| `value`    | number |               Value of the product |

### Inventory Price Type

| Value |   Type   |
| ----- | :------: |
| 0     |   None   |
| 1     | Template |
| 2     |  Store   |

The **Prices** section allows administrators to manage information about the inventory prices used in the system. This section provides the following functionalities:

- **Create Price:** Click on the **Add Price** button to add a new inventory pruce. A popup will appear where you can fill in the necessary details.

> Note:
> You can also create an inventory price from postman.
>
> Postman Data:
>| Fields         |                               Type |
>| -------------- | ---------------------------------: |
>| `Collection`   |                   Inventory/Prices |
>| `Request name` |                       Price create |
>| `Route`        |       /api/inventory/prices/create |
>| `Type`         |                               POST |
>| `Body`         |                         Raw (json) |
>
>Body
>
>```json
>{
> "product": "{Product ID}",
> "type": {Price type (num) = 1},
> "store": "{Store ID}",
> "cycle": "{Cycle ID}",
> "currency": "{Currency ID}",
> "cost": {Cost (num)} -> Unit Cost (M),
> "value": {Value (num)} -> Unit Price (Q)
>}
>
>```
>

- **Delete Price:** Each price entry includes a **Remove** icon. Click on this icon to remove the price from the system. A confirmation popup will ensure that you want to proceed with the deletion.

- **Update Price:** Each product entry includes a **Update** icon, click the icon to edit the prices's details.

This section ensures that administrators can efficiently manage inventory prices information, keeping it up-to-date and easily accessible.

## Suppliers

### Raw Supplier

| Fields        |  Type  |              Description |
| ------------- | :----: | -----------------------: |
| `_id`         |   ID   |        Unique identifier |
| `name`        | string |        Manufacturer name |
| `description` | string | Manufacturer description |
| `country`     | string |      text of the country |
| `address`     | string |         Supplier address |
| `date`        |  Date  |         Date of creation |

The **Suppliers** section allows administrators to manage information about the product suppliers. This section provides the following functionalities:

- **Create Supplier:** Click on the **Add Supplier** button to add a new manufacturer. A popup will appear where you can fill in the necessary details such as the manufacturer's name, description and country

> Note:
> You can also create a supplier from postman.
>
> Postman Data:
>| Fields         |                               Type |
>| -------------- | ---------------------------------: |
>| `Collection`   |                Inventory/Suppliers |
>| `Request name` |                    Supplier create |
>| `Route`        |    /api/inventory/suppliers/create |
>| `Type`         |                               POST |
>| `Body`         |                         Raw (json) |
>
>Body
>
>```json
>{
> "name": "{Supplier Name}, -> Supplier (A)",
> "description": "{Supplier Description}",
> "country": "{Supplier Country = US}",
> "address": "{Supplier Address}"
>}
>```
>

- **Delete Supplier:** Each supplier card includes a **Remove** button. Click on this button to remove the supplier from the system. A confirmation popup will ensure that you want to proceed with the deletion.

- **View Supplier Details:** Each supplier card includes a button to view specific details. Clicking this button opens a detailed view displaying comprehensive information about the supplier. In this page, you have the options to update the supplier's details and update the supplier's image.

- **Update Supplier:** Within the details view, click the **Update Supplier** button to edit the supplier's details.
  
- **Add or Update Image:** Within the details view, if an image already exists, you can hover over it to reveal options for updating the image. If no image exists, click the **Update Image** button to add a new image.

> Note:
> You can also update a supplier image from postman.
>
> **Postman Data**
>| Fields         |                                         Type |
>| -------------- | -------------------------------------------: |
>| `Collection`   |                          Inventory/Suppliers |
>| `Request name` |                        Supplier image upload |
>| `Route`        |    /api/inventory/suppliers/:id/image/upload |
>| `Type`         |                                         POST |
>| `Body`         |                                    Form Data |
>
>1. Go to the Params section of your request.
>2. Add a path variable called id and set its value to the supplier's ID.
>3. Go to the Body section.
>4. Select form-data.
>5. Add a key called image.
>6. Set the value of image to the file you want to upload.
>
>This allows you to include a path variable for the supplier's ID and upload an image file in your >request.
>
>Response:
>
>```json
>{
>  "oki": "doki"
>}
> ```

This section ensures that administrators can efficiently manage supplier information, keeping it up-to-date and easily accessible.

## Packs

### Raw Pack

| Fields             |  Type  |                        Description |
| ------------------ | :----: | ---------------------------------: |
| `_id_`             |   ID   |                  Unique identifier |
| `product`          |   ID   |  Unique identifier for the product |
| `supplier`         |   ID   | Unique identifier for the supplier |
| `unit_of_measure`  | string |                    Unit of measure |
| `uom_upc`          | string |            UPC for unit of measure |
| `unit_upc`         | string |                       UPC for unit |
| `mfg_item_id`      | string |               Manufacturer item ID |
| `reference`        | string |              Reference information |
| `price`            | number |                     Price per unit |
| `size`             | number | Size of the product (oz, ml, etc.) |
| `count`            | number |           Number of units per case |
| `packets_per_case` | number |         Number of packets per case |
| `units_per_pack`   | number |           Number of units per pack |

The **Packs** section allows administrators to manage information about the inventory packs. This section provides the following functionalities:

- **Create Pack:** Click on the **Add Pack** button to add a new pack. A popup will appear where you can fill in the necessary details such as the pack's product and supplier

> Note:
> You can also create a pack from postman.
>
> Postman Data:
>| Fields         |                               Type |
>| -------------- | ---------------------------------: |
>| `Collection`   |                    Inventory/Packs |
>| `Request name` |                        Pack create |
>| `Route`        |        /api/inventory/packs/create |
>| `Type`         |                               POST |
>| `Body`         |                         Raw (json) |
>
>Body
>
>```json
>{
> "product": "{Product ID}",
> "unit_of_measure": "{UOM Column}",
> "uom_upc": "{UOM UPC Column}",
> "unit_upc": "{Unit UPC Column}",
> "mfg_item_id": "{MFG Item ID Column}",
> "supplier": "{Supplier ID}",
> "reference": "{Vendor Item ID Column}",
> "price": {Price Column (num)},
> "size": {Size or Count Column (num)},
> "count": {Size or Count Column (num)},
> "packets_per_case": {Pack Column [left value of /] (num)},
> "units_per_pack": {Pack Column [right value of /] (num)}
>}
>```
>

- **Delete Pack:** Each pack card includes a **Remove** button. Click on this button to remove the pack from the system. A confirmation popup will ensure that you want to proceed with the deletion.

- **View Pack Details:** Each pack card includes a button to view specific details. Clicking this button opens a detailed view displaying comprehensive information about the pack. In this page, you have the options to update the pack's details and update the pack's image.

- **Update Pack:** Within the details view, click the **Update Pack** button to edit the pack's details.
  
- **Add or Update Image:** Within the details view, if an image already exists, you can hover over it to reveal options for updating the image. If no image exists, click the **Update Image** button to add a new image.

> Note:
> You can also update a pack image from postman.
>
> **Postman Data**
>| Fields         |                                         Type |
>| -------------- | -------------------------------------------: |
>| `Collection`   |                              Inventory/Packs |
>| `Request name` |                            Pack image upload |
>| `Route`        |        /api/inventory/packs/:id/image/upload |
>| `Type`         |                                         POST |
>| `Body`         |                                    Form Data |
>
>1. Go to the Params section of your request.
>2. Add a path variable called id and set its value to the pack's ID.
>3. Go to the Body section.
>4. Select form-data.
>5. Add a key called image.
>6. Set the value of image to the file you want to upload.
>
>This allows you to include a path variable for the pack's ID and upload an image file in your >request.
>
>Response:
>
>```json
>{
>  "oki": "doki"
>}
> ```

This section ensures that administrators can efficiently manage packs information, keeping it up-to-date and easily accessible.

## Details

### Raw Inventory Detail

| Fields       |  Type  |                       Description |
| ------------ | :----: | --------------------------------: |
| `_id_`       |   ID   |                 Unique identifier |
| `product`    |   ID   | Unique identifier for the product |
| `life`       | number |            Unit in which it comes |
| `shelf_life` | number |      Value from Shelf Life column |
| `storage`    | number |         Value from Storage column |
  
The **Details** section allows administrators to manage information about the inventory details used in the system. This section provides the following functionalities:

- **Create Detail:** Click on the **Add Detail** button to add a new inventory detail. A popup will appear where you can fill in the necessary details such as the product, life and shelf life.

> Note:
> You can also create a detail from postman.
>
> Postman Data:
>| Fields         |                               Type |
>| -------------- | ---------------------------------: |
>| `Collection`   |                  Inventory/Details |
>| `Request name` |                      Detail create |
>| `Route`        |      /api/inventory/details/create |
>| `Type`         |                               POST |
>| `Body`         |                         Raw (json) |
>
>Body
>
>```json
>{
> "product": "{Product ID}",
> "life": {Unit it comes in [match with PRODUCT_LIFE enum] (num)},
> "shelf_life": {Shelf Life column value (num)},
> "storage": {Storage column value [match with PRODUCT_STORAGE enum] (num)}
>}
>
>```
>

- **Delete Detail:** Each detail entry includes a **Remove** icon. Click on this icon to remove the detail from the system. A confirmation popup will ensure that you want to proceed with the deletion.

- **Update Product:** Each detail entry includes an **Update** icon, click the icon to edit the detail's info.

This section ensures that administrators can efficiently manage inventory details information, keeping it up-to-date and easily accessible.
