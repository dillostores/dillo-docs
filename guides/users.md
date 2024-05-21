# Users

The Users section allows administrators to manage user information within the system. In this section, you can perform the following actions:

- Filter Users: Use various criteria to search and filter users based on your needs. This allows you to quickly find specific users based on parameters such as name, username, email and roles

- Create Users: Add new users to the system by providing necessary information. This process includes basic fields.

- Delete Users: Remove users who no longer need access to the system. Ensure you have the necessary permissions to perform this action, as deleting a user is irreversible.

- View User Details: Access detailed information about each user, including personal data, and any other relevant information.

- View User sessions: Access detailed information about each user session

## User data

### Raw user

| Fields       |  Type   |           Description |
| ------------ | :-----: | --------------------: |
| `_id`        |   ID    |     Unique identifier |
| `first_name` | string  |     User's first name |
| `last_name`  | string  |      User's last name |
| `email`      | string  |  User's email address |
| `username`   | string  |       User's username |
| `user_type`  | number  |          Type of user |
| `status`     | number  |         User's status |
| `first_time` | boolean | Indicates first login |
| `role`       |   ID    |     ID of user's role |
| `date`       |  Date   |      Date of creation |

### User type

| Value | Description |
| ----- | :---------: |
| 0     |    None     |
| 1     |   Common    |
| 2     |   Service   |
| 3     |  Internal   |

### User status

| Value | Description |
| ----- | :---------: |
| 0     |    None     |
| 1     |   Active    |
| 2     |  Inactive   |
| 3     |   Blocked   |
| 4     |   Removed   |

## Filter

The users page has 2 filters:

- **Role filtering**: Allows you to filter and display users based on their roles within the system.
- **Search filtering**: Allows you to search for users based on criteria such as username, name, or email address.

## Create User

The **Create User** section allows administrators to add new users to the system by entering required information through a popup interface. This section facilitates the following actions:

- **Open Popup:** Clicking on the "Add User" button opens a popup dialog.
  
- **Enter User Details:** Within the popup, enter details such as first name, last name, email address, username, password, and password confirmation.

- **Submit Data:** After entering the user information, click the "User Create" button to submit the data.
  
This feature streamlines the process of adding new users, ensuring efficient and accurate user management within the system.

## Delete User

Each user entry includes a **Delete** icon to remove the user from the system. This feature allows administrators to perform the following actions:

- **Click on Delete Icon:** Locate the user you wish to delete and click on the "Delete" icon.

- **Confirmation Prompt:** A confirmation prompt will appear to ensure you want to delete the user.

- **Confirm Deletion:** Click "Delete" in the prompt to proceed with deleting the user.

- **User Removal:** The user will be permanently removed from the system.

This functionality ensures efficient management of users, allowing administrators to easily remove users who no longer require access to the system.

## User details

Each user entry includes a **>** icon next to delete which opens a detailed user info page, displaying comprehensive information about the user. This section includes:

- **User Information:** Displays all user data

- **Update Password:** Clicking the "Update Password" button allows administrators to modify the user's password. This action opens a popup where a new password can be entered and confirmed.

- **Update User:** Clicking the "Update User" button enables administrators to edit the user's details such as name, email and username. This action opens a popup where administrators can make changes and save updates.

These features provide administrators with comprehensive user management capabilities directly within the user details view, streamlining the process of updating user information and passwords.

## User Sessions

Each user entry includes a **Sessions** button that allows administrators to view details of all sessions associated with the user. This feature provides the following functionalities:

- **Click on Sessions Button:** Locate the user you're interested in and click on the "Sessions" button.

- **Sessions Details:** A new section will open displaying comprehensive information about all active and past sessions of the user. This includes details such as session start time, end time and device information.

- **Manage Sessions:** Administrators may choose to manage user sessions by terminating active sessions or investigating suspicious activity.

This feature enhances security and user management capabilities, ensuring administrators have insight and control over user sessions within the system.
