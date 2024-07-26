# **Implementation Design for `log` Command**

---

## **1. Overview**

The `log` command displays the commit history of the current branch or detached head state in the Codetrack version control system. It shows the sequence of commits leading up to the current state, providing an overview of the project's changes over time.

---

## **2. Functionality Breakdown**

### **Command Execution:**
- **Command:** `log`
- **Description:** Logs the history of commits in the Codetrack version control system.

### **Execution Steps:**

1. **Determine Current Directory:**
   - Use `cwd()` from the process module to get the current working directory.

2. **Read Current State:**
   - Read the `State.json` file from the `.codetrack` directory to determine whether the current head is in a detached state or attached to a branch.

3. **Handle Detached Head State:**
   - If the head is detached, set `currentCommit` to the detached head commit ID.
   - Log a message indicating the detached head state.

4. **Handle Branch State:**
   - If the head is attached to a branch:
     - Retrieve the branch name from `State.json`.
     - Read the `branchHead.json` file from the `.codetrack/refs` directory to get the commit ID for the branch.
     - Set `currentCommit` to this commit ID.
     - Log the current branch name.

5. **Fetch Commit History:**
   - Read the `commitLog.json` file from the `.codetrack/history` directory to get commit details.
   - Traverse the commit history starting from `currentCommit`.
     - Collect commit details and their parent commit IDs into a `history` array.
     - Stop traversal if multiple parent commits are found or if the end of the history is reached.

6. **Display Commit History:**
   - Print the collected commit history.
   - If there are multiple parent commits, log a message indicating a branch merge before the last commit.

7. **Error Handling:**
   - Use a try-catch block to handle any errors during file reading or JSON parsing.
   - Log errors using `console.log()` with appropriate messages.

---

## **3. Integration with Command-Line Interface**

- **Command Definition:**
  - Define the command `log` using a CLI library like `yargs` or `commander`.
  - Integrate the `handler` function as the command’s action.

- **CLI Command:**
  - Ensure the command is registered correctly with the CLI library to be executed via the command line.

---

## **4. Utility Functions**

- **`handler()`:**
  - Handles the main logic for fetching and displaying commit history.

- **Error Handling:**
  - Ensure proper error messages are displayed when issues arise during execution.

---

