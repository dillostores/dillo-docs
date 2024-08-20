# Areas

The Areas section is a broader category within the system that encompasses various configurations, including Workspaces. This section allows administrators to organize and manage different areas of the system, with each area containing specific settings and functionalities. Workspaces are a key component within the Areas section, providing detailed configuration options for managing individual workspaces.

## Workspaces

The Workspaces section allows administrators to manage workspace configurations within the system. This section includes the following features:

- **Add Workspace:** Clicking on the "Add Workspace" button opens a popup where administrators can enter the required information for a new workspace. The fields include:
  - **Name:** The name of the workspace.
  - **Description:** A brief description of the workspace.
  - **Value:** A numerical value associated with the workspace.

- **Edit Workspace:** Each workspace entry includes an edit icon. Clicking this icon opens a popup where administrators can modify the workspace's details, such as name, description, and value.

- **Delete Workspace:** Each workspace entry also includes a delete icon. Clicking this icon removes the workspace from the system after confirming the action.

These features provide an easy and intuitive way to manage workspaces, ensuring flexibility in configuration and control.

### Raw Workspace

| Fields        |  Type  |                                   Description |
| ------------- | :----: | --------------------------------------------: |
| `_id`         |   ID   |                             Unique identifier |
| `name`        | string |                                Workspace name |
| `description` | string |                Brief description of workspace |
| `value`       | number | Numerical value associated with the workspace |
| `date`        |  Date  |                              Date of creation |
