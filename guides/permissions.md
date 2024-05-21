# Permissions

The **Permissions** section provides administrators with comprehensive control, this section is divided into two categories:

## Roles

Roles define sets of permissions that determine what actions users can perform within the system. Each role includes a specific set of permissions tailored to different levels of access and responsibility.

- **Manage Roles:** Administrators can create, edit, and delete roles as needed to align with the organization's structure and access requirements.

- **Assign actions:** Roles are assigned actions that grant specific permissions.

The **Roles** section allows administrators to manage user roles within the system. This section provides comprehensive functionality for creating, updating, and deleting roles, as well as assigning specific actions to each role. The operations include:

### Raw role

| Fields        |  Type  |         Description |
| ------------- | :----: | ------------------: |
| `_id`         |   ID   |   Unique identifier |
| `name`        | string |         Role's name |
| `description` | string | Roles's description |
| `date`        |  Date  |    Date of creation |

### **Create Role**

Clicking on the "Create Role" button opens a popup where administrators can define a new role. This includes specifying a name and a description for the role

### **Update Role:**

 Administrators can edit existing roles by clicking on the "Update" icon in every role. This action let us update the role fields.

### **Delete Role:**

To delete a role, administrators click on the "Delete" icon on each role entry. A confirmation popup alerts the administrator to confirm the deletion.

### **Assign Actions:**

Within the role card administrators can assign specific actions to each role. This controls what permissions are assigned to that specific role.

To add actions you need to click on the **Actions Update** button in the role that you want to update, and it will redirect you to the role actions page, where you will have two options:

1. **Add New Action:** Clicking this button opens a popup where you can create a new action. The new action is automatically assigned to the current role upon creation.

2. **Add Existing Action:** Clicking this button opens a popup where you can select from all existing actions and assign the chosen action to the current role.

These features provide administrators with granular control over user permissions, ensuring that access levels are aligned with organizational needs and security requirements. By using popups for creating, updating, and deleting roles, the interface remains intuitive and efficient for managing user roles and permissions.

## Actions

Actions represent specific tasks or operations that users can perform within the system. These can include viewing, creating, updating, or deleting data, as well as other functionalities.

### Raw action

| Fields        |  Type  |        Description |
| ------------- | :----: | -----------------: |
| `_id`         |   ID   |  Unique identifier |
| `name`        | string |        Action name |
| `description` | string | Action description |
| `date`        |  Date  |   Date of creation |

- **Manage Actions:** Administrators can define and configure actions to control what users can do within the system.

- **Assign Actions:** Roles are assigned specific actions to grant users the necessary permissions to perform their tasks effectively.

This section ensures that users have the appropriate level of access and permissions to carry out their responsibilities while maintaining security and data integrity within the system.
