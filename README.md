# ⚡ Electricity Bill Management System (Java)

A **Java-based Electricity Bill Management System** developed as a college project.
This application allows users to manage customer details and generate electricity bills based on meter readings using slab-based tariff calculations.

---

## 📌 Project Overview

The Electricity Bill Management System helps automate the process of calculating electricity bills.
Users can enter customer details and meter readings, and the system calculates the electricity consumption and total bill amount.

The project demonstrates the use of **Java programming, GUI development, and database integration**.

---

## 🛠 Technologies Used

* **Java**
* **Java Swing (GUI)**
* **MySQL Database**
* **JDBC (Java Database Connectivity)**

---

## ✨ Features

* 🔐 Admin Login System
* 👤 Add and Manage Customer Details
* ⚡ Electricity Bill Calculation
* 📊 Slab-based tariff system
* 🗄 Store customer and bill records in MySQL database
* 🔎 Search customer by ID
* 📄 View bill history
* 🖥 User-friendly GUI using Java Swing

---

## ⚙ Tariff Calculation

Electricity charges are calculated using slab rates:

| Units           | Rate          |
| --------------- | ------------- |
| First 100 Units | ₹1.5 per unit |
| Next 100 Units  | ₹2.5 per unit |
| Above 200 Units | ₹4 per unit   |

Units Consumed = Current Reading − Previous Reading

---

## 🗄 Database Structure

### Admin Table

| Field    | Type    |
| -------- | ------- |
| username | VARCHAR |
| password | VARCHAR |

### Customers Table

| Field       | Type    |
| ----------- | ------- |
| customer_id | INT     |
| name        | VARCHAR |
| address     | VARCHAR |
| phone       | VARCHAR |

### Bills Table

| Field          | Type   |
| -------------- | ------ |
| bill_id        | INT    |
| customer_id    | INT    |
| units_consumed | INT    |
| total_amount   | DOUBLE |

---

## ▶ How to Run the Project

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/electricity-bill-system.git
```

### 2. Open the Project

Open the project using **VS Code / IntelliJ / NetBeans**.

### 3. Setup MySQL Database

Create a database:

```sql
CREATE DATABASE electricity_bill_system;
```

Create required tables and connect the database using **JDBC**.

### 4. Run the Program

Compile and run the Java program:

```bash
javac ElectricityBillSystem.java
java ElectricityBillSystem
```

---

## 📸 Screenshots



Examples:

* Login Screen
* Customer Management Page
* Bill Generation Window
* MySQL Database Tables

---

## 📚 Concepts Used

* Object-Oriented Programming (OOP)
* Java Swing GUI Development
* JDBC Database Connectivity
* Conditional Logic
* Exception Handling

---

## 🚀 Future Improvements

* Online payment integration
* PDF bill generation
* Email bill notifications
* Web-based version of the system

---

## 👨‍💻 Author

Developed as a **Java college project**.

If you found this project useful, feel free to ⭐ star the repository.

---

## 📄 License

This project is for **educational purposes**.
