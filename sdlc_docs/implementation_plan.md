# **Codetrack Command Documentation**

Welcome to the documentation for the Codetrack version control system. Below are the detailed design documents for each of the available commands. Each document provides a comprehensive overview and implementation plan for the respective command.

## **Commands Code**

1. **`init` Command**
   - **Description:** Initializes the Codetrack version control system.
   - [View Code](../src/commands/initiate.js)

2. **`add` Command**
   - **Description:** Adds files to the staging area and starts tracking them.
   - [View Code](../src/commands/add.js)

3. **`commit` Command**
   - **Description:** Commits the files that are in the staging area.
   - [View Code](../src/commands/commit.js)

4. **`getImage` Command**
   - **Description:** Restores the working directory to the state it was during a specific commit.
   - [View Code](../src/commands/getImage.js)

5. **`checkout` Command**
   - **Description:** Checks out to an existing branch.
   - [View Code](../src/commands/checkout.js)

6. **`log` Command**
   - **Description:** Logs the history of commits.
   - [View Code](../src/commands/log.js)

7. **`status` Command**
   - **Description:** Shows the status of files in the Codetrack version control system, including modified, deleted, and untracked files.
   - [View Code](../src/commands/status.js)

---

## **Command Documentation**

- **`init` Command Documentation:**
  - Provides details on initializing the Codetrack repository.
  - [Implementation Plan](Implementation_Design/init%20command.md)

- **`add` Command Documentation:**
  - Explains how to add files to the staging area.
  - [Implementation Plan](Implementation_Design/add%20command.md)

- **`commit` Command Documentation:**
  - Details the process of committing changes.
  - [Implementation Plan](Implementation_Design/commit%20command.md)

- **`getImage` Command Documentation:**
  - Describes restoring the working directory to a specific commit state.
  - [Implementation Plan](Implementation_Design/getImage%20command.md)

- **`checkout` Command Documentation:**
  - Information on checking out to a specific branch.
  - [Implementation Plan](Implementation_Design/gotoBranch%20Command.md)

- **`log` Command Documentation:**
  - Provides the commit history logging details.
  - [Implementation Plan](Implementation_Design/log%20command.md)

- **`status` Command Documentation:**
  - Outlines the status command functionality and output.
  - [Implementation Plan](Implementation_Design/status%20command.md)

---


