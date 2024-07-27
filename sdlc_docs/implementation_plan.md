# **Codetrack Command Documentation**

Welcome to the documentation for the Codetrack version control system. Below are the detailed design documents for each of the available commands. Each document provides a comprehensive overview and implementation plan for the respective command.

## **Commands**

1. **`init` Command**
   - **Description:** Initializes the Codetrack version control system.
    - [Implementation Plan](Implementation_Design/init%20command.md)  
    - [View Code](../src/commands/initiate.js)
<br>
2. **`add` Command**
   - **Description:** Adds files to the staging area and starts tracking them.
    - [Implementation Plan](Implementation_Design/add%20command.md)
   - [View Code](../src/commands/add.js)
<br>
3. **`commit` Command**
   - **Description:** Commits the files that are in the staging area.
    - [Implementation Plan](Implementation_Design/commit%20command.md)
   - [View Code](../src/commands/commit.js)
<br>
4. **`getImage` Command**
   - **Description:** Restores the working directory to the state it was during a specific commit.
   - [Implementation Plan](Implementation_Design/getImage%20command.md)
   - [View Code](../src/commands/getImage.js)
<br>
5. **`checkout` Command**
   - **Description:** Checks out to an existing branch.
   - [Implementation Plan](Implementation_Design/gotoBranch%20Command.md)
   - [View Code](../src/commands/checkout.js)
<br>

6. **`log` Command**
   - **Description:** Logs the history of commits.
   - [Implementation Plan](Implementation_Design/log%20command.md)
   - [View Code](../src/commands/log.js)

<br>

7. **`status` Command**
   - **Description:** Shows the status of files in the Codetrack version control system, including modified, deleted, and untracked files.
   - [Implementation Plan](Implementation_Design/status%20command.md)
   - [View Code](../src/commands/status.js)

---


