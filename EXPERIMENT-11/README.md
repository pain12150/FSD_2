# Experiment No: 11

# Title: Develop Microservice-Based Backend Module

---

##  Aim

To design and implement a microservice-based backend architecture using Flask, where independent services communicate to perform operations such as fetching customer orders and updating order status.

---

## Description

This experiment demonstrates a Microservices Architecture by developing two independent backend services:

1. **Customer Service** – Fetches customer details along with their orders  
2. **Order Service** – Manages and updates order data  

Each service runs independently and communicates via HTTP requests, showcasing loose coupling and service-to-service communication.

---

##  Functional Requirements

- Create Customer Service API to:
  - Fetch customer details  
  - Retrieve associated orders from Order Service  

- Create Order Service API to:
  - Fetch orders by user ID  
  - Update order status  

- Ensure:
  - Data is stored in in-memory variables  
  - Services communicate using REST APIs  
  - APIs are tested using Postman  

---

##  Technologies Used

- Python  
- Flask  
- REST APIs  
- JSON  
- HTTP Protocol  
- Postman (API Testing)  
- Render (Deployment)  

---

##  Features Implemented

- Microservice-based architecture  
- Inter-service communication using HTTP requests  
- RESTful API design  
- In-memory data storage  
- Error handling (service failure, invalid user)  
- Order status update functionality  
- API testing using Postman  
- Deployment on cloud platform  

```

## 🗂️ Project Structure

Experiment-11/
│
├── customer_service/
│ ├── venv-customer/ # Virtual Environment (not recommended to push)
│ ├── customer_app.py # Customer Service API
│ └── requirements.txt # Dependencies
│
├── order_service/
│ ├── venv-order/ # Virtual Environment (not recommended to push)
│ ├── order_app.py # Order Service API
│ └── requirements.txt # Dependencies
│
└── README.md # Project Documentation

```
##  Deployment Details

- **Repository Name:** FSD-II  
- **GitHub Username:** pain12150

- **GitHub Repository:**  
https://github.com/shantnu108/fsd-2-CU/tree/main/exp11

- **Live Deployment (Render):**  

  - Customer Service:  
    https://two3bda70054-exp11-qxkq.onrender.com 

  - Order Service:  
    https://two3bda70054-exp11.onrender.com

---


##  Learning Outcomes

- Understood microservices architecture  
- Learned service-to-service communication using APIs  
- Gained experience with RESTful API design  
- Implemented error handling in distributed systems  
- Learned deployment of backend services on cloud (Render)  
- Practiced API testing using Postman  

---

##  Conclusion

This experiment successfully demonstrated the implementation of a microservice-based backend system using Flask. The separation of services improved scalability, modularity, and maintainability, while API communication ensured seamless integration between services.

---

## 👨‍💻 Author

**JATIN**  
23BDA70054
BE CSE (Big Data Analytics)  
Chandigarh University  

🔗 GitHub: https://github.com/pain12150
