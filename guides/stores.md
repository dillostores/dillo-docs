# Stores

The Stores section allows administrators to manage store information within the system. In this section, you can perform the following actions:

- **Create Store:** Add new stores to the system by providing the necessary information. This process includes fields such as store name, address, and contact details.

- **Update Store:** Modify existing store information to keep it up to date. This includes updating details such as the store's name, address, or operational status.

- **Delete Store:** Remove stores that are no longer active or needed in the system. Ensure you have the necessary permissions to perform this action, as deleting a store is irreversible.

- **View Store Details:** Access detailed information about each store, including its operational status, location, and any other relevant details.

## Store Data

### Raw Store

| Fields              |   Type   |                              Description |
| ------------------- | :------: | ---------------------------------------: |
| `_id`               |    ID    |                        Unique identifier |
| `name`              |  string  |                             Store's name |
| `description`       |  string  |                  Brief store description |
| `code`              |  string  |                        Unique store code |
| `status`            |  number  |               Store's operational status |
| `lat`               |  number  |                         Store's latitude |
| `lon`               |  number  |                        Store's longitude |
| `location`          | Location |                    Geographical location |
| `address`           |  string  |                          Store's address |
| `reference`         |  string  |                  Store's reference point |
| `reference_updated` |   Date   | Date when the reference was last updated |
| `date`              |   Date   |                   Date of store creation |

### Raw Location

| Fields        |   Type   |                     Description |
| ------------- | :------: | ------------------------------: |
| `type`        |  string  |           Type of location data |
| `coordinates` | number[] | Array of coordinates [lat, lon] |

## Create Store

The Create Store section allows administrators to add new stores to the system by entering the required information through a popup interface. This section facilitates the following actions:

- **Open Popup:** Clicking on the "Add Store" button opens a popup dialog.

- **Enter Store Details:** Within the popup, enter details such as store name, description, code and address.

- **Submit Data:** After entering the store information, click the "Create Store" button to submit the data.

This feature streamlines the process of adding new stores, ensuring efficient and accurate management of store information within the system.

## Delete Store

Each store entry includes a Delete icon to remove the store from the system. This feature allows administrators to perform the following actions:

- **Click on Delete Icon:** Locate the store you wish to delete and click on the "Delete" icon.

- **Confirmation Prompt:** A confirmation prompt will appear to ensure you want to delete the store.

- **Confirm Deletion:** Click "Delete" in the prompt to proceed with deleting the store.

- **Store Removal:** The store will be permanently removed from the system.

This functionality ensures efficient management of stores, allowing administrators to easily remove stores that are no longer active or needed.

## Store Details

Each store entry includes a `Details` button next to delete, which opens a detailed store info page, displaying comprehensive information about the store. This section includes:

- **Store Information:** Displays all store data, including name, description, code, status, latitude, longitude, location type, coordinates, address, reference, and reference update date.

- **Update Store:** Clicking the "Update Store" button enables administrators to edit the store's details such as name, description, code, status, latitude, longitude, location, address, reference, and reference update date. This action opens a popup where administrators can make changes and save updates.

- **Update Status:** Clicking the "View status history" button allows administrators to modify the store's operational status. This action opens a page where the new status can be selected and confirmed.

These features provide administrators with comprehensive store management capabilities directly within the store details view, streamlining the process of updating store information and status.
