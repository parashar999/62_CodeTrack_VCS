# **Implementation Design for `status` Command**

---

## **1. Overview**

The `status` command displays the current state of the Codetrack version control system, including information about modified, deleted, and untracked files. It provides an overview of the changes in the working directory compared to the index.

---

## **2. Functionality Breakdown**

### **Command Execution:**
- **Command:** `status`
- **Description:** Shows the status of files in the Codetrack version control system, including modified, deleted, and untracked files.

### **Execution Steps:**

1. **Determine Current Directory:**
   - Use `cwd()` from the process module to get the current working directory.

2. **Read Index and Ignore Files:**
   - Read the `index.json` file from the `.codetrack` directory to get the list of tracked files and their states.
   - Read the `.ignorewit.json` file to get the list of files and directories to be ignored, then format these paths appropriately.

3. **Initialize Status Arrays:**
   - Create arrays to store `untrackedFiles`, `modifiedFiles`, and `deletedFiles`.

4. **Update Status:**
   - Call `statusUpdateSync()` utility function to update the status arrays based on the current state of files.

5. **Detect Deleted Files:**
   - Iterate through the list of tracked files.
   - Check if each tracked file still exists. If a file does not exist, classify it as deleted and remove its entry from the index.

6. **Create Status Object:**
   - Compile the `statusObj` object with the following properties:
     - `modified`: List of modified files.
     - `deleted`: List of deleted files.
     - `untracked`: List of untracked files.

7. **Display Status:**
   - Print the `statusObj` to the console.

8. **Error Handling:**
   - Use a try-catch block to handle any errors during file reading, JSON parsing, or status updating.
   - Log errors using `console.log()` with appropriate error messages.

---

## **3. Integration with Command-Line Interface**

- **Command Definition:**
  - Define the command `status` using a CLI library like `yargs` or `commander`.
  - Integrate the `handler` function as the command’s action.

- **CLI Command:**
  - Ensure the command is registered correctly with the CLI library to be executed via the command line.

---

## **4. Utility Functions**

- **`handler()`:**
  - Handles the main logic for checking and displaying the status of files.

- **`statusUpdateSync()`:**
  - A utility function that updates the status arrays based on the current state of the working directory and the index.

- **Error Handling:**
  - Ensure proper error messages are displayed when issues arise during execution.

---

