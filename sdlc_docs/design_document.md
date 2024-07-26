# Design Documentation for CodeTrack

## 1. Introduction

### 1.1 Purpose
This document provides the design details for **CodeTrack**, a local version control system. It covers the overall architecture, component design, and key algorithms used in the development of CodeTrack.

### 1.2 Scope
The design documentation will detail:
- The overall architecture of CodeTrack.
- The design of key components and modules.
- Key algorithms and their design.

## 2. Architecture

### 2.1 Overall Architecture
CodeTrack follows a modular architecture, where each module is responsible for specific functionalities of the version control system. The system is designed to operate locally and interact with the file system directly.

The architecture includes the following components:
- **Command-Line Interface (CLI):** Manages user input and output through CLI commands.
- **Repository Management:** Handles repository initialization, file addition, and indexing.
- **Commit Management:** Manages committing changes, tracking commit history, and restoring states.
- **Branch Management:** Handles branching operations, including creating, switching, and merging branches.

### 2.2 Components
1. **CLI Interface**
   - **Purpose:** Handles user commands and arguments.
   - **Technology:** `yargs` for argument parsing.

2. **Repository Management**
   - **Purpose:** Initializes the repository and manages the index of files.
   - **Technology:** File system operations using Node.js `fs` module.

3. **Commit Management**
   - **Purpose:** Handles the creation of commits, updating commit logs, and managing the commit history.
   - **Technology:** File system operations and hash generation using Node.js `crypto` module.

4. **Branch Management**
   - **Purpose:** Manages branches, including switching between branches and creating new branches.
   - **Technology:** File system operations and state management.

## 3. Component Design

### 3.1 CLI Interface

#### 3.1.1 Command Structure
- **Initialize Repository:** `codetrack init`
- **Add Files:** `codetrack add [file...]`
- **Commit Changes:** `codetrack commit -m "message"`
- **View Logs:** `codetrack log`
- **Checkout Branch:** `codetrack checkout [branchName]`
- **Restore State:** `codetrack getImage [commitId]`

#### 3.1.2 Command Handling
- Commands are parsed using `yargs`, which maps commands to their respective handlers.

### 3.2 Repository Management

#### 3.2.1 Directory Structure
- `.codetrack/`
  - `objects/` - Stores file objects with their hashes.
  - `indices/` - Contains index files for each commit.
  - `history/` - Logs commit history.
  - `refs/` - Contains branch references.
  - `State.json` - Tracks the current branch and commit state.

#### 3.2.2 Indexing
- Files are indexed by their hash values.
- Hashes are computed using the `crypto` module to ensure unique identification of file content.

### 3.3 Commit Management

#### 3.3.1 Commit Process
- **Creating a Commit:** 
  - Gather all staged files and compute their hashes.
  - Save a snapshot of file states in `indices/` and log commit details in `commitLog.json`.
  - Update branch references or detached head state in `State.json`.

#### 3.3.2 Commit History
- **Commit Logs:** Maintained in `commitLog.json`, which includes commit ID, message, date, and parent commit ID.

### 3.4 Branch Management

#### 3.4.1 Branch Operations
- **Creating a Branch:** 
  - Create a new entry in `branchHead.json` with the current commit ID.
- **Switching Branches:** 
  - Update `State.json` to point to the new branch and its latest commit ID.
- **Merging Branches:** 
  - Not explicitly covered in the current scope but could be implemented by combining histories of branches.

## 4. Key Algorithms

### 4.1 Hash Calculation
- **Algorithm:** SHA-1
- **Function:** Computes a unique hash for file content to identify changes.

### 4.2 Commit Creation
1. Compute hashes for all staged files.
2. Save file states in `indices/`.
3. Update `commitLog.json` with new commit details.
4. Update branch references or detached head state.

### 4.3 Checkout
- **Algorithm:** Revert file states to match the specified commit by restoring file contents from `indices/`.

### 4.4 Get Image
- **Algorithm:** Restore the working directory to the state of a specified commit by applying file changes from `indices/`.

## 5. Error Handling

### 5.1 Common Errors
- **File Not Found:** Ensure files exist before operations.
- **Invalid Commit ID:** Check commit ID validity and provide user-friendly messages.
- **File Access Issues:** Handle permissions and access errors gracefully.

### 5.2 Error Messages
- Error messages should be clear, actionable, and provide guidance for resolution.

## 6. Testing and Validation

### 6.1 Unit Testing
- Test individual functions for correctness, including file operations, hash calculations, and commit management.

### 6.2 Integration Testing
- Test interactions between different modules to ensure they work together as expected.

### 6.3 User Testing
- Validate usability and functionality from an end-user perspective, ensuring the CLI commands work as intended and provide accurate results.
