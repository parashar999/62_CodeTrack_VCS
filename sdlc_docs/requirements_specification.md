# Detailed Requirement Specification Document

## 1. Introduction

### 1.1 Purpose
This document outlines the detailed requirements for **CodeTrack**, a local version control system. CodeTrack aims to provide essential version control functionalities akin to those of popular systems like Git, but with a focus on local use and simplicity. This tool will be globally installed on a user's machine and will operate without the need for an internet connection.

### 1.2 Scope
**CodeTrack** will offer the following functionalities:
- **Initializing a Repository:** Setting up a new repository in the specified directory.
- **Adding Files:** Staging files for committing.
- **Committing Changes:** Saving snapshots of the repository’s state.
- **Viewing Logs:** Displaying commit history.
- **Checking Out Branches:** Switching between branches or creating new ones.
- **Restoring to a Specific Commit (Get Image):** Reverting the working directory to a previous commit state.

### 1.3 Definitions
- **Repository:** A structured directory where the project files and version history are stored.
- **Commit:** A recorded snapshot of the repository at a specific time, including file changes and metadata.
- **Branch:** A separate line of development in the repository, allowing parallel work.
- **Get Image:** A command to revert the working directory to the state it was in at a specific commit.

## 2. Functional Requirements

### 2.1 Repository Initialization
- **Function:** Create a new repository in the specified directory.
- **Input:**
  - Directory path where the repository will be initialized.
- **Output:**
  - Creation of `.codetrack` directory within the specified path.
  - Initialization of subdirectories (`.codetrack/objects`, `.codetrack/indices`, `.codetrack/history`, `.codetrack/refs`, and `.codetrack/State.json`).
  - Default configuration files and metadata.
- **Details:**
  - Create necessary directories for managing objects, commit indices, history, and branch references.
  - Generate an initial state file (`State.json`) to track the current branch and commit state.

### 2.2 Adding Files
- **Function:** Stage files for future commits.
- **Input:**
  - List of file paths to be added or a flag to add all files.
- **Output:**
  - Updated index file (`index.json`) reflecting the newly added files.
- **Details:**
  - Parse command-line arguments to determine files to be added.
  - Update `.codetrack/index.json` with file paths and their corresponding hashes.
  - Ensure that the file paths are valid and exist in the repository.

### 2.3 Committing Changes
- **Function:** Save the current state of staged files into the repository.
- **Input:**
  - Commit message.
- **Output:**
  - New commit entry in `commitLog.json` with metadata.
  - Updated index file with the current commit ID.
  - Updated branch head or detached head reference.
- **Details:**
  - Record a snapshot of all staged files, including their hashes.
  - Save commit metadata such as message, date, and parent commit ID.
  - Update `.codetrack/refs/branchHead.json` or the detached head state in `State.json`.

### 2.4 Viewing Commit Logs
- **Function:** Display the history of commits.
- **Input:**
  - None (displays the entire history).
- **Output:**
  - List of commits with messages, dates, and parent commit IDs.
- **Details:**
  - Retrieve and format commit history from `commitLog.json`.
  - Present commit details including commit ID, message, and associated dates.

### 2.5 Checking Out Branches
- **Function:** Switch to a specified branch or create a new one.
- **Input:**
  - Branch name.
- **Output:**
  - Updated repository state reflecting the branch switch.
- **Details:**
  - Update `.codetrack/State.json` to point to the new branch or create a new branch if necessary.
  - Ensure the branch exists or handle branch creation.

### 2.6 Restoring to a Specific Commit (Get Image)
- **Function:** Revert the working directory to the state of a specific commit.
- **Input:**
  - Commit ID.
- **Output:**
  - Files in the working directory updated to match the specified commit.
- **Details:**
  - Retrieve and apply the file states from the specified commit from `.codetrack/indices/{commitId}.json`.
  - Update the working directory and `.codetrack/index.json` to reflect the state of the specified commit.

## 3. Non-Functional Requirements

### 3.1 Performance
- **Requirement:** The system must execute repository operations efficiently, minimizing delays even for moderately large repositories.
- **Details:** Optimize file handling and commit operations to ensure smooth performance on typical hardware.

### 3.2 Reliability
- **Requirement:** The system must ensure data integrity and accurate reflection of repository state.
- **Details:** Implement robust error handling and validation to prevent data corruption or loss.

### 3.3 Usability
- **Requirement:** The command-line interface must be user-friendly and provide clear, actionable error messages.
- **Details:** Design a consistent CLI with helpful documentation and error handling to guide users through common issues.

### 3.4 Compatibility
- **Requirement:** CodeTrack must be compatible with major operating systems (Windows, macOS, and Linux).
- **Details:** Test CodeTrack across different environments to ensure consistent functionality and performance.

### 3.5 Security
- **Requirement:** The system must securely manage files and commit history, with appropriate access controls.
- **Details:** Implement file access controls and secure handling of commit data to prevent unauthorized access or modifications.

## 4. Technical Requirements

### 4.1 Technology Stack
- **Programming Language:** JavaScript (executed within the Node.js runtime)
- **Dependencies:**
  - `chalk` for CLI color output.
  - `crypto` for hashing file contents.
  - `yargs` for command-line argument parsing.
- **Development Tools:**
  - **VS Code** for coding and debugging.
  - **Git** for version control.

### 4.2 System Requirements
- **Node.js Version:** 14 or later.
- **File System:** Local file system access required for managing repository data.

### 4.3 Installation
- **Global Installation:** CodeTrack will be installed globally using npm (`npm install -g codetrack`), making it accessible as a command-line tool across the user's system.

## 5. Project Deliverables

1. **CodeTrack CLI Tool:**
   - A globally installed command-line tool implementing the required functionalities.
   - Example commands: `codetrack init`, `codetrack add`, `codetrack commit`, `codetrack log`, `codetrack checkout`, `codetrack getImage`.

2. **Documentation:**
   - **User Guide:** Instructions for operating the CodeTrack CLI.
   - **Developer Documentation:** Details for future maintenance and enhancements, including API documentation and codebase overview.

## 6. Glossary

- **CLI:** Command-Line Interface.
- **Hash:** A fixed-size string or number generated from input data of arbitrary size.

