# Utils

The **Utils** section provides tools for managing system settings and configurations. It includes two categories: **Languages** and **Currencies**. Both categories support full CRUD operations (Create, Read, Update, Delete).

## Languages

### Raw Language

| Fields        |  Type  |          Description |
| ------------- | :----: | -------------------: |
| `_id`         |   ID   |    Unique identifier |
| `name`        | string |        Language name |
| `description` | string | Language description |
| `code`        | string |        Language code |
| `date`        |  Date  |     Date of creation |

Manage the languages available in the system. This category allows administrators to:

- **Create Language:** Add a new language by providing necessary details such as language name, description and code. For creating a language click on the **Create Language** button and fill in the required fields
- **Update Language:** To update a language, click on the edit icon on the language card and modify the necessary details.
- **Delete Language:** To remove a language, click on the delete icon on the language card, then accept the warning popup

## Currencies

### Raw Currency

| Fields        |  Type  |          Description |
| ------------- | :----: | -------------------: |
| `_id`         |   ID   |    Unique identifier |
| `name`        | string |        Currency name |
| `description` | string | Currency description |
| `code`        | string |        Currency code |
| `date`        |  Date  |     Date of creation |

Manage the currencies used within the system. This category allows administrators to:

- **Create Currency:** Add a new Currency by providing necessary details such as currency name, description and code. For creating a currency click on the **Add Currency** button and fill in the required fields
- **Update Currency:** To update a currency, click on the edit icon on the currency card and modify the necessary details.
- **Delete Currency:** To remove a currency, click on the delete icon on the Ccrrency card, then accept the warning popup

These features provide administrators with the ability to customize and manage system settings effectively, ensuring that the system supports the necessary languages and currencies for its users.
