# ELEC 3 - Node.js

- Full name: Jasmine De Leon Santos
- Section: IV-BSIT-B
- Course: ELEC 3 - Node.js

This repository contains my activities for ELEC 3 - Node.js.

## Set 1 Activities

| Activity                                 | Description                                                                                                                                                                                                       | Folder                                      |
| ---------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------- |
| N1: Project Setup and Package Management | A Node.js project set up with `npm init`, with `express` as a dependency, `nodemon` as a dev dependency, and a `start` script in `package.json`.                                                        | [set1/n1-setup](set1/n1-setup)               |
| N2: Modular Calculator                   | A command-line calculator split into custom modules `operations.js` and `formatter.js`, using `process.argv`, the built-in `path` module, and error messages for division by zero and unknown operations. | [set1/n2-calculator](set1/n2-calculator)     |
| N3: File Manager with fs and path        | A command-line program that creates, reads, updates, deletes, and lists text files in a `files` folder using the `fs` and `path` modules.                                                                   | [set1/n3-file-manager](set1/n3-file-manager) |

## How to Run

Open a terminal in the root of this repository, then run:

| Activity | Commands                                                     |
| -------- | ------------------------------------------------------------ |
| N1       | `cd set1/n1-setup` then `npm install` then `npm start` |
| N2       | `cd set1/n2-calculator` then `node index.js add 12 8`    |
| N3       | `cd set1/n3-file-manager` then `node index.js list`      |

For N1, run `npm install` first, because the `node_modules` folder is not included in this repository. N2 and N3 do not need any packages.

**N2 commands:** `add`, `subtract`, `multiply`, `divide`, and `average`, each followed by two numbers. Example: `node index.js divide 10 5`

**N3 commands:**

| Command | Example                                          |
| ------- | ------------------------------------------------ |
| create  | `node index.js create notes.txt "Hello"`       |
| read    | `node index.js read notes.txt`                 |
| update  | `node index.js update notes.txt "Hello World"` |
| delete  | `node index.js delete notes.txt`               |
| list    | `node index.js list`                           |

## Screenshots

### N1: Project Setup and Package Management

![N1 version check](<set1/n1-setup/screenshots/version%20check.png>)
![N1 package.json](<set1/n1-setup/screenshots/finished%20package.json.png>)
![N1 npm start output](<set1/n1-setup/screenshots/npm%20start%20output.png>)

### N2: Modular Calculator

![N2 output](set1/n2-calculator/screenshots/n2_output.png)

### N3: File Manager with fs and path

![N3 create](set1/n3-file-manager/screenshots/n3_create.png)
![N3 read](set1/n3-file-manager/screenshots/n3_read.png)
![N3 update](set1/n3-file-manager/screenshots/n3_update.png)
![N3 delete](set1/n3-file-manager/screenshots/n3_delete.png)
![N3 list](set1/n3-file-manager/screenshots/n3_list.png)
